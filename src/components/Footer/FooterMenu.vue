<script>
export default {
  data() {
    return {
      columns: [
        {title: 'Меню', links: ['Бургеры', 'Закуски', 'Напитки', 'Десерты']},
        {title: 'Компания', links: ['О нас', 'Сотрудничество', 'Вакансии', 'Контакты']},
        {title: 'Покупателям', links: ['Доставка', 'Оплата', 'Акции', 'Проезд']}
      ]
    }
  }
}
</script>

<template>
  <div class="fmenu">
    <div v-for="col in columns" :key="col.title" class="fmenu__col">
      <h4 class="fmenu__title">{{ col.title }}</h4>
      <ul class="fmenu__list">
        <li v-for="link in col.links" :key="link">
          <a href="#" class="fmenu__link">{{ link }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fmenu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  &__title { font-size: 18px; margin-bottom: 16px; color: #fff; }
  &__list { display: flex; flex-direction: column; gap: 10px; }

  &__link {
    color: #aaa;
    font-size: 15px;
    transition: color .3s, padding-left .3s;

    &:hover { color: #69cf17; padding-left: 6px; }
  }
}

@media (max-width: 480px) {
  .fmenu { grid-template-columns: repeat(2, 1fr); }
}
</style>