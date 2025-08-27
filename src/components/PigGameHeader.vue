<script setup></script>

<template>
  <section class="section-wide">
    <div class="container">
      <img class="img" src="../assets/photos/piggame-coverimage.png" alt="" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  height: calc(100vh - 7rem);

  .container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;
    height: 100%;

    .img {
      grid-column-start: 4;
      grid-column-end: 14;
      width: calc(100% + 2rem);
      margin-left: -1rem;
      align-self: center;
      aspect-ratio: 16 / 9;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
  }
}

@media (max-width: 450px) {
  .section-wide {
    grid-column-start: 1;
    grid-column-end: 2;

    .container {
      grid-template-columns: repeat(1, 1fr);
      width: 100vw;

      .img {
        grid-column-start: 1;
        grid-column-end: 2;
        width: calc(100% - 4rem);
        margin: 0 2rem;
      }
    }
  }
}
</style>
