<template>
  <div class="home">
    <layout-base>
      <el-row>
        <el-col class="p-3 hidden-scroll-bar scroll4" :span="16">
          <data-show></data-show>
        </el-col>
        <el-col class="left-box scroll4" :span="8">
          <project-show></project-show>
        </el-col>
      </el-row>
    </layout-base>
  </div>
</template>

<script>
// @ is an alias to /src
import layoutBase from '@/components/layout/base'
import dataShow from './components/dataShow'
import projectShow from './components/projectShow'

export default {
  name: 'Home',
  components: {
    layoutBase,
    dataShow,
    projectShow
  },
  setup(){
  }
}
</script>

<style lang="scss" scoped>
</style>