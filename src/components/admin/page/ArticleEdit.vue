<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <el-form-item>
            <el-input v-model="article.tag" placeholder="请输入文章标签"></el-input>
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
        <el-button type="info" @click="onSubmit">发布文章</el-button>
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
          title: '',
          tag: '',
          category: '',
          content: ''
        }
      }
    },
    components: {
      markdownEditor
    },
    methods: {
      onSubmit () {
        console.log(this.article)
      },
      onDraft () {
        // TODO
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
</style>
