<template>
  <div class="wrapper">
    <nav class="toolbar">
      <div class="content">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
