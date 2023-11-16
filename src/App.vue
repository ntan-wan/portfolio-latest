<script setup>
import { useSiteStore } from '@/stores/site.store.js';

const siteStore = useSiteStore();
</script>

<template>
  <component :is="siteStore.getLayout">
    <RouterView></RouterView>
  </component>
</template>

<style scoped></style>
