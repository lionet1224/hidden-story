<template>
  <div class="home p-3">
    <div class="d-flex justify-content-between">
      <h2>项目总览 
        <router-link to="/project/create"><svg-icon icon-class="add"></svg-icon></router-link>
      </h2>

      <div class="search">
        <el-input placeholder="搜索项目">
          <template #suffix>
            <svg-icon icon-class="search"></svg-icon>
          </template>
        </el-input>
      </div>
    </div>

    <el-row :gutter="20" class="mt-2 gutter">
      <el-col :span="8">
        <div class="data-show">
          <h3 class="text-hidden"><router-link to="/project/detail/123">第一届世界技能大赛网站设计与开发项目AB模块123123</router-link></h3>
          <p class="mt-1 text-secondary project-describe text-hidden-3">
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          </p>
          <p class="mt-1 text-secondary">
            <i class="point"></i> 游戏
            <span class="fill-success">
              <svg-icon class="ml-1 " icon-class="version"></svg-icon> 10
            </span>
            <span class="fill-danger">
              <svg-icon class="ml-1 " icon-class="error"></svg-icon> 10
            </span>
            <span class="fill-warning">
              <svg-icon class="ml-1 " icon-class="idea"></svg-icon> 10
            </span>
          </p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="data-show">
          <h3 class="text-hidden"><router-link to="/project/detail/123">第一届世界技能大赛网站设计与开发项目AB模块123123</router-link></h3>
          <p class="mt-1 text-secondary project-describe text-hidden-3">
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          </p>
          <p class="mt-1 text-secondary">
            <i class="point"></i> 游戏
            <span class="fill-success">
              <svg-icon class="ml-1 " icon-class="version"></svg-icon> 10
            </span>
            <span class="fill-danger">
              <svg-icon class="ml-1 " icon-class="error"></svg-icon> 10
            </span>
            <span class="fill-warning">
              <svg-icon class="ml-1 " icon-class="idea"></svg-icon> 10
            </span>
          </p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="data-show">
          <h3 class="text-hidden"><router-link to="/project/detail/123">第一届世界技能大赛网站设计与开发项目AB模块123123</router-link></h3>
          <p class="mt-1 text-secondary project-describe text-hidden-3">
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          </p>
          <p class="mt-1 text-secondary">
            <i class="point"></i> 游戏
            <span class="fill-success">
              <svg-icon class="ml-1 " icon-class="version"></svg-icon> 10
            </span>
            <span class="fill-danger">
              <svg-icon class="ml-1 " icon-class="error"></svg-icon> 10
            </span>
            <span class="fill-warning">
              <svg-icon class="ml-1 " icon-class="idea"></svg-icon> 10
            </span>
          </p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="data-show">
          <h3 class="text-hidden"><router-link to="/project/detail/123">第一届世界技能大赛网站设计与开发项目AB模块123123</router-link></h3>
          <p class="mt-1 text-secondary project-describe text-hidden-3">
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
            第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          </p>
          <p class="mt-1 text-secondary">
            <i class="point"></i> 游戏
            <span class="fill-success">
              <svg-icon class="ml-1 " icon-class="version"></svg-icon> 10
            </span>
            <span class="fill-danger">
              <svg-icon class="ml-1 " icon-class="error"></svg-icon> 10
            </span>
            <span class="fill-warning">
              <svg-icon class="ml-1 " icon-class="idea"></svg-icon> 10
            </span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.point{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
}

h2{
  svg{
    cursor: pointer;
  }

  svg:hover{
    fill: #409EFF;
  }
}

.search svg{
  font-size: 20px;
  cursor: pointer;
  transition: .4s;

  &:hover{
    fill: #409EFF;
  }
}

::v-deep .el-input__suffix{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
}
</style>