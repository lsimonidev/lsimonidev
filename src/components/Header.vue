<template>
  <header class="drac-box">
    <h1 class="greeting drac-heading drac-heading-2xl drac-text-white">
      {{ about.greeting }}
      <span class="drac-text-pink-purple">{{ about.myName }}</span>
    </h1>
    <p class="drac-text drac-text-lg drac-line-height-xl drac-text-grey-light">
      {{ about.intro }}
    </p>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ about: 'about' }),
  },
};
</script>

<style scoped lang="scss"></style>
