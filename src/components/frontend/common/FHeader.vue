<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <span class="text-primary">Fame</span>
      </div>
      <ul class="tab tab-block link-list">
        <li class="tab-item">
          <a class="active" @click="toHome">Home</a>
        </li>
        <li class="tab-item">
          <a @click="toTag">Tags</a>
        </li>
        <li class="tab-item">
          <a href="#">Archives</a>
        </li>
        <li class="tab-item">
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: 'Fame init Page'
      }
    },
    methods: {
      toHome () {
        this.$router.push('/frontend/article/1')
      },
      toTag () {
        this.$router.push('/frontend/tag/1')
      }
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0 0 3px rgba(14, 14, 14, 0.26);
    border: none;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    transition: background 0.5s;
  }

  .header-container {
    max-width: 1200px;
    height: 60px;
    margin: 0 auto;
    padding: 10px 40px;
    position: relative;
  }

  .header-container .logo {
    display: flex;
    align-items: center;
    float: left;
    font-weight: 600;
    font-size: 2em;
    line-height: 40px;
  }

  .header-container .link-list {
    float: right;
    border-bottom: none;
  }

  .link-list .tab-item {
    display: inline-block;
    margin: 0 8px;
  }
</style>
