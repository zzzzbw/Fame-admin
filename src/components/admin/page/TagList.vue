<template>
  <div style="margin-top: -30px">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
        <el-card class="box-card">
          <div slot="header">
            <span style="line-height: 36px;">标签列表</span>
          </div>
          <ul class="meta-list">
            <li v-for="tag in tags">
              <span class="meta" @click="clickTag(tag.id,tag.name)">{{tag.name}}</span>
              <span style="float: right;clear: both">
                <span class="meta-count">{{tag.count}}</span>
                <el-button type="danger" size="small">删除</el-button>
              </span>
            </li>
          </ul>
          <el-input placeholder="请输入标签名称" class="meta-input" v-model.trim="tagName"></el-input>
          <el-button type="success" style="float: right;clear: both" @click="saveOrUpdateTag">保存标签</el-button>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" style="margin-top: 30px">
        <el-card class="box-card">
          <div slot="header">
            <span style="line-height: 36px;">分类列表</span>
          </div>
          <ul class="meta-list">
            <li v-for="category in categories">
              <span class="meta" @click="clickCategory(category.id,category.name)">{{category.name}}</span>
              <span style="float: right;clear: both">
                <span class="meta-count">{{category.count}}</span>
                <el-button type="danger" size="small">删除</el-button>
              </span>
            </li>
          </ul>
          <el-input placeholder="请输入分类名称" class="meta-input" v-model.trim="categoryName"></el-input>
          <el-button type="success" style="float: right;clear: both">保存分类</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        tags: [],
        categories: [],
        tagId: '',
        tagName: '',
        categoryId: '',
        categoryName: ''
      }
    },
    methods: {
      getTags () {
        this.$api.getAllTagsAuth().then(data => {
          if (data.success) {
            for (let key in data.data) {
              this.tags.push(data.data[key])
            }
          } else {
            this.$message({
              message: '获取tag失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      getCategories () {
        this.$api.getAllCategoriesAuth().then(data => {
          if (data.success) {
            for (let key in data.data) {
              this.categories.push(data.data[key])
            }
          } else {
            this.$message({
              message: '获取category失败,' + data.msg,
              type: 'error'
            })
          }
        })
      },
      clickTag (tagId, tagName) {
        this.tagId = tagId
        this.tagName = tagName
      },
      clickCategory (categoryId, categoryName) {
        this.categoryId = categoryId
        this.categoryName = categoryName
      },
      saveOrUpdateTag () {
        console.log(this.tagName + this.tagId)
      }
    },
    created () {
      this.getTags()
      this.getCategories()
    }
  }
</script>

<style scoped>

  .meta-list {
    margin: 0 0 30px 0;
    padding: 0;
    list-style: none;
  }

  .meta-list li {
    line-height: 2.4rem;
  }

  .meta-list .meta {
    box-shadow: 0 0 3px rgba(14, 14, 14, 0.3);
    margin: .4rem;
    max-width: 350px;
    padding: .4rem .5rem;
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    border: 1px solid #ffd740;
    background-color: #ffd740;
  }

  .meta-list .meta:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: all .2s;
  }

  .meta-list .meta:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }

  .meta-list .meta-count {
    display: inline-block;
    min-width: 10px;
    line-height: 12px;
    padding: 4px 7px;
    margin-right: 20px;
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    background-color: #F36A5A;
    border-radius: 10px;
  }

  .meta-input {
    width: 200px;
    margin-left: 5px;
    display: inline-block;
  }


</style>
