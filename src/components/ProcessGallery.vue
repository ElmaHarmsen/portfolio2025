<script setup></script>

<template>
  <section class="section" id="process-gallery">
    <div class="section__content">
      <img
        src="../assets/photos/project-1/fashion-habits.png"
        class="picture pic-a"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/discard-habits.png"
        class="picture pic-b"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/fogg-model.png"
        class="picture pic-c"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/user-stories.png"
        class="picture pic-d"
        alt="fynder screen"
      />
      <img src="../assets/photos/project-1/moscow.png" class="picture pic-e" alt="fynder screen" />
      <img
        src="../assets/photos/project-1/navigation-map.png"
        class="picture pic-f"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/ideation.png"
        class="picture pic-g"
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
  padding-top: 0 !important;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding: 10rem 0;
    width: calc(100% + 2rem);
    margin-left: -1rem;

    .picture {
      aspect-ratio: 1 / 1;
      width: 100%;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;

    &__content {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, auto);
      width: calc(100vw - (2 * 2rem));
      margin: 0 2rem;

      .pic-e,
      .pic-f {
        grid-column-start: unset;
        grid-column-end: unset;
      }
    }
  }
}
</style>
