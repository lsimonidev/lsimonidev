<template>
  <div>
    <h1 class="header">
      {{ about.greeting }} <span class="special">{{ about.myName }}</span>
    </h1>
    <p>{{ about.intro }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters({ about: 'about' }),
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
