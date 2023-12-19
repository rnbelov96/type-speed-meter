import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Modals from './plugins/modals';
import App from './components/App.vue';

createApp(App).use(createPinia()).use(Modals).mount('#app');
