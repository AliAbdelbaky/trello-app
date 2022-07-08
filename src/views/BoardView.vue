<template>
  <div class="board">
    <base-button>Hello From Global base button</base-button>
    <h2>{{ title }}</h2>
    <button @click="add">adddddd</button>
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
  methods: {
    add() {
      this.$store.dispatch('BoardModule/addAction');
    },
  },
};
</script>
