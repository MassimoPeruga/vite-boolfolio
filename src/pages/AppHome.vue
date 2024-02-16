<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'HomePage',
    components: {
        AppHeader,
        AppFooter,
    }
};
</script>

<template>
    <AppHeader />
    <main class="bg-secondary flex-grow-1 py-5">
        <div class="container mx-auto text-light">
            <h2>HomePage</h2>
        </div>
    </main>
    <AppFooter />
</template>

<style lang="scss" scoped></style>