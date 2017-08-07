<template>
  <div class="header">
    <div class="collapse">
      <a @click="collapse"><i aria-hidden="true" class="fa fa-bars"></i></a>
    </div>
    <div class="title">
      <h3>Fame</h3>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      collapse: function () {
        this.$root.$emit('collapse')
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 50px;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
  }

  .collapse {
    display: none;
    float: left;
    width: 64px;
  }

  .title h3 {
    margin: 0 64px 0 0;
  }

  @media screen and (max-width: 600px) {
    .collapse {
      display: block;
    }
  }
</style>
