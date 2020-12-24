<template>
  <layout-base>
    <div class="d-flex justify-content-center mt-4">
      <div class="contnet">
        <div class="number">
          404
        </div>
        <p class="text-secondary">你来到了一个异次元，快回去吧</p>
        <el-button class="mt-1" @click="back">回到上一页</el-button>
      </div>
    </div>
  </layout-base>
</template>

<script>
import layoutBase from '@/components/layout/base'

export default {
  components: {
    layoutBase
  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  },
  setup(){
  }
}
</script>

<style lang="scss" scoped>
</style>