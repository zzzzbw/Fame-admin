<template>
  <el-row :gutter="30">
    <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
      <el-card class="box-card">
        <div slot="header">
          <span>个人设置</span>
        </div>
        <el-form ref="form" v-model="userForm" :label-position="'left'" label-width="100px">
          <el-form-item label="账号:">
            <el-input v-model="userForm.username" placeholder="账号" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="原密码:">
            <el-input type="password" v-model="userForm.oldPassword" placeholder="请输入原密码"></el-input>
          </el-form-item>
          <el-form-item label="新密码:">
            <el-input type="password" v-model="userForm.newPassword" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码:">
            <el-input type="password" v-model="userForm.repeatPassword" placeholder="请输入确认新密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" style="float: right;" @click="submitUser">保存修改
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
      <el-card class="box-card">
        <div slot="header">
          <span>系统设置(重启服务器后会还原)</span>
        </div>
        <el-form ref="form" v-model="staticForm" :label-position="'left'" label-width="100px">
          <el-form-item label="网站名称(Title):">
            <el-input v-model="staticForm.title" placeholder="请输入网站名称"></el-input>
          </el-form-item>
          <el-form-item label="网站描述(description):">
            <el-input v-model="staticForm.description" placeholder="请输入网站描述"></el-input>
          </el-form-item>
          <el-form-item label="网站关键字(keywords):">
            <el-input v-model="staticForm.keywords" placeholder="请输入网站关键字"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" style="float: right;" @click="submitSitestatic">保存修改
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        userForm: {
          username: '',
          oldPassword: '',
          newPassword: '',
          repeatPassword: ''
        },
        staticForm: {
          title: '',
          description: '',
          keywords: ''
        }
      }
    },
    methods: {
      getUsername () {
        this.$api.auth.getUsername().then(data => {
          if (data.success) {
            this.userForm.username = data.data
          } else {
            this.$message({
              message: '获取用户名失败',
              type: 'error'
            })
          }
        })
      },
      getSitestatic () {
        this.$api.auth.getSitestatic().then(data => {
          if (data.success) {
            this.staticForm = data.data
          } else {
            this.$message({
              message: '获取网站设置失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      submitUser () {
        this.$api.auth.resetPassword(this.userForm.username, this.userForm.oldPassword, this.userForm.newPassword).then(data => {
          if (data.success) {
            if (data.data === true) {
              this.$message({
                message: '保存成功,请重新登陆',
                type: 'success'
              })
              this.$api.auth.logout()
              this.$router.push('/admin/login')
            } else {
              this.$message({
                message: '保存失败,未更新数据库',
                type: 'error'
              })
            }
          } else {
            this.$message({
              message: '重置密码失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      submitSitestatic () {
        this.$api.auth.saveSitestatic(this.staticForm.title, this.staticForm.description, this.staticForm.keywords).then(data => {
          if (data.success) {
            this.$message({
              message: '保存成功,请重新登陆',
              type: 'success'
            })
            this.$api.auth.logout()
            this.$router.push('/admin/login')
          } else {
            this.$message({
              message: '设置网站数据失败,' + data.msg,
              type: 'error'
            })
          }
        })
      }
    },
    mounted () {
      this.getUsername()
      this.getSitestatic()
    }
  }
</script>

<style scoped>

</style>
