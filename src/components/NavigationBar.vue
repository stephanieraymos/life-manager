<template>
    <div class="container">
        <router-link class="nav-item" to="/">Dashboard</router-link>
        <router-link class="nav-item" to="/projects">My Projects</router-link>
        <!-- <router-link class="nav-item" @click="dashboard">Dashboard</router-link>
        <router-link class="nav-item" @click="myProjects"
            >My Projects</router-link
        > -->
    </div>
</template>
<script setup>
// import { useRouter } from 'vue-router';
// const router = useRouter();
// nav items
// const dashboard = () => router.push('/');
// const myProjects = () => router.push('/projects');
</script>

<style scoped>
.container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: right;
    padding: 5px 10px;
    background: var(--color-blue);
}
.nav-item {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;
}
</style>
