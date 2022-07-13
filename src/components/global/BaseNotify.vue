<template>
  <div  class="notify-popup">
    <p>{{ type }} saved successfully ♥</p>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "data",
    },
  },
};
</script>
<style lang="css" scoped>
.notify-popup {
  position: fixed;
  bottom: 0;
  width: fit-content;
  background: rgb(var(--main-bg-color));
  padding: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
  border-radius: 5px;
}
.notify-popup button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.notify-popup button .icon-wrapper .icon {
  margin: 0rem 0rem 0rem 0.2rem !important;
}
.notify-popup p {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  margin: 0rem;
  font-size: 12px;
}
</style>
