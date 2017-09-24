<template>
  <div class="error">
    <h1>{{state}}</h1>
    <h3>Page Not Found</h3>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        state: '',
        errorArray: {
          404: 'Page Not Found'
        }
      }
    },
    mounted () {
      let state = this.$route.params.state
      console.log('state:' + state)
      if (state) {
        this.state = state
      } else {
        this.state = 404
      }
    }
  }
</script>

<style>
  .error {
    margin-top: 180px;
  }

  h1 {
    font-size: 64px;
    text-align: center;
  }

  h3 {
    font-weight: 600;
    text-align: center;
  }
</style>
