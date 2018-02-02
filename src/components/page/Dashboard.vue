<template>
  <div>
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="panel">
          <div class="panel-content">
            <div class="message">
              <h3>{{articleCount}}</h3>
              <p>发布文章数</p>
            </div>
            <div class="icon">
              <span class="icon-book"></span>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="panel">
          <div class="panel-content">
            <div class="header">
              <div class="title">最新文章</div>
            </div>
            <ul class="info">
              <li v-for="article in articles">{{article}}</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="panel">
          <div class="panel-content">
            <div class="header">
              <div class="title">最新日志</div>
            </div>
            <ul class="info">
              <li v-for="log in logs">{{log.created}} => {{log.message}}</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visitCount: 0,
        articleCount: 0,
        logs: [],
        articles: []
      }
    },
    methods: {
      getArticleCount (data) {
        if (data.success) {
          this.articleCount = data.data
        } else {
          this.$message({
            message: '获取文章数量失败,' + data.msg,
            type: 'error'
          })
        }
      },
      getLogs (data) {
        if (data.success) {
          for (let key in data.data.list) {
            let d = data.data.list[key]
            let log = {
              message: (d.message || d.action) + d.data,
              created: this.$moment(d.created).format('YYYY-MM-DD HH:mm')
            }
            this.logs.push(log)
          }
        } else {
          this.$message({
            message: '获取最新日志失败,' + data.msg,
            type: 'error'
          })
        }
      },
      getArticle (data) {
        if (data.success) {
          for (let key in data.data.list) {
            let d = data.data.list[key]
            let article = d.title
            this.articles.push(article)
          }
        } else {
          this.$message({
            message: '获取最新文章失败,' + data.msg,
            type: 'error'
          })
        }
      },
      initData (articlesData, logsData, articleCountData) {
        this.getArticleCount(articleCountData)
        this.getLogs(logsData)
        this.getArticle(articlesData)
      },
      init () {
        this.$axios.all([this.$api.auth.getArticles(1), this.$api.auth.getLogs(1), this.$api.auth.getArticleCount()])
          .then(this.$axios.spread(this.initData))
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style scoped>
</style>
