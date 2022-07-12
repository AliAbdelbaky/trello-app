<template>
  <ToolbarVue />
  <SidebarVue v-if="this.$route.name !== 'login'" />
  <transition>
    <BaseLoading />
  </transition>
</template>
<script>
import ToolbarVue from "@/components/layout/ToolbarView.vue";
import SidebarVue from "@/components/layout/SidebarView.vue";
export default {
  components: {
    ToolbarVue,
    SidebarVue,
  },
};
</script>
<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
