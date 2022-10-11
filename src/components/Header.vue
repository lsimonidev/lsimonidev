<template>
  <div>
    <h1 class="header">Hi. I'm <span class="special">Laura Simoni</span></h1>
    <p>I'm a Web Developer</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
@import '~/scss/_variables.scss';
.header {
  font-size: 2rem;
  font-weight: 700;
  .special {
    color: $purple;
  }
}
</style>
