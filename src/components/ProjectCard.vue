<template>
  <article
    class="drac-box drac-card drac-card-subtle drac-border-grey drac-p-sm"
    id="card"
  >
    <p
      class="year drac-heading drac-heading-sm drac-text-purple drac-text-bold"
    >
      {{ card.startDate }}
    </p>
    <p class="project-name drac-text drac-line-height-l drac-text-sm">
      Project: {{ card.projectName }}
    </p>
    <p
      class="position drac-heading drac-heading-md drac-text-purple drac-text-bold"
    >
      {{ card.position }}
    </p>
    <ul class="technologies drac-list">
      <li
        v-for="technology in card.mainTechnologies"
        :key="technology.id"
        class="technology drac-text drac-text-white drac-line-height drac-text-sm"
      >
        {{ technology }}
      </li>
    </ul>
  </article>
</template>

<script>
//import { mapGetters } from 'vuex';
export default {
  props: {
    card: { type: Object, default: () => {} },
  },
};
</script>

<style lang="scss" scoped>
#card {
  min-width: calc(100vw - 2rem);
  scroll-snap-align: start;
  @media screen and (min-width: 600px) {
    min-width: 300px;
  }

  .project-name {
    height: 3rem;
    display: flex;
    align-items: center;
  }
  .technologies {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    margin-top: 1rem;
  }

  &:hover {
    border-color: var(--accentColor);
    border-radius: var(--rounded-lg);
    box-shadow: -2px var(--glow-spacing-x) var(--glow-spacing-y)
      var(--accentColor);
    z-index: 100;
  }
}
</style>
