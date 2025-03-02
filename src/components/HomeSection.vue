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
      <!-- align main button with 1/3 of card grid -->
      <button class="main-button" @click="scrollIntoView('intro-section')">
        <h3>Click to view portfolio</h3>
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 4rem;
    margin-bottom: 10rem;
    width: 100%;

    .main-button {
      display: inline-flex;
      justify-content: start;
      column-gap: 2rem;
      background-color: var(--clr-purple-60);
      color: var(--clr-white);
      font-size: 1rem;
      padding: 1rem;
      border: none;
      height: 5rem;
      transition: 0.1s ease;
      width: 100%;

      .icon {
        width: 1rem;
        height: 1rem;
        color: (var(--clr-white));
      }
    }

    .main-button:hover {
      cursor: pointer;
      background-color: var(--clr-purple-70);
    }
  }
}
</style>
