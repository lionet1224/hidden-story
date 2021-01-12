<template>
  <layout-base>
    <div class="p-3">
      <h2>资源管理</h2>

      <div class="mt-1">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="上传日期">
            <template #default="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="用户">
            <template #default="scope">
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            label="文件">
            <template #default="scope">
              第一届文档
            </template>
          </el-table-column>
          <el-table-column
            label="大小">
            <template #default="scope">
              32MB
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">下载</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </layout-base>
</template>

<script>
import layoutBase from '@/components/layout/base';
import { reactive } from 'vue';

export default {
  components: {
    layoutBase
  },
  setup(){
    return {
      tableData: reactive([{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }])
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style>

</style>