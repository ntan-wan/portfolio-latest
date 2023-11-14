import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import router from '@/router';
import '@/styles/main.scss';

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

import Particles from 'vue3-particles';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(Particles);

app.component('Button', Button);
app.component('Menubar', Menubar);

app.mount('#app');
