const Router = require('koa-router')
const {
  axiosPost,
  axiosGet
} = require('../apiConfig')

// 前缀实现
const router = new Router({
  prefix: '/api/media'
})

// 获取媒体信息列表 getMediaInfoList
router.get('/', async (ctx, next) => {
  const result = await axiosGet(ctx, 'getMediaInfoList')
  ctx.body = result.data
})

// 获取单个媒体信息 getMediaInfo
router.post('/info', async (ctx, next) => {
  const result = await axiosGet(ctx, 'getMediaInfo')
  ctx.body = result.data
})

// 修改媒体信息 updateMediaInfo
router.post('/update', async (ctx) => {
  const result = await axiosPost(ctx, 'updateMediaInfo')
  ctx.body = result.data
})

// 删除媒体信息 updateMediaInfoDeleteStatus
router.post('/delete', async (ctx) => {
  const result = await axiosPost(ctx, 'updateMediaInfoDeleteStatus')
  ctx.body = result.data
})

// 新增媒体信息 addMediaInfo
router.post('/add', async (ctx) => {
  const result = await axiosPost(ctx, 'addMediaInfo')
  ctx.body = result.data
})



// 获取媒体类别列表
router.get('/type', async (ctx, next) => {
  const result = await axiosGet(ctx, 'getMediaTypeList')
  ctx.body = result.data
})

// 获取单个媒体类别信息
router.get('/type/info', async (ctx, next) => {
  const result = await axiosGet(ctx, 'getMediaTypeInfo')
  ctx.body = result.data
})

// 修改媒体信息
router.post('/type/update', async (ctx) => {
  const result = await axiosPost(ctx, 'updateMediaTypeInfo')
  ctx.body = result.data
})

// 新增媒体类别
router.post('/type/add', async (ctx) => {
  const result = await axiosPost(ctx, 'addMediaType')
  ctx.body = result.data
})

// 获取上传媒体地址
router.get('/addr', async (ctx) => {
  const result = await axiosGet(ctx, 'getMediaServer')
  ctx.body = result.data
})

module.exports = router
