<template>
  <div class="task-view">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("Tasks view");
    return { title };
  },
};
</script>
