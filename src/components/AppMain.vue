<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'Main',
    props: ['projects',],
    components: { ProjectCard, }
};
</script>

<template>
    <main class="bg-secondary flex-grow-1 py-5">
        <div class="container row g-3 mx-auto">
            <div class="col col-md-6" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>