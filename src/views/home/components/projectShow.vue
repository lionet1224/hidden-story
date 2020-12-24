<template>
  <div class="project-show">
    <el-input placeholder="搜索项目" class="search">
      <template #suffix>
        <svg-icon icon-class="search"></svg-icon>
      </template>
    </el-input>

    <div class="d-flex justify-content-between align-items-center mt-2">
      <h2>首要项目</h2>

      <a class="update text-secondary" href="#">修改</a>
    </div>

    <div class="project-items mt-1">
      <div class="item data-show">
        <h3 class="text-hidden"><router-link to="/">第一届世界技能大赛网站设计与开发项目AB模块123123</router-link></h3>
        <p class="mt-1 text-secondary project-describe text-hidden-3">
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
        </p>
        <p class="mt-1 text-secondary">
          <i class="point"></i> 游戏
          <svg-icon class="ml-1" icon-class="version"></svg-icon> 10
        </p>
      </div>
      <div class="item data-show">
        <h3 class="text-hidden"><router-link to="/">第一届世界技能大赛网站设计与开发项目AB模块123123</router-link></h3>
        <p class="mt-1 text-secondary project-describe text-hidden-3">
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
        </p>
        <p class="mt-1 text-secondary">
          <i class="point"></i> 游戏
          <svg-icon class="ml-1" icon-class="version"></svg-icon> 10
        </p>
      </div>
      <div class="item data-show">
        <h3 class="text-hidden"><router-link to="/">第一届世界技能大赛网站设计与开发项目AB模块123123</router-link></h3>
        <p class="mt-1 text-secondary project-describe text-hidden-3">
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
          第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
        </p>
        <p class="mt-1 text-secondary">
          <i class="point"></i> 游戏
          <svg-icon class="ml-1" icon-class="version"></svg-icon> 10
        </p>
      </div>
    </div>

    <h2 class="mt-2">动态</h2>

    <div class="dynamic mt-1">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <div class="data-show">
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <div class="data-show">
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <div class="data-show">
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <div class="data-show">
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.project-show{
  padding: 50px;

  .search svg{
    font-size: 20px;
    cursor: pointer;
    transition: .4s;

    &:hover{
      fill: #409EFF;
    }
  }

  .search{
    font-size: 18px;
  }

  .project-items .item{
    h3{
      color: #333;
    }

    i{
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: red;
    }

    svg{
      fill: rgb(103, 194, 58);
    }
  }

  .update{
    text-decoration: none;
  }
}

::v-deep input{
  height: 50px;
}

::v-deep .el-input__suffix{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
}
</style>