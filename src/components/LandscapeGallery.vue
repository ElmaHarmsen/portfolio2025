<script setup></script>

<template>
  <section class="section">
    <h1>Analysis Chart UI</h1>
    <div class="section__content">
      <div class="picture pic-a"></div>
      <div class="picture pic-b"></div>
      <div class="picture pic-c"></div>
      <div class="picture pic-d"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  padding-top: 10rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 4rem;

    .picture {
      background-color: var(--clr-white);
      aspect-ratio: 4 / 3;
    }

    .pic-b,
    .pic-c {
      aspect-ratio: 1 / 1;
    }

    .pic-a {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .pic-d {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>
