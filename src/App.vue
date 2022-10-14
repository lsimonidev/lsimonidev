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
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
  color: $dusk;
}

body {
  background-color: $pink;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .container {
    max-width: 64rem;
    margin: 0 auto;
    padding: 2rem;
  }
}
</style>
