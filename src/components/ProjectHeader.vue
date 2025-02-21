<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <div class="container left"></div>
      <div class="container middle">
        <!-- variable property based on page -->
        <h1>Something</h1>
        <img src="../assets/icons/arrow--right.svg" class="icon" alt="arrow right" />
      </div>
      <div class="container right">
        <!-- variable property based on page -->
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

    .container {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(2px);
      border-right: 1px solid var(--clr-gray-40);
      height: calc(100vh - 3rem - 4rem);
      width: auto;
      padding: 1rem;
      transition: 0.2s ease;

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
      border-color: var(--clr-gray-100);
      color: var(--clr-white-10);
    }
  }
}
</style>
