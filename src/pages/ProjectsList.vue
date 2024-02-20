<script>
import { store } from '../assets/js/_partials/_store';
import AppHeader from '../components/AppHeader.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
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
            errors: [],
            totalPages: 1,
            loading: false,
            paginationError: false
        };
    },
    components: {
        AppHeader,
        ProjectSearch,
        AppFooter,
        LoaderComponent,
        ProjectCard,
    },
    created() {
        this.init();

        this.$watch(() => this.$route.params, (toParams, previusParams) => {
            this.init();
        });
    },
    methods: {
        getProjects() {
            this.loading = true;
            this.errors = [];
            axios.get(store.baseUrl + store.apiUrls.projects, {
                params: {
                    page: store.projects.currentPage,
                    key: store.projects.searchKey,
                }
            }).then(response => {
                this.projects = response.data.results.data;
                this.totalPages = response.data.results.last_page;
                if (store.projects.currentPage > this.totalPages) {
                    this.loading = false;
                    this.$router.push({
                        path: '/page-not-found',
                    })
                }

            }).catch(error => {
                console.error(error);
                this.projects = [];
                this.errors = error.response.data.errors;
            }).finally(() => {
                this.loading = false;
            });
        },

        nextPage() {
            if (store.projects.currentPage < this.totalPages) {
                store.projects.currentPage++;
                this.changePage();
            }
        },

        prevPage() {
            if (store.projects.currentPage > 1) {
                store.projects.currentPage--;
                this.changePage();
            }
        },

        changePage() {
            this.$router.push({
                name: 'Projects',
                query: { page: store.projects.currentPage, key: store.projects.searchKey },
            });
            this.getProjects();
        },

        init() {
            store.projects.currentPage = this.$route.query.page ?? 1;
            store.projects.searchKey = this.$route.query.key ?? null;
            this.getProjects();
        },
    },
};
</script>


<template>
    <AppHeader />

    <LoaderComponent v-if="loading" />
    <main class="bg-secondary flex-grow-1 py-5 d-flex flex-column" v-else>

        <ProjectSearch @search-project="getProjects" :errors="errors" />

        <div class="container row g-3 mx-auto">
            <div class="col col-md-6" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
        <div class="mt-auto text-light d-flex justify-content-center align-items-center" :class="{ 'd-none': !projects }">
            <button class="btn btn-secondary fs-3" :disabled="store.projects.currentPage === 1" @click="prevPage()">
                &lt;
            </button>
            <span class="mx-2">Pagina: {{ store.projects.currentPage }} / {{ totalPages }}</span>
            <button class="btn btn-secondary fs-3" :disabled="store.projects.currentPage === totalPages"
                @click="nextPage()">
                >
            </button>
        </div>
    </main>
    <AppFooter />
</template>

<style lang="scss" scoped></style>