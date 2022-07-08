<template>
  <div>
    <button type="button" class="button" :class="typeClasses">
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
  computed: {
    typeClasses() {
      switch (this.type) {
        case "danger":
          return "bg-red";
        default:
          return "bg-teal";
      }
    },
  },
};
</script>
<style></style>
