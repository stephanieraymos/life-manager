<template>
    <div class="container">
        <h2>Repo Details</h2>
        <div><strong>Repository Name:</strong> {{ $route.params.slug }}</div>
    </div>
</template>

<script setup></script>

<style scoped>
.container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
</style>
