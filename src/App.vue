<template>
  <div class="container">
    <Navigation />
    <Projects />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Projects from './components/Projects.vue';
import 'dracula-ui/styles/dracula-ui.css';

export default {
  name: 'App',
  components: {
    Navigation,
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
  }
}
</style>
