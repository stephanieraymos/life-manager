<template>
    <div class="container">
        <h2>My Projects</h2>
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else>
            <div class="repository-list">
                <div
                    v-for="repo in appStore.githubRepos"
                    :key="repo.id"
                    class="repository-list-item"
                    @click="viewRepoDetails(repo)"
                >
                    {{ repo.name }}
                </div>
            </div>
            <router-view> </router-view>
        </div>
        <!-- <router-link to="/details">Go to det</router-link>; -->
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useAppStore } from '@/stores/_app';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const appStore = useAppStore();
const loading = ref(true);

onMounted(async () => {
    await appStore.getAllGithubRepositories();
    loading.value = false;
});

const viewRepoDetails = repo => {
    // Navigates to the RepoDetails component passing the repo name as a slug in the URL
    console.log('repo name', repo);
    // router.push('/');
    router.push({ name: 'details', params: { slug: repo.name } });
};
</script>

<style scoped>
.container {
    background: var(--dark-color-2);

    margin: 10px;
    border-radius: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 20px;
}
.loading {
    margin-top: 20px;
}
.repository-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
}
.repository-list-item {
    background: var(--color-blue);

    cursor: pointer;
    border-radius: 10px;
    width: max-content;
    padding: 10px;
    margin: 10px;
}
</style>
