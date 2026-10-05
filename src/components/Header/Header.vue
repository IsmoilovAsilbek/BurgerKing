<script>
import PreNav from "@/components/Header/PreNav.vue";
import NavBar from "@/components/Header/NavBar.vue";
import HeaderContent from "@/components/Header/HeaderContent.vue";

export default {
  components: {HeaderContent, NavBar, PreNav}

}
</script>

<template>
    <header class="header">
        <PreNav/>
        <NavBar/>
        <HeaderContent/>
    </header>
</template>

<style scoped lang="scss">

</style>
