import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/global.css';


createApp(App)
  .use(router)  // Añade el router
  .use(store)   // Añade el store (Vuex o Pinia)
  .mount('#app');
