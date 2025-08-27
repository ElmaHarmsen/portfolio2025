<script setup></script>

<template>
  <section class="section" id="chart-ui">
    <div class="section__content">
      <h1>Analysis Chart</h1>
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
  padding: 10rem 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: calc(100% + 2rem);
    margin-left: -1rem;

    h1 {
      grid-column-start: -1;
      grid-column-end: 1;
    }

    .picture {
      aspect-ratio: 3 / 2;
      width: 100%;
      height: 100%;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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

    .pic-b {
      align-self: flex-end;
    }

    .pic-d {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;

    &__content {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, auto);
      width: calc(100vw - (2 * 2rem));
      margin: 0 2rem;

      h1 {
        text-align: center;
      }

      .pic-a,
      .pic-d {
        grid-column-start: unset;
        grid-column-end: unset;
      }

      .pic-c {
        grid-row-start: 5;
        grid-row-end: 6;
      }
    }
  }
}
</style>
