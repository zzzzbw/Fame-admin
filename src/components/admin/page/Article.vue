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
        <markdown-editor v-model="article.content" :configs="configs" ref="markdownEditor">
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
  import { markdownEditor } from 'vue-simplemde'
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
          status: true,
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: 'atom-one-light'
          }
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
