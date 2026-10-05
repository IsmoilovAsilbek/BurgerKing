<script>
export default {}
</script>

<template>
  <section class="cta">
    <div class="cta__box container">
      <h2 class="cta__title">Проголодались? Привезём за 30 минут</h2>
      <p class="cta__text">Закажите на сайте или по телефону — горячий бургер приедет к вам домой или в офис.</p>
      <div class="cta__btns">
        <a href="#" class="cta__btn cta__btn--main">Заказать онлайн</a>
        <a href="tel:+78005553535" class="cta__btn">8 800 555-35-35</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta {
  background: #0a9418;
  color: #fff;
  text-align: center;
  margin: 70px 0;

  &__box { padding: 60px 16px; }
  &__title { font-size: 38px; line-height: 1.15; }
  &__text { max-width: 560px; margin: 16px auto 0; font-size: 18px; }

  &__btns { display: flex; justify-content: center; gap: 16px; margin-top: 30px; flex-wrap: wrap; }

  &__btn {
    padding: 15px 34px;
    font-size: 18px;
    color: #fff;
    border: 3px solid #fff;
    border-radius: 4px;
    transition: background .3s, color .3s, transform .2s;

    &:hover { background: #fff; color: #0a9418; }
    &:active { transform: scale(.96); }

    &--main { background: #000; border-color: #000; animation: pulse 2.4s infinite; }
    &--main:hover { background: #fff; border-color: #fff; }
  }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, .5); }
  70% { box-shadow: 0 0 0 16px rgba(0, 0, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
}

@media (max-width: 768px) {
  .cta { margin: 50px 0; &__title { font-size: 28px; } &__text { font-size: 16px; } }
}

@media (max-width: 480px) {
  .cta { &__title { font-size: 24px; } &__btn { width: 100%; } }
}

@media (prefers-reduced-motion: reduce) {
  .cta__btn--main { animation: none; }
}
</style>