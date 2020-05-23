<template>
  <div class="my-header">
    <el-row>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          业务管理
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">
          媒体资源
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row class="title">
      媒体资源
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss">
.my-header{
  padding: 20px;
  background-color: #fff;

  .title{
    margin-top: 10px;
  }
}
</style>
