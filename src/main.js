import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import router from '@/router';
import '@/styles/main.scss';

import Button from 'primevue/button';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue, { ripple: true });

app.component('Button', Button);

app.mount('#app');
