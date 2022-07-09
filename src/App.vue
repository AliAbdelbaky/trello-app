<template>
  <layout-view-vue />
</template>
<script>
import LayoutViewVue from "./views/LayoutView.vue";
export default {
  components: {
    LayoutViewVue,
  },
  mounted() {
    this.$store.dispatch("ThemeModule/initTheme");
    this.$store.dispatch("SidebarModule/initSidebarTheme");
  },
};
</script>
<style lang="scss">
// @import "@/assets/sass/main.sass";
</style>
