<script>
import reveal from "@/directives/reveal.js";

export default {
  directives: {reveal},
  data() {
    return {
      features: [
        {emoji: '🥩', title: 'Свежее мясо', text: 'Котлеты из охлаждённой говядины — готовим каждый день.'},
        {emoji: '🔥', title: 'Всегда горячо', text: 'Собираем бургер сразу после заказа и сразу отдаём.'},
        {emoji: '🛵', title: 'Быстрая доставка', text: 'Привозим за 30 минут по всему городу, а при задержке дарим напиток.'},
        {emoji: '💰', title: 'Честные цены', text: 'Без скрытых наценок. Скидка 10% на первый заказ.'}
      ]
    }
  }
}
</script>

<template>
  <section class="center container" id="about">
    <h2 class="center__title" v-reveal>Почему выбирают STREET 88</h2>
    <div class="center__grid">
      <div v-for="(f, i) in features" :key="f.title" v-reveal="i * 120" class="center__item">
        <span class="center__item-icon">{{ f.emoji }}</span>
        <h3 class="center__item-title">{{ f.title }}</h3>
        <p class="center__item-text">{{ f.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.center {
  padding: 70px 16px 0;

  &__title { font-size: 40px; text-align: center; margin-bottom: 40px; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  &__item {
    text-align: center;
    padding: 0 8px;

    &-icon { display: block; font-size: 56px; margin-bottom: 14px; }
    &-title { font-size: 20px; margin-bottom: 8px; }
    &-text { font-size: 15px; line-height: 1.6; color: #555; }
  }
}

@media (max-width: 900px) {
  .center__grid { grid-template-columns: repeat(2, 1fr); }
  .center__title { font-size: 32px; }
}

@media (max-width: 480px) {
  .center { padding-top: 50px; }
  .center__grid { grid-template-columns: 1fr; gap: 28px; }
  .center__title { font-size: 26px; }
}
</style>