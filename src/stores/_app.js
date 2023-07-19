import { createPinia } from 'pinia';

export const pinia = createPinia();

import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    isDarkMode: true,
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
});