<template>
  <div>
    <f-header></f-header>
    <div class="container">
      <transition name="flow" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <f-scroll-top></f-scroll-top>
    <f-footer></f-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import FHeader from './common/FHeader'
  import FFooter from './common/FFooter'
  import FScrollTop from './common/FScrollTop'

  export default {
    components: {
      FHeader,
      FFooter,
      FScrollTop
    },
    mounted () {
      this.$router.push('/articles?page=1')
    }
  }

</script>

<style>
  a:hover {
    cursor: pointer;
  }
</style>
<style scoped>
  @import '~spectre.css';
  @import "/static/css/normalize.css";
  @import "/static/css/main.css";

  @font-face {
    font-family: 'Source Sans Pro';
    src: url("/static/fonts/SourceSansPro.ttf");
  }

  .container {
    padding: 1em;
    margin: 55px auto;
    height: 100%;
    max-width: 750px;
    font-size: 16px;
    position: relative;
  }
</style>
