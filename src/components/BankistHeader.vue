<script setup></script>

<template>
  <section class="section">
    <img class="img" src="../assets/photos/bankist-coverimage.png" alt="" />
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  height: calc(100vh - 7rem);
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 32px;
  padding-top: 0 !important;

  .img {
    grid-column-start: 4;
    grid-column-end: 14;
    width: calc(100% + 2rem);
    margin-left: -1rem;
    margin-top: 2.5rem;
    align-self: center;
    aspect-ratio: 16 / 9;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
}
</style>
