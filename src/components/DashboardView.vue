<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>
     This is the dashboard view.
    </p>
        <GeneralButton color="blue" text="Click me!" />
            <AddProject />

  </div>
</template>

<script setup>
import GeneralButton from './GeneralButton.vue';
import AddProject from './AddProject.vue';
</script>

<style scoped>
.dashboard {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
