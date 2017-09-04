<template>
  <div>
    <h2 class="article-title text-bold">{{article.title}}</h2>
    <p class="article-date">{{article.date}}</p>
    <div class="markdown-body">
      <h2>来个测试的标题</h2>
      <h3>测试的二级标题</h3>
      {{article.content}}
    </div>
    <div class="article-tags">
      <label class="label-tags">Tags:</label>
      <span v-for="tag in article.tags" class="chip text-primary">
        {{tag}}
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        article: {
          id: '',
          title: '',
          date: '',
          category: '',
          tags: [],
          content: ''
        }
      }
    },
    methods: {
      initArticle (data) {
        this.article = {
          id: data.id,
          title: data.title,
          date: this.$moment(data.date).format('YYYY-MM-DD'),
          category: data.category || this.$util.STATIC.DEFAULT_CATEGORY,
          tags: this.$util.stringToTags(data.tags),
          content: data.content
        }
      }
    },
    created () {
      this.$api.getArticle(this.$route.params.id).then(data => {
        if (data.success) {
          this.initArticle(data.data)
        } else {
          this.$message({
            message: '获取文章失败,' + data.msg,
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err)
        let article = {
          id: '2',
          title: '测试文章',
          date: '2017-09-01',
          category: 'JAVA测试',
          tags: 'css,Javascript',
          content: '这是做测试的文章!!!'
        }
        this.initArticle(article)
      })
    }
  }
</script>

<style scoped>
  @import "/static/css/markdown-css.css";

  .article-title {
    color: #24292e;;
    margin-top: 30px;
    text-align: center;
  }

  .article-date {
    text-align: center;
  }

  .article-tags {
    margin: 15px 0;

  }

  .article-tags .label-tags {
    margin-right: 6px;
    font-size: 16px;
    font-weight: 600;
    color: #34495e;
  }

  .article-tags .chip {
    margin-right: 5px;
  }
</style>
