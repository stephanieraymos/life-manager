import { createPinia } from 'pinia';
import axios from 'axios';

export const pinia = createPinia();

import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        // booleans
        isDarkMode: true, // toggles dark mode -- used in App.vue
        isAddProjectModalOpen: false, // toggles add project modal -- used in DashboardView.vue
        projects: [], // stores all projects -- used in MyProjects.vue
        githubRepos: [], // stores all github repos -- used in MyProjects.vue
    }),
    actions: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        },

        async getAllProjects() {
            axios
                .get('/api/projects')
                .then(response => {
                    this.projects = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        async getAllGithubRepositories() {
            await axios
                .get('https://api.github.com/users/stephanieraymos/repos')
                .then(
                    response => {
                        this.githubRepos = response.data;
                    },
                    error => {
                        console.error(error);
                    }
                );
            console.log(this.githubRepos);
            return this.githubRepos;
        },
    },
});
