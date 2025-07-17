<script setup></script>

<template>
  <section class="section" id="skills-section">
    <div class="section__content">
      <div class="skill-item bg-purple-1">
        <h3>Frontend Development</h3>
        <!-- <img src="../assets/icons/frontend.png" class="skill-item__icon" alt="" /> -->
      </div>
      <div class="skill-item bg-blue-1">
        <h3>UI Design</h3>
        <!-- <img src="../assets/icons/ui-design.png" class="skill-item__icon" alt="" /> -->
      </div>
      <div class="skill-item bg-blue-2">
        <h3>Interaction Design</h3>
        <!-- <img src="../assets/icons/interaction.png" class="skill-item__icon" alt="" /> -->
      </div>
      <div class="skill-item bg-blue-3">
        <h3>Human-Computer Interaction</h3>
        <!-- <img src="../assets/icons/code.png" class="skill-item__icon" alt="" /> -->
      </div>
      <div class="skill-item bg-purple-1">
        <h3>User Centred Design</h3>
        <!-- <img src="../assets/icons/user-research.png" class="skill-item__icon" alt="" /> -->
      </div>
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

    .skill-item {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      aspect-ratio: 16 / 9;
      padding: 1rem;

      &__icon {
        width: 30%;
        align-self: center;
      }

      .content {
        flex-grow: 1;
        padding: 1rem;
      }
    }

    .bg-blue-1 {
      background-color: var(--clr-white);
    }

    .bg-blue-2 {
      background-color: var(--clr-white);
    }

    .bg-blue-3 {
      background-color: var(--clr-white);
    }

    .bg-purple-1 {
      background-color: var(--clr-white);
    }

    .bg-purple-2 {
      background-color: var(--clr-white);
    }

    .bg-purple-3 {
      background-color: var(--clr-white);
    }
    // .skill-item:hover {
    //   transform: scale(1.01) rotate(0.25deg);
    //   box-shadow: 0 0 10px var(--clr-gray-20);
    // }
  }
}
</style>
