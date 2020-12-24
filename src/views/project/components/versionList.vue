<template>
  <div class="p-3">
    <h2>版本总览 
      <router-link to="/project/detail/123/version/create"><svg-icon icon-class="add"></svg-icon></router-link>
    </h2>

    <div class="version-list mt-2">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12 10:32" placement="top">
          <div class="data-show">
            <div class="d-flex justify-content-between">
              <h3><router-link to="/project/detail/123/123">0.1.0</router-link></h3>

              <span class="download">
                <svg-icon icon-class="download"></svg-icon>
              </span>
            </div>
            <p class="text-secondary mt-05">平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化</p>
            <p class="mt-05">
              <span class="fill-danger">
                <svg-icon icon-class="error"></svg-icon>
              </span>
              <span class="text-secondary ml-02">错误</span> 30/30

              <span class="fill-success ml-05">
                <svg-icon icon-class="idea"></svg-icon>
              </span>
              <span class="text-secondary">优化点</span> 10/20
            </p>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12 10:32" placement="top">
          <div class="data-show">
            <div class="d-flex justify-content-between">
              <h3><router-link to="/project/detail/123/123">0.1.0</router-link></h3>

              <span class="download">
                <svg-icon icon-class="download"></svg-icon>
              </span>
            </div>
            <p class="text-secondary mt-05">平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化</p>
            <p class="mt-05">
              <span class="fill-danger">
                <svg-icon icon-class="error"></svg-icon>
              </span>
              <span class="text-secondary ml-02">错误</span> 30/30

              <span class="fill-success ml-05">
                <svg-icon icon-class="idea"></svg-icon>
              </span>
              <span class="text-secondary">优化点</span> 10/20
            </p>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12 10:32" placement="top">
          <div class="data-show">
            <div class="d-flex justify-content-between">
              <h3><router-link to="/project/detail/123/123">0.1.0</router-link></h3>

              <span class="download">
                <svg-icon icon-class="download"></svg-icon>
              </span>
            </div>
            <p class="text-secondary mt-05">平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化</p>
            <p class="mt-05">
              <span class="fill-danger">
                <svg-icon icon-class="error"></svg-icon>
              </span>
              <span class="text-secondary ml-02">错误</span> 30/30

              <span class="fill-success ml-05">
                <svg-icon icon-class="idea"></svg-icon>
              </span>
              <span class="text-secondary">优化点</span> 10/20
            </p>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12 10:32" placement="top">
          <div class="data-show">
            <div class="d-flex justify-content-between">
              <h3><router-link to="/project/detail/123/123">0.1.0</router-link></h3>

              <span class="download">
                <svg-icon icon-class="download"></svg-icon>
              </span>
            </div>
            <p class="text-secondary mt-05">平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化平常训练，代码优化</p>
            <p class="mt-05">
              <span class="fill-danger">
                <svg-icon icon-class="error"></svg-icon>
              </span>
              <span class="text-secondary ml-02">错误</span> 30/30

              <span class="fill-success ml-05">
                <svg-icon icon-class="idea"></svg-icon>
              </span>
              <span class="text-secondary">优化点</span> 10/20
            </p>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.data-show{
}

::v-deep .el-timeline-item__node{
  background-color: #409EFF;
}

.download{
  cursor: pointer;

  &:hover svg{
    fill: #409EFF;
  }
}
</style>