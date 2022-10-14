<template>
  <div>
    <h1 class="header">
      {{ intro.greeting }} <span class="special">{{ intro.myName }}</span>
    </h1>
    <p>{{ intro.intro }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters({ intro: 'intro' }),
  },
};
</script>

<style scoped lang="scss">
.header {
  font-size: 2rem;
  font-weight: 700;
  .special {
    color: $purple;
  }
}
</style>
