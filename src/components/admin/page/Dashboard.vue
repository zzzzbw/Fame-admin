<template>
  <div>
    <el-row :gutter="50">
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="panel">
          <div class="panel-content">
              <div class="message">
                <h3>{{visitCount}}</h3>
                <p>网站访问量</p>
              </div>
              <div class="icon red">
                <span class="icon-eye"></span>
              </div>
            <div style="clear: both"></div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
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
  import {
    Row,
    Col
  } from 'element-ui'

  export default {
    components: {
      'el-row': Row,
      'el-col': Col
    },
    data () {
      return {
        visitCount: 0,
        articleCount: 0,
        logs: [],
        articles: []
      }
    },
    methods: {
      getVisitCount () {
        this.$api.auth.getVisitCount().then(data => {
          if (data.success) {
            this.visitCount = data.data
          } else {
            this.$message({
              message: '获取访问量失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      getArticleCount () {
        this.$api.auth.getArticleCount().then(data => {
          if (data.success) {
            this.articleCount = data.data
          } else {
            this.$message({
              message: '获取文章数量失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      getLogs () {
        this.$api.auth.getLogs(1).then(data => {
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
        })
      },
      getArticle () {
        this.$api.auth.getArticles(1).then(data => {
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
        })
      },
      init () {
        this.getVisitCount()
        this.getArticleCount()
        this.getLogs()
        this.getArticle()
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style scoped>
</style>
