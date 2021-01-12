<template>
  <el-row>
    <el-col class="hidden-scroll-bar scroll4" :span="16">
      <version-detail></version-detail>
    </el-col>
    <el-col class="left-box scroll4" :span="8">
      <dynamic-list></dynamic-list>
    </el-col>
  </el-row>
</template>

<script>
import versionDetail from './components/versionDetail'
import dynamicList from './components/dynamicList'

export default {
  components: {
    versionDetail,
    dynamicList
  }
}
</script>

<style>

</style>