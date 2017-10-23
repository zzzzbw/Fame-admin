<template>
  <div>
    <div v-for="article in articles" class="article-item">
      <h3 class="article-head text-bold">
        <router-link :to="{ path: '/articles/'+article.id }">{{article.title}}</router-link>
      </h3>
      <p class="article-date"><i class="fa fa-folder" aria-hidden="true"></i> {{article.category}}</p>
      <p class="article-date text-italic"><i class="fa fa-calendar" aria-hidden="true"></i> {{article.date}}</p>
      <p class="article-date"><i class="fa fa-eye" aria-hidden="true"></i> {{article.hits}}</p>
      <div class="article-tags">
        <label v-for="tag in article.tags" class="chip">
          {{tag}}
        </label>
      </div>
      <div class="article-summary markdown-body" v-html="article.content" v-highlight>
      </div>
      <router-link class="article-more text-primary" :to="{ path: '/articles/'+article.id }">Read more</router-link>
    </div>
    <div class="front-page">
      <div class="pre text-primary" v-if="hasPre">
        <router-link :to="{path:'/articles', query: { page: pre }}">← Pre</router-link>
      </div>
      <div class="next text-primary" v-if="hasNext">
        <router-link :to="{path:'/articles', query: { page: next }}">Next →</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        articles: [],
        pre: '',
        hasPre: false,
        next: '',
        hasNext: false
      }
    },
    methods: {
      initArticles (articles) {
        this.articles = []
        for (let key in articles) {
          let data = articles[key]
          let article = {
            id: data.id,
            title: data.title,
            date: this.$moment(data.created).format('YYYY-MM-DD'),
            category: data.category || this.$util.STATIC.DEFAULT_CATEGORY,
            hits: data.hits,
            tags: this.$util.stringToTags(data.tags),
            content: data.content
          }
          this.articles.push(article)
        }
        return 1
      },
      init (page) {
        this.$api.getArticles(page || 1).then(data => {
          if (data.success) {
            console.log(data)
            this.initArticles(data.data.list)
            let nowPage = page || 1
            if (nowPage > 1) {
              this.hasPre = true
              this.pre = Number(nowPage) - 1
            } else {
              this.hasPre = false
            }
            if (nowPage < data.data.pages) {
              this.hasNext = true
              this.next = Number(nowPage) + 1
            } else {
              this.hasNext = false
            }
          } else {
            alert('获取文章列表失败')
          }
        })
      }
    },
    mounted () {
      this.init(this.$route.query.page)
    },
    watch: {
      // 监听route刷新绑定的article数据
      $route (to, from) {
        let toPage = to.query.page
        this.init(toPage)
      }
    }
  }
</script>

<style scoped>
  @import "/static/css/markdown-css.css";

  .article-item {
    margin-top: 40px;
  }

  .article-head {
    line-height: 1.2;
    font-size: 1.8rem;
    margin: 0;
  }

  .article-head > a {
    color: #34495e;
    outline: none;
    text-decoration: none;
  }

  .article-head > a:hover {
    outline-width: 0;
    text-decoration: underline;
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

  .front-page{
    margin: 4em 3em;
    font-size: 15px;
    font-weight: 600;
    
  }

  .front-page a{
    color: #5764c6;
    text-decoration: none;
  }

  .front-page .pre{
    float: left;
  }

  .front-page .next{
    float: right;
  }
</style>
