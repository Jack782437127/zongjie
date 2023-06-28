import axios from 'axios'
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { serverURL, setToken, getToken } from './tools'

const instance = axios.create({
    timeout: 5000, //请求超过5s自动断开连接
    baseURL: serverURL, //网络请求基础地址
    headers: { "token": getToken() }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    nProgress.start()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    nProgress.done()
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    nProgress.done()
    return Promise.reject(error);
});


//封装get请求
export const get = (url, params) =>
    instance.get(url, {
        params,
    });

//封装post请求
export const post = (url, data) => { return instance.post(url, data) }

//封装put请求
export const put = (url, data) => {
    return instance.put(url, data, { headers: { "token": getToken() } }
    )
}



export default instance;