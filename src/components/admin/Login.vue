<template>
  <div class="container">
    <div class="login-wrap">
      <h2 class="title">Fame Login</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        const self = this
        self.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.login(this.ruleForm).then(data => {
              if (data.success) {
                this.$router.push('/admin')
                this.$message({
                  message: '登录成功!',
                  type: 'success'
                })
              } else {
                this.$message({
                  message: '登录失败,' + data.msg,
                  type: 'error'
                })
              }
            })
          } else {
            this.$message({
              message: '登录失败',
              type: 'error'
            })
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import '~element-ui/lib/theme-default/index.css';

  .container {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: #f5f5f5;
  }

  .login-wrap {
    max-width: 330px;
    margin: 100px auto 0;
    background: #fff;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  .title {
    margin: 0;
    padding: 25px 20px;
    text-align: center;
    background: #68dff0;
    border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .el-form {
    padding: 20px;
  }

  .login-btn button {
    width: 100%;
  }
</style>
