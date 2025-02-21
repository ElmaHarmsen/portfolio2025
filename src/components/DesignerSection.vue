<script setup></script>

<template>
  <section class="section">
    <h1>I'm a UI & UX Designer</h1>
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
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 4rem;

    .about-item {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      background-color: var(--clr-white);
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 3 / 4;

      .picture {
        background-color: var(--clr-blue-10);
        border-bottom: 1px solid var(--clr-gray-40);
        width: 100%;
        aspect-ratio: 1 / 1;
      }

      .content {
        padding: 1rem;
      }
    }
  }
}
</style>
