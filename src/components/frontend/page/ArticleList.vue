<template>
  <div>
    <div v-for="article in articles" class="article-item">
      <h3 class="article-head text-bold">
        <a @click="toContent(article.id)">{{article.title}}</a>
      </h3>
      <p class="article-date text-italic">{{article.date}}</p>
      <div class="article-tags">
        <label v-for="tag in article.tags" class="chip">
          {{tag}}
        </label>
      </div>
      <div class="article-summary">
        {{article.content}}
      </div>
      <a class="article-more" @click="toContent(article.id)">Read more</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        articles: []
      }
    },
    methods: {
      initArticles (articles) {
        for (let key in articles) {
          let data = articles[key]
          let article = {
            id: data.id,
            title: data.title,
            date: this.$moment(data.date).format('YYYY-MM-DD'),
            category: data.category || this.$util.STATIC.DEFAULT_CATEGORY,
            tags: this.$util.stringToTags(data.tags),
            content: data.content
          }
          this.articles.push(article)
        }
        return 1
      },
      toContent (id) {
        this.$router.push('/frontend/article/content/' + id)
      }
    },
    created () {
      const page = this.$route.params.page
      const url = '/api/article'
      const params = {
        page: page
      }
      this.$get(url, params).then(data => {
        if (data.success) {
          this.initArticles(data.data)
        } else {
          this.$message({
            message: '获取文章列表失败,' + data.msg,
            type: 'error'
          })
        }
      })
    }
  }
</script>

<style scoped>

  .article-item {
    margin-top: 40px;
  }

  .article-item .article-head {
    margin-bottom: 0;
  }

  .article-head > a {
    color: #34495e;
  }

  .article-item .article-date {
    color: #7f8c8d;
    margin: 10px 0;
    font-size: 0.9em;
  }

  .article-item .article-tags {
    margin-bottom: 10px;
  }

  .article-item .article-more {
    font-weight: 600;
    margin-top: 5px;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
  }

  .article-item .article-more:hover {
    transform: translateX(10px);
  }
</style>
