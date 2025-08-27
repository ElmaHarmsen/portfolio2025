<script setup></script>

<template>
  <section class="section">
    <div class="container">
      <img class="img" src="../assets/photos/bankist-coverimage.png" alt="" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  height: calc(100vh - 7rem);
  padding-top: 0 !important;

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
  .section {
    grid-column-start: 1;
    grid-column-end: 2;
    background-image: url('../assets/photos/bankist-coverimage.png');
    background-size: cover;
    background-position: 25%;

    .container {
      grid-template-columns: repeat(1, 1fr);
      width: 100vw;

      .img {
        display: none;
      }
    }
  }
}
</style>
