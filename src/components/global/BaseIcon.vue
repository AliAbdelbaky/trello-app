<template>
  <div class="icon-wrapper">
    <div class="icon" v-html="svg"></div>
    <slot></slot>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  name: "BaseIcon",
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: "icon",
        width: this.width, // new prop
        height: this.height, // new prop
      });
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: var(--sec-font-color);
  font-size: 1rem;
  font-weight: 600;
  transition: all 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
  display: flex;
}
</style>
