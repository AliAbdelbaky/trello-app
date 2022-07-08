<template>
  <div class="board">
    <base-button>Hello From Global base button</base-button>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "BoardView",
  setup() {
    const title = ref("Board Vue");
    return { title };
  },
  components: {},
};
</script>
