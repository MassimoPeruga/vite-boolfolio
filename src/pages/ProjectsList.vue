<script>
import { store } from '../assets/js/_partials/_store';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
export default {
    name: 'Main',
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            totalPages: 1,
            loading: false,
        };
    },
    components: {
        AppHeader,
        AppFooter,
        LoaderComponent,
        ProjectCard,
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(page) {
            this.loading = true;
            axios.get(store.baseUrl + store.apiUrls.projects, {
                params: {
                    page: page
                }
            }).then(response => {
                this.projects = response.data.results.data;
                this.totalPages = response.data.results.last_page;
            }).catch(error => {
                console.error(error);
            }).finally(() => {
                this.loading = false;
            });
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.getProjects(this.currentPage);
            }
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.getProjects(this.currentPage);
            }
        },
    },
};
</script>


<template>
    <AppHeader />
    <LoaderComponent v-if="loading" />
    <main class="bg-secondary flex-grow-1 py-5 d-flex flex-column" v-else>
        <div class="container row g-3 mx-auto">
            <div class="col col-md-6" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
        <div class="mt-auto text-light d-flex justify-content-center align-items-center" :class="{ 'd-none': !projects }">
            <button class="btn btn-secondary fs-3" :disabled="currentPage === 1" @click="prevPage()">
                &lt;
            </button>
            <span class="mx-2">Pagina: {{ currentPage }} / {{ totalPages }}</span>
            <button class="btn btn-secondary fs-3" :disabled="currentPage === totalPages" @click="nextPage()">
                >
            </button>
        </div>
    </main>
    <AppFooter />
</template>

<style lang="scss" scoped></style>