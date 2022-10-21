<template>
  <Logo
    :myName="about.myName"
    :picture="about.picture"
    title="Software Engineer in Porto"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo';
export default {
  components: { Logo },
  computed: {
    ...mapGetters({ about: 'about' }),
  },
};
</script>

<style lang="scss" scoped></style>
