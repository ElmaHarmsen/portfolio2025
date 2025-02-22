<script setup></script>

<template>
  <section class="section">
    <h1>I'm a Design Enthusiast</h1>
    <div class="section__content">
      <div class="about-item">
        <div class="picture"></div>
        <div class="content">
          <h3>Something</h3>
        </div>
      </div>
      <div class="about-item">
        <div class="picture"></div>
        <div class="content">
          <h3>Something</h3>
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-top: 4rem;

    .about-item {
      display: flex;
      flex-flow: column nowrap;
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 3 / 4;

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
  }
}
</style>
