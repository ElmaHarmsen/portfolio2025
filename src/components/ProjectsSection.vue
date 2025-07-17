<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section" id="projects-section">
    <div class="section__content">
      <RouterLink to="/project">
        <div class="project-item">
          <img src="../assets/photos/project-1/moscow.png" class="project-item__img" alt="" />
          <div class="project-item__description">
            <h1>Fynder Design Project</h1>
            <div class="container">
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
            <h1>Daily UI Designs</h1>
            <div class="container">
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
            <h1>PigGame Project</h1>
            <div class="container">
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
            <h1>Mapty Project</h1>
            <div class="container">
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
            <h1>Bankist Project</h1>
            <div class="container">
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
            <h1>Forkify Project</h1>
            <div class="container">
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

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin: 0 -1rem;

    .project-item {
      display: grid;
      grid-template-rows: repeat(2, 50%);
      aspect-ratio: 1 / 1;
      transition: all 0.2s ease;

      &__img {
        width: 100%;
      }

      &__description {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        row-gap: 1rem;
        background-color: var(--clr-white);
        padding: 1rem;

        h1 {
          color: var(--clr-gray-100);
        }

        .container {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;

          h4 {
            color: var(--clr-gray-70);
          }

          .icon {
            width: 28px;
            height: 28px;
          }
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
