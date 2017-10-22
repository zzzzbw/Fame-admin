<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
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
        article: {
          id: '',
          title: '',
          tags: '',
          category: '',
          content: '',
          status: ''
        },
        tags: [],
        categories: [],
      }
    },
    components: {
      markdownEditor
    },
  }

</script>

<style scoped>

</style>
