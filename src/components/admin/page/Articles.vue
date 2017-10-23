<template>
  <div>
    <el-table :data="articleDatas">
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
    <div class="admin-page">
      <el-pagination
        layout="total,prev, pager, next"
        @current-change="init"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        articleDatas: [],
        total: 0,
        pageSize: 10,
        currentPage: 1
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
        })
      },
      initArticleDatas (articles) {
        this.articleDatas = []
        for (let key in articles) {
          let data = articles[key]
          let article = {
            id: data.id,
            title: data.title,
            publish: this.$moment(data.created).format('YYYY-MM-DD HH:mm'),
            category: data.category || this.$util.STATIC.DEFAULT_CATEGORY,
            status: data.status
          }
          this.articleDatas.push(article)
        }
      },
      deleteArticle (id) {
        this.$api.deleteArticleAuth(id).then(data => {
          if (data.success) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.init(this.$route.query.page)
          } else {
            this.$message({
              type: 'error',
              message: '删除失败!'
            })
          }
        })
      },
      init (page) {
        this.$api.getArticlesAuth(page || 1).then(data => {
          if (data.success) {
            this.initArticleDatas(data.data.list)
            this.total = data.data.total
            this.pageSize = data.data.pageSize
            this.currentPage = page || 1
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
      this.init(this.$route.query.page)
    }
  }
</script>

<style>
  .el-table ::-webkit-scrollbar {
    display: block;
    height: 10px;
  }

  .el-table ::-webkit-scrollbar-thumb {
    background-color: #324157;
  }

  .el-table ::-webkit-scrollbar-thumb:active {
    background-color: #00aff0
  }

  @media screen and (min-width: 600px) {
    .el-table ::-webkit-scrollbar {
      display: block;
      height: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    .el-table ::-webkit-scrollbar {
      display: none;
    }
  }
</style>

<style scoped>
  .admin-page {
    margin-top: 30px;
    text-align: center;
  }

</style>
