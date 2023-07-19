<!-- AddProject.vue -->
<template>
  <div>
    <h2>Add New Project</h2>
    <form @submit.prevent="addProject">
      <label for="name">Name:</label>
      <input v-model="name" type="text" required />
      <label for="description">Description:</label>
      <textarea v-model="description"></textarea>
      <label for="start_date">Start Date:</label>
      <input v-model="start_date" type="date" required />
      <label for="end_date">End Date:</label>
      <input v-model="end_date" type="date" required />
      <button type="submit">Add Project</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const description = ref('');
const start_date = ref('');
const end_date = ref('');

async function addProject() {
  const projectData = {
    name: name.value,
    description: description.value,
    start_date: start_date.value,
    end_date: end_date.value,
  };

  try {
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    if (response.ok) {
      alert('Project added successfully!');
    } else {
      alert('Failed to add project.');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while adding the project.');
  }
}
</script>

<style>
/* Add your component's styles here */
</style>
