<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            imgUrl: 'http://127.0.0.1:8000/storage/',
        };
    },
    props: ['project',],
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
    <div class="card h-100">
        <div class="row g-0">
            <div :class="{ 'd-none': !project.img, 'col-md-4': project.img }">
                <img :src="imgUrl + project.img" class="img-fluid rounded-start" :alt="project.name + ' thumb'">
            </div>
            <div :class="{ 'col': !project.img, 'col-md-8': project.img }">
                <div class="card-body">
                    <h3 class="card-title">
                        {{ project.name }}
                    </h3>
                    <p class="card-text fs-5">
                        <span>Repo: </span>
                        <a :href="project.repo_url">{{ project.repository }}</a>
                        <span class="fs-6">{{ isPublic }}</span>
                        <span class="d-flex mt-2">Tipo:
                            <strong class="ms-1"> {{ project.type.title }}</strong>
                            <router-link :to="{ name: 'ProjectDetails', params: { slug: project.slug } }"
                                class="btn btn-sm btn-info ms-auto">Maggiori dettagli</router-link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>