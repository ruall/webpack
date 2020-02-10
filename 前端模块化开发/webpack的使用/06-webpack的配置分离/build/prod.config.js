const uglifyJsPlugin = require("uglifyjs-webpack-plugin")
const baseConfig = require("./base.config")
const webpackMerge = require("webpack-merge")

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new uglifyJsPlugin()
  ]
})