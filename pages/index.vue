<template>
  <el-container class="page-index">
    <el-aside width="200px" class="page-left">
      <e-menu />
    </el-aside>
    <el-main class="page-content">
      <r-table />
    </el-main>
  </el-container>
</template>

<script>
import EMenu from '~/components/menu.vue'
import RTable from '~/components/table.vue'
export default {
  components: {
    EMenu,
    RTable
  }
};
</script>

<style lang="scss">
.page-index{
  background-color: #fff;

  .page-left{
    border-right: 1px solid #eee;
  }
  .page-content{
    padding: 0;
  }
}
</style>
