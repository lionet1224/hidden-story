<template>
  <div class="p-3">
    <div class="d-flex justify-content-between">
      <h2>第一届世界技能大赛网站设计与开发项目AB模块123123</h2>
      
      <router-link to="/project/update/123">
        <el-button class="ml-1">
          修改资料
        </el-button>
      </router-link>
    </div>
    <p class="mt-1">
      <span class="text-secondary">项目发起者</span>
      Lionet

      <span class="text-secondary ml-1">创建于</span> 
      <el-tooltip content="2020-12-23 12:33" placement='bottom'><span>3天前</span></el-tooltip>

      <span class="text-secondary ml-1">更新于</span>
      <el-tooltip content="2020-12-23 12:33" placement='bottom'><span>3天前</span></el-tooltip>
    </p>

    <p class="mt-1 project-describe">
      第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
      第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
      第一届比赛中的AB模块为游戏开发，A为上午部分的游戏界面开发，B为下午部分的游戏功能开发。
    </p>

    <div class="mt-2 error-idea-data">
      <el-row :gutter="20" class="gutter">
        <el-col :span="8">
          <div class="data-show d-flex align-items-center">
            <div class="icon fill-success">
              <svg-icon icon-class="version"></svg-icon>
            </div>
            <div class="describe ml-1">
              <h3>上传版本数</h3>
              <p class="mt-05">
                <span class="text-secondary">总计</span> 20
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="data-show d-flex align-items-center">
            <div class="icon fill-danger">
              <svg-icon icon-class="error"></svg-icon>
            </div>
            <div class="describe ml-1">
              <h3>错误统计</h3>
              <p class="mt-05">
                <span class="text-secondary">总计</span> 20
                <span class="text-secondary ml-1">已修正</span> 14
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="data-show d-flex align-items-center">
            <div class="icon fill-warning">
              <svg-icon icon-class="idea"></svg-icon>
            </div>
            <div class="describe ml-1">
              <h3>优化点统计</h3>
              <p class="mt-05">
                <span class="text-secondary">总计</span> 20
                <span class="text-secondary ml-1">已完成</span> 14
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-row :gutter="20" class="gutter mt-2"> 
      <el-col :span="12">
        <div class="d-flex justify-content-between align-items-center">
          <h3>项目资源下载</h3>

          <el-button type="info" class="more">
            <svg-icon icon-class="more"></svg-icon>
          </el-button>
        </div>

        <div class="mt-1 assets-download">
          <ul>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
            <li class="d-flex justify-content-between">
              <a href="#">赛题文档.docx</a>
              <span class="text-secondary">32.3M</span>  
            </li>
          </ul>  
        </div>
      </el-col>
      <el-col :span="12">
        <div class="d-flex justify-content-between align-items-center">
          <h3>项目贡献者 (3)</h3>

          <el-button type="info" class="more">
            <svg-icon icon-class="more"></svg-icon>
          </el-button>
        </div>

        <div class="mt-1 project-avatars">
          <el-avatar :src="avatar"></el-avatar>
        </div>
      </el-col>
    </el-row>

    <h3 class="mt-2">动态</h3>

    <div class="mt-1">
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
import avatar from '@/assets/avatar.jpg'

export default {
  data(){
    return {
      avatar
    }
  }
}
</script>

<style lang="scss" scoped>
.error-idea-data{
  h3{
    font-size: 16px;
  }

  svg{
    font-size: 24px;
  }
}

::v-deep .el-avatar{
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 10px rgba(46, 46, 46, 0.2);
  cursor: pointer;
  transition: .3s;

  &:hover{
    filter: brightness(.9);
  }
}

.project-describe{
  color: #333;
  line-height: 1.6;
  text-indent: 32px;
  text-align: justify;
}

.assets-download{
  a{
    color: #666;

    &:hover{
      color: #409EFF !important;
    }
  }

  li{
    list-style: none;
    margin-bottom: .2rem;
  }
}
</style>