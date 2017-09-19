<template>
  <div>
    <div class="category-list">
      <a class="category-link category text-bold" @click="goAnchor('#category-JavaScript')">
        JavaScript(3)
      </a>
      <a class="category-link category text-bold" @click="goAnchor('#category-CSS')">
        CSS(5)
      </a>
      <a class="category-link category text-bold" @click="goAnchor('#category-HTML')">
          HTML(2)
      </a>
      <a class="category-link category text-bold" @click="goAnchor('#category-JAVA')">
          JAVA(10)
      </a>
    </div>
    <div class="category-content">
      <div class="divider"></div>
      <div class="category-title" id="category-JavaScript">JavaScript</div>
      <ul class="category-ul">
        <li class="article-title">
          <a>测试标题1</a>
        </li>
        <li class="article-title">
          <a>测试标题2</a>
        </li>
        <li class="article-title">
          <a>测试标题3</a>
        </li>
        <li class="article-title">
          <a>测试标题5</a>
        </li>
        <li class="article-title">
          <a>测试标题6</a>
        </li>
        <li class="article-title">
          <a>测试标题7</a>
        </li>
        <li class="article-title">
          <a>测试标题1</a>
        </li>
        <li class="article-title">
          <a>测试标题2</a>
        </li>
        <li class="article-title">
          <a>测试标题3</a>
        </li>
        <li class="article-title">
          <a>测试标题5</a>
        </li>
        <li class="article-title">
          <a>测试标题6</a>
        </li>
        <li class="article-title">
          <a>测试标题7</a>
        </li>
        <li class="article-title">
          <a>测试标题1</a>
        </li>
        <li class="article-title">
          <a>测试标题2</a>
        </li>
        <li class="article-title">
          <a>测试标题3</a>
        </li>
        <li class="article-title">
          <a>测试标题5</a>
        </li>
        <li class="article-title">
          <a>测试标题6</a>
        </li>
        <li class="article-title">
          <a>测试标题7</a>
        </li>
        <li class="article-title">
          <a>测试标题1</a>
        </li>
        <li class="article-title">
          <a>测试标题2</a>
        </li>
        <li class="article-title">
          <a>测试标题3</a>
        </li>
        <li class="article-title">
          <a>测试标题5</a>
        </li>
        <li class="article-title">
          <a>测试标题6</a>
        </li>
        <li class="article-title">
          <a>测试标题7</a>
        </li>
        <li class="article-title">
          <a>测试标题1</a>
        </li>
        <li class="article-title">
          <a>测试标题2</a>
        </li>
        <li class="article-title">
          <a>测试标题3</a>
        </li>
        <li class="article-title">
          <a>测试标题5</a>
        </li>
        <li class="article-title">
          <a>测试标题6</a>
        </li>
        <li class="article-title">
          <a>测试标题7</a>
        </li>
        <li class="article-title">
          <a>测试标题1</a>
        </li>
        <li class="article-title">
          <a>测试标题2</a>
        </li>
        <li class="article-title">
          <a>测试标题3</a>
        </li>
        <li class="article-title">
          <a>测试标题5</a>
        </li>
        <li class="article-title">
          <a>测试标题6</a>
        </li>
        <li class="article-title">
          <a>测试标题7</a>
        </li>
      </ul>
      <div class="category-title" id="category-CSS">CSS</div>
      <ul class="category-ul">
        <li class="article-title">
          <a>测试标题11</a>
        </li>
        <li class="article-title">
          <a>测试标题12</a>
        </li>
        <li class="article-title">
          <a>测试标题13</a>
        </li>
        <li class="article-title">
          <a>测试标题14</a>
        </li>
        <li class="article-title">
          <a>测试标题15</a>
        </li>
        <li class="article-title">
          <a>测试标题16</a>
        </li>
      </ul>
      <div class="category-title" id="category-HTML">HTML</div>
      <ul class="category-ul">
        <li class="article-title">
          <a>测试标题21</a>
        </li>
        <li class="article-title">
          <a>测试标题22</a>
        </li>
        <li class="article-title">
          <a>测试标题23</a>
        </li>
        <li class="article-title">
          <a>测试标题24</a>
        </li>
        <li class="article-title">
          <a>测试标题25</a>
        </li>
        <li class="article-title">
          <a>测试标题26</a>
        </li>
      </ul>
      <div class="category-title" id="category-JAVA">JAVA</div>
      <ul class="category-ul">
        <li class="article-title">
          <a>测试标题31</a>
        </li>
        <li class="article-title">
          <a>测试标题32</a>
        </li>
        <li class="article-title">
          <a>测试标题33</a>
        </li>
        <li class="article-title">
          <a>测试标题34</a>
        </li>
        <li class="article-title">
          <a>测试标题35</a>
        </li>
        <li class="article-title">
          <a>测试标题36</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
      }
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
