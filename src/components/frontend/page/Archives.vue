<template>
  <div class="timeline">
    <div v-for="archive in archives" class="timeline-item">
      <div class="timeline-left">
        <div class="timeline-left icon-lg">
          <a class="timeline-icon"></a>
        </div>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <p class="tile-subtitle">{{archive.year}}</p>
            <p v-for="article in archive.articles" class="tile-title">
              <label class="text-italic">{{article.created, 'MM-DD' | time}}</label>
              <router-link :to="{ path: '/articles/'+article.id }">{{article.title}}</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        archives: []
      }
    },
    methods: {
      initArchives (archives) {
        for (let key in archives) {
          let data = archives[key]
          let archive = {
            year: data.dateStr,
            articles: data.articles
          }
          this.archives.push(archive)
        }
      }
    },
    mounted () {
      this.$api.getArchives(this.$route.query.page || 1).then(data => {
        if (data.success) {
          this.initArchives(data.data)
        } else {
          alert('获取归档列表失败')
        }
      })
    }
  }
</script>

<style scoped>
  .timeline {
    margin-top: 30px;
  }

  .timeline .timeline-item {
    display: flex;
    display: -ms-flexbox;
    margin-bottom: 1.2rem;
    position: relative;
  }

  .timeline .timeline-item::before {
    background: #e7e9ed;
    content: "";
    height: 100%;
    left: 11px;
    position: absolute;
    top: 1.2rem;
    width: 2px;
  }

  .tile .tile-content .tile-subtitle {
    font-size: 24px;
    font-weight: 600;
    color: #34495e;
  }

  .tile .tile-content .tile-title label {
    font-size: 14px;
    color: #7f8c8d;
    margin-right: 15px;
  }

  .tile .tile-content .tile-title a {
    color: #34495e;
    text-decoration: none;
  }

  .tile .tile-content .tile-title a:hover {
    margin-left: 10px;
    color: #5764c6;
    transition: all 0.3s;
    text-decoration: none;
  }

  .timeline .timeline-item .timeline-content {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 2px 0 2px .8rem;
  }

  .timeline .timeline-item .timeline-content {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 2px 0 2px .8rem;
  }

  .timeline .timeline-item .timeline-icon {
    border-radius: 50%;
    color: #fff;
    display: block;
    height: 1.2rem;
    text-align: center;
    width: 1.2rem;
  }

  .timeline .timeline-item .timeline-icon::before {
    border: .1rem solid #5764c6;
    border-radius: 50%;
    content: "";
    display: block;
    height: .4rem;
    left: .4rem;
    position: absolute;
    top: .4rem;
    width: .4rem;
  }

  .timeline .timeline-item .timeline-icon.icon-lg {
    background: #5764c6;
    font-size: .8rem;
    line-height: 1rem;
  }

  .timeline .timeline-item .timeline-icon.icon-lg::before {
    content: none;
  }
</style>
