<script>
export default {
    name: 'NotFound',
};
</script>

<template>
    <div class="vh-100 vw-100 bg-dark text-light d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h3>Not Found</h3>
        <router-link :to="{ name: 'HomePage' }" class="mt-5 fs-2">Torna alla Home</router-link>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 100px;
}
</style>