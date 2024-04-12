const { defineConfig } = require("@vue/cli-service")
const path =require('path')
const resolve=(dir)=>path.join(__dirname,'.',dir)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
	assetsDir:"assets",
	devServer:{
// 自动打开浏览器
    // open: true,
    // 端口号
    port: 8888,
    // 跨域代理
    proxy: {
      // "/api": {
      // 	// 目标地址
      //   target: "http://www.baidu.com",
      // 	// 是否改变请求地址的源
      //   changeOrigin: true,
      // 	// 是否改变请求地址的源
      //   pathRewrite: {
      //     "^/api": ""
      //   }
      // }
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: " "
        }
      }
    }
	},
	configureWebpack:{
		resolve:{
			alias:{
				'@component':resolve('src/components'),
				'vue$':'vue/dist/vue.esm.js'
			}
		}
	}
})
