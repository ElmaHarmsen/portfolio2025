<script setup>
// import { RouterLink, RouterView } from 'vue-router'

const scrollIntoView = (id) => {
  if (!id) return
  const sectionElement = document.getElementById(id)
  console.log(id)
  if (!sectionElement) return
  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
</script>

<template>
  <section class="navigation">
    <div class="navigation__content">
      <h2 class="name">Elma Harmsen</h2>
      <span class="divider"></span>
      <div class="item" @click="scrollIntoView('process-section')">
        <h4>Selected Works</h4>
        <img src="../assets/icons/chevron--down.svg" class="icon" alt="chevron down" />
        <!-- <img src="../assets/icons/chevron--up.svg" alt="chevron up" /> -->
      </div>
      <div class="item" @click="scrollIntoView('about-section')">
        <h4>About Me</h4>
      </div>
      <div class="item" @click="scrollIntoView('footer-section')">
        <h4>Contact</h4>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.navigation {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 2rem;
  height: 3rem;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: var(--clr-white);
  border-bottom: 1px solid var(--clr-divider-light);

  &__content {
    grid-column-start: 4;
    grid-column-end: 14;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    .name {
      margin-right: 1rem;
    }

    .divider {
      display: block;
      width: 1px;
      height: calc(100% - (2 * 0.75rem));
      background-color: var(--clr-divider-light);
      margin: 0 0.5rem 0 1rem;
    }

    .item {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      column-gap: 0.5rem;
      height: 100%;
      padding: 0 1rem;
      transition: 0.1s ease;

      h4 {
        color: var(--clr-gray-70);
        transition: 0.1s ease;
      }

      .icon {
        width: 1rem;
        height: 1rem;
        color: var(--clr-gray-70);
      }
    }

    .item:hover {
      cursor: pointer;
      background-color: var(--clr-gray-50);
      h4 {
        color: var(--clr-gray-100);
      }
    }
  }
}
</style>
