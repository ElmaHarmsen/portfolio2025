<script setup></script>

<template>
  <section class="section" id="project-gallery">
    <div class="section__content">
      <img
        src="../assets/photos/project-1/profile-filled.png"
        class="picture pic-a"
        alt="fynder screen"
      />
      <img src="../assets/photos/project-1/profile.png" class="picture pic-b" alt="fynder screen" />
      <img
        src="../assets/photos/project-1/connections.png"
        class="picture pic-c"
        alt="fynder screen"
      />
      <img src="../assets/photos/project-1/events.png" class="picture pic-d" alt="fynder screen" />
      <img
        src="../assets/photos/project-1/events-extended.png"
        class="picture pic-e"
        alt="fynder screen"
      />

      <img
        src="../assets/photos/project-1/new-event.png"
        class="picture pic-f"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/fynder-logo.png"
        class="picture pic-g"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/infographic.png"
        class="picture pic-h"
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
  padding: 10rem 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: calc(100% + 2rem);
    margin-left: -1rem;

    .picture {
      width: 100%;
      height: 100%;
      aspect-ratio: 2 / 3;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    .pic-g,
    .pic-h {
      aspect-ratio: 1 / 1;
      height: auto;
    }

    .pic-g {
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
      grid-template-rows: repeat(7, auto);
      width: calc(100vw - (2 * 2rem));
      margin: 0 2rem;

      .pic-g {
        display: none;
      }
    }
  }
}
</style>
