import axios from 'axios'
import Qs from 'qs'
import { Toast } from 'antd-mobile'
import { baseUrl } from './config'
import { outNet } from './config'
// eslint-disable-next-line no-unused-vars
const clearLocal = ({ code, message }) => {
  if (code === 422 && message === '未登录或登录状态失效') {
    localStorage.clear()
    // window.location.href = 'http://yiya-web.yiya.art/'
    window.location.href = outNet
  }
}
class HttpRequest {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
  }
  getDefaultConfig() {
    const config = {
      baseURL: this.baseUrl,
      method: 'post',
      timeout: 30000,
      headers: {
        'Accept': 'json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
      }
    }
    return config
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = token
      }
      const { method } = config
      if (method !== 'get') {
        config.data = Qs.stringify(config.data)
      }
      return config
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      // console.log(`response`)
      // console.log(res)
      if (res.status >= 200 && res.status < 300) {
        if (res.data.code !== 0) {
          Toast.fail(res.data.errmsg)
        }
        return res.data
      }
      return res
    }, err => {
      console.dir(err)
      if (err.message.indexOf('timeout') > -1) {
        // 判断请求异常信息中是否含有超时timeout字符串
        Toast.fail('请求超时')
      }
      return err
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getDefaultConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
const service = new HttpRequest(baseUrl)
export default service
