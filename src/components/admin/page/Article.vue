<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <el-form-item>
            <el-select
              v-model="article.tags"
              multiple
              filterable
              placeholder="请选择文章标签">
              <el-option
                v-for="tag in tags"
                :key="tag.value"
                :label="tag.label"
                :value="tag.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <el-form-item>
            <el-select v-model="article.category" filterable placeholder="请选择文章分类">
              <el-option
                v-for="category in categories"
                :key="category.value"
                :label="category.label"
                :value="category.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <markdown-editor v-model="article.content" :configs="configs" :highlight="true" ref="markdownEditor"
                         preview-class="markdown-body">
        </markdown-editor>
      </el-form-item>
      <div class="button-list">
        <el-button>返回列表</el-button>
        <el-button type="info" @click="onPublish">发布文章</el-button>
        <el-button type="warning" @click="onDraft">保存草稿</el-button>
      </div>
    </el-form>

  </div>
</template>

<script>
  import markdownEditor from 'vue-simplemde/src/markdown-editor'
  import {
    Button,
    Input,
    Form,
    FormItem,
    Select,
    Option,
    Row,
    Col
  } from 'element-ui'

  import hljs from 'highlight.js/lib/highlight'

  window.hljs = hljs

  export default {
    components: {
      'el-button': Button,
      'el-input': Input,
      'el-form': Form,
      'el-form-item': FormItem,
      'el-select': Select,
      'el-option': Option,
      'el-row': Row,
      'el-col': Col,
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
        article: {
          id: '',
          title: '',
          tags: '',
          category: '',
          content: '',
          status: ''
        },
        tags: [],
        categories: []
      }
    },
    methods: {
      getArticle () {
        const id = this.$route.params.id
        // 如果有id则表示编辑文章,获取文章信息
        if (id) {
          this.$api.auth.getArticle(id).then(data => {
            if (data.success) {
              this.initArticle(data.data)
            } else {
              this.$message({
                message: '获取文章失败',
                type: 'error'
              })
            }
          })
        } else { // 如果没有id则表示新增文章,不用清空文章信息
          this.article.id = ''
          this.article.title = ''
          this.article.tags = this.$util.stringToTags('')
          this.article.category = ''
          this.article.content = ''
        }
      },
      initArticle (data) {
        this.article.id = data.id
        this.article.title = data.title
        this.article.tags = this.$util.stringToTags(data.tags)
        this.article.category = data.category
        this.article.content = data.content
      },
      getTags () {
        this.$api.auth.getAllTags().then(data => {
          if (data.success) {
            for (let key in data.data) {
              let tag = {
                value: data.data[key].name, label: data.data[key].name
              }
              this.tags.push(tag)
            }
          } else {
            this.$message({
              message: '获取标签列表失败',
              type: 'error'
            })
          }
        })
      },
      getCategories () {
        this.$api.auth.getAllCategories().then(data => {
          if (data.success) {
            for (let key in data.data) {
              let category = {
                value: data.data[key].name, label: data.data[key].name
              }
              this.categories.push(category)
            }
          } else {
            this.$message({
              message: '获取分类列表失败',
              type: 'error'
            })
          }
        })
      },
      saveArticle () {
        let params = this.article
        params.tags = this.$util.tagsToString(this.article.tags)
        this.$api.auth.saveArticle(params).then(data => {
          if (data.success) {
            this.$router.push('/admin/article')
            this.$message({
              message: '发布文章成功!',
              type: 'success'
            })
          } else {
            this.$message({
              message: '发布文章失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      onPublish () {
        this.article.status = this.$util.STATIC.STATUS_PUBLISH
        this.saveArticle()
      },
      onDraft () {
        this.article.status = this.$util.STATIC.STATUS_DRAFT
        this.saveArticle()
      },
      init () {
        this.getArticle()
        this.getTags()
        this.getCategories()
      }
    },
    mounted () {
      this.init()
    },
    watch: {
      // 监听route刷新绑定的article数据
      $route (to, from) {
        this.getArticle()
      }
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  @import "~highlight.js/styles/googlecode.css";
  @import '/static/css/markdown-css.css';
</style>

<style scoped>
  .button-list {
    float: right;
    margin-bottom: 30px;
  }

  .el-select {
    display: block;
  }
</style>
