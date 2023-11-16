import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import router from '@/router';
import '@/styles/main.scss';

/* third party components */
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Particles from 'vue3-particles';
import VueWriter from 'vue-writer';

/* custom components */
import CustomContainer from '@/components/CustomContainer.vue';
import CustomFooter from '@/components/CustomFooter.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(Particles);
app.use(VueWriter);

app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('CustomContainer', CustomContainer);
app.component('CustomFooter', CustomFooter);

app.mount('#app');
