<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section" id="projects-section">
    <div class="section__content">
      <RouterLink to="/uidesigns">
        <div class="project-item ui-designs">
          <img src="../assets/dailyui-icon.jpg" class="logo-project" alt="Mapty logo" />
        </div>
        <div class="project-description">
          <h1>Daily UI Designs</h1>
        </div>
      </RouterLink>
      <RouterLink to="/project">
        <div class="project-item design-project">
          <img src="../assets/fynder-icon.png" class="logo-project" alt="Fynder logo" />
        </div>
        <div class="project-description">
          <h1>Fynder Design Project</h1>
        </div>
      </RouterLink>
      <RouterLink to="/maptyproject">
        <div class="project-item mapty-project">
          <img src="../assets/mapty-icon.png" class="logo-project" alt="Mapty logo" />
        </div>
        <div class="project-description">
          <h1>Mapty Project</h1>
        </div>
      </RouterLink>
      <RouterLink to="/piggame">
        <div class="project-item pig-game">
          <img src="../assets/piggame-icon.png" class="logo-project not-round" alt="Piggame logo" />
        </div>
        <div class="project-description">
          <h1>Pig Game</h1>
        </div>
      </RouterLink>
      <RouterLink to="/forkifyprojecy">
        <div class="project-item forkify-project">
          <img src="../assets/forkify-icon.png" class="logo-project" alt="Forkify logo" />
        </div>
        <div class="project-description">
          <h1>Forkify Project</h1>
        </div>
      </RouterLink>
      <RouterLink to="/bankistproject">
        <div class="project-item bankist-project">
          <img src="../assets/bankist-icon.png" class="logo-project" alt="Bankist logo" />
        </div>
        <div class="project-description">
          <h1>Bankist Project</h1>
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

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-bottom: calc(10rem - (3rem - 1px));

    .project-item {
      display: flex;
      flex-flow: column nowrap;
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 1 / 1;
      transition: all 0.2s ease;

      .logo-project {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin: 1rem;
      }

      .not-round {
        border-radius: 0;
      }
    }

    .project-description {
      flex-grow: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      row-gap: 1rem;

      h1 {
        width: 100%;
        padding: 1rem;
        color: var(--clr-gray-100);
        background-color: var(--clr-white);
        border: 1px solid var(--clr-gray-40);
        border-top: none;
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
