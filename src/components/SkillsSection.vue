<script setup></script>

<template>
  <section class="section" id="skills-section">
    <div class="section__content">
      <div class="skill-item bg-blue-1">
        <h1>UI Design</h1>
        <img src="../assets/icons/ui-design.svg" class="skill-item__icon" alt="" />
        <span></span>
      </div>
      <div class="skill-item bg-blue-2">
        <h1>Interaction Design</h1>
        <img src="../assets/icons/interaction.svg" class="skill-item__icon" alt="" />
        <span></span>
      </div>
      <div class="skill-item bg-blue-3">
        <h1>Frontend Development</h1>
        <img src="../assets/icons/code.svg" class="skill-item__icon" alt="" />
        <span></span>
      </div>
      <div class="skill-item bg-purple-1">
        <h1>User Centred Design</h1>
        <img src="../assets/icons/users.svg" class="skill-item__icon" alt="" />
        <span></span>
      </div>
      <div class="skill-item bg-purple-2">
        <h1>User Testing</h1>
        <img src="../assets/icons/user-testing.svg" class="skill-item__icon" alt="" />
        <span></span>
      </div>
      <div class="skill-item bg-purple-3">
        <h1>User Research</h1>
        <img src="../assets/icons/user-research.svg" class="skill-item__icon" alt="" />
        <span></span>
      </div>
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
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: calc(10rem - (3rem - 1px));

    .skill-item {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      backdrop-filter: blur(2px);
      aspect-ratio: 1 / 1;
      padding: 1rem;

      &__icon {
        width: 45%;
        color: var(--clr-white);
        align-self: center;
      }

      .content {
        flex-grow: 1;
        padding: 1rem;
      }
    }

    .bg-blue-1 {
      background-color: #b5b1b2;
    }

    .bg-blue-2 {
      background-color: #ada9b7;
    }

    .bg-blue-3 {
      background-color: #a9afd1;
    }

    .bg-purple-1 {
      background-color: #bbdb9b;
    }

    .bg-purple-2 {
      background-color: #abc4a1;
    }

    .bg-purple-3 {
      background-color: #9db4ab;
    }
    // .skill-item:hover {
    //   transform: scale(1.01) rotate(0.25deg);
    //   box-shadow: 0 0 10px var(--clr-gray-20);
    // }
  }
}
</style>
