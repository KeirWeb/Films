<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scopde lang="scss">
.btn {
  color: white;
  border: none;
  background-color: #222222;
  padding: 7px 10px;
  border-radius: 3px;

  cursor: pointer;
  &:hover {
    background-color: #c0b6b6;
  }
}
</style>
