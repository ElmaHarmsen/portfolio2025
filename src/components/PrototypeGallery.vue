<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <img src="../assets/photos/project-1/profile-lofi.jpeg" class="picture" alt="fynder screen" />
      <img src="../assets/photos/project-1/event-lofi.jpeg" class="picture" alt="fynder screen" />
      <img src="../assets/photos/project-1/events-lofi.jpeg" class="picture" alt="fynder screen" />
      <img
        src="../assets/photos/project-1/infographic-lofi.jpeg"
        class="picture"
        alt="fynder screen"
      />
      <img src="../assets/photos/project-1/all-lofi.jpeg" class="picture" alt="fynder screen" />
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
      aspect-ratio: 2 / 3;
      width: 100%;
      height: 100%;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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
    }
  }
}
</style>
