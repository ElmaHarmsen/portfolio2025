<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <h1>Project Outcomes</h1>
      <div class="card-container">
        <div class="card-item">
          <div class="picture"></div>
          <div class="content">
            <h3>Something</h3>
          </div>
        </div>
        <div class="card-item">
          <div class="picture"></div>
          <div class="content">
            <h3>Something</h3>
          </div>
        </div>
        <div class="card-item">
          <div class="picture"></div>
          <div class="content">
            <h3>Something</h3>
          </div>
        </div>
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

    .card-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      .card-item {
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

      .card-item:hover {
        transform: scale(1.01) rotate(0.25deg);
        box-shadow: 0 0 10px var(--clr-gray-20);
      }
    }
  }
}
</style>
