<template>
  <div>
    <el-form :rules="rules" ref="pageForm" :model="page">
      <el-form-item prop="title">
        <el-input v-model="page.title" placeholder="请输入自定义页面标题"></el-input>
      </el-form-item>
      <el-form-item prop="content">
        <markdown-editor v-model="page.content" :configs="configs" :highlight="true" ref="markdownEditor"
                         preview-class="markdown-body"></markdown-editor>
      </el-form-item>
      <div class="button-list">
        <el-button>返回列表</el-button>
        <el-button type="info" @click="onPublish">发布页面</el-button>
        <el-button type="warning" @click="onDraft">保存草稿</el-button>
      </div>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import markdownEditor from 'vue-simplemde/src/markdown-editor'
  import {
    Button,
    Input,
    Form,
    FormItem
  } from 'element-ui'

  import hljs from 'highlight.js/lib/highlight'

  window.hljs = hljs
  export default {
    components: {
      'el-button': Button,
      'el-input': Input,
      'el-form': Form,
      'el-form-item': FormItem,
      markdownEditor
    },
    data: function () {
      return {
        configs: {
          autoDownloadFontAwesome: false, // 禁止下载fontAwesome
          status: false, // 禁用底部状态栏
          spellChecker: false, // 禁用拼写检查
          toolbar: [{
            name: 'bold',
            action: function toggleBold (editor) {
              editor.toggleBold()
            },
            className: 'icon-bold',
            title: '加粗'
          }, {
            name: 'italic',
            action: function toggleItalic (editor) {
              editor.toggleItalic()
            },
            className: 'icon-italic',
            title: 'icon-italic'
          }, {
            name: 'strikethrough',
            action: function toggleStrikethrough (editor) {
              editor.toggleStrikethrough()
            },
            className: 'icon-strikethrough',
            title: '删除线'
          }, {
            name: 'heading',
            action: function toggleHeadingSmaller (editor) {
              editor.toggleHeadingSmaller()
            },
            className: 'icon-header',
            title: '标题'
          }, {
            name: 'code',
            action: function toggleCodeBlock (editor) {
              editor.toggleCodeBlock()
            },
            className: 'icon-code',
            title: '代码块'
          }, {
            name: 'quote',
            action: function toggleBlockquote (editor) {
              editor.toggleBlockquote()
            },
            className: 'icon-quote-left',
            title: '引用'
          }, {
            name: 'unordered-list',
            action: function toggleUnorderedList (editor) {
              editor.toggleUnorderedList()
            },
            className: 'icon-list-ul',
            title: '无序列表'
          }, {
            name: 'ordered-list',
            action: function toggleOrderedList (editor) {
              editor.toggleOrderedList()
            },
            className: 'icon-list-ol',
            title: '有序列表'
          }, {
            name: 'link',
            action: function drawLink (editor) {
              editor.drawLink()
            },
            className: 'icon-link',
            title: '插入链接'
          }, {
            name: 'image',
            action: function drawImage (editor) {
              editor.drawImage()
            },
            className: 'icon-image',
            title: '插入图片'
          }, '|', {
            name: 'preview',
            action: function togglePreview (editor) {
              editor.togglePreview()
            },
            className: 'icon-eye',
            title: '预览'
          }, {
            name: 'fullscreen',
            action: function toggleFullScreen (editor) {
              editor.toggleFullScreen()
            },
            className: 'icon-arrows-alt',
            title: '全屏'
          }, {
            name: 'side-by-side',
            action: function toggleSideBySide (editor) {
              editor.toggleSideBySide()
            },
            className: 'icon-columns',
            title: '分屏'
          }]
        },
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
          this.$api.getPageAuth(id).then(data => {
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
            this.$api.savePageAuth(this.page).then(data => {
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

