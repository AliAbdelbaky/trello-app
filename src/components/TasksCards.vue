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
  },
};
</script>
