<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'DefaultTemplate',

  data() {
    return {
      text: 'Template VueJS',
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <h1>{{ text }}</h1>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss"></style>