<template>
  <div :class="{ 'dark-mode': isDarkMode }" id="app">
    <DashboardView />
  </div>
</template>

<script setup>
import DashboardView from './components/DashboardView.vue';
import { useAppStore } from './stores/_app.js';

const appStore = useAppStore();
const { isDarkMode } = appStore;
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh; /* Ensure the app takes at least the full viewport height */
  display: flex; /* Use flexbox to align the content vertically */
  flex-direction: column; /* Align the content vertically */
    --dark-color-1: #333333;
    --dark-color-2: #414141;
    --dark-color-3: #454242;

    --color-red: #770202;
    --color-green: #0b7702;
    --color-blue: #020277;

}
body {
  margin: 0;
  padding: 0;
}

.dark-mode {
  --text-color: #ffffff;
  --background-color: #333333;
  color: var(--text-color);
  background-color: var(--background-color);
}
</style>
