<!-- <template>
  <div class="container">
    <body class="body">
      <div class="filter"></div>
      <my-card :listFilms="listFilms" />
    </body>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import axios from "axios";
import MyCard from "@/components/MyCard.vue";

export default {
  components: {
    MyCard,
  },
  data() {
    return {
      serchMovies: "",
      topFilms: [],
      serchFilms: [],
      filterFilms: [],
      listFilms: [],
    };
  },
  methods: {
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
<style lang="scss">
a {
  text-decoration: none;
}
img {
  width: 200px;
  aspect-ratio: auto 200 / 300;
  height: 300px;
}
.btn {
  border: none;
}
.container {
  padding: 20px;
  background-image: url(@/assets/bodyBg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 1000px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(8, 8, 8);
  padding: 5px 10px;
}
.title {
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 25px;
  &__items {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }

  &__item {
    list-style-type: none;
    border: none;
    background-color: inherit;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      color: rgb(167, 158, 158);
    }
  }

  &__serch {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
}
.nav-serch {
  &__input {
    padding: 4px 7px;
    border: none;
    outline: none;
    color: white;
    border-radius: 3px;
    background-color: #222222;
  }

  &__btn {
    color: white;
    background-color: #222222;
    padding: 7px 10px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #cec7c7;
    }
  }
}
.body {
}
.filter {
  height: 100px;
}

.footer {
}
</style> -->
<template>
  <div>Hello</div>
</template>

<script>
export default {};
</script>

<style></style>
