<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <h1>Process Title Here</h1>
      <div class="text-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consectetur purus,
          a lacinia leo. Proin pulvinar, lorem sit amet facilisis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consectetur purus,
          a lacinia leo. Proin pulvinar, lorem sit amet facilisis placerat, arcu ante volutpat nisi,
          nec consequat sem mi vitae nisi. Mauris odio neque, laoreet vitae enim in, cursus
          sollicitudin urna. Vivamus eget semper ligula. In at eleifend tortor, pellentesque
          interdum ligula. Pellentesque sagittis leo vitae volutpat consectetur. Vivamus fringilla
          est ac augue condimentum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consectetur purus,
          a lacinia leo. Proin pulvinar, lorem sit amet facilisis placerat, arcu ante volutpat nisi,
          nec consequat sem mi vitae nisi. Mauris odio neque, laoreet vitae enim in, cursus
          sollicitudin urna.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    .text-container {
      grid-column-start: 1;
      grid-column-end: 3;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 2rem;
      margin-top: 2rem;

      p {
        font-family: 'IBMPlexSans-Regular';
        font-size: 1rem;
      }
    }
  }
}
</style>
