<template>
  <input class="nav-serch__input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.nav-serch__input {
  padding: 4px 7px;
  border: none;
  outline: none;
  color: white;
  border-radius: 3px;
  background-color: #222222;
}
</style>
