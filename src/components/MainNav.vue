<script setup>
import { ref } from 'vue'
const mainNavOpen = ref(false)
const subNavOpen = ref(true)

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
      <div class="nav-btn" @click="mainNavOpen = !mainNavOpen">
        <img src="../assets/icons/menu.svg" class="nav-btn__icon" v-if="!mainNavOpen" />
        <img src="../assets/icons/close.svg" class="nav-btn__icon" v-if="mainNavOpen" />
      </div>
      <div class="nav-items" v-if="mainNavOpen">
        <div class="nav-item" @click="scrollIntoView('intro-section')">
          <div class="nav-item__container">
            <div class="item-container">
              <h3 class="item">About Me</h3>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-item__container">
            <div class="item-container" @click="scrollIntoView('projects-section')">
              <h3 class="item">Selected Projects</h3>
            </div>
            <div class="icon-container" @click="subNavOpen = !subNavOpen" v-if="!subNavOpen">
              <img src="../assets/icons/chevron--down.svg" class="icon" alt="chevron down" />
            </div>
            <div class="icon-container" @click="subNavOpen = !subNavOpen" v-if="subNavOpen">
              <img src="../assets/icons/chevron--up.svg" class="icon" alt="chevron up" />
            </div>
          </div>
          <div class="submenu" v-if="subNavOpen">
            <RouterLink to="/project">
              <div class="submenu-item">
                <h4>Fynder Project</h4>
              </div>
            </RouterLink>
            <RouterLink to="/uidesigns">
              <div class="submenu-item">
                <h4>Daily UI Desings</h4>
              </div>
            </RouterLink>
            <RouterLink to="/piggame">
              <div class="submenu-item">
                <h4>Pig Game</h4>
              </div>
            </RouterLink>
            <RouterLink to="/maptyproject">
              <div class="submenu-item">
                <h4>Mapty Project</h4>
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
              <h3 class="item">Skills & Services</h3>
            </div>
          </div>
        </div>
        <div class="nav-item" @click="scrollIntoView('footer-section')">
          <div class="nav-item__container">
            <div class="item-container">
              <h3 class="item">Contact</h3>
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
  top: 2rem;
  left: 0;

  &__content {
    grid-column-start: 2;
    grid-column-end: 16;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 2rem;
    align-items: center;
    justify-content: space-between;

    .nav-btn {
      width: 3rem;
      height: 3rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      background-color: var(--clr-gray-100);
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      width: 3rem;
      height: 3rem;
      border-radius: 1px;
      transition: 0.1s ease;

      &__icon {
        width: 24px;
      }
    }

    .nav-btn:hover {
      cursor: pointer;
    }

    .nav-items {
      grid-column-start: 2;
      grid-column-end: 16;
      display: flex;
      flex-flow: column nowrap;
      position: absolute;
      left: -2rem;
      top: 3rem;
      z-index: 2;
      background-color: var(--clr-white);
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      min-width: 200px;
      height: auto;
      padding: 2rem 1rem;

      .nav-item {
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
        column-gap: 0.5rem;
        height: 100%;

        &__container {
          display: flex;
          flex-flow: row nowrap;
          column-gap: 0.5rem;
          align-items: center;
          height: 45px;
          padding: 0 1rem;
          transition: 0.1s ease;

          .item-container {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            height: 100%;

            h3 {
              color: var(--clr-gray-100);
              font-family: 'IBMPlexSans-SemiBold';

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
          background-color: var(--clr-gray-50);

          .item {
            color: var(--clr-gray-100);
          }
        }

        .submenu {
          display: flex;
          flex-flow: column nowrap;
          background-color: var(--clr-white);
          border-radius: 0 0 0.25rem 0.25rem;
          color: var(--clr-gray-100);
          width: auto;
          padding: 0 1rem;

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
            cursor: pointer;
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

@media (max-width: 450px) {
  .navigation {
    grid-template-columns: repeat(1, 1fr);

    &__content {
      grid-column-start: 1;
      grid-column-end: 2;
      margin: 0 2rem;

      .nav-items {
        grid-column-start: 1;
        grid-column-end: 2;
        left: 0;
        width: 100%;
      }
    }
  }
}
</style>
