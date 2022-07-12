<template>
  <div
    class="wrapper"
    :class="[
      SidebarModule.isActive,
      SidebarModule.isPhoneClass,
      this.$route.name == 'login' ? 'full-w' : '',
    ]"
  >
    <nav class="toolbar" v-if="this.$route.name !== 'login'">
      <div class="content">
        <div class="tooltips">
          <div class="user-info">
            <div class="user-info-img-container">
              <img :src="UserModule.user.img" :alt="UserModule.user.name" />
            </div>
            <div class="user-info-desc">
              <div class="user-name">{{ UserModule.user.name }}</div>
              <div class="user-title">{{ UserModule.user.title }}</div>
            </div>
          </div>
          <div class="theme-toggler" @click="toggleTheme">
            <BaseIcon name="sun" v-if="ThemeModule.lightTheme" />
            <BaseIcon name="moon" v-else />
          </div>
          <div class="logout-button">
            <button @click="logout">
              <BaseIcon name="power" width="100%" height="100%" />
            </button>
          </div>
        </div>
        <button class="sidebar-toggler" @click="initSidebarTheme">
          <BaseIcon name="align-justify" />
        </button>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["ThemeModule", "SidebarModule", "UserModule"]),
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("ThemeModule/toggleTheme");
    },
    initSidebarTheme() {
      this.$store.dispatch("SidebarModule/toggleSidebar");
    },
    logout() {
      this.$store.dispatch("UserModule/logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
