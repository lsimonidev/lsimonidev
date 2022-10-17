<template>
  <header>
    <h1 class="greeting">
      {{ about.greeting }} <span class="special">{{ about.myName }}</span>
    </h1>
    <p>{{ about.intro }}</p>
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

<style scoped lang="scss">
.greeting {
  font-size: 2rem;
  font-weight: 700;
  .special {
    color: $purple;
  }
}
</style>
