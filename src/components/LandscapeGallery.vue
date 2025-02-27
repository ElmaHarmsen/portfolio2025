<script setup></script>

<template>
  <section class="section" id="second-ui">
    <h1>Analysis Chart Design</h1>
    <div class="section__content">
      <img
        src="../assets/photos/analysis-chart--1.png"
        class="picture pic-a"
        alt="analysis chart"
      />
      <img
        src="../assets/photos/analysis-chart--2.png"
        class="picture pic-b"
        alt="analysis chart"
      />
      <img
        src="../assets/photos/analysis-chart--colours.png"
        class="picture pic-c"
        alt="analysis chart"
      />
      <img
        src="../assets/photos/analysis-chart--4.png"
        class="picture pic-d"
        alt="analysis chart"
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
      aspect-ratio: 3 / 2;
      width: 100%;
      height: 100%;
    }

    .pic-b,
    .pic-c {
      aspect-ratio: 1 / 1;
      height: auto;
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
