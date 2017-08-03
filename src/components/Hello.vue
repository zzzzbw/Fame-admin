<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>vue+axios+router+element ui</h2>
    <el-button @click="test">get测试按钮</el-button>
    <el-button type="primary" @click="login">post测试按钮</el-button>
    <el-button @click="admin">
      后台管理
    </el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Fame init Page'
      }
    },
    methods: {
      test () {
        console.log('test')
        const url = '/api/admin/test'
        const params = {
          success: true
        }
        this.$get(url, params).then(data => {
          console.log(data)
        })
      },
      login () {
        console.log('login')
        const url = '/api/admin/login'
        const params = {
          username: 'zbw',
          password: '123'
        }
        this.$post(url, params).then(data => {
          console.log(data)
        })
      },
      admin () {
        this.$router.push('/admin')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    text-align: center;
  }
</style>
