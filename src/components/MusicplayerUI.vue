<script setup></script>

<template>
  <section class="section" id="musicplayer-ui">
    <div class="section__content">
      <img src="../assets/photos/dj-player--ui.png" class="picture pic-a" alt="analysis chart" />
      <div class="container">
        <img
          src="../assets/photos/popup-overlay-1--ui.png"
          class="picture pic-b"
          alt="analysis chart"
        />
        <img
          src="../assets/photos/popup-overlay--ui.png"
          class="picture pic-c"
          alt="analysis chart"
        />
      </div>
      <img
        src="../assets/photos/dj-player-menu--ui.png"
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
    grid-template-rows: repeat(2, 1fr);
    gap: 32px;
    width: calc(100% + 2rem);
    margin-left: -1rem;

    .container {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 2rem;
    }

    .picture {
      aspect-ratio: 3 / 2;
      width: 100%;
      height: 100%;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    .pic-a,
    .pic-d {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .pic-b,
    .pic-c {
      aspect-ratio: 1 / 1;
      height: auto;
    }
  }
}
</style>
