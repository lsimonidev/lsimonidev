<template>
  <div v-for="project in projects" :key="project.id">
    <project-card :card="project" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectCard from './ProjectCard';
export default {
  components: { ProjectCard },
  computed: {
    ...mapGetters({ projects: 'projects' }),
  },
};
</script>

<style></style>
