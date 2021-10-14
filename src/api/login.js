import service from "@/utils/request";

/**
 * 获取验证码
 */
export function GetSms(data) {
    return service.request({
        method: 'post',
        url: '/getSms/',
        data
        // data: data,
        // 左边是后台接受 变量名key   右边是接受的参数  若名字相同写一个即可（ES6）
    })
}

/**
 * 获取用户角色
 */

/**
 * 登录
 */
export function Login(data) {
    return service.request({
        method: 'post',
        url: '/login/',
        data
    })
}

/**
 * 注册
 */
export function Register(data) {
    return service.request({
        method: 'post',
        url: '/register/',
        data
    })
}