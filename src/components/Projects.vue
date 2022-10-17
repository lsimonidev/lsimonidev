<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ projects: 'projects' }),
  },
};
</script>

<style></style>
