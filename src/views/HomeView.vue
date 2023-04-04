<template>
  <body class="body">
    <my-filter @filter="filter" />

    <my-cards :listFilms="listFilms" />
    <my-pagination @pagination="pagination" />
  </body>
  <footer class="footer"></footer>
</template>

<script>
import axios from "axios";
import MyCards from "@/components/MyCards.vue";
import MyFilter from "@/components/MyFilter.vue";
import MyPagination from "@/components/MyPagination.vue";

export default {
  components: {
    MyCards,
    MyFilter,
    MyPagination,
  },
  data() {
    return {
      serchMovies: "",
      topFilms: [],
      serchFilms: [],

      listFilms: [],
    };
  },

  methods: {
    pagination(page) {
      console.log("test");

      axios
        .get(
          "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=" +
            page,
          {
            method: "GET",
            headers: { "X-API-KEY": "cd590928-7379-47a9-a2c1-e1be008d72f1" },
          }
        )
        .then((response) => (this.listFilms = response.data.films))
        .then((response) => console.log(response));
    },
    filter(filterFilms) {
      console.log(filterFilms);
      this.listFilms = filterFilms;
    },
    serch() {
      axios
        .get(
          "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=" +
            this.serchMovies +
            "&page=1",
          {
            method: "GET",
            headers: { "X-API-KEY": "cd590928-7379-47a9-a2c1-e1be008d72f1" },
          }
        )
        .then((response) => (this.listFilms = response.data.films));
    },
  },
  created() {
    axios
      .get(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
        {
          method: "GET",
          headers: { "X-API-KEY": "cd590928-7379-47a9-a2c1-e1be008d72f1" },
        }
      )
      .then((response) => (this.listFilms = response.data.films));
  },
};
</script>
<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer {
}
</style>
