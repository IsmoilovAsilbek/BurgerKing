<script>
import FooterTop from "@/components/Footer/FooterTop.vue";
import FooterMenu from "@/components/Footer/FooterMenu.vue";
import FooterBottom from "@/components/Footer/FooterButtom.vue";

export default {
  components: {FooterBottom, FooterMenu, FooterTop}
}
</script>

<template>
  <footer class="footer">
    <div class="footer__box container">
      <FooterTop/>
      <FooterMenu/>
    </div>
    <FooterBottom/>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: #000;
  color: #fff;
  border-top: 4px solid #0a9418;

  &__box {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 40px;
    padding: 56px 16px 40px;
  }
}

@media (max-width: 800px) {
  .footer__box { grid-template-columns: 1fr; padding-top: 40px; }
}
</style>