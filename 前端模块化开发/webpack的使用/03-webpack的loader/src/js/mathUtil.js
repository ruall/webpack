/*
 * @Descripttion: 模块化开发demo
 * @Author: ling
 * @Date: 2019-11-26 16:25:45
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:27:54
 */
function add (num1, num2) {
  return num1 + num2
}

function mul (num1, num2) {
  return num1 * num2
}

module.exports = {
  add,
  mul
}