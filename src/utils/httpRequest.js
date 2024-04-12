import axios from "axios"
/**引入读取token的方法 */
import { getToken, removeToken } from "./auth.js"
/**引入路由 */
import router from "@/router"

/**第二步: 创建实例 */
const http = axios.create({
  // 根目录
  baseURL: "/",
  /**超时时间 */
  timeout: 36 * 1000,
  /**开启跨域凭证 */
  withCredentials: true,
  /**配置headers请求方式 */
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
})

/**封装请求拦截器 */

http.interceptors.request.use(
  (config) => {
    console.log(config)
    /**用来封装token,要从auth.js文件中,把读取token方法引入
     * X-Access-Token: 和后端约定俗成起名字的方法
     */
    config.headers["Authorization"] = "Bearer" + " " + getToken()

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

/**封装响应拦截器 */
http.interceptors.response.use(
  (response) => {
    console.log(response)
    // 在这封装401过期,token失效
    if (response.data.code === 10002 && response.status == 200) {
      // 返回登录页面重新登录,并且清楚当前token信息,需要清楚保存到本地的个人信息
      /**
       * TODO: 需要清楚保存到本地的个人信息
       */
      router.push({
        path: "/login"
      })
      removeToken()
    }
    return response.data
  },
  (error) => {
    console.log(error)
    // 在这封装状态码
    let title = ""
    let message = ""

    if (error && error.response) {
      message = error.response.data.message
      // 401, token失效
      if (error.response.data.status === 2) {
        router.push(
          {
            name: "login"
          },
          () => {
            resetLoginInfo()
          }
        )
      }
      switch (
        error.response.status // 跨域存在获取不到状态码的情况
      ) {
        case 400:
          title = "错误请求"
          break
        case 401:
          title = "资源未授权"
          break
        case 403:
          title = "禁止访问"
          break
        case 404:
          title = "未找到所请求的资源"
          break
        case 405:
          title = "不允许使用该方法"
          break
        case 408:
          title = "请求超时"
          break
        case 500:
          title = "内部服务器错误"
          break
        case 501:
          title = "未实现"
          break
        case 502:
          title = "网关错误"
          break
        case 503:
          title = "服务不可用"
          break
        case 504:
          title = "网关超时"
          break
        case 505:
          title = "HTTP版本不受支持"
          break
        default:
          title = error.response.status
      }
      return MessageBox.alert(message, title, {
        type: "warning"
      })
    } else {
      // 跨域获取不到状态码或者其他状态进行的处理
      return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
        type: "error"
      })
    }
  }
)

export default http
