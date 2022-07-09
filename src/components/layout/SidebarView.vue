<template lang="">
  <div class="sidebar">
    <div class="img_container">
      <img src="@/assets/logo.png" />
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
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const navLinks = ref([
      {
        name: "board",
        title: "board",
        icon: "clipboard",
      },
      {
        name: "about",
        title: "about",
        icon: "",
      },
    ]);
    return { navLinks };
  },
};
</script>
