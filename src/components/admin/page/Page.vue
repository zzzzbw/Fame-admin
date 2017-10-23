<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="page.title" placeholder="请输入自定义页面标题"></el-input>
      </el-form-item>
      <el-form-item>
        <markdown-editor v-model="page.content" :configs="configs" ref="markdownEditor">
        </markdown-editor>
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
        page: {
          id: '',
          title: '',
          content: '',
          status: ''
        }
      }
    },
    components: {
      markdownEditor
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
      savePage () {
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
      },
      onPublish () {
        this.page.status = this.$util.STATIC.STATUS_PUBLISH
        this.savePage()
      },
      onDraft () {
        this.page.status = this.$util.STATIC.STATUS_DRAFT
        this.savePage()
      }
    },
    created () {
      this.getPage()
    }
  }

</script>

<style scoped>
  .button-list {
    float: right;
    margin-bottom: 30px;
  }
</style>

