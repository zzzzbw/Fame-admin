<template>
  <div :class="[ showLeftMenu ? 'left-menu-show':'left-menu-hide' ]" class="left-menu">
    <el-menu default-active="" :collapse="false" theme="dark" router>
      <el-menu-item index="/admin/article">
        <i class="el-icon-menu"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
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
    z-index: 1;
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
