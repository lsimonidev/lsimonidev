<template>
  <div class="container">
    <Header />
    <projects />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Projects from './components/Projects.vue';
import 'dracula-ui/styles/dracula-ui.css';

export default {
  name: 'App',
  components: {
    Header,
    Projects,
  },
};
</script>

ProjectCard
<style lang="scss">
body {
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    @media screen and (min-width: 64rem) {
      padding: 2rem;
    }
  }
}
</style>
