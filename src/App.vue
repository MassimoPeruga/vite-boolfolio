<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
export default {
  name: 'App',

  data() {
    return {
      projects: [],
      baseUrl: 'http://127.0.0.1:8000',
      apiUrls: {
        projects: '/api/projects',
      },
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  methods: {
    getProjects() {
      axios.get(this.baseUrl + this.apiUrls.projects)
        .then(response => { console.log(response.data.results.data); })
        .catch(error => { console.error(error); });
    }
  },
  created() {
    this.getProjects();
  }
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss"></style>