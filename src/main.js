import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia(); // Create a Pinia instance
app.use(pinia); // Use Pinia with the app
app.mount('#app');
