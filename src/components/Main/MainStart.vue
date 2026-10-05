<script>
export default {
  props: {
    category: {type: String, default: 'all'}
  },
  data() {
    return {
      products: [
        {id: 1, cat: 'burger', emoji: '🍔', title: 'Большой гамбургер', text: 'Говяжья котлета, салат, огурец, фирменный соус', price: 349},
        {id: 2, cat: 'burger', emoji: '🧀', title: 'Чизбургер', text: 'Двойной сыр чеддер, говядина, маринованный лук', price: 299},
        {id: 3, cat: 'burger', emoji: '🍗', title: 'Чикен бургер', text: 'Хрустящее куриное филе, айсберг, майонез', price: 279},
        {id: 4, cat: 'snack', emoji: '🍟', title: 'Картофель фри', text: 'Золотистая, хрустящая, с морской солью', price: 129},
        {id: 5, cat: 'snack', emoji: '🌭', title: 'Хот-дог', text: 'Сосиска на гриле, горчица, кетчуп, лук', price: 159},
        {id: 6, cat: 'drink', emoji: '🥤', title: 'Кола 0.5 л', text: 'Ледяная, с долькой лимона', price: 99},
        {id: 7, cat: 'drink', emoji: '🥛', title: 'Милкшейк', text: 'Ваниль, клубника или шоколад', price: 189},
        {id: 8, cat: 'dessert', emoji: '🍦', title: 'Мороженое', text: 'Сливочный рожок с шоколадной крошкой', price: 89}
      ]
    }
  },
  computed: {
    filtered() {
      return this.category === 'all'
          ? this.products
          : this.products.filter(p => p.cat === this.category)
    }
  }
}
</script>

<template>
  <section class="start container">
    <h2 class="start__title">Наше меню</h2>

    <TransitionGroup name="card" tag="div" class="start__grid">
      <article v-for="item in filtered" :key="item.id" class="start__card">
        <div class="start__card-img">{{ item.emoji }}</div>
        <h3 class="start__card-title">{{ item.title }}</h3>
        <p class="start__card-text">{{ item.text }}</p>
        <div class="start__card-bottom">
          <span class="start__card-price">{{ item.price }} ₽</span>
          <button class="start__card-btn">В корзину</button>
        </div>
      </article>
    </TransitionGroup>
  </section>
</template>

<style scoped lang="scss">
$green: #0a9418;

.start {
  padding: 40px 16px 0;

  &__title { font-size: 40px; text-align: center; margin-bottom: 36px; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 3px solid #111;
    border-radius: 4px;
    padding: 20px;

    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      font-size: 84px;
      background: rgba(10, 148, 24, .1);
      border-radius: 4px;
      margin-bottom: 16px;
      transition: transform .4s;
    }

    &:hover &-img { transform: rotate(-6deg) scale(1.08); }

    &-title { font-size: 20px; margin-bottom: 8px; }
    &-text { font-size: 14px; line-height: 1.5; color: #555; flex: 1; }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 18px;
    }

    &-price { font-size: 22px; font-weight: 700; }

    &-btn {
      padding: 10px 16px;
      font-size: 15px;
      color: #fff;
      background: $green;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      transition: background .3s, transform .2s;

      &:hover { background: #06600f; }
      &:active { transform: scale(.92); }
    }
  }
}

.card-enter-active, .card-leave-active { transition: opacity .4s, transform .4s; }
.card-enter-from, .card-leave-to { opacity: 0; transform: scale(.9) translateY(20px); }
.card-leave-active { position: absolute; }
.card-move { transition: transform .4s; }

@media (max-width: 1100px) {
  .start__grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 800px) {
  .start__grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .start__title { font-size: 32px; }
}

@media (max-width: 480px) {
  .start__grid { grid-template-columns: 1fr; }
  .start__title { font-size: 26px; margin-bottom: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  .card-enter-active, .card-leave-active, .card-move { transition: none; }
}
</style>