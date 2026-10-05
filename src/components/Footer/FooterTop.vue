<script>
export default {}
</script>

<template>
  <div class="ftop">
    <h2 class="ftop__logo">STREET 88</h2>
    <p class="ftop__text">Бургеры, закуски и напитки с доставкой по городу. Готовим из свежих продуктов каждый день.</p>
    <a href="tel:+78005553535" class="ftop__phone">8 800 555-35-35</a>
    <p class="ftop__address">г. Москва, ул. Центральная, 88<br>Ежедневно с 10:00 до 23:00</p>
  </div>
</template>

<style scoped lang="scss">
.ftop {
  &__logo {
    display: inline-block;
    font-size: 30px;
    line-height: 83%;
    background: rgba(10, 148, 24, .75);
    border: 4px solid #06600f;
    border-radius: 4px;
    padding: 10px 16px;
    margin-bottom: 18px;
  }

  &__text { max-width: 360px; line-height: 1.6; color: #ccc; }

  &__phone {
    display: block;
    margin: 18px 0 8px;
    font-size: 24px;
    color: #69cf17;
    transition: opacity .3s;

    &:hover { opacity: .75; }
  }

  &__address { color: #aaa; line-height: 1.6; font-size: 15px; }
}

@media (max-width: 480px) {
  .ftop__logo { font-size: 24px; }
  .ftop__phone { font-size: 20px; }
}
</style>