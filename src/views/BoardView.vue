<template>
  <div class="board-page">
    <BaordCards :columns="BoardModule.board.columns" />
    <div @click.self="closeTask" class="task-bg" v-if="isTaskOpen">
      <router-view />
    </div>
  </div>
</template>

<script>
import BaordCards from "@/components/board/BoardCards.vue";
import { ref } from "@vue/reactivity";
import { mapState } from "vuex";
export default {
  name: "BoardView",
  setup() {
    const title = ref("Board Vue");
    return { title };
  },
  components: { BaordCards },
  computed: {
    ...mapState(["BoardModule"]),
    isTaskOpen() {
      return this.$route.name === "task";
    },
  },
  methods: {
    closeTask() {
      this.$router.push({ name: "board" });
    },
  },
};
</script>
