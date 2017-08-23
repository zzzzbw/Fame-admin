<template>
  <div>
    <h2 class="article-title text-bold">{{article.title}}</h2>
    <p class="article-date">{{article.date}}</p>
    <div class="article-content">
      {{article.content}}
    </div>
    <div class="article-tags">
      <label class="label-tags">Tags:</label>
      <label v-for="tag in article.tags" class="chip">
        {{tag}}
      </label>
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
      const id = this.$route.params.id
      const url = 'api/article/' + id
      this.$get(url).then(data => {
        if (data.success) {
          this.initArticle(data.data)
        } else {
          this.$message({
            message: '获取文章失败,' + data.msg,
            type: 'error'
          })
        }
      })
    }
  }
</script>

<style scoped>
  .article-title {
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
    font-size: 16px;
  }
</style>
