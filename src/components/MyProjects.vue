<template>
    <div class="container">
        My Projects
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div
                v-for="repo in appStore.githubRepos"
                :key="repo.id"
                @click="viewRepoDetails(repo)"
            >
                {{ repo.name }}
            </div>
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
</style>
