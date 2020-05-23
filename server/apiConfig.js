const axios = require('axios')

const SERVER_URL = 'http://121.36.86.253/bmd/jsonApi.php'

const Axios = axios.create({
  baseURL: SERVER_URL, // 设置默认api url
  withCredentials: true // 是否允许带cookie
})

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res)
  },
  (error) => {
    return Promise.reject(error)
  }
)

const axiosPost = (ctx, api) => {
  const req = ctx.request
  return Axios.post(SERVER_URL, Object.assign(req.body, { api }))
}

const axiosGet = (ctx, api) => {
  const req = ctx.request
  return Axios.get('', {
    params: Object.assign(req.query, { api })
  })
}

module.exports = {
  axiosPost,
  axiosGet
}
