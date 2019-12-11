/*
 * @Descripttion: 使用commonJs的模块化规范
 * @Author: ling
 * @Date: 2019-11-26 16:25:31
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:39:58
 */
const { add, mul } = require('./js/mathUtil.js')

console.log(add(10, 20))
console.log(mul(10, 20))

/*
 * @Descripttion: 使用ES6的模块化规范
 * @Author: ling
 * @Date: 2019-11-26 16:25:31
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:36:23
 */
import { name, age, height } from './js/info'
console.log(`${name}-${age}-${height}`);


/**
 * 依赖css文件
 * */
require("./css/normal.css")

require("./css/special.less")

document.writeln("<h2>webpack配置</h2>")