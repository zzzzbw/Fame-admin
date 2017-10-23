<template>
  <div class="markdown-body" v-html="content" v-highlight>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        content: ''
      }
    },
    mounted () {
      this.$api.getPage('About').then(data => {
        if (data.success) {
          this.content = data.data.content
        } else {
          console.log('获取About失败')
        }
      })
    }
  }
</script>

<style scoped>
  @import "/static/css/markdown-css.css";
</style>
