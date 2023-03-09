package com.example.luna

import android.content.Context
import android.util.AttributeSet
import android.webkit.WebView

class LunaWebView: WebView {
    constructor(context: Context) : super(context) {}
    constructor(context: Context, attrs: AttributeSet) : super(context, attrs) {}
    constructor(context: Context, attrs: AttributeSet, defStyle: Int) : super(
        context,
        attrs,
        defStyle
    ) {}
}