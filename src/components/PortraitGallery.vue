<script setup></script>

<template>
  <section class="section" id="first-ui">
    <h1>Steam Purchase Receipt Redesign</h1>
    <div class="section__content">
      <img
        src="../assets/photos/purchase-receipt--steam.jpg"
        class="picture pic-a"
        alt="purchase receipt"
      />
      <img
        src="../assets/photos/purchase-receipt--1.png"
        class="picture pic-b"
        alt="purchase receipt"
      />
      <img
        src="../assets/photos/purchase-receipt--2.png"
        class="picture pic-c"
        alt="purchase receipt"
      />
      <img
        src="../assets/photos/purchase-receipt--colours.png"
        class="picture pic-d"
        alt="purchase receipt colour sceme"
      />
      <img
        src="../assets/photos/purchase-receipt--3.png"
        class="picture pic-e"
        alt="purchase receipt colour sceme"
      />
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
      aspect-ratio: 2 / 3;
      height: 100%;
      width: 100%;
    }

    .pic-d,
    .pic-e {
      aspect-ratio: 1 / 1;
      height: auto;
    }

    .pic-e {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>
