// 启动node,用express启动node
/**
 * 使用express搭建node服务
 * 1. 引入express
 * 2. 实例化express
 * 3. 启动监听接口
 * 4. 引入mock数据,编写接口,返回数据值
 *
 *
 */
/**第一步: 引入express */
let express = require("express")
/**引入mockjs */
let Mock = require("mockjs")

let loginData = require("./common/loginDate.json")

let app = express() //实例化express

/**编写接口 */

/**登录接口 */
app.use("/sys/login", function (req, res) {
  res.json(Mock.mock(loginData))
})

/**第三步: 设置监听接口*/
app.listen("8090", () => {
  console.log("监听端口 8090")
})
