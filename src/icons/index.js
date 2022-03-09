import Vue from "vue";
import SvuIcon from "./SvgIcon";
Vue.component('svg-icon', SvuIcon);

/**
 *  require.context  读取指定目录的所有文件
 *  第一个：目录
 *  第二个：是否遍历子级目录
 *  第三个：定义遍历文件规则
 */
const req = require.context('./svg', false, /\.svg$/)  // 正则表示结尾.svg文件
const requireAll = (requireContext) => {
    console.log(requireContext.keys().map(requireContext))
    return requireContext.keys().map(requireContext)
}

requireAll(req)