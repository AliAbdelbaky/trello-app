<template lang="">
  <div
    class="sidebar"
    ref="sidebar"
    :class="[SidebarModule.isActive, SidebarModule.isPhoneClass]"
  >
    <div class="img_container">
      <img :src="UserModule.user.img" :alt="UserModule.user.name" />
      <hr/>
    </div>
    <ul class="nav-items">
      <li
        class="nav-link"
        v-for="(item, $itemIndex) in navLinks"
        :key="$itemIndex"
      >
        <router-link :to="{ name: `${item.name}` }">
          {{ item.title }}
          <BaseIcon width="70px" v-if="item.icon" :name="item.icon" />
          <BaseIcon width="70px" v-else name="users" />
        </router-link>
      </li>
    </ul>
    <div class="logout-button">
      <button @click="logout">
        logout
        <BaseIcon name="power" width="70px" />
      </button>
    </div>
  </div>
  <div
    class="sidebar-overlay"
    :class="
      SidebarModule.sidebarOpened && SidebarModule.isPhone ? 'active' : ''
    "
    @click="this.$store.dispatch('SidebarModule/toggleSidebar')"
  ></div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { mapState } from "vuex";
export default {
  setup() {
    const navLinks = ref([
      {
        name: "board",
        title: "board",
        icon: "clipboard",
      },
      {
        name: "setting",
        title: "setting",
        icon: "settings",
      },
    ]);
    return { navLinks };
  },
  computed: mapState(["SidebarModule", "UserModule"]),
  methods: {
    toggleSidebar() {
      const sidebar = this.$refs.sidebar;
      setTimeout(() => {
        if (!this.SidebarModule.isPhone) {
          sidebar.addEventListener("mouseenter", () => {
            this.$store.dispatch("SidebarModule/toggleSidebar");
          });
          sidebar.addEventListener("mouseleave", () => {
            this.$store.dispatch("SidebarModule/toggleSidebar");
          });
        } else {
          return false;
        }
      }, 1000);
    },
    logout() {
      this.$store.dispatch("UserModule/logout");
      this.$router.push({ name: "login" });
    },
  },
  mounted() {
    this.toggleSidebar();
  },
};
</script>
