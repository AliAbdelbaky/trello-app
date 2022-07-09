<template>
  <div class="board-page">
    <TasksCards :columns="BoardModule.board.columns" />
    <div @click.self="closeTask" class="task-bg" v-if="isTaskOpen">
      <router-view />
    </div>
  </div>
</template>

<script>
import TasksCards from "@/components/TasksCards.vue";
import { ref } from "@vue/reactivity";
import { mapState } from "vuex";
export default {
  name: "BoardView",
  setup() {
    const title = ref("Board Vue");
    return { title };
  },
  components: { TasksCards },
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
