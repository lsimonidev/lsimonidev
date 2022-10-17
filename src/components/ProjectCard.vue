<template>
  <article class="card drac-box drac-card drac-card-subtle drac-border-purple">
    <header>
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
      <div>
        <span
          v-for="technology in card.mainTechnologies"
          :key="technology.id"
          class="description drac-text drac-text-white drac-line-height-2xl drac-text-lg"
        >
          {{ technology }}
        </span>
      </div>
    </header>
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

<style>
.card {
  max-width: 300px;
}
</style>
