<script setup></script>

<template>
  <section class="section" id="purchase-ui">
    <div class="section__content">
      <h1>Receipt Redesign</h1>
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
        alt="purchase receipt"
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
    width: calc(100% + 2rem);
    margin-left: -1rem;

    h1 {
      grid-column-start: -1;
      grid-column-end: 1;
    }

    .picture {
      aspect-ratio: 2 / 3;
      height: 100%;
      width: 100%;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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
    }

    .pic-d {
      grid-row-start: 5;
      grid-row-end: 6;
    }

    .pic-e {
      grid-column-start: unset;
      grid-column-end: unset;
    }
  }
}
</style>
