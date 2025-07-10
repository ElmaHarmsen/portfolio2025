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
  <section class="section" id="home-section">
    <div class="section__content">
      <button class="main-button" @click="scrollIntoView('projects-section')">
        <h3>Click to view projects</h3>
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: calc(100% + (2 * 2rem));
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: start;
  padding-top: 0 !important;

  &__content {
    margin: 5rem 0 2rem -2rem;
    background-image: url('../assets/cover-image.png');
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding: 0 2rem;
    // width: calc(100% + (2 * 2rem));
    width: 100%;
    height: 100%;

    .main-button {
      grid-column-start: 1;
      grid-column-end: 2;
      align-self: flex-end;
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
      margin-bottom: 10rem;

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
