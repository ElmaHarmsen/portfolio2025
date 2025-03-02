<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <div class="container left"></div>
      <div class="container middle">
        <h1>Something</h1>
        <img src="../assets/icons/arrow--right.svg" class="icon" alt="arrow right" />
      </div>
      <div class="container right">
        <h1>Something</h1>
        <img src="../assets/icons/arrow--right.svg" class="icon" alt="arrow right" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  margin-top: 3rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 0;
    background-image: url('../assets/web-dev-header.png');
    background-size: cover;

    .container {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      border-right: 1px solid var(--clr-gray-80);
      height: calc(100vh - 3rem - 4rem);
      width: auto;
      padding: 1rem;
      transition: 0.2s ease;

      h1 {
        color: var(--clr-white-10);
      }

      .icon {
        width: 2rem;
        height: 2rem;
        align-self: end;
      }
    }
    .left {
      grid-column-start: 1;
      grid-column-end: 9;
    }

    .middle {
      grid-column-start: 9;
      grid-column-end: 13;
    }

    .right {
      grid-column-start: 13;
      grid-column-end: 17;
      border: none;
    }

    .middle:hover,
    .right:hover {
      cursor: pointer;
      background-color: var(--clr-gray-100);
      color: var(--clr-white-10);
    }
  }
}
</style>
