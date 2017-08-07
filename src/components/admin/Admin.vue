<template>
  <div>
    <m-header></m-header>
    <left-menu></left-menu>
    <div class="container">
      <div class="level-bar">
        <div class="level-bar-left">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="level-bar-left-mobile">
          <h3>首页</h3>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './common/MHeader'
  import LeftMenu from './common/LeftMenu'

  export default {
    components: {
      MHeader,
      LeftMenu
    }
  }
</script>

<style scoped>
  .container {
    position: fixed;
    top: 50px;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: auto;
    width: calc(100% - 150px);
    background-color: #f5f5f5;
    transition: 0.3s width;
  }

  .level-bar {
    margin: 30px 30px 0 30px;
    width: 100%;
  }

  .level-bar-left {
    float: left;
  }

  .level-bar-left-mobile {
    display: none;
  }

  .content {
    clear: both;
    z-index: 3;
    margin: 60px 30px 0 30px;
  }

  @media screen and (max-width: 600px) {
    .container {
      width: 100%;
    }

    .level-bar-left {
      display: none;
    }

    .level-bar-left-mobile {
      display: block;
      float: left;
    }

    .level-bar-left-mobile h3 {
      margin-top: -15px;
    }
  }
</style>
