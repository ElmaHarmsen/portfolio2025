<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <img
        src="../assets/photos/project-1/profile-lofi.jpeg"
        class="picture pic-a"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/event-lofi.jpeg"
        class="picture pic-b"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/events-lofi.jpeg"
        class="picture pic-c"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/infographic-lofi.jpeg"
        class="picture pic-d"
        alt="fynder screen"
      />
      <img
        src="../assets/photos/project-1/all-lofi.jpeg"
        class="picture pic-d"
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
  padding-top: 10rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    .picture {
      aspect-ratio: 2 / 3;
      width: 100%;
      height: 100%;
    }

    .pic-e {
      aspect-ratio: 1 /1;
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>
