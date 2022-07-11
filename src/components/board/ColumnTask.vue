<template>
  <div class="tasks-list">
    <div
      class="task"
      v-for="(task, $taskIndex) in tasks"
      :key="$taskIndex"
      draggable="true"
      @dragstart="pickupTask($event, $taskIndex, columnIndex)"
      @dragover.prevent
      @dragenter.prevent
      @drop.stop="moveTaskOrColumn($event, tasks, columnIndex, $taskIndex)"
    >
      <div class="wraaper" @click="goToTask(task.id)">
        <span class="title"> {{ $taskIndex + 1 }} {{ task.name }} </span>
        <p class="desc text-small" v-if="task.description">
          {{ task.description }}
        </p>
      </div>
      <div class="delete-task" @click="deleteTask($taskIndex, columnIndex)">
        <BaseIcon name="trash-2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tasks: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: [String, Number],
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goToTask(id) {
      this.$router.push({ name: "task", params: { id: id } });
    },
    deleteTask(taskIndex, columnIndex) {
      this.$router.push({ name: "board" });
      this.$store.commit("BoardModule/REMOVE_TASK", {
        taskIndex,
        columnIndex,
        columns: this.columns,
      });
    },
    moveTaskOrColumn(e, toTasks, toColumnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData("type");
      if (type === "task") {
        this.moveTask(
          e,
          toTasks,
          toTaskIndex !== undefined ? toTaskIndex : toTasks.length
        );
      } else {
        this.moveColumn(e, toColumnIndex);
      }
    },
    moveTask(e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      const fromTasks = this.columns[fromColumnIndex].tasks;
      const taskIndex = e.dataTransfer.getData("task-index");
      this.$store.commit("BoardModule/MOVE_TASK", {
        fromTasks,
        toTaskIndex,
        toTasks,
        taskIndex,
      });
    },
    moveColumn(e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      this.$store.commit("BoardModule/MOVE_COLUMN", {
        fromColumnIndex,
        toColumnIndex,
      });
    },
    pickupTask(e, taskIndex, fromColumnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("task-index", taskIndex);
      e.dataTransfer.setData("from-column-index", fromColumnIndex);
      e.dataTransfer.setData("type", "task");
    },
  },
};
</script>
