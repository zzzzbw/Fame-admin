<template>
  <div style="margin-top: -30px">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
        <el-card class="box-card">
          <div slot="header">
            <span style="line-height: 36px;">标签列表</span>
          </div>
          <div class="tag-list">
            <el-tag v-for="tag in tags"
                    :key="tag.name"
                    :type="tag.type"
                    :closable="true"
                    :close-transition="false"
                    @close="handleDeleteTag(tag)">
              {{tag.name}}
            </el-tag>
            <el-input class="input-new-tag"
                      v-if="inputVisibleTag"
                      v-model="inputValueTag"
                      ref="saveTagInput"
                      size="mini"
                      @keyup.enter.native="handleInputConfirmTag"
                      @blur="handleInputConfirmTag">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInputTag">+新增标签</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
        <el-card class="box-card">
          <div slot="header">
            <span style="line-height: 36px;">分类列表</span>
          </div>
          <div class="category-list">
            <el-tag v-for="category in categories"
                    :key="category.name"
                    :type="category.type"
                    :closable="true"
                    :close-transition="false"
                    @close="handleDeleteCategory(category)">
              {{category.name}}
            </el-tag>
            <el-input class="input-new-category"
                      v-if="inputVisibleCategory"
                      v-model="inputValueCategory"
                      ref="saveCategoryInput"
                      size="mini"
                      @keyup.enter.native="handleInputConfirmCategory"
                      @blur="handleInputConfirmCategory">
            </el-input>
            <el-button v-else class="button-new-category" size="small" @click="showInputCategory">+新增分类</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        inputVisibleTag: false,
        inputValueTag: '',
        inputVisibleCategory: false,
        inputValueCategory: '',
        tags: [],
        categories: []
      }
    },
    methods: {
      handleDeleteTag (tag) {
        this.$confirm('此操作将删除该标签, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$api.deleteTag(tag.name).then(data => {
            if (data.success) {
              this.tags.splice(this.tags.indexOf(tag), 1)
            } else {
              this.$message({
                message: '删除标签失败,' + data.msg,
                type: 'error'
              })
            }
          })
        })
      },
      handleDeleteCategory (category) {
        this.$confirm('此操作将删除该分类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.categories.splice(this.categories.indexOf(category), 1)
        })
      },
      showInputTag () {
        this.inputVisibleTag = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      showInputCategory () {
        this.inputVisibleCategory = true
        this.$nextTick(_ => {
          this.$refs.saveCategoryInput.$refs.input.focus()
        })
      },
      handleInputConfirmTag () {
        let inputValueTag = this.inputValueTag
        if (inputValueTag) {
          this.$api.saveTag(inputValueTag).then(data => {
            if (data.success) {
              let tag = {name: inputValueTag, type: this.$util.randomColorType()}
              this.tags.push(tag)
            } else {
              this.$message({
                message: '新增标签失败,' + data.msg,
                type: 'error'
              })
            }
          })
        }
        this.inputVisibleTag = false
        this.inputValueTag = ''
      },
      handleInputConfirmCategory () {
        let inputValueCategory = this.inputValueCategory
        if (inputValueCategory) {
          let category = {name: inputValueCategory, type: this.$util.randomColorType()}
          this.categories.push(category)
        }
        this.inputVisibleCategory = false
        this.inputValueCategory = ''
      },
      getAllCategoriesAuth () {
        this.$api.getAllCategoriesAuth().then(data => {
          if (data.success) {
            let categories = data.data
            for (let key in categories) {
              let category = {
                name: categories[key].name + ' (' + categories[key].articleCount + ')',
                type: this.$util.randomColorType()
              }
              this.categories.push(category)
            }
          } else {
            this.$message({
              message: '获取分类失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      getAllTagsAuth () {
        this.$api.getAllTagsAuth().then(data => {
          if (data.success) {
            let tags = data.data
            for (let key in tags) {
              let tag = {
                name: tags[key].name, type: this.$util.randomColorType()
              }
              this.tags.push(tag)
            }
          } else {
            this.$message({
              message: '获取标签失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
    },
    created () {
      this.getAllCategoriesAuth()
      this.getAllTagsAuth()
    }
  }
</script>
<style>
  .tag-list .el-input .el-input__inner {
    height: 24px
  }

  @media screen and (max-width: 600px) {
    .el-message-box {
      width: 100%;
    }
  }
</style>

<style scoped>
  .el-tag {
    margin-left: 10px;
    margin-top: 10px;
  }

  .input-new-tag {
    width: 78px;
    margin-left: 10px;
    margin-top: 10px;
    height: 24px;
    line-height: 22px;
  }

  .button-new-tag {
    margin-left: 10px;
    margin-top: 10px;
    height: 24px;
    line-height: 22px;
    padding-top: 0;
    padding-bottom: 0
  }

  .input-new-category {
    width: 78px;
    margin-left: 10px;
    margin-top: 10px;
    height: 24px;
    line-height: 22px;
  }

  .button-new-category {
    margin-left: 10px;
    margin-top: 10px;
    height: 24px;
    line-height: 22px;
    padding-top: 0;
    padding-bottom: 0
  }

</style>
