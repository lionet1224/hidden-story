<template>
  <el-row>
    <el-col class="hidden-scroll-bar scroll4" :span="16">
      <project-detail></project-detail>
    </el-col>
    <el-col class="left-box scroll4" :span="8">
      <version-list></version-list>
    </el-col>
  </el-row>
</template>

<script>
import ProjectDetail from './components/projectDetail.vue'
import VersionList from './components/versionList'

export default {
  components: {
    ProjectDetail,
    VersionList
  }
}
</script>

<style lang="scss" scoped>

</style>