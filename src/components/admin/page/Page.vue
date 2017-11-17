<template>
  <div>
    <el-form :rules="rules" ref="pageForm" :model="page">
      <el-form-item prop="title">
        <el-input v-model="page.title" placeholder="请输入自定义页面标题"></el-input>
      </el-form-item>
      <el-form-item prop="content">
        <md-editor v-model="page.content"></md-editor>
      </el-form-item>
      <div class="button-list">
        <el-button size="small">返回列表</el-button>
        <el-button type="info" size="small" @click="onPublish">发布页面</el-button>
        <el-button type="warning" size="small" @click="onDraft">保存草稿</el-button>
      </div>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import MDEditor from '../common/MDEditor'
  import {
    Button,
    Input,
    Form,
    FormItem
  } from 'element-ui'

  export default {
    components: {
      'el-button': Button,
      'el-input': Input,
      'el-form': Form,
      'el-form-item': FormItem,
      'md-editor': MDEditor
    },
    data: function () {
      return {
        page: {
          id: '',
          title: '',
          content: '',
          status: ''
        },
        rules: {
          title: [
            {required: true, message: '文章标题必须输入', trigger: 'blur'}
          ],
          content: [
            {required: true, message: '文章内容不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      getPage () {
        const id = this.$route.params.id
        if (id) {
          this.$api.auth.getPage(id).then(data => {
            if (data.success) {
              this.page.id = data.data.id
              this.page.title = data.data.title
              this.page.content = data.data.content
            } else {
              this.$message({
                message: '获取自定义页面失败',
                type: 'error'
              })
            }
          })
        } else {
          this.page.id = ''
          this.page.title = ''
          this.page.content = ''
        }
      },
      savePage (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.auth.savePage(this.page).then(data => {
              if (data.success) {
                this.$router.push('/admin/page')
                this.$message({
                  message: '发布自定义页面成功!',
                  type: 'success'
                })
              } else {
                this.$message({
                  message: '发布自定义页面失败,' + data.msg,
                  type: 'error'
                })
              }
            })
          }
        })
      },
      onPublish () {
        this.page.status = this.$util.STATIC.STATUS_PUBLISH
        this.savePage('pageForm')
      },
      onDraft () {
        this.page.status = this.$util.STATIC.STATUS_DRAFT
        this.savePage('pageForm')
      }
    },
    mounted () {
      this.getPage()
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  @import "~highlight.js/styles/googlecode.css";
  @import '/static/css/markdown-css.css';

  .el-select-dropdown ::-webkit-scrollbar {
    display: block;
  }
</style>

<style scoped>
  .button-list {
    float: right;
    margin-bottom: 30px;
  }
</style>

