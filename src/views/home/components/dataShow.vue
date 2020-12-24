<template>
  <div class="d-flex">
    <div class="avatar">
      <el-avatar shape="square" :size="240" fit="cover" :src="avatar"></el-avatar>
    </div>
    <div class="info">
      <el-tag :type="levelType">普通用户</el-tag>
      <h2 class="mt-1">Lionet</h2>
      <p class="mt-1">
        <span class="text-secondary">公司 </span> 无名
        <span class="text-secondary ml-1">职位 </span> 摸鱼大师
      </p>
      <p class="text-secondary mt-1 information">存储一些小作品的地方</p>

      <el-button round class="border-2 mt-1 btn-border-primary">修改个人信息</el-button>
    </div>
  </div>

  <el-row :gutter="20" class="mt-3 gutter">
    <el-col :span="12" :md="6">
      <div class="show-data d-flex align-items-center">
        <div class="icon fill-primary">
          <svg-icon icon-class="project"></svg-icon>
        </div>
        <div class="describe ml-1">
          <h3>项目</h3>
          <p>20</p>
        </div>
      </div>
    </el-col>
    <el-col :span="12" :md="6">
      <div class="show-data d-flex align-items-center">
        <div class="icon fill-success">
          <svg-icon icon-class="version"></svg-icon>
        </div>
        <div class="describe ml-1">
          <h3>提交次数</h3>
          <p>20</p>
        </div>
      </div>
    </el-col>
    <el-col :span="12" :md="6">
      <div class="show-data d-flex align-items-center">
        <div class="icon fill-danger">
          <svg-icon icon-class="error"></svg-icon>
        </div>
        <div class="describe ml-1">
          <h3>错误</h3>
          <p>20</p>
        </div>
      </div>
    </el-col>
    <el-col :span="12" :md="6">
      <div class="show-data d-flex align-items-center">
        <div class="icon fill-warning">
          <svg-icon icon-class="idea"></svg-icon>
        </div>
        <div class="describe ml-1">
          <h3>可优化点</h3>
          <p>20</p>
        </div>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="20" class="mt-3 gutter">
    <el-col :span="12">
      <div class="d-flex justify-content-between align-items-center">
        <h2>项目总览</h2>

        <el-button type="info" class="more">
          <svg-icon icon-class="more"></svg-icon>
        </el-button>
      </div>
      <p class="text-secondary">项目的错误数及优化点</p>
      
      <data-progress></data-progress>
    </el-col>
    <el-col :span="12">
      <div class="d-flex justify-content-between align-items-center">
        <h2>错误/优化点</h2>

        <el-button type="info" class="more">
          <svg-icon icon-class="more"></svg-icon>
        </el-button>
      </div>
      <p class="text-secondary">错误以及优化点的修正或完成情况</p>
      
      <data-line></data-line>
    </el-col>
  </el-row>
</template>

<script>
import avatar from '@/assets/avatar.jpg'
import dataProgress from './dataProgress'
import dataLine from '@/components/data/dataLine'

export default {
  components: {
    dataProgress,
    dataLine
  },
  computed: {
    levelType(level){
      return level === 'admin' ? '' : 'info'
    },
  },
  setup(){

    return {
      avatar
    }
  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
.el-avatar{
  background: transparent;
}

.info{
  margin-left: 2rem;
  flex: 0 0 1;

  .information{
    width: 100%;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.show-data{
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dedede;
  box-shadow: 0 0 10px rgba(131, 131, 131, 0.1);
  transition: .4s;

  &:hover{
    transform: scale(1.1);
  }

  .icon{
    margin-left: 5px;
  }

  h3{
    font-size: 16px;
  }

  p{
    font-size: 24px;
  }

  svg{
    fill: #888;
    font-size: 36px;
  }
}
</style>