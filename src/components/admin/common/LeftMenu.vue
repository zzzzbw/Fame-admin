<template>
  <div :class="[ showLeftMenu ? 'left-menu-show':'left-menu-hide' ]" class="left-menu">
    <el-menu default-active="" :collapse="false" theme="dark" router>
      <el-menu-item index="/admin/article/publish">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/admin/article/index/1">
        <i class="fa fa-list" aria-hidden="true"></i>
        <span slot="title">文章列表</span>
      </el-menu-item>
      <el-menu-item index="/admin/tag">
        <i class="fa fa-tag" aria-hidden="true"></i>
        <span slot="title">标签/分类</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        showLeftMenu: false
      }
    },
    methods: {
      toogleLeftMenu () {
        this.showLeftMenu = !this.showLeftMenu
      }
    },
    created () {
      this.$root.$on('collapse', this.toogleLeftMenu)
    }
  }
</script>

<style scoped>
  .left-menu {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    width: 150px;
    background-color: #324157;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    transition: 0.3s left;
  }

  .left-menu-show {
    left: 0
  }

  .left-menu-hide {
    left: -151px
  }

  @media screen and (min-width: 600px) {
    .left-menu {
      left: 0;
    }
  }
</style>
