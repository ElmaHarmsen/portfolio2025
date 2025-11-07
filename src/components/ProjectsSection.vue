<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section" id="projects-section">
    <div class="section__content">
      <h1 class="title">Design & Dev Projects</h1>
      <RouterLink to="/project">
        <div class="project-item">
          <img
            src="../assets/photos/project-1/fynder-coverimage.png"
            class="project-item__img"
            alt=""
          />
          <div class="project-item__description">
            <h2>Fynder Project</h2>
            <!-- <div class="container column">
              <p>
                A university project with the objective to reduce the negative environmental impact
                of modern day’s consumer culture in the fashion industry by targeting the circular
                economy of fashion use in the Uppsala student community.
              </p>
            </div>

            <h4>11/2022</h4> -->
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
            <h2>Daily UI Designs</h2>
            <!-- <div class="container column">
              <p>
                A selection of UI designs I created during the 100 day Daily UI Challenge. It's
                still a work-in-progress so this page will be updated continuously.
              </p>
            </div>

            <h4>06/2024</h4> -->
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/piggame">
        <div class="project-item">
          <img src="../assets/photos/piggame-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <h2>Pig Game Project</h2>
            <!-- <div class="container column">
              <p>
                A small coding project as part of The Complete JavaScript Course 2025. It's a game
                of strategy and rolling dice where two players compete to reach 100 points. Holding
                will keep your current score safe, but rolling a one will erase it.
              </p>
            </div>

            <h4>03/2025</h4> -->
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/maptyproject">
        <div class="project-item">
          <img src="../assets/photos/mapty-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <h2>Mapty Project</h2>
            <!-- <div class="container column">
              <p>
                The first big project in The Complete JavaScript Course 2025. It is based on Object
                Oriented Programming and includes geolocation as well as external libraries such as
                Leaflet.
              </p>
            </div>

            <h4>06/2025</h4> -->
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/bankistproject">
        <div class="project-item">
          <img src="../assets/bankist-business.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <h2>Bankist Project</h2>
            <!-- <div class="container column">
              <p>
                Also part of The Complete JavaScript Course 2025, this project consists of both a
                website and a minimalist banking application. This project is all about arrays and
                it uses common array methods such as maps and sets, filter and reduce, and
                findIndex.
              </p>
            </div>

            <h4>06/2025</h4> -->
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/forkifyproject">
        <div class="project-item">
          <img src="../assets/photos/forkify-coverimage.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <h2>Forkify Project</h2>
            <!-- <div class="container column">
              <p>
                A modern JavaScript application from the final project of The Complete JavaScript
                Course 2025 using the Model View Controller architecture. It includes features such
                as search, pagination and bookmarks, and works with localstorage.
              </p>
            </div>
            <h4>07/2025</h4> -->
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
  padding: 10rem 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 0 -1rem;

    .title {
      grid-column-start: 1;
      grid-column-end: 3;
      text-align: center;
      justify-self: center;
      align-self: center;
      padding-bottom: 10rem;
      color: var(--clr-blue);
    }

    .project-item {
      width: 100%;
      // aspect-ratio: 4 / 5;
      display: flex;
      flex-flow: column nowrap;
      background-color: var(--clr-blue);
      transition: 0.1s ease;

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
        padding: 1rem 1.5rem;

        .container {
          display: flex;
          justify-content: space-between;

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

    .project-item:hover {
      cursor: pointer;
      box-shadow: var(--clr-blue) -16px 16px 0px 0px;
      transform: translateX(16px) translateY(-16px);
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

      .title {
        grid-column-start: unset;
        grid-column-end: unset;
        padding: unset;
      }

      .project-item {
        display: flex;
        flex-flow: column nowrap;
        height: 100%;

        &__description {
          padding: 1.5rem 1rem;
        }
      }

      .project-item:hover {
        transform: translateX(0) translateY(0);
        box-shadow: none;
      }
    }
  }
}
</style>
