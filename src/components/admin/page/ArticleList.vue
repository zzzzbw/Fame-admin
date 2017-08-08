<template>
  <el-table :data="tableData">
    <el-table-column prop="id" label="id" width="60"></el-table-column>
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="publish" label="发布日期"></el-table-column>
    <el-table-column prop="category" label="分类"></el-table-column>
    <el-table-column prop="status" label="状态"></el-table-column>
    <el-table-column label="操作" width="140">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.row.id)">编辑
        </el-button>
        <el-button
          size="small"
          type="danger">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        tableData: [{
          id: '1',
          title: '文章1',
          publish: '2017-05-02',
          category: '默认分类',
          status: '已发布'
        }, {
          id: '2',
          title: '文章2',
          publish: '2016-07-04',
          category: 'java',
          status: '已发布'
        }, {
          id: '3',
          title: '文章3',
          publish: '2017-03-04',
          category: '默认分类',
          status: '草稿'
        }]
      }
    },
    methods: {
      handleEdit (id) {
        console.log('id:' + id)
        this.$router.push('/admin/article/publish/' + id)
      }
    }
  }
</script>

<style scoped>

</style>
