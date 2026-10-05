<script>
export default {}
</script>

<template>
  <nav class="pre">
    <div class="pre-nav container">
      <div class="pre-nav__duo">
        <img src="@/assets/images/navlogo.svg" alt="svg" class="pre-nav__duo-photo">
        <a href="#" class="pre-nav__duo-btn">Проезд</a>
      </div>
      <ul class="pre-nav__list">
        <li><a href="#" class="pre-nav__list-link">Покупателям</a></li>
        <li><a href="#" class="pre-nav__list-link">Сотрудничество</a></li>
        <li><a href="#" class="pre-nav__list-link">Доставка</a></li>
      </ul>
    </div>
  </nav>
  <hr>
</template>

<style scoped lang="scss">
.pre {
  background: black;
  min-height: 80px;
  display: flex;

  &-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &__duo {
      display: flex;
      align-items: center;
      gap: 5px;

      &-btn {
        font-size: 16px;
        color: #fff;
        transition: color .3s;

        &:hover { color: #69cf17; }
      }
    }

    &__list {
      display: flex;
      gap: 20px;

      &-link {
        font-size: 16px;
        text-align: right;
        color: #fff;
        transition: color .3s;

        &:hover { color: #69cf17; }
      }
    }
  }
}

@media (max-width: 768px) {
  .pre {
    min-height: 56px;

    &-nav__list { gap: 14px; }
    &-nav__list-link,
    &-nav__duo-btn { font-size: 14px; }
  }
}

@media (max-width: 560px) {
  .pre-nav__list { display: none; }
  .pre-nav { justify-content: center; }
}
</style>