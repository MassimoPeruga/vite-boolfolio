<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

};
</script>

<template>
  <div class="d-flex flex-column vh-100">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss"></style>