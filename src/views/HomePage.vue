<script setup>
import CustomParticles from '../components/CustomParticles.vue';
</script>

<template>
  <div class="page-home">
    <CustomParticles />
    <section class="section-hero"></section>
  </div>
</template>

<style scoped lang="scss">
.section-hero {
  min-height: 100vh;
  background-image: var(--image-gradient), url('@/assets/imgs/bg-hero.png');
  background-position: top center;
  background-repeat: no-repeat;
  // z-index: -1;
}
</style>
