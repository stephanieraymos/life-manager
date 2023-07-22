import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { addProject } from './api.js'; // Import the addProject function
import MyProjects from './components/MyProjects.vue';
import DashboardView from './components/DashboardView.vue';
import RepositoryDetails from './components/RepositoryDetails.vue';
import * as VueRouter from 'vue-router';

const app = createApp(App);
// import router from '../router/index.js';
const routes = [
    { path: '/', component: DashboardView, default: true },
    { name: 'projects', path: '/projects', component: MyProjects },
    {
        name: 'details',
        path: '/details',
        component: RepositoryDetails,
        props: true,
    },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
app.use(router);
const pinia = createPinia(); // Create a Pinia instance
app.use(pinia); // Use Pinia with the app

// Define a global method to add a project to the database
app.config.globalProperties.$addProject = addProject;

app.mount('#app');
