<template>
  <el-table :data="tableData">
    <el-table-column prop="id" label="id" width="60"></el-table-column>
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="publish" label="发布日期" :formatter="dateFormat"></el-table-column>
    <el-table-column prop="category" label="分类"></el-table-column>
    <el-table-column prop="status" label="状态"></el-table-column>
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
        tableData: []
      }
    },
    methods: {
      handleEdit (id) {
        this.$router.push('/admin/article/publish/' + id)
      },
      handleDelete (id) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'danger'
        }).then(() => {
          this.deleteArticle(id)
        }).catch(() => {
          return
        })
      },
      initTableData (articles) {
        this.tableData = []
        for (let key in articles) {
          let data = articles[key]
          let article = {
            id: data.id,
            title: data.title,
            publish: data.created,
            category: data.category || this.$util.STATIC.DEFAULT_CATEGORY,
            status: data.status
          }
          this.tableData.push(article)
        }
      },
      // 时间格式化
      dateFormat: function (row, column) {
        let date = row[column.property]
        if (date === undefined) {
          return ''
        }
        return this.$moment(date).format('YYYY-MM-DD HH:mm')
      },
      deleteArticle (id) {
        this.$api.deleteArticleAuth(id).then(data => {
          if (data.success) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getArticles()
          } else {
            this.$message({
              type: 'error',
              message: '删除失败!'
            })
          }
        })
      },
      getArticles () {
        this.$api.getArticlesAuth(this.$route.params.page).then(data => {
          if (data.success) {
            this.initTableData(data.data)
          } else {
            this.$message({
              message: '获取文章列表失败,' + data.msg,
              type: 'error'
            })
          }
        })
      }
    },
    created () {
      this.getArticles()
    }
  }
</script>

<style scoped>

</style>
