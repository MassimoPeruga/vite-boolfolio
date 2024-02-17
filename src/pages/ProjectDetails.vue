<script>
import axios from 'axios';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import LoaderComponent from '../components/LoaderComponent.vue';

export default {
    name: 'ProjectDetails',
    data() {
        return {
            project: {},
            badge: {
                text: '',
                class: '',
            },
            baseUrl: 'http://127.0.0.1:8000',
            apiUrls: {
                projects: '/api/projects',
                img: '/storage/',
            },
            loading: false,
        };
    },
    components: {
        AppHeader,
        AppFooter,
        LoaderComponent,
    },
    created() {
        this.getProject();
        this.$watch(() => this.$route.params, (toParams, previusParams) => { this.getProject(); });
    },
    mounted() {
        this.setBadge();
    },
    methods: {
        getProject() {
            this.loading = true;
            axios.get(this.baseUrl + this.apiUrls.projects + '/' + this.$route.params.slug)
                .then((response) => {
                    if (response.data.success) {
                        this.project = response.data.result;
                    } else {
                        this.$router.push({ name: 'NotFound' })
                    }
                })
                .catch((error) => {
                    console.error(error);
                }).finally(() => {
                    this.loading = false;
                });
        },

        setBadge() {
            if (this.project.is_public) {
                this.badge.text = 'Pubblica';
                this.badge.class = 'text-bg-success';
            } else {
                this.badge.text = 'Privata';
                this.badge.class = 'text-bg-secondary';
            }
        },
    },
    computed: {
        isPublic() {
            if (this.project.is_public) {
                return 'Pubblica';
            } else {
                return 'Privata';
            }
        }
    },
};
</script>

<template>
    <AppHeader />
    <LoaderComponent v-if="loading" />
    <main class="bg-secondary flex-grow-1 py-5 d-flex flex-column" v-else>
        <div class="container">
            <div class="card">
                <img :src="baseUrl + apiUrls.img + project.img" :alt="project.name + ' thumb'" class="card-img-top mx-auto"
                    v-if="project.img">
                <div class="card-body">
                    <h1 class="card-title text-center">{{ project.name }}</h1>
                    <hr>
                    <div class="card-text row">
                        <div class="col-3 fs-4" v-if="project.technologies.length > 0">
                            <h5>Tecnologie usate:</h5>
                            <ul>
                                <li v-for="technology in project.technologies">{{ technology.title }}</li>
                            </ul>
                        </div>
                        <div class="col">
                            <div class="text-center my-4 d-flex justify-content-evenly fs-4">
                                <div v-if="project.repository">
                                    <span>Repo:</span>
                                    <a :href="project.repo_url" class="mx-2">{{ project.repository }}</a>
                                    <span class="fs-6 badge" :class="badge.class">{{ badge.text }}</span>
                                </div>
                                <div v-if="project.type">
                                    <span>Tipo:
                                        <strong> {{ project.type.title }}</strong>
                                    </span>
                                </div>
                            </div>
                            <p v-if="project.assignment" class="fs-5">
                                {{ project.assignment }}
                            </p>
                        </div>
                    </div>
                    <hr>
                    <p class="card-text text-end">
                        <small class="text-body-secondary">Ultimo Aggiornamento: {{ project.updated_at }}</small>
                    </p>
                </div>
            </div>
        </div>
    </main>
    <AppFooter />
</template>

<style lang="scss" scoped>
img {
    max-width: 75vh;
}
</style>