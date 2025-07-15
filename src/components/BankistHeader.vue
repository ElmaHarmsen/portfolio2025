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
    <button class="main-button" @click="scrollIntoView('bankist-project')">
      <h3>About the project</h3>
    </button>
    <img class="img" src="../assets/photos/bankist-coverimage.png" alt="" />
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 32px;
  height: 100vh;
  padding-top: 0 !important;

  .main-button {
    grid-column-start: 4;
    grid-column-end: 7;
    align-self: flex-end;
    margin-bottom: 10rem;
  }

  .img {
    grid-column-start: 9;
    grid-column-end: 17;
    width: calc(100% - 1rem);
    margin-left: -1rem;
    margin-right: 2rem;
    align-self: center;
    background-color: var(--clr-white);
    padding: 0.75rem;
    border-radius: 0.75rem;
  }
}
</style>
