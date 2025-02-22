<script setup></script>

<template>
  <section class="section">
    <h1>Purchase Receipt UI</h1>
    <div class="section__content">
      <div class="picture pic-a"></div>
      <div class="picture pic-b"></div>
      <div class="picture pic-c"></div>
      <div class="picture pic-d"></div>
      <div class="picture pic-e"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 4rem;

    .picture {
      background-color: var(--clr-white);
      aspect-ratio: 2 / 3;
    }

    .pic-d,
    .pic-e {
      aspect-ratio: 1 / 1;
    }

    .pic-e {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>
