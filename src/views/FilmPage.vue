<template>
  <div class="movies">
    <div class="movies__item">
      <h3 class="item__title">{{ film.nameRu }}</h3>
      <div class="item__body">
        <div class="item__poster">
          <img :src="film.posterUrlPreview" alt="img" />
          <span class="rating">IMDB {{ film.ratingImdb }}</span>
        </div>
        <div class="item__content">
          <ul class="item-content__list">
            <li class="item-content-list__item">
              Год выпуска: {{ film.year }}
            </li>
            <li class="item-content-list__item">
              Страна:
              <span
                class="item"
                v-for="(country, index) in film.countries"
                :key="index"
              >
                {{ country.country }}
              </span>
            </li>
            <li class="item-content-list__item">
              Жанр:
              <span
                class="item"
                v-for="(genre, index) in film.genres"
                :key="index"
              >
                {{ genre.genre }}
              </span>
            </li>
            <li class="item-content-list__item">
              Продолжительность: {{ film.filmLength }} минут
            </li>
            <li class="item-content-list__item">
              Описание: {{ film.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      film: {},
    };
  },
  created() {
    try {
      axios
        .get(
          "https://kinopoiskapiunofficial.tech/api/v2.2/films/" +
            this.$route.params.id,
          {
            method: "GET",
            headers: { "X-API-KEY": "cd590928-7379-47a9-a2c1-e1be008d72f1" },
          }
        )
        .then((response) => (this.film = response.data), console.log(this.film))
        .then((response) => console.log(response));
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped lang="scss">
.movies {
  display: flex;
  flex-direction: column;
  background-color: #222222;
  padding: 10px 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  &__item {
  }
}
.item {
  &__title {
    margin-bottom: 20px;
  }

  &__body {
    display: flex;
    flex-direction: columns;
    column-gap: 15px;
    padding-bottom: 20px;
  }

  &__poster {
    position: relative;
  }

  &__content {
  }
}
.rating {
  position: absolute;
  bottom: 5px;
  right: 0;
  background-color: yellow;
  color: black;
  font-size: 13px;
  font-weight: 900;

  text-align: center;
}
.item-content {
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
  }
}
.item-content-list {
  &__item {
    list-style-type: none;
    font-size: 15px;
    color: #cec7c7;
  }
}
.item {
  margin: 0 4px 0 0;
}
</style>
