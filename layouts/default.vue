<template>
  <el-container class="layout-default">
    <el-header height="85px">
      <my-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import MyHeader from '@/components/header.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

<style>
</style>
