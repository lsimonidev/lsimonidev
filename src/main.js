import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'dracula-ui/styles/dracula-ui.css';

createApp(App).use(store).mount('#app');
