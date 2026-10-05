<script>
export default {
  data() {
    return {
      open: false,
      links: ['Главная', 'Корзина', 'Меню', 'О нас', 'Контакты']
    }
  },
  methods: {
    close() { this.open = false }
  }
}
</script>

<template>
  <nav class="nav">
    <div class="nav-box container">
      <h2 class="nav-box__title">STREET 88</h2>

      <button class="nav-box__burger" :class="{active: open}" aria-label="Меню" @click="open = !open">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-box__list" :class="{open}">
        <li v-for="link in links" :key="link">
          <a href="#" class="nav-box__list-link" @click="close">{{ link }}</a>
        </li>
      </ul>
    </div>
  </nav>
  <hr>
</template>

<style scoped lang="scss">
.nav {
  position: relative;
  z-index: 20;
  background: black;
  height: 80px;
  display: flex;

  &-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &__title {
      max-width: 256px;
      width: 100%;
      font-size: 36px;
      line-height: 83%;
      text-align: center;
      color: #fff;
      background: rgba(10, 148, 24, 0.75);
      border: 4px solid #06600f;
      border-radius: 4px;
      padding: 12px 18px;
    }

    &__burger {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: 0;
      cursor: pointer;
      padding: 8px;

      span {
        width: 28px;
        height: 3px;
        background: #fff;
        border-radius: 2px;
        transition: transform .3s, opacity .3s;
      }

      &.active span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
      &.active span:nth-child(2) { opacity: 0; }
      &.active span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
    }

    &__list {
      display: flex;
      gap: 28px;

      &-link {
        font-size: 18px;
        text-align: right;
        color: #fff;
        transition: all 500ms;
        white-space: nowrap;
      }

      &-link:hover {
        background: rgba(105, 207, 23, 0.75);
        padding: 30px 14px;
      }
    }
  }
}

@media (max-width: 900px) {
  .nav {
    height: 70px;

    &-box {
      &__title { font-size: 26px; max-width: 190px; padding: 10px 14px; }
      &__burger { display: flex; }

      &__list {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        gap: 0;
        background: #000;
        max-height: 0;
        overflow: hidden;
        transition: max-height .4s ease;

        &.open { max-height: 360px; border-bottom: 3px solid #0a9418; }

        li { border-top: 1px solid #222; }

        &-link {
          display: block;
          text-align: left;
          padding: 16px 20px;
        }

        &-link:hover { padding: 16px 20px 16px 30px; }
      }
    }
  }
}

@media (max-width: 480px) {
  .nav-box__title { font-size: 22px; max-width: 160px; }
}
</style>