<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <div class="picture pic-a"></div>
      <div class="picture pic-b"></div>
      <div class="picture pic-c"></div>
      <div class="picture pic-d"></div>
      <div class="picture pic-e"></div>
      <div class="picture pic-f"></div>
      <div class="picture pic-g"></div>
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

    .picture {
      background-color: var(--clr-white);
      aspect-ratio: 2 / 3;
    }

    .pic-d {
      aspect-ratio: 1 / 1;
    }

    .pic-e,
    .pic-f {
      aspect-ratio: 4 / 3;
    }

    .pic-e {
      grid-column-start: 2;
      grid-column-end: 4;
    }

    .pic-f {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
}
</style>
