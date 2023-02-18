import axios from 'axios';

const DEFAULT_BASE_URL = '/baseurl';
// 默认访问 base_url

const DEFAULT_HEADERS_POST = 'application/json; charset=utf-8';
// 设置默认请求头 header

const DEFAULT_CROSS_ORIGIN = true;
// 默认设置跨域

const DEFAULT_WITH_CREDENTIALS = true;
// 设置默认携带 cookie 信息

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
