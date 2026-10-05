<script>
import MainStart from "@/components/Main/MainStart.vue";
import MainFinal from "@/components/Main/MainFinal.vue";
import ButtonBtns from "@/components/UI/ButtonBtns.vue";
import Listbtn from "@/components/UI/Listbtn.vue";
import MainCenter from "@/components/Main/MainCenter.vue";

export default {
  components: {MainCenter, Listbtn, ButtonBtns, MainFinal, MainStart},
  data() {
    return {category: 'all'}
  }
}
</script>

<template>
  <main class="main">
    <Listbtn v-model="category"/>
    <MainStart :category="category"/>
    <MainCenter/>
    <ButtonBtns/>
    <MainFinal/>
  </main>
</template>

<style scoped lang="scss">
.main {
  background: #f5f5f0;
  color: #111;
}
</style>