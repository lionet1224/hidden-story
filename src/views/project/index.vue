<template>
  <div class="project">
    <layout-base>
      <div class="h-100 scroll4">
        <router-view></router-view>
      </div>
    </layout-base>
  </div>
</template>

<script>
import layoutBase from '@/components/layout/base'

export default {
  components: {
    layoutBase,
  },
}
</script>

<style lang="scss" scoped>
.h-100{
}
</style>