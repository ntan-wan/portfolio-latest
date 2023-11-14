import { ref, computed, shallowRef } from 'vue';
import { defineStore } from 'pinia';
import layouts from '@/layouts';

export const useSiteStore = defineStore('site', () => {
  const layout = shallowRef();

  const getLayout = computed(() => {
    return layout.value;
  });

  function setLayout(layoutName) {
    layout.value = layouts[layoutName];
  }

  return { layout, getLayout, setLayout };
});
