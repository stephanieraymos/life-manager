<!-- AddProject.vue -->
<template>
  <div class="container">
    <!-- <h2>Add New Project</h2> -->
    <form @submit.prevent="addProject">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="start_date" type="date" required />

      <textarea
        v-model="description"
        placeholder="Description of project"
      ></textarea>
      <button type="submit">Add Project</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const description = ref("");
const start_date = ref("");
const end_date = ref("");

async function addProject() {
  const projectData = {
    name: name.value,
    description: description.value,
    start_date: start_date.value,
    end_date: end_date.value,
  };

  try {
    const response = await fetch("http://localhost:3000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (response.ok) {
      alert("Project added successfully!");
    } else {
      alert("Failed to add project.");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while adding the project.");
  }
}
</script>

<style scoped>
/* Add your component's styles here */
.container {
  position: relative;
}
form {
  margin-top: 50px;
}
textarea {
  height: 100px;
  margin-bottom: 100px;
}
input,
textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
input {
  margin-bottom: 20px;
}
button {
  padding: 10px 20px;
  border-radius: 5px;
  background: var(--color-blue);
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  right: 10px;
}
</style>
