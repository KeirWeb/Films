<template>
  <div class="filter">
    <select name="Сортировка" id="" v-model="filters.order">
      <option disabled defaultSelected value="">Сортировка</option>
      <option value="">--</option>
      <option value=" RATING">Рейтинг</option>
      <option value="NUM_VOTE">По голосам</option>
      <option value="YEAR">По годам</option>
    </select>
    <select name="Тип фильма" id="" v-model="filters.type">
      <option disabled defaultSelected value="">Тип фильма</option>
      <option value="">--</option>
      <option value="FILM">Фильмы</option>
      <option value="TV_SHOW">Телепередачи</option>
      <option value="TV_SERIES">Сериалы</option>
      <option value="MINI_SERIES">Мини сериалы</option>
      <option value="ALL">Все</option>
    </select>
    <label class="labelText">
      Минимальный год:
      <input type="number" name="yearFrom" v-model="filters.yearFrom" />
    </label>
    <label class="labelText">
      Максимальный год:
      <input type="number" name="yearTo" v-model="filters.yearTo" />
    </label>
    <label class="labelText">
      ключевое слово, которое встречается в названии фильма:
      <input type="text" name="keyword" v-model="filters.keyword" />
    </label>
    <button @click="filter">Поиск</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        { order: "" },
        { type: "" },
        { yearFrom: "" },
        { yearTo: "" },
        { keyword: "" },
      ],
    };
  },
  methods: {
    filter() {
      this.$emit("filter", this.filters);
      console.log(this.filters);
    },
  },
};
</script>

<style>
.labelText {
  font-size: 15px;
  color: black;
}
</style>
