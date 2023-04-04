<template>
  <div class="login">
    <div class="login__title">
      <h3>Войдите в свой профиль</h3>
    </div>
    <div class="login__items">
      <div class="login__item">
        <my-input placeholder="Введите логин" />
      </div>
      <div class="login__item">
        <my-input placeholder="Введите пароль" type="password" />
      </div>
    </div>
    <span>Еще нет профиля? </span>
  </div>
</template>

<script>
export default {};
</script>

<style scopde lang="scss">
.login {
  display: inline-block;
  padding: 20px;
  background-color: #1a1919;

  &__title {
  }

  &__items {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin: 10px 0;
  }

  &__item {
  }
}
</style>
