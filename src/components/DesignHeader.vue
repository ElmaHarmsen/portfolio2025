<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <img src="../assets/photos/boarding-pass--ui.png" class="picture pic-a" alt="fynder screen" />
      <img
        src="../assets/photos/festival-countdown--ui.png"
        class="picture pic-b"
        alt="fynder logo"
      />
      <img
        src="../assets/photos/gradient-picker--ui.png"
        class="picture pic-c"
        alt="fynder screen"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  height: calc(100vh - 7rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding-top: 0 !important;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: calc(100% + 2rem);
    margin-left: -1rem;

    .container {
      grid-column-start: 1;
      grid-column-end: 2;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      row-gap: 1rem;
    }

    .picture {
      width: 100%;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    .pic-a {
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .pic-b {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .pic-c {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
}
</style>
