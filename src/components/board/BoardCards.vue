<template>
  <div class="column-container">
    <div
      class="column"
      v-for="(column, $columnIndex) in columns"
      :key="$columnIndex"
      draggable="true"
      @drop="moveTaskOrColumn($event, column.tasks, $columnIndex)"
      @dragstart.self="pickupColumn($event, $columnIndex)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div class="card">
        <div class="card-header">{{ column.name }}</div>
        <div class="card-body">
          <ColumnTask
            :tasks="column.tasks"
            :columnIndex="$columnIndex"
            :columns="columns"
          />
        </div>
        <input
          type="text"
          class="add_task_input"
          placeholder="+ Enter new task"
          @keyup.enter="createTask($event, column.tasks)"
          @blur="createTask($event, column.tasks)"
        />
      </div>
    </div>
    <div class="column">
      <div class="card">
        <div class="card-header">
          <input
            type="text"
            class="add_column_input"
            v-model="columnName"
            placeholder="+ Enter new list"
            @keyup.enter="createColumn"
            @blur="createColumn"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ColumnTask from "./ColumnTask";
export default {
  props: ["columns"],
  components: {
    ColumnTask,
  },
  data() {
    return {
      columnName: "",
    };
  },
  methods: {
    createTask(e, tasks) {
      if (!e.target.value == "") {
        this.$store.commit("BoardModule/ADD_TASK", {
          tasks,
          name: e.target.value,
        });
      } else {
        return;
      }
      e.target.value = "";
    },
    createColumn() {
      if (!this.columnName == "") {
        this.$store.commit("BoardModule/ADD_COLUMN", this.columnName);
      } else {
        return;
      }
      this.columnName = "";
    },

    pickupColumn(e, columnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";

      e.dataTransfer.setData("from-column-index", columnIndex);
      e.dataTransfer.setData("type", "column");
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
    moveColumn(e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      this.$store.commit("BoardModule/MOVE_COLUMN", {
        fromColumnIndex,
        toColumnIndex,
      });
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
  },
};
</script>
