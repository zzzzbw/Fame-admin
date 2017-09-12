<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/logo.svg" width="26px" height="26px">
        <span class="text-primary" style="margin-left: 10px">Fame</span>
      </div>
      <ul class="tab tab-block link-list">
        <li class="tab-item">
          <router-link :to="{ path: '/articles', query: {page: '1'}}" exact>Home</router-link>
        </li>
        <li class="tab-item">
          <router-link :to="{path: '/tags'}">Tag</router-link>
        </li>
        <li class="tab-item">
          <router-link :to="{path: '/archives'}">Archive</router-link>
        </li>
        <li class="tab-item">
          <a href="#">About</a>
        </li>
      </ul>
      <div class="header-menu">
        <div class="header-menu-icon" @click="toggle">
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
        <div class="header-menu-list" :class="{ 'open': menuOpen }">
          <ul>
            <li class="header-menu-item text-primary">
              <router-link :to="{ path: '/article', query: {page: '1'}}" exact>Home</router-link>
            </li>
            <li class="header-menu-item">
              <router-link :to="{path: '/tag', query: {page: '1'}}">Tag</router-link>
            </li>
            <li class="header-menu-item">Archives</li>
            <li class="header-menu-item">About</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        menuOpen: false
      }
    },
    methods: {
      toggle () {
        this.menuOpen = !this.menuOpen
      },
      toHome () {
        this.$router.push({path: '/article', query: {page: '1'}})
      },
      toTag () {
        this.$router.push({path: '/tag', query: {page: '1'}})
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
    padding: 10px 30px;
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

  @media screen and (max-width: 600px) {
    .link-list {
      display: none;
    }
  }

  .link-list .tab-item {
    display: inline-block;
    margin: 0 8px;
  }

  @media screen and (min-width: 600px) {
    .header-menu {
      display: none;
    }
  }

  .header-container .header-menu-icon {
    display: flex;
    align-items: center;
    float: right;
    height: 40px;
    line-height: 40px;
  }

  .header-container .header-menu-list {
    max-height: 0;
    position: fixed;
    left: 0;
    top: 52px;
    z-index: 99;
    width: 100%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.98);
    -webkit-transition: max-height 0.3s ease;
    transition: max-height 0.3s ease;
  }

  .header-container .open {
    max-height: 300px;
    transition-delay: 0.1s;
  }

  .header-container .header-menu-list > ul {
    margin: 0;
    padding: 0;
  }

  .header-container .header-menu-list .header-menu-item {
    position: relative;
    list-style: none;
    text-align: center;
    padding: 10px 0;
  }

  .header-container .header-menu-list .header-menu-item:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

</style>
