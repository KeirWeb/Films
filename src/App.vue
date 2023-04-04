<template>
  <div class="app">
    <div class="container">
      <component :is="layout">
        <router-view />
      </component>
    </div>
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
a {
  text-decoration: none;
}
/* .img {
  overflow-clip-margin: content-box;
  overflow: clip;
  width: 200px;
  aspect-ratio: auto 200 / 300;
  height: 300px;
} */
.app {
  background-image: url(@/assets/bodyBg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  color: white;
  font-family: "Open Sans", sans-serif;
}
.container {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
