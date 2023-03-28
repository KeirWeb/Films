<template>
  <div class="app">
    <component :is="layout" :filteredMovies="filteredMovies">
      <router-view />
    </component>
  </div>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
export default {
  methods: {
    filteredMovies() {
      console.log("test");
    },
  },
  computed: {
    // Sets components name based on current route's specified layout, defaults to
    // <layout-default></layout-default> component.
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
  components: {
    DefaultLayout,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  color: white;
  font-family: "Open Sans", sans-serif;
}
</style>
