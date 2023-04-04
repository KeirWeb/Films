<template>
  <div class="filter">
    <label class="labelText">
      <my-input
        type="text"
        name="keyword"
        v-model="keyword"
        placeholder="Название фильма..."
      />
    </label>

    <my-select name="Сортировка" id="" v-model="order">
      <option disabled defaultSelected value="">Сортировка</option>
      <option value="">--</option>
      <option value=" RATING">Рейтинг</option>
      <option value="NUM_VOTE">По голосам</option>
      <option value="YEAR">По годам</option>
    </my-select>

    <my-select class="filter__select" name="Тип фильма" id="" v-model="type">
      <option disabled defaultSelected value="">Тип фильма</option>
      <option value="">--</option>
      <option value="FILM">Фильмы</option>
      <option value="TV_SHOW">Телепередачи</option>
      <option value="TV_SERIES">Сериалы</option>
      <option value="MINI_SERIES">Мини сериалы</option>
      <option value="ALL">Все</option>
    </my-select>
    <label class="labelText">
      <my-input
        v-model="yearFrom"
        type="number"
        name="yearFrom"
        placeholder="Минимальный год..."
      />
    </label>
    <label class="labelText">
      <my-input
        type="number"
        name="yearTo"
        v-model="yearTo"
        placeholder="Максимальный год..."
      />
    </label>
    <my-button class="btn" @click="filter">Поиск</my-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      filterFilms: [],
      order: "",
      type: "",
      yearFrom: "",
      yearTo: "",
      keyword: "",
    };
  },
  methods: {
    input(testValue) {
      console.log(testValue);
    },

    // test() {
    //   console.log(this.order);
    //   console.log(this.order === "");
    // },
    // let resOrder = this.order === "" ? +"" : +"order=" + this.order;

    filter() {
      try {
        axios
          .get(
            "https://kinopoiskapiunofficial.tech/api/v2.2/films" +
              (this.keyword === "" ? "" : "?keyword=" + this.keyword) +
              (this.order === "" ? "" : "&order=" + this.order) +
              (this.type === "" ? "" : "&type=" + this.type) +
              (this.yearFrom === "" ? "" : "&yearFrom=" + this.yearFrom) +
              (this.yearTo === "" ? "" : "&yearTo=" + this.yearTo),
            {
              method: "GET",
              headers: {
                "X-API-KEY": "cd590928-7379-47a9-a2c1-e1be008d72f1",
              },
            }
          )
          .then((response) => {
            this.filterFilms = response.data.items;
            this.$emit("filter", this.filterFilms);
            console.log(this.filterFilms);
            this.order = "";
            this.type = "";
            this.yearFrom = "";
            this.yearTo = "";
            this.keyword = "";
          });
      } catch (e) {
        console.log(e);
      }
      // .then((response) => (this.filterFilms = response.data.items))
      // .then(this.$emit("filter", this.filterFilms))
      // .then(console.log(this.order));

      // .then(this.$emit("filter", this.filterFilms))
      // .then(console.log(this.filterFilms));
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  column-gap: 5px;
}
.labelText {
  font-size: 12px;
  color: white;
}
</style>
