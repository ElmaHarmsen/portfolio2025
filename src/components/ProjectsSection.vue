<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section" id="projects-section">
    <div class="section__content">
      <RouterLink to="/uidesigns">
        <div class="project-item">
          <div class="project-picture ui-designs"></div>
          <div class="project-description">
            <div class="container">
              <img src="../assets/dailyui-icon.jpg" class="logo-project" alt="Mapty logo" />
              <h1>Daily UI Designs</h1>
            </div>
            <div class="elements">
              <div class="container">
                <span class="tag blue">UI Design</span>
                <span class="tag purple">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/project">
        <div class="project-item">
          <div class="project-picture design-project"></div>
          <div class="project-description">
            <div class="container">
              <img src="../assets/fastfashion-icon.png" class="logo-project" alt="Mapty logo" />
              <h1>Fynder Design Project</h1>
            </div>
            <div class="elements">
              <div class="container">
                <span class="tag blue">UI Design</span>
                <span class="tag black">User Research</span>
                <span class="tag purple">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/maptyproject">
        <div class="project-item">
          <div class="project-picture mapty-project"></div>
          <div class="project-description">
            <div class="container">
              <img src="../assets/mapty-icon.png" class="logo-project" alt="Mapty logo" />
              <h1>Mapty Project</h1>
            </div>
            <div class="elements">
              <div class="container">
                <span class="tag gray">JavaScript</span>
                <span class="tag gray">OOP</span>
                <span class="tag gray">Geolocation</span>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/piggame">
        <div class="project-item">
          <div class="project-picture pig-game"></div>
          <div class="project-description">
            <div class="container">
              <h1>Pig Game</h1>
            </div>
            <div class="elements">
              <div class="container">
                <span class="tag gray">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/forkifyprojecy">
        <div class="project-item">
          <div class="project-picture forkify-project"></div>
          <div class="project-description">
            <div class="container">
              <img src="../assets/forkify-icon.png" class="logo-project" alt="Forkify logo" />
              <h1>Forkify Project</h1>
            </div>
            <div class="elements">
              <div class="container">
                <span class="tag gray">JavaScript</span>
                <span class="tag gray">MVC Architecture</span>
                <span class="tag gray">Async JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/bankistproject">
        <div class="project-item">
          <div class="project-picture bankist-project"></div>
          <div class="project-description">
            <div class="container">
              <img src="../assets/bankist-icon.png" class="logo-project" alt="Bankist logo" />
              <h1>Bankist Project</h1>
            </div>
            <div class="elements">
              <div class="container">
                <span class="tag gray">JavaScript</span>
              </div>
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

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-bottom: calc(10rem - (3rem - 1px));

    .project-item {
      display: flex;
      flex-flow: column nowrap;
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 3 / 4;
    }

    .project-picture {
      aspect-ratio: 1 / 1;
    }

    .project-description {
      flex-grow: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding: 1rem;
      row-gap: 1rem;
      background-color: var(--clr-white);
      border-top: 1px solid var(--clr-gray-40);

      .logo-project {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }

      h1 {
        color: var(--clr-gray-100);
      }

      .elements,
      .container {
        display: flex;
        flex-flow: row nowrap;
        align-items: end;

        .tag {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          height: 1.5rem;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          margin-right: 0.25rem;
          border-radius: 1rem;
        }

        .black {
          background-color: var(--clr-gray-80);
          color: var(--clr-white);
        }

        .purple {
          background-color: var(--clr-purple-20);
          color: var(--clr-purple-70);
        }

        .gray {
          background-color: var(--clr-gray-20);
          color: var(--clr-gray-100);
        }

        .blue {
          background-color: var(--clr-blue-20);
          color: var(--clr-blue-70);
        }

        .icon-default,
        .icon-hover {
          width: 2rem;
          height: 2rem;
        }

        .icon-hover {
          display: none;
        }
      }
    }

    // .ui-designs:hover,
    // .project:hover,
    // .web-dev:hover,
    // .mapty-project:hover {
    //   background-image: none;
    //   background-color: rgba(255, 255, 255, 0.1);
    //   backdrop-filter: blur(2px);

    //   h1 {
    //     color: var(--clr-gray-100);
    //   }

    //   .elements {
    //     .icon-default {
    //       display: none;
    //     }
    //     .icon-hover {
    //       display: block;
    //     }
    //   }
    // }

    .ui-designs {
      background-image: url('../assets/daily-ui.png');
      background-size: cover;
    }

    .design-project {
      // background-image: url('../assets/photos/project-1/navigation-map.png');
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
