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
      <div class="card-container">
        <div class="process-item">
          <div class="picture"></div>
          <div class="content">
            <h3>Something</h3>
          </div>
        </div>
        <div class="process-item">
          <div class="picture"></div>
          <div class="content">
            <h3>Something</h3>
          </div>
        </div>
        <div class="process-item">
          <div class="picture"></div>
          <div class="content">
            <h3>Something</h3>
          </div>
        </div>
      </div>
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
    display: flex;
    flex-flow: column nowrap;
    row-gap: 4rem;

    .text-container {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 2rem;

      p {
        font-family: 'IBMPlexSans-Regular';
        font-size: 1rem;
      }
    }

    .card-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin: 4rem 0;

      .process-item {
        display: flex;
        flex-flow: column nowrap;
        border: 1px solid var(--clr-gray-40);
        aspect-ratio: 3 / 4;
        transition: 0.2s ease;

        .picture {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(2px);
          border-bottom: 1px solid var(--clr-gray-40);
          width: 100%;
          aspect-ratio: 1 / 1;
        }

        .content {
          flex-grow: 1;
          background-color: var(--clr-white);
          padding: 1rem;
        }
      }

      .process-item:hover {
        transform: scale(1.01) rotate(0.25deg);
        box-shadow: 0 0 10px var(--clr-gray-20);
      }
    }
  }
}
</style>
