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
              <h2>Fynder Project</h2>
              <p>
                A university project with the objective to reduce the negative environmental impact
                of modern day’s consumer culture in the fashion industry by targeting the circular
                economy of fashion use in the Uppsala student community.
              </p>
            </div>

            <h4>11/2022</h4>
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
              <h2>Daily UI Designs</h2>
              <p>
                A selection of UI designs I created during the 100 day Daily UI Challenge. It's
                still a work-in-progress so this page will be updated continuously.
              </p>
            </div>

            <h4>06/2024</h4>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/piggame">
        <div class="project-item">
          <img src="../assets/photos/piggame-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h2>Pig Game Project</h2>
              <p>
                A small coding project as part of The Complete JavaScript Course 2025. It's a game
                of strategy and rolling dice where two players compete to reach 100 points. Holding
                will keep your current score safe, but rolling a one will erase it.
              </p>
            </div>

            <h4>03/2025</h4>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/maptyproject">
        <div class="project-item">
          <img src="../assets/photos/mapty-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h2>Mapty Project</h2>
              <p>
                The first big project in The Complete JavaScript Course 2025. It is based on Object
                Oriented Programming and includes geolocation as well as external libraries such as
                Leaflet.
              </p>
            </div>

            <h4>06/2025</h4>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/bankistproject">
        <div class="project-item">
          <img src="../assets/bankist-business.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h2>Bankist Project</h2>
              <p>
                Also part of The Complete JavaScript Course 2025, this project consists of both a
                website and a minimalist banking application. This project is all about arrays and
                it uses common array methods such as maps and sets, filter and reduce, and
                findIndex.
              </p>
            </div>

            <h4>06/2025</h4>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/forkifyproject">
        <div class="project-item">
          <img src="../assets/photos/forkify-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <div class="container column">
              <h2>Forkify Project</h2>
              <p>
                A modern JavaScript application from the final project of The Complete JavaScript
                Course 2025 using the Model View Controller architecture. It includes features such
                as search, pagination and bookmarks, and works with localstorage.
              </p>
            </div>
            <h4>07/2025</h4>
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

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin: 0 -1rem;

    .project-item {
      width: 100%;
      height: 100%;
      aspect-ratio: 4 / 5;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      background-color: var(--clr-white);
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
        padding: 1rem;

        .container {
          display: flex;
          justify-content: space-between;

          h4 {
            color: var(--clr-gray-100);
          }

          .icon {
            width: 24px;
            transform: rotate(-45deg);
          }
        }

        .column {
          flex-flow: column nowrap;
          row-gap: 1.5rem;
        }
        .row {
          flex-flow: row nowrap;
          align-items: center;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;

    &__content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      margin: 0 2rem;

      .project-item {
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }
}
</style>
