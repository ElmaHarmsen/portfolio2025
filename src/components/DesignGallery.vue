<script setup></script>

<template>
  <section class="section" id="ui-gallery">
    <div class="section__content">
      <img src="../assets/photos/boarding-pass--ui.png" class="picture pic-a" />
      <img
        src="../assets/photos/festival-countdown--ui.png"
        class="picture pic-b"
        alt="analysis chart"
      />
      <img
        src="../assets/photos/gradient-picker--ui.png"
        class="picture pic-c"
        alt="analysis chart"
      />
      <img src="../assets/photos/boarding-pass--ui-2.png" class="picture pic-d" />
      <img src="../assets/photos/calculator--ui.png" class="picture pic-e" />
      <img src="../assets/photos/dj-player--ui.png" class="picture pic-f" />
      <img src="../assets/photos/popup-overlay--ui.png" class="picture pic-g" />
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

    .picture {
      background-color: var(--clr-white);
      aspect-ratio: 2 / 3;
      width: 100%;
      height: 100%;
    }

    .pic-d,
    .pic-g {
      aspect-ratio: 1 / 1;
      height: auto;
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
