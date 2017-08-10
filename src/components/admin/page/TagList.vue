<template>
  <div style="margin-top: -30px">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
        <el-card class="box-card">
          <div slot="header">
            <span style="line-height: 36px;">标签列表</span>
          </div>
          <div class="tag-list">
            <el-tag :key="tag.name"
                    v-for="tag in dynamicTags"
                    :closable="true"
                    :close-transition="false"
                    :type="dynamicTags.type"
                    @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input class="input-new-tag"
                      v-if="inputVisible"
                      v-model="inputValue"
                      ref="saveTagInput"
                      size="mini"
                      @keyup.enter.native="handleInputConfirm"
                      @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+New Tag</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
        <el-card class="box-card">
          <div slot="header">
            <span style="line-height: 36px;">分类列表</span>
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
        dynamicTags: [
          {name: '标签一', type: ''},
          {name: '标签二', type: 'gray'},
          {name: '标签三', type: 'primary'},
          {name: '标签四', type: 'success'},
          {name: '标签五', type: 'warning'},
          {name: '标签六', type: 'danger'}],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose (tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },

      showInput () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>
<style>
  .tag-list .el-input .el-input__inner {
    height: 24px
  }
</style>

<style scoped>
  .el-tag {
    margin-left: 10px;
  }

  .input-new-tag {
    width: 78px;
    margin-left: 10px;
    height: 24px;
    line-height: 22px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 24px;
    line-height: 22px;
    padding-top: 0;
    padding-bottom: 0
  }
</style>
