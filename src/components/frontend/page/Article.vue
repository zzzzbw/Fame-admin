<template>
  <div>
    <h2 class="article-title text-bold">{{article.title}}</h2>
    <div class="article-info">
      <p class="article-category"><span class="icon-folder"></span> {{article.category}}</p>
      <p class="article-date"><span class="icon-calendar"></span> {{article.date}}</p>
      <p class="article-date"><span class="icon-eye"></span> {{article.hits}}</p>
    </div>

    <div class="markdown-body" v-html="article.content" v-highlight>
    </div>
    <div class="article-tags">
      <label class="label-tags">Tags:</label>
      <span v-for="tag in article.tags" class="chip">
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
      init (data) {
        this.article = {
          id: data.id,
          title: data.title,
          date: this.$moment(data.created).format('YYYY-MM-DD'),
          category: data.category || this.$util.STATIC.DEFAULT_CATEGORY,
          hits: data.hits,
          tags: this.$util.stringToTags(data.tags),
          content: data.content
        }
      }
    },
    mounted () {
      this.$api.front.getArticle(this.$route.params.id).then(data => {
        if (data.success) {
          this.init(data.data)
        } else {
          console.log('获取文章失败')
        }
      })
    }
  }
</script>

<style scoped>
  @import '/static/css/markdown-css.css';
  @import "~highlight.js/styles/googlecode.css";

  .article-title {
    color: #24292e;;
    margin-top: 30px;
    font-size: 2.0rem;
    text-align: center;
  }

  .article-info {
    text-align: center;
  }

  .article-date {
    color: #50596c;
    display: inline-block;
    margin-left: 8px;
  }

  .article-category {
    color: #50596c;
    display: inline-block;
    margin-right: 8px;
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
