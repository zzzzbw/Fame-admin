<template>
  <div>
    <div class="category-list">
      <a v-for="category in categories" class="category-link category text-bold"
         @click='goAnchor("#category-"+category.name)'>
        {{category.name}}({{category.count}})
      </a>
    </div>
    <div class="category-content">
      <div class="divider"></div>
      <div v-for="category in categories">
        <div class="category-title" :id="'category-'+category.name">{{category.name}}</div>
        <ul class="category-ul">
          <li v-for="article in category.articles" class="article-title">
            <router-link :to="{ path: '/articles/'+article.id }">{{article.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        categories: []
      }
    },
    methods: {
      goAnchor (selector) {
        let anchor = this.$el.querySelector(selector)
        let position = anchor.offsetTop
        this.jump(position)
      },
      jump (total) {
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        let step = total / 100
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 100
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 1)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }

        function smoothUp () {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 1)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
      },
    },
    mounted () {
      this.$api.getCategoriesWithArticle().then(data => {
        if (data.success) {
          this.categories = data.data
        } else {
          alert('获取分类列表失败')
        }
      })
    }
  }
</script>

<style scoped>
  .category-list {
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
  }

  .category-link {
    color: #34495e;
  }

  .category {
    color: #34495e;
    margin: .3rem .1rem;
    padding: .1rem .3rem;
  }

  .category-content {
    margin: 20px auto;
    width: 75%;
  }

  .category-title {
    margin-right: 6px;
    font-size: 24px;
    font-weight: 600;
    color: #34495e;
  }

  .category-title:before {
    content: "#";
    margin-right: 5px;
    color: #5764c6;
    font-size: 1.2em;
    font-weight: 700;
  }

  .article-title a {
    text-decoration: none;
    font-size: 1.1em;
  }

</style>
