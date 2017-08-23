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
              allow-create
              placeholder="请选择文章标签">
              <el-option
                v-for="item in tags"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <el-form-item>
            <el-input v-model="article.category" placeholder="请输入文章分类"></el-input>
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

  export default {
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
          categories: '',
          content: '',
          status: ''
        },
        tags: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        tagsValue: []
      }
    },
    components: {
      markdownEditor
    },
    methods: {
      getArticle () {
        const id = this.$route.params.id
        // 如果有id则表示编辑文章,获取文章信息
        if (id) {
          this.$api.getArticleAuth(id).then(data => {
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
      onPublish () {
        this.article.status = this.$util.STATIC.ARTICLE_STATUS_PUBLISH
        let params = this.article
        params.tags = this.$util.tagsToString(this.article.tags)
        this.$api.saveArticleAuth(params).then(data => {
          if (data.success) {
            this.$router.push('/admin/article/index/1')
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
      onDraft () {
        // TODO
      }
    },
    created () {
      this.getArticle()
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
  .button-list {
    float: right;
  }

  .button-list .el-button {
    margin-left: 0;
  }

  .el-select {
    display: block;
  }
</style>
