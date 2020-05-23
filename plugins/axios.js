export default ({
  $axios
}) => {
  // 基本配置
  // $axios.defaults.timeout = 10000

  // 请求拦截器
  $axios.onRequest((config) => {
    return config
  })

  // 响应拦截器
  $axios.onResponse((resp) => {
    return Promise.resolve(resp.data)
  })

  $axios.onError((error) => {
    return Promise.reject(error)
  })
}
