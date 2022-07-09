<template>
  <div class="task-view">
    <div class="task">
      <input
        class="title"
        type="text"
        :value="task?.name"
        @change="updateTask($event, 'name')"
      />
      <textarea
        class="desc"
        :value="task?.description"
        cols="30"
        rows="10"
        placeholder="+ Enter description"
        @change="updateTask($event, 'description')"
      ></textarea>
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
  methods: {
    updateTask(e, key) {
      this.$store.commit('BoardModule/UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value,
      });
    },
  },
};
</script>
<style>
input,
textarea {
  border: none;
  outline: none;
  background: transparent;
  margin-bottom: 0.3rem;
}
</style>
