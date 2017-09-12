<template>
  <div>
    <div class="tag-list">
      <a class="tag-link" @click="goAnchor('#tag-JavaScript')">
        <span class="tag chip">
            JavaScript
        </span>
      </a>
      <a class="tag-link" @click="goAnchor('#tag-CSS')">
        <span class="tag chip">
          CSS
        </span>
      </a>
      <a class="tag-link" @click="goAnchor('#tag-HTML')">
        <span class="tag chip">
          HTML
        </span>
      </a>
      <a class="tag-link" @click="goAnchor('#tag-JAVA')">
        <span class="tag chip">
          JAVA
        </span>
      </a>
    </div>
    <div class="tag-content">
      <div class="divider"></div>
      <div class="tag-title" id="tag-JavaScript">JavaScript</div>
      <ul class="tag-ul">
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
      <div class="tag-title" id="tag-CSS">CSS</div>
      <ul class="tag-ul">
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
      <div class="tag-title" id="tag-HTML">HTML</div>
      <ul class="tag-ul">
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
      <div class="tag-title" id="tag-JAVA">JAVA</div>
      <ul class="tag-ul">
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
  .tag-list {
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
  }

  .tag-link {
    text-decoration: none;
    text-underline: none;
  }

  .tag {
    background: #f0f1f4;
    border-radius: 5rem;
    color: #727e96;
    margin: .3rem .1rem;
    padding: .1rem .5rem;
  }

  .tag-link .tag:hover {
    background: #acb3c2;
    color: #f0f1f4;
    box-shadow: 0 0 3px rgba(14, 14, 14, 0.3);
    margin-top: -5px;
    transition: all 0.2s;
  }

  .tag-content {
    margin: 20px auto;
    width: 75%;
  }

  .tag-title {
    margin-right: 6px;
    font-size: 24px;
    font-weight: 600;
    color: #34495e;
  }

  .tag-title:before {
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
