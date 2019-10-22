//导入{}中定义的变量
import { flag, sum } from "./a.js"

if (flag) {
  console.log("纯纯粹粹")
  console.log(sum(1, 2))
}

//导出export定义的变量
import { num, height } from "./a.js"

console.log(num)
console.log(height)


//导入export的function
import { mul, Person } from "./a.js"

console.log(mul(1, 2))

let person = new Person()
person.run()


//导入export default 的内容
import add from "./a.js"

add("1")

//统一全部导入

import * as m from "./a.js"

console.log(m.flag)