<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section" id="projects-section">
    <div class="section__content">
      <RouterLink to="/project">
        <div class="project-item">
          <img
            src="../assets/photos/project-1/fynder-coverimage.png"
            class="project-item__img"
            alt=""
          />
          <div class="project-item__description">
            <div class="container column">
              <h1>Fynder Project</h1>
              <h4>
                A university project with the objective to reduce the negative environmental impact
                of modern day’s consumer culture in the fashion industry by targeting the circular
                economy of fashion use in the Uppsala student community.
              </h4>
            </div>
            <div class="container row">
              <h4>November 2022</h4>
              <img src="../assets/icons/arrow--right.svg" class="icon" alt="Arrow right" />
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/uidesigns">
        <div class="project-item">
          <img
            src="../assets/photos/dailyui-coverimage-copy.png"
            class="project-item__img"
            alt=""
          />
          <div class="project-item__description">
            <div class="container column">
              <h1>Daily UI Designs</h1>
              <h4>
                A selection of UI designs I created during the 100 day Daily UI Challenge. It's
                still a work-in-progress so this page will be updated continuously.
              </h4>
            </div>
            <div class="container row">
              <h4>June 2024</h4>
              <img src="../assets/icons/arrow--right.svg" class="icon" alt="Arrow right" />
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/piggame">
        <div class="project-item">
          <img src="../assets/photos/piggame-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h1>Pig Game Project</h1>
              <h4>
                A small coding project as part of The Complete JavaScript Course 2025. It's a game
                of strategy and rolling dice where two players compete to reach 100 points. Holding
                will keep your current score safe, but rolling a one will erase it.
              </h4>
            </div>
            <div class="container row">
              <h4>March 2025</h4>
              <img src="../assets/icons/arrow--right.svg" class="icon" alt="Arrow right" />
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/maptyproject">
        <div class="project-item">
          <img src="../assets/photos/mapty-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h1>Mapty Project</h1>
              <h4>
                The first big project in The Complete JavaScript Course 2025. It is based on Object
                Oriented Programming and includes geolocation as well as external libraries such as
                Leaflet.
              </h4>
            </div>
            <div class="container row">
              <h4>June 2025</h4>
              <img src="../assets/icons/arrow--right.svg" class="icon" alt="Arrow right" />
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/bankistproject">
        <div class="project-item">
          <img src="../assets/bankist-business.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h1>Bankist Project</h1>
              <h4>
                Also part of The Complete JavaScript Course 2025, this project consists of both a
                website and a minimalist banking application. This project is all about arrays and
                it uses common array methods such as maps and sets, filter and reduce, and
                findIndex.
              </h4>
            </div>
            <div class="container row">
              <h4>June 2025</h4>
              <img src="../assets/icons/arrow--right.svg" class="icon" alt="Arrow right" />
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/forkifyproject">
        <div class="project-item">
          <img src="../assets/photos/forkify-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h1>Forkify Project</h1>
              <h4>
                A modern JavaScript application from the final project of The Complete JavaScript
                Course 2025 using the Model View Controller architecture. It includes features such
                as search, pagination and bookmarks, and works with localstorage.
              </h4>
            </div>
            <div class="container row">
              <h4>July 2025</h4>
              <img src="../assets/icons/arrow--right.svg" class="icon" alt="Arrow right" />
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  padding-bottom: 10rem;
  // background-image: radial-gradient(var(--clr-gray-40) 1px, transparent 0);
  // background-attachment: fixed;
  // background-size: 1.25rem 1.25rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin: 0 -1rem;

    .project-item {
      display: grid;
      grid-template-rows: repeat(2, 50%);
      transition: all 0.2s ease;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      &__img {
        width: 100%;
        aspect-ratio: 16 / 9;
      }

      &__description {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        row-gap: 1rem;
        background-color: var(--clr-white);
        padding: 1rem;
        aspect-ratio: 16 /9;

        h1 {
          color: var(--clr-gray-100);
        }

        .container {
          display: flex;
          justify-content: space-between;

          h4 {
            color: var(--clr-gray-70);
          }

          .icon {
            width: 28px;
            height: 28px;
            transform: rotate(-45deg);
          }
        }

        .column {
          flex-flow: column nowrap;
          row-gap: 1rem;
        }
        .row {
          flex-flow: row nowrap;
          align-items: center;
        }
      }
    }

    .ui-designs {
      background-image: url('../assets/daily-ui.png');
      background-size: cover;
    }

    .design-project {
      background-image: url('../assets/photos/project-1/moscow.png');
      background-size: cover;
    }

    .mapty-project {
      background-image: url('../assets/mapty.png');
      background-size: cover;
    }

    .pig-game {
      background-image: url('../assets/pig-game.png');
      background-size: cover;
    }

    .bankist-project {
      background-image: url('../assets/bankist.png');
      background-size: cover;
    }

    .forkify-project {
      background-image: url('../assets/forkify.png');
      background-size: cover;
    }
  }
}
</style>
