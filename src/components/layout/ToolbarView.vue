<template>
  <div class="wrapper">
    <nav class="toolbar">
      <div class="content">
        <div class="user-info">
          <div class="user-info-img-container">
            <img src="@/assets/userimg.jpg" alt="" />
          </div>
          <div class="user-info-desc">
            <div class="user-name">Ali Abdelbaky</div>
            <div class="user-title">title</div>
          </div>
        </div>
        <div class="theme-toggler" @click="toggleTheme">
          <BaseIcon name="sun" v-if="ThemeModule.lightTheme" />
          <BaseIcon name="moon" v-else />
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["ThemeModule"]),
  methods: {
    toggleTheme() {
      this.$store.dispatch('ThemeModule/toggleTheme')
    },
  },
};
</script>
<style></style>
