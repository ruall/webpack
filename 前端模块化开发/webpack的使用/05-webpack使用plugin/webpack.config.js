const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  plugins: [
    new VueLoaderPlugin()
  ],
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 只负责把css文件进行加载
        // style-loader 负责将样式加载到dom中
        // 使用多个loader时，从右向左顺序
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //当加载的图片小于limit时，会将图片编译成base64格式的字符串
              //当加载的图片大于limit时，需要使用file-loader模块进行加载
              limit: 1100,
              name: "img/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.vue$/,
        use:{
          loader: "vue-loader"
        }
      }
    ]
  },
  resolve: {
    // alias 别名
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  }
}