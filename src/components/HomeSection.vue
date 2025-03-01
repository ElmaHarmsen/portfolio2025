<script setup>
const scrollIntoView = (id) => {
  if (!id) return
  const sectionElement = document.getElementById(id)
  console.log(id)
  if (!sectionElement) return
  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
</script>

<template>
  <section class="section">
    <div class="section__content">
      <button @click="scrollIntoView('intro-section')">
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
    margin-bottom: 10rem;

    button {
      display: flex;
      flex-flow: row nowrap;
      align-items: start;
      column-gap: 1rem;
      background-color: var(--clr-purple-60);
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
