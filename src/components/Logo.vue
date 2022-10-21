<template>
  <div class="logo">
    <div class="picture">
      <img :src="picture" :alt="alt" srcset="" />
      <div class="credentials">
        <h1 class="my-name">
          {{ myName }}
        </h1>
        <h2 class="title">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      default: 'Laura Simoni',
    },
    picture: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  background-color: $grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem 0;
  @include breakpoint(large) {
    flex-direction: row;
    padding: 2rem 0;
  }
  .picture {
    img {
      border-radius: 50%;
      width: 6rem;
      border: 3px solid $purple;
    }
  }
  .credentials {
    font-family: 'Fira Code', monospace;
    line-height: 2rem;
    color: $white;
    .my-name {
      font-size: 2rem;
      font-weight: 700;

      background: $gradient;

      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
</style>
