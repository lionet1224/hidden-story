<template>
  <div class="p-3 scroll4">
    <h2>修改项目</h2>

    <el-form class="mt-2 form">
      <el-form-item label="项目名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="项目描述">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="资源上传">
        <br>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          drag
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">只能上传 zip/doc/docx/excel 文件，且不超过 500MB</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button round class="border-2 mt-1 btn-border-primary">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>

<style lang="scss" scoped>
.form{
  max-width: 500px;
}

.upload-demo{
  width: 100%;
}

::v-deep .el-form-item__label{
  font-size: 16px !important;
}
</style>