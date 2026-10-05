<script>
import reveal from "@/directives/reveal.js";

export default {
  directives: {reveal},
  data() {
    return {
      reviews: [
        {name: 'Алексей', text: 'Лучший бургер в районе. Привезли горячим, котлета сочная, булочка не размокла.', stars: 5},
        {name: 'Марина', text: 'Заказываем всей семьёй по пятницам. Картофель фри всегда хрустящий.', stars: 5},
        {name: 'Дмитрий', text: 'Быстро и вкусно. Курьер приехал за 25 минут, соус просто огонь.', stars: 4}
      ]
    }
  }
}
</script>

<template>
  <section class="final container">
    <h2 class="final__title" v-reveal>Отзывы наших гостей</h2>
    <div class="final__grid">
      <figure v-for="(r, i) in reviews" :key="r.name" v-reveal="i * 120" class="final__card">
        <div class="final__card-stars">{{ '★'.repeat(r.stars) }}{{ '☆'.repeat(5 - r.stars) }}</div>
        <blockquote class="final__card-text">{{ r.text }}</blockquote>
        <figcaption class="final__card-name">{{ r.name }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped lang="scss">
.final {
  padding: 0 16px 80px;

  &__title { font-size: 40px; text-align: center; margin-bottom: 36px; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  &__card {
    background: #fff;
    border-left: 6px solid #0a9418;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, .06);

    &-stars { color: #f5a300; font-size: 20px; letter-spacing: 2px; margin-bottom: 12px; }
    &-text { font-size: 16px; line-height: 1.6; margin-bottom: 16px; }
    &-name { font-weight: 700; }
  }
}

@media (max-width: 900px) {
  .final__grid { grid-template-columns: 1fr; }
  .final__title { font-size: 32px; }
  .final { padding-bottom: 60px; }
}

@media (max-width: 480px) {
  .final__title { font-size: 26px; }
}
</style>