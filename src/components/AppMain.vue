<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
export default {
    name: 'Main',
    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000',
            apiUrls: {
                projects: '/api/projects',
            },
            currentPage: 1,
            totalPages: 1,
        };
    },
    components: { ProjectCard, },
    created() {
        this.getProjects();
        this.getPages();
    },
    methods: {
        getProjects(page) {
            axios.get(this.baseUrl + this.apiUrls.projects, {
                params: {
                    page: page
                }
            }).then(response => {
                this.projects = response.data.results.data;
            }).catch(error => {
                console.error(error);
            });
        },

        getPages() {
            axios.get(this.baseUrl + this.apiUrls.projects).then(response => {
                this.totalPages = response.data.results.last_page;
            }).catch(error => {
                console.error(error);
            });
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage += 1;
                this.getProjects(this.currentPage);
            }
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
                this.getProjects(this.currentPage);
            }
        },
    },
};
</script>


<template>
    <main class="bg-secondary flex-grow-1 py-5 d-flex flex-column">
        <div class="container row g-3 mx-auto">
            <div class="col col-md-6" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
        <div class="mt-auto text-light d-flex justify-content-center align-items-center">
            <button class="btn btn-secondary fs-3" :disabled="currentPage === 1" @click="prevPage()">
                &lt;
            </button>
            <span class="mx-2">Pagina: {{ currentPage }} / {{ totalPages }}</span>
            <button class="btn btn-secondary fs-3" :disabled="currentPage === totalPages" @click="nextPage()">
                >
            </button>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>