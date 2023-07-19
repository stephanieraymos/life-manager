import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { addProject } from './api.js'; // Import the addProject function

const app = createApp(App);
const pinia = createPinia(); // Create a Pinia instance
app.use(pinia); // Use Pinia with the app

// Define a global method to add a project to the database
app.config.globalProperties.$addProject = addProject;

app.mount('#app');
