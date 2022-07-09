<template>
  <div class="task-view">
    <div class="task">
      <span class="title">
        {{ task?.name }}
      </span>
      <p class="desc text-small" v-if="task.description">
        {{ task?.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>
