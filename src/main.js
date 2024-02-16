//file di partenza Vue
import { createApp } from 'vue';
import App from './App.vue';
//router
import { router } from './router';
//file di partenza stili progetto
import './assets/scss/style.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//file di partenza js
import './assets/js/myscript'

createApp(App).use(router).mount('#app');
