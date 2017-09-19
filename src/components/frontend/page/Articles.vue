<template>
  <div>
    <div v-for="article in articles" class="article-item">
      <h3 class="article-head text-bold">
        <router-link :to="{ path: '/articles/'+article.id }">{{article.title}}</router-link>
      </h3>
      <p class="article-date"><i class="fa fa-folder" aria-hidden="true"></i> {{article.category}}</p>
      <p class="article-date text-italic"><i class="fa fa-calendar" aria-hidden="true"></i> {{article.date}}</p>
      <div class="article-tags">
        <label v-for="tag in article.tags" class="chip text-primary">
          {{tag}}
        </label>
      </div>
      <div class="article-summary markdown-body" v-html="article.content" v-highlight>
      </div>
      <router-link class="article-more" :to="{ path: '/articles/'+article.id }">Read more</router-link>
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
        this.$router.push('/articles/' + id)
      }
    },
    mounted () {
      this.$api.getArticles(this.$route.query.page || 1).then(data => {
        if (data.success) {
          this.initArticles(data.data)
        } else {
          alert('获取文章列表失败')
        }
      })
    }
  }
</script>

<style scoped>
  @import "/static/css/markdown-css.css";

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
    display: inline-block;
    color: #7f8c8d;
    margin: 10px 5px;
    font-size: 0.9em;
  }

  .article-item .article-tags {
    margin-bottom: 10px;
  }

  .article-item .article-more {
    font-weight: 600;
    margin-top: 15px;
    font-size: 16px;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
  }

  .article-item .article-more:hover {
    transform: translateX(10px);
  }
</style>
