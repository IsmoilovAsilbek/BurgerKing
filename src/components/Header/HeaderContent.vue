<script>
export default {}
</script>

<template>
  <div class="header-content">
    <div class="header-content__case container">
      <div class="header-content__case-info">
        <h1 class="header-content__case-title">Большой гамбургер</h1>
        <h3 class="header-content__case-wtitle">говядина</h3>
        <p class="header-content__case-text">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и
          небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее
          распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки
          тысяч американцев</p>
        <div class="header-content__case-duo">
          <a href="#menu" class="header-content__case-duo-link header-content__case-duo-link--main">Заказать</a>
          <a href="#about" class="header-content__case-duo-link">Подробнее</a>
        </div>
      </div>

      <div class="header-content__case-visual" aria-hidden="true">
        <span class="header-content__case-burger">🍔</span>
        <span class="header-content__case-price">от 349 ₽</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$green: #0a9418;
$lime: #69cf17;

.header-content {
  background: radial-gradient(circle at 80% 40%, #0d5a18 0%, #050505 65%);
  color: #fff;
  overflow: hidden;

  &__case {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    gap: 40px;
    min-height: 560px;
    padding-top: 60px;
    padding-bottom: 60px;

    &-info > * { animation: fadeUp .8s ease both; }
    &-title { font-size: 64px; line-height: 1.05; animation-delay: .05s; }
    &-wtitle { font-size: 28px; color: $lime; margin: 14px 0 20px; animation-delay: .2s; }
    &-text { max-width: 560px; font-size: 17px; line-height: 1.6; color: #d8d8d8; animation-delay: .35s; }

    &-duo {
      display: flex;
      gap: 16px;
      margin-top: 32px;
      animation-delay: .5s;

      &-link {
        padding: 14px 32px;
        border: 3px solid $green;
        border-radius: 4px;
        font-size: 18px;
        color: #fff;
        transition: background .3s, transform .2s;

        &:hover { background: rgba(105, 207, 23, .35); }
        &:active { transform: scale(.96); }

        &--main { background: $green; }
        &--main:hover { background: $lime; border-color: $lime; }
      }
    }

    &-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: fadeUp 1s .4s ease both;
    }

    &-burger {
      font-size: 280px;
      line-height: 1;
      filter: drop-shadow(0 30px 40px rgba(0, 0, 0, .6));
      animation: float 4s ease-in-out infinite;
    }

    &-price {
      position: absolute;
      right: 6%;
      bottom: 8%;
      background: $green;
      border: 4px solid #06600f;
      border-radius: 4px;
      padding: 10px 18px;
      font-size: 22px;
      transform: rotate(-6deg);
    }
  }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-18px) rotate(3deg); }
}

@media (max-width: 1024px) {
  .header-content__case {
    &-title { font-size: 48px; }
    &-burger { font-size: 200px; }
  }
}

@media (max-width: 768px) {
  .header-content__case {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding-top: 40px;
    padding-bottom: 40px;

    &-text { margin: 0 auto; font-size: 15px; }
    &-duo { justify-content: center; }
    &-visual { order: -1; }
    &-burger { font-size: 150px; }
    &-title { font-size: 36px; }
    &-wtitle { font-size: 22px; }
  }
}

@media (max-width: 480px) {
  .header-content__case {
    &-duo { flex-direction: column; }
    &-title { font-size: 30px; }
    &-burger { font-size: 120px; }
  }
}

@media (prefers-reduced-motion: reduce) {
  .header-content * { animation: none !important; }
}
</style>