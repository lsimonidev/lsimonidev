<template>
  <div class="projects drac-scrollbar-grey">
    <project-card
      v-for="project in projects"
      :key="project.id"
      :card="project"
    />
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

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 64rem;
  width: 100vw;
  overflow: scroll;
  scroll-snap-type: x mandatory;
}
</style>
