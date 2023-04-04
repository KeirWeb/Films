<template>
  <div class="movies">
    <div class="movies__item" v-for="film in listFilms" :key="film.filmId">
      <a @click="$router.push(`/${film.filmId}`)">
        <h3 class="item__title">{{ film.nameRu }}</h3>
      </a>

      <div class="item__body">
        <div class="item__poster">
          <img :src="film.posterUrlPreview" alt="" />
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
              Продолжительность: {{ film.filmLength }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    listFilms: {
      type: Array,
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
img {
  width: 200px;
  aspect-ratio: auto 200 / 300;
  height: 300px;
}
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
    border-bottom: 1.5px solid #857d7d;
  }
}
.item {
  &__title {
    padding: 20px 0px;
    color: white;
    cursor: pointer;
  }

  &__body {
    display: flex;
    flex-direction: columns;
    column-gap: 15px;
    padding-bottom: 20px;
  }

  &__poster {
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 200px;
    aspect-ratio: auto 200 / 300;
    height: 300px;
  }

  &__content {
  }
}
.item-content {
  &__list {
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
