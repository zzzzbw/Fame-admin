<template>
  <div>
    <el-row :gutter="50" style="width: 100%;">
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="panel">
          <div class="message">
            <h3>{{visitCount}}</h3>
            <p>网站访问量</p>
          </div>
          <div class="icon"><i class="fa fa-eye red" aria-hidden="true"></i></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="panel">
          <div class="message">
            <h3>{{articleCount}}</h3>
            <p>发布文章数</p>
          </div>
          <div class="icon"><i class="fa fa-book" aria-hidden="true"></i></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="50" style="width: 100%;">
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="panel">
          <div class="header">
            <div class="title">最新文章</div>
          </div>
          <ul class="info">
            <li>Hello world</li>
            <li>测试文章</li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="panel">
          <div class="header">
            <div class="title">最新日志</div>
          </div>
          <ul class="info">
            <li v-for="log in logs">{{log.created}} => {{log.message}}</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
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
        this.$api.getVisitCount().then(data => {
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
        this.$api.getArticleCount().then(data => {
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
        this.$api.getLogs(1).then(data => {
          if (data.success) {
            console.log(data.data)
            for (let key in data.data) {
              let d = data.data[key]
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
        this.$api.getArticlesAuth(1).then(data => {
          if (data.success) {
            for (let key in data.data) {
              let d = data.data[key]
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
      }
    },
    created () {
      this.getVisitCount()
      this.getArticleCount()
      this.getLogs()
    }
  }
</script>

<style>

  .panel {
    padding: 25px 15px;
    border: none;
    background: #fff;
    display: inline-block;
    margin-bottom: 30px;
    width: 100%;
    border-radius: 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  }

  .panel .message {
    float: left;
  }

  .panel .message h3 {
    font-size: 32px;
    color: #676767;
    margin: 0;
  }

  .panel .message p {
    font-size: 14px;
    color: #AAB5BC;
    font-weight: 600;
    text-transform: uppercase;
    margin: 8px 5px;
    display: inline-block;
  }

  .panel .header {
    color: #555;
    border-color: #FFF;
    font-weight: bold;
    background: #FFFFFF;
    font-size: 16px;
    text-shadow: none;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .panel .header .title {
    margin-top: -10px;
  }

  .panel .icon {
    float: right;
  }

  .panel .icon .fa {
    font-size: 30px;
    color: #FFFFFF;
    background: #30A5FF;
    padding: 19px;
  }

  .panel .info {
    padding-left: 0;
    list-style: none;
  }

  .panel .info li {
    color: #555;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .red {
    background: #f36a5a !important;
  }

  .green {
    background: #1ABC9C !important;
  }

  .yellow {
    background: #FABE28 !important;
  }

</style>
