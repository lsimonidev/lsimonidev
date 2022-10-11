<template>
  <Header />
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
@import '~/scss/_variables.scss';

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
  font-family: 'Poppins', sans-serif;
  background-color: $pink;
}
</style>
