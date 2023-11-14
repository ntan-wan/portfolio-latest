<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'About',
    icon: 'pi pi-user',
  },
  {
    label: 'Project',
    icon: 'pi pi-book',
  },
  {
    label: 'Resume',
    icon: 'pi pi-file',
  },
]);
</script>

<template>
  <div>
    <Menubar :model="items" class="navbar-custom">
      <template #start> <span class="text-xl">Logo </span> </template>
    </Menubar>
    <slot></slot>
  </div>
</template>
