<script>
export default {
  data() {
    return {socials: ['VK', 'Telegram', 'Instagram']}
  }
}
</script>

<template>
  <div class="fbottom">
    <div class="fbottom__box container">
      <p class="fbottom__copy">© 2026 STREET 88. Все права защищены</p>
      <ul class="fbottom__socials">
        <li v-for="s in socials" :key="s"><a href="#" class="fbottom__link">{{ s }}</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fbottom {
  border-top: 1px solid #222;

  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 16px;
  }

  &__copy { color: #888; font-size: 14px; }
  &__socials { display: flex; gap: 20px; }

  &__link {
    color: #fff;
    font-size: 14px;
    transition: color .3s;

    &:hover { color: #69cf17; }
  }
}

@media (max-width: 600px) {
  .fbottom__box { flex-direction: column; text-align: center; }
}
</style>