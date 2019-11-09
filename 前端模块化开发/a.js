let name = "小明"
let age = 18
let flag = true

function sum (num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(10, 20))
}


// 导出方式一
export {
  flag, sum
}

// 导出方式二
export let num = "1"
export let height = "170"


// 导出方式三（导出函数/类）
export function mul (num1, num2) {
  return num1 + num2
}

export class Person {
  run () {
    console.log("类")
  }
}

const address = '广州市'
// export default address

export default function (e) {
  console.log(e)
}