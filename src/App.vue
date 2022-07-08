<template>
  <layout-view-vue />
  <router-view></router-view>
</template>
<script>
import LayoutViewVue from "./views/LayoutView.vue";
export default {
  components: {
    LayoutViewVue,
  },
};
</script>