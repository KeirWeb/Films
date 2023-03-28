<template>
  <header class="header">
    <h2 class="title">BOBI</h2>
    <div class="nav">
      <div class="nav__items">
        <button class="nav__item btn">Вход</button>
        <button class="nav__item btn">Регистрация</button>
      </div>
      <div class="nav__serch">
        <input
          type="text"
          class="nav-serch__input"
          placeholder="поиск..."
          v-model="serchMovies"
        />
        <button @click="serch" class="nav-serch__btn btn">Поиск</button>
      </div>
    </div>
  </header>
  <slot></slot>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
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
    color: white;
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
    background-color: #222222;
    padding: 7px 10px;
    border-radius: 3px;

    cursor: pointer;
    &:hover {
      background-color: #cec7c7;
    }
  }
}
</style>
