<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>This is the dashboard view.</p>
    <GeneralButton v-if="!appStore.isAddProjectModalOpen" @click="appStore.isAddProjectModalOpen = true" color="blue" text="Add a project" />

    <GeneralModal v-if="appStore.isAddProjectModalOpen" title="Add a project" @close="appStore.isAddProjectModalOpen = false">
      <!-- Here, you can pass the dynamic component as a slot -->
      <AddProject />
    </GeneralModal>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useAppStore } from "../stores/_app.js";
import GeneralModal from "./GeneralModal.vue";
import GeneralButton from "./GeneralButton.vue";
import AddProject from "./AddProject.vue";

const appStore = useAppStore();

watch(
  () => appStore.isAddProjectModalOpen,
  (newValue) => {
    isButtonVisible.value = !newValue;
  }
);
// const buttonColor = "blue"; 
const isButtonVisible = ref(true);
</script>

<style scoped>
.dashboard {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
