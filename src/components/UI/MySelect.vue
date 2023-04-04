<template>
  <select class="select" name="" id="">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "my-select",
};
</script>

<style>
.select {
  padding: 4px 7px;
  border: none;
  outline: none;
  color: white;
  border-radius: 3px;
  background-color: #222222;
}
</style>
