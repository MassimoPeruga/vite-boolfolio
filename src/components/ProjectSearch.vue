<script>
import { store } from '../assets/js/_partials/_store';
export default {
    name: 'Search',
    data() {
        return {
            store,
        };
    },
    props: ['errors',],
    emits: ['searchProject'],
    methods: {
        search() {
            store.projects.currentPage = 1;
            this.$router.push({
                name: 'Projects',
                query: { page: store.projects.currentPage, key: store.projects.searchKey }
            })
            this.$emit('searchProject');
        },
    },
};
</script>

<template>
    <div class="container mb-4">
        <form action="" @submit.prevent="search" class="row g-2">
            <div class="col-6">
                <label for="search-key" class="form-label text-light">Cerca un progetto</label>
                <input type="text" v-model="store.projects.searchKey" class="form-control" id="search-key"
                    placeholder="Cerca un progetto">
            </div>
            <div class="col-12">
                <button class="btn btn-primary">Cerca</button>
            </div>
        </form>
        <div v-for="(error, index) in errors.key" :key="index" class="alert alert-danger m-2" role="alert">
            {{ error }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>