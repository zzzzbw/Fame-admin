<template>
  <el-table :data="pageDatas">
    <el-table-column prop="id" label="id" width="60"></el-table-column>
    <el-table-column prop="title" label="标题" min-width="150" show-overflow-tooltip></el-table-column>
    <el-table-column prop="publish" label="发布日期" min-width="150"
                     show-overflow-tooltip></el-table-column>
    <el-table-column prop="category" label="分类" width="180" show-overflow-tooltip></el-table-column>
    <el-table-column prop="status" label="状态" width="100" show-overflow-tooltip></el-table-column>
    <el-table-column label="操作" width="140">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.row.id)">编辑
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row.id)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        pageDatas: []
      }
    },
    methods: {
      handleEdit (id) {
        this.$router.push('/admin/page/publish/' + id)
      },
      handleDelete (id) {
        this.$confirm('此操作将永久删除该自定义页面, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'danger'
        }).then(() => {
          this.deletePage(id)
        }).catch(() => {
        })
      },
      initPageDatas (pages) {
        this.pageDatas = []
        for (let key in pages) {
          let data = pages[key]
          let page = {
            id: data.id,
            title: data.title,
            publish: this.$moment(data.created).format('YYYY-MM-DD HH:mm'),
            status: data.status
          }
          this.pageDatas.push(page)
        }
      },
      deletePage (id) {
        console.log('123')
      },
      getPages () {
        this.$api.getPagesAuth(this.$route.query.page || 1).then(data => {
          if (data.success) {
            this.initPageDatas(data.data)
          } else {
            this.$message({
              message: '获取自定义页面列表失败,' + data.msg,
              type: 'error'
            })
          }
        })
      }
    },
    created () {
      this.getPages()
    }
  }
</script>

<style>
  .el-submenu .el-menu-item {
    min-width: 0px;
  }
</style>
