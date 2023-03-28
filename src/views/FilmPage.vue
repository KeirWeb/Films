<template>
  <div class="movies">
    <div class="movies__item">
      <h3 class="item__title">{{ film.nameRu }}</h3>
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
export default {};
</script>

<style></style>
