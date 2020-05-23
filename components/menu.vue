<template>
  <div class="my-menu">
    <dl class="nav">
      <dt>资源类别</dt>
      <dd>所有类别</dd>
      <dd v-for="(item, index) in menus" :key="index" :class="{'active': activeIndex===index}">
        {{ item.name }}
      </dd>
      <dd class="opt" @click="addMenu">
        + 新增类别
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [],
      activeIndex: 0
    }
  },
  mounted () {
    this.$axios
      .get('/api/media/type', {
        params: {
          dist_id: 1,
          school_id: 1
        }
      })
      .then((res) => {
        this.menus = res.value.slice(0, 8)
      })
  },
  methods: {
    addMenu () {
      alert('添加资源类别');
    }
  }
};
</script>

<style lang="scss">
.my-menu{
  padding: 0 20px;
  margin-right: 1px solid #eee;

  dt{
    margin: 10px 0;
  }

  dd{
    margin-bottom: 5px;
    padding: 10px 15px;
    cursor: pointer;
  }

  dd.active{
    background-color: #409EFF;
    color: #fff;
    border-radius: 5px;
  }

  dd.opt{
    border:1px dashed #aaa;
    text-align: center;
    border-radius: 5px;
  }
}
</style>
