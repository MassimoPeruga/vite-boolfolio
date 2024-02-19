<script>
import { store } from '../assets/js/_partials/_store';
export default {
    name: 'Header',
    data() {
        return {
            store,
            routes: [{ name: 'HomePage', query: { page: '', key: '' } }, { name: 'Projects', query: { page: 1, key: '' } }],
        };
    },
};
</script>

<template>
    <header class="bg-dark text-light">
        <div class="container mx-auto d-flex justify-content-between align-items-center py-4">
            <h2 class="m-0">Boolfolio</h2>
            <ul class="list-unstyled d-flex m-0">
                <li class="px-2" v-for="route in routes">
                    <router-link :to="{ name: route.name, query: { page: route.query.page, key: route.query.key } }">{{
                        route.name }}</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>

