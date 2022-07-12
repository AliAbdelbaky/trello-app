<template>
  <ToolbarVue />
  <SidebarVue v-if="this.$route.name !== 'login'" />
</template>
<script>
import ToolbarVue from '@/components/layout/ToolbarView.vue'
import SidebarVue from '@/components/layout/SidebarView.vue'
export default {
  components:{
    ToolbarVue,
    SidebarVue
  }
}
</script>
<style lang="">
  
</style>