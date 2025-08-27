<script setup></script>

<template>
  <section class="section" id="musicplayer-ui">
    <div class="section__content">
      <h1>Musicplayer</h1>
      <img src="../assets/photos/dj-player--ui.png" class="picture pic-a" alt="" />
      <img src="../assets/photos/dj-player-menu--ui.png" class="picture pic-b" alt="" />
      <img src="../assets/photos/popup-overlay-1--ui.png" class="picture pic-c" alt="" />
      <img src="../assets/photos/popup-overlay--ui.png" class="picture pic-d" alt="" />
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
    grid-template-rows: repeat(2, auto);
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

    .pic-a {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .pic-b {
      grid-column-start: 2;
      grid-column-end: 4;
    }

    .pic-c {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
      align-self: flex-end;
    }

    .pic-d {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
      align-self: flex-start;
    }

    .pic-c,
    .pic-d {
      aspect-ratio: 1 / 1;
      height: auto;
    }
  }
}

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;

    &__content {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, auto);
      width: calc(100vw - (2 * 2rem));
      margin: 0 2rem;

      h1 {
        text-align: center;
      }

      .pic-a,
      .pic-b,
      .pic-c,
      .pic-d {
        grid-column-start: unset;
        grid-column-end: unset;
        grid-row-start: unset;
        grid-row-end: unset;
      }
    }
  }
}
</style>
