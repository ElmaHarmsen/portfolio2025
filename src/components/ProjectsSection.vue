<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section" id="process-section">
    <div class="section__content">
      <RouterLink to="/uidesigns">
        <div class="project-item ui-designs">
          <h1>Daily UI Designs</h1>
          <div class="elements">
            <div class="container">
              <span class="tag black">UI Design</span>
            </div>
            <img src="../assets/icons/arrow--right.svg" class="icon" alt="arrow right" />
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/project">
        <div class="project-item">
          <h1>Fast Fashion Project</h1>
          <div class="elements">
            <div class="container">
              <span class="tag blue">UX Research</span>
              <span class="tag black">UI Design</span>
            </div>
            <img src="../assets/icons/arrow--right.svg" class="icon" alt="arrow right" />
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/development">
        <div class="project-item web-dev">
          <h1>Web Development</h1>
          <div class="elements">
            <div class="container">
              <span class="tag gray">Development</span>
              <span class="tag black">UI Design</span>
            </div>
            <img src="../assets/icons/arrow--right.svg" class="icon" alt="arrow right" />
          </div>
        </div>
      </RouterLink>
      <div class="project-item empty-item"></div>
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

    .project-item {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      background-color: var(--clr-gray-100);
      border: 1px solid var(--clr-gray-40);
      padding: 1rem;
      aspect-ratio: 1 / 1;
      transition: all 0.2s ease;

      h1 {
        color: var(--clr-white-10);
      }

      .elements,
      .container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: end;

        .tag {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          height: 1.5rem;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          margin: 0.25rem;
          border-radius: 1rem;
        }

        .black {
          background-color: var(--clr-gray-80);
          color: var(--clr-white);
        }

        .gray {
          background-color: var(--clr-gray-20);
          color: var(--clr-gray-100);
        }

        .blue {
          background-color: var(--clr-blue-20);
          color: var(--clr-blue-70);
        }

        .icon {
          display: none;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }

    .ui-designs {
      background-image: url('../assets/daily-ui.png');
      background-size: cover;
      transition: all 5s ease;
    }

    .web-dev {
      background-image: url('../assets/web-dev.png');
      background-size: cover;
    }

    .empty-item {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(2px);
    }
  }
}
</style>
