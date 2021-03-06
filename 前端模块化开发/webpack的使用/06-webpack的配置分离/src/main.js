/*
 * @Descripttion: 使用commonJs的模块化规范
 * @Author: ling
 * @Date: 2019-11-26 16:25:31
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:39:58
 */
const {add, mul} = require("./js/mathUtil.js")

console.log(add(10, 20))
console.log(mul(10, 20))

/*
 * @Descripttion: 使用ES6的模块化规范
 * @Author: ling
 * @Date: 2019-11-26 16:25:31
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:36:23
 */
import {name, age, height} from "./js/info"

console.log(`${name}-${age}-${height}`)


/**
 * 依赖css文件
 * */
require("./css/normal.css")

/**
 * 依赖less文件
 * */
require("./css/special.less")

document.writeln("<h2>webpack配置</h2>")

/**
 * 使用Vue进行开发
 * */
import Vue from "vue"
// import App from "./vue/app"
import App from "./vue/App.vue"

const app = new Vue({
  el: "#app",
  template:'<App></App>',
  components:{
    App
  }
})