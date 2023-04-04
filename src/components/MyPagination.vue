<template>
  <div class="pagination">
    <div
      class="pagination__item"
      v-for="page in pages"
      :key="page"
      :class="{
        'current-page': pageNumber === page,
      }"
      @click="changePage(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: 10,
      pageNumber: 1,
    };
  },
  methods: {
    changePage(page) {
      this.pageNumber = page;
      this.$emit("pagination", page);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  flex-direction: row;

  column-gap: 7px;
  margin: 0 auto;
  margin-top: 20px;

  &__item {
    border: 1px solid #8d8686;
    background-color: #3a3636;
    padding: 5px;
    cursor: pointer;
  }
}
.current-page {
  border: 2px solid #d3c8c8;
}
</style>
