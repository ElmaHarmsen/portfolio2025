<script setup>
import { ref } from 'vue'
const mainNavOpen = ref(false)

const scrollIntoView = (id) => {
  if (!id) return
  const sectionElement = document.getElementById(id)
  if (!sectionElement) return
  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
</script>

<template>
  <section class="navigation" id="main-nav">
    <div class="navigation__content">
      <div class="nav-item__container">
        <RouterLink to="/" @click="scrollIntoView('home-section')">
          <div class="item-container">
            <h4 class="name">Elma Harmsen</h4>
          </div>
        </RouterLink>
      </div>
      <div class="nav-items">
        <div class="nav-item" @click="scrollIntoView('intro-section')">
          <div class="nav-item__container">
            <div class="item-container">
              <h4 class="item">About Me</h4>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-item__container">
            <div class="item-container" @click="scrollIntoView('projects-section')">
              <h4 class="item">Selected Projects</h4>
            </div>
            <div class="icon-container" @click="mainNavOpen = !mainNavOpen" v-if="!mainNavOpen">
              <img src="../assets/icons/chevron--down.svg" class="icon" alt="chevron down" />
            </div>
            <div class="icon-container" @click="mainNavOpen = !mainNavOpen" v-if="mainNavOpen">
              <img src="../assets/icons/chevron--up.svg" class="icon" alt="chevron up" />
            </div>
          </div>
          <div class="submenu" v-if="mainNavOpen">
            <RouterLink to="/uidesigns">
              <div class="submenu-item">
                <h4>Daily UI Desings</h4>
              </div>
            </RouterLink>
            <RouterLink to="/project">
              <div class="submenu-item">
                <h4>Fynder Project</h4>
              </div>
            </RouterLink>
            <RouterLink to="/maptyproject">
              <div class="submenu-item">
                <h4>Mapty</h4>
              </div>
            </RouterLink>
            <RouterLink to="/piggame">
              <div class="submenu-item">
                <h4>Pig Game</h4>
              </div>
            </RouterLink>
            <RouterLink to="/bankistproject">
              <div class="submenu-item">
                <h4>Bankist Project</h4>
              </div>
            </RouterLink>
            <RouterLink to="/forkifyproject">
              <div class="submenu-item">
                <h4>Forkify Project</h4>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="nav-item" @click="scrollIntoView('skills-section')">
          <div class="nav-item__container">
            <div class="item-container">
              <h4 class="item">Skills & Services</h4>
            </div>
          </div>
        </div>
        <div class="nav-item" @click="scrollIntoView('career-section')">
          <div class="nav-item__container">
            <div class="item-container">
              <h4 class="item">Contact</h4>
            </div>
          </div>
        </div>
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

  &__content {
    grid-column-start: 4;
    grid-column-end: 14;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 2rem;
    align-items: center;
    justify-content: space-between;

    .name {
      color: var(--clr-gray-100);
      font-family: 'IBMPlexSans-Bold';
    }

    .nav-items {
      display: flex;
      flex-flow: row nowrap;
      column-gap: 2rem;

      .nav-item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        column-gap: 0.5rem;
        height: 100%;

        &__container {
          display: flex;
          flex-flow: row nowrap;
          column-gap: 0.25rem;
          align-items: center;
          height: 100%;
          transition: 0.1s ease;

          .item-container {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            height: 100%;

            h4 {
              color: var(--clr-gray-70);
              transition: 0.1s ease;
            }
          }

          .icon-container {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            height: 100%;

            .icon {
              width: 1rem;
              height: 1rem;
            }
          }
        }

        &__container:hover {
          cursor: pointer;
          text-decoration: underline solid var(--clr-gray-100) 1.5px;

          .item {
            color: var(--clr-gray-100);
          }
        }

        .submenu {
          position: absolute;
          top: calc(3rem - 1px);
          display: flex;
          flex-flow: column nowrap;
          background-color: var(--clr-white);
          border-radius: 0 0 0.25rem 0.25rem;
          color: var(--clr-gray-100);
          width: 160px;
          padding: 4px 0;

          .submenu-item {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            height: 40px;
            padding: 0 1rem;

            h4 {
              color: var(--clr-gray-70);
            }
          }

          .submenu-item:hover {
            background-color: var(--clr-gray-50);

            h4 {
              color: var(--clr-gray-100);
            }
          }
        }
      }
    }
  }
}
</style>
