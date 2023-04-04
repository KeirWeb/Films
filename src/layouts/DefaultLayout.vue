<template>
  <header class="header">
    <a href="/"> <h2 class="title">BOBI</h2></a>

    <div class="nav">
      <div class="nav__items">
        <router-link class="nav__item" to="/login">Войти</router-link>
        <router-link class="nav__item" to="/login"
          >Зарегистрировться</router-link
        >
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
  opacity: 0.9;
}
.title {
  cursor: pointer;
  color: white;
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
}
// .nav-serch {
//   &__btn {
//     background-color: #222222;
//     padding: 7px 10px;
//     border-radius: 3px;

//     cursor: pointer;
//     &:hover {
//       background-color: #cec7c7;
//     }
//   }
// }
</style>
