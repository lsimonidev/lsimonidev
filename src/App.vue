<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  background-color: $pink;

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    @media screen and (min-width: 64rem) {
      padding: 2rem;
    }
  }
}
</style>
