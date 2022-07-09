<template>
  <div class="column-container">
    <div class="column" v-for="(item, $itemIndex) in columns" :key="$itemIndex">
      <div class="card">
        <div class="card-header">{{ item.name }}</div>
        <div class="card-body">
          <div class="tasks-list">
            <div
              class="task"
              v-for="(task, $taskIndex) in item.tasks"
              :key="$taskIndex"
              @click="goToTask(task.id)"
            >
              <span class="title">
                {{ task.name }}
              </span>
              <p class="desc text-small" v-if="task.description">
                {{ task.description }}
              </p>
            </div>
          </div>
        </div>
        <input
          type="text"
          class="add_task_input"
          placeholder="+ Enter new task"
          @keyup.enter="createTask($event, item.tasks)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["columns"],
  methods: {
    goToTask(id) {
      this.$router.push({ name: "task", params: { id: id } });
    },
    createTask(e, tasks) {
      if (!e.target.value == "") {
        this.$store.commit("BoardModule/ADD_TASK", {
          tasks,
          name: e.target.value,
        });
      } else {
        alert("can not add empty task :)");
      }
      e.target.value = "";
    },
  },
};
</script>
