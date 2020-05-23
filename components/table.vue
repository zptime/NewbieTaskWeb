<template>
  <div class="my-table">
    <div class="t-title">
      <i class="el-icon-edit" />
      所有类别
    </div>
    <div class="t-content">
      <el-button type="primary" icon="el-icon-plus" @click="addMedia">
        添加资源
      </el-button>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="名称"
          width="120"
        >
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column
          prop="media_type_name"
          label="内容"
          width="120"
        />
        <el-table-column
          label="位速"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            {{ scope.row.bitrate }}kbps
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="mini"
              @click="handleOpt('edit', scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="handleOpt('download', scope.$index, scope.row)"
            >
              下载
            </el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleOpt('delete', scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="total"
        :page-size="10"
        :hide-on-single-page="false"
        @prev-click="curClick"
        @next-click="curClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      total: 0,
      multipleSelection: []
    }
  },
  mounted () {
    this.initData(1)
  },
  methods: {
    // 获取媒体数据
    initData (page) {
      this.$axios
        .get('/api/media', {
          params: {
            page,
            limit: 10,
            dist_id: 1,
            school_id: 1
          }
        })
        .then((res) => {
          this.tableData = res.value.list
          this.total = parseInt(res.value.total)
        })
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    // 添加资源事件
    addMedia () {
      alert('添加资源')
    },
    // 操作栏事件
    handleOpt (type, index, row) {
      console.log(type, index, row);
      alert(type + '...' + row.media_id + '...' + JSON.stringify(row))
    },
    // 上一页事件，下一页事件
    curClick (curPage) {
      console.log(curPage)
      this.initData(curPage)
    }
  }
}
</script>

<style lang="scss">
.my-table{
  .t-title{
    padding:10px 20px;
    border-bottom: 1px solid #eee;
  }
  .t-content{
    margin: 20px;
  }

  .el-pagination{
    margin-top: 20px;
  }
}
</style>
