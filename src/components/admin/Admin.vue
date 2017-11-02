<template>
  <div>
    <m-header></m-header>
    <left-menu></left-menu>
    <div class="container">
      <div class="main" id="main">
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
        <div class="content" id="content">
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './common/MHeader'
  import LeftMenu from './common/LeftMenu'
  import { Breadcrumb, BreadcrumbItem } from 'element-ui'

  export default {
    components: {
      MHeader,
      LeftMenu,
      'el-breadcrumb': Breadcrumb,
      'el-breadcrumb-item': BreadcrumbItem
    },
    created () {
      document.title = 'Fame Admin'
    }
  }
</script>

<style scoped>
  @import "/static/css/normalize.css";
  @import "/static/css/main.css";

  .container {
    position: fixed;
    top: 60px;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: auto;
    width: calc(100% - 150px);
    background-color: #f5f5f5;
    transition: 0.3s width;
  }

  .main {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .level-bar {
    margin: 0 30px;
    padding-top: 30px;
    width: 100%;
  }

  .level-bar-left {
    margin-bottom: 30px;
    float: left;
  }

  .level-bar-left-mobile {
    display: none;
  }

  .content {
    clear: both;
    z-index: 3;
    margin: 0 30px;
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
