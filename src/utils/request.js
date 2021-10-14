import axios from 'axios'
import { Message } from 'element-ui';

// 创建axios，赋给变量service

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';

const service = axios.create({
    baseURL: BASEURL,    // http://192.168.3.18:8080/devApi/  ==  http://www.web-jshtml.cn/productapi/productapi
    timeout: 15000,   // 超时 尽可能大
    // 网络请求接口，假设 5秒小于15秒
});

/**
 * 请求接口前 做一些数据处理（请求拦截器）
 */
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 后台需要前端这边传相关的参数（在请求头添加参数）
    // Tokey
    // userID
    // sui
    // 业务需求


    // 最终目的不是在请求头添加参数
    config.headers['Tokey'] = '11111'
    config.headers['userID'] = '22222'
    config.headers['sui'] = '33333'

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


/**
 * 请求接口后 返回数据进行拦截（响应拦截器）
 */
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    // 业务需求

    if (data.resCode !== 0) {
        Message.error(data.message);
        return Promise.reject(data)
    } else {
        return response;
    }

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default service;

/**
 * 没有default时，可以同时声明多个export
 * 文件import需要{}
 */