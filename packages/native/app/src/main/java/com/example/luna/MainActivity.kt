package com.example.luna

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Message
import android.view.View
import android.view.WindowInsets
import android.view.WindowInsetsController
import android.view.WindowManager
import android.webkit.*
import java.io.ByteArrayInputStream

class MainActivity : AppCompatActivity() {
    private var selectFilesCallback: ((files: Array<String>) -> Unit)? = null
    private val host: String = "http://192.168.2.208:3000"
    private val headers: HashMap<String, String> = hashMapOf(
        "Access-Control-Allow-Headers" to "*",
        "Access-Control-Allow-Origin" to "*",
        "Access-Control-Allow-Methods" to "*",
        "Access-Control-Expose-Headers" to "DAV, Content-Type, Allow, WWW-Authenticate"
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        hideStatusAndTitleBar()

        if (BuildConfig.DEBUG) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
        val mainWebView: LunaWebView = findViewById(R.id.main)
        mainWebView.settings.javaScriptEnabled = true
        mainWebView?.loadUrl("http://192.168.3.81:3000")
    }

    private fun hideStatusAndTitleBar() {
        supportActionBar?.hide()

        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)

        val decorView = window.decorView
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            val windowInsetsController = decorView.getWindowInsetsController()
                ?: return
            windowInsetsController.systemBarsBehavior =
                WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
            windowInsetsController.hide(WindowInsets.Type.systemBars())
        } else {
            decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_FULLSCREEN
        }
    }
}