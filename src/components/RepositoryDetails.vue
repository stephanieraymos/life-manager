<template>
    <div class="container">
        <router-link class="link" to="/projects"
            >&lt; Back to my projects</router-link
        >
        <h2>Repo Details</h2>
        <div><strong>Repository Name:</strong> {{ $route.params.slug }}</div>
    </div>
</template>

<script setup></script>

<style scoped>
.container {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
.link {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 10px;
    text-decoration: none;
    color: #fff;
}
</style>
