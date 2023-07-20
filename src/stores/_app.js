import { createPinia } from 'pinia';

export const pinia = createPinia();

import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    isDarkMode: true,
    isAddProjectModalOpen: false,
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
});