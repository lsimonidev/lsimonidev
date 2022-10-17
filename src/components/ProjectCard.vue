<template>
  <article class="card drac-box drac-card drac-card-subtle drac-border-purple">
    <div class="card-container">
      <p
        class="year drac-heading drac-heading-l drac-text-purple drac-text-bold"
      >
        {{ card.startDate }}
      </p>
      <p class="company drac-text drac-line-height-2xl drac-text-lg">
        {{ card.company }}
      </p>
      <p
        class="position drac-heading drac-heading-xl drac-text-purple drac-text-bold"
      >
        {{ card.position }}
      </p>
      <ul class="technologies">
        <li
          v-for="technology in card.mainTechnologies"
          :key="technology.id"
          class="technology drac-text drac-text-white drac-line-height-2xl drac-text-lg"
        >
          {{ technology }}
        </li>
      </ul>
    </div>
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

<style lang="scss">
.card {
  min-width: calc(100vw - 2rem);
  scroll-snap-align: start;
  padding: 1rem;
  .technologies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;

    .technology {
      margin-right: 0.5rem;
      &::before {
        content: '#';
      }
    }
  }
}
</style>
