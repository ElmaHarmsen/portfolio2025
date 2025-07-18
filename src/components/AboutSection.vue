<script setup></script>

<template>
  <section class="section" id="about-section">
    <div class="section__content"></div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  background-color: var(--clr-white);

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    height: 300px;
  }
}
</style>
