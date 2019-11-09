//CommonJS的导出
module.exports = {
  flag: true,
  fun () {
    return 'aaa'
  },
}


//CommonJS的导入
let { flag, fun } = require('js路径')