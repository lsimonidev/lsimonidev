<template>
  <header class="header-section">
    <section class="avatar drac-border-pink">
      <picture>
        <img :src="about.picture" alt="Laura Simoni" />
      </picture>
    </section>
    <section class="heading">
      <h1 class="drac-bg-animated">
        {{ about.myName }}
      </h1>
      <h2 class="drac-heading-xl drac-line-height-l">
        Software Engineer in Porto
      </h2>
    </section>
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
.header-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  h1 {
    font-size: 3rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    color: $greyTernary;
  }
  .avatar {
    picture {
      img {
        border: #ff80bf solid 4px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}
</style>
