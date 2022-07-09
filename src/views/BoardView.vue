<template>
  <div class="board-page">
    <div class="column-container">
      <div
        class="column"
        v-for="(item, $itemIndex) in BoardModule.board.columns"
        :key="$itemIndex"
      >
        <div class="card">
          <div class="card-header">{{ item.name }}</div>
          <div class="card-body">
            <div class="tasks-list">
              <div
                class="task"
                v-for="(task, $taskIndex) in item.tasks"
                :key="$taskIndex"
              >
                <span class="title">
                  {{task.name}}
                </span>
                <p class="desc text-small" v-if="task.description">
                  {{task.description}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { mapState } from "vuex";
export default {
  name: "BoardView",
  setup() {
    const title = ref("Board Vue");
    return { title };
  },
  components: {},
  computed: mapState(["BoardModule"]),
};
</script>
