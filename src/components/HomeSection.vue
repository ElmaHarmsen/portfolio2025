<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <button>
        <h3>Click me</h3>
        <img src="../assets/icons/cursor.svg" class="icon" alt="cursor" />
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: start;

  &__content {
    margin-bottom: 64px;

    button {
      display: flex;
      flex-flow: row nowrap;
      align-items: start;
      column-gap: 32px;
      background-color: var(--clr-blue-70);
      color: var(--clr-white);
      padding: 1rem;
      border: none;
      height: 5rem;

      .icon {
        width: 1.5rem;
        height: 1.5rem;
        color: (var(--clr-white));
      }
    }
  }
}
</style>
