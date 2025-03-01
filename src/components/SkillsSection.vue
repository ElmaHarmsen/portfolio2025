<script setup></script>

<template>
  <section class="section" id="skills-section">
    <h1>Skills & Services</h1>
    <div class="section__content">
      <div class="about-item first-item">
        <div class="content">
          <h3>UI Design</h3>
        </div>
      </div>
      <div class="about-item second-item">
        <div class="content">
          <h3>Interaction Design</h3>
        </div>
      </div>
      <div class="about-item third-item">
        <div class="content">
          <h3>Web Development</h3>
        </div>
      </div>
      <div class="about-item first-item">
        <div class="content">
          <h3>User Research</h3>
        </div>
      </div>
      <div class="about-item second-item">
        <div class="content">
          <h3>Usability Testing</h3>
        </div>
      </div>
      <div class="about-item empty-item">
        <div class="content"></div>
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
    gap: 32px;
    margin-top: 4rem;

    .about-item {
      display: flex;
      flex-flow: column nowrap;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(2px);
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 4 / 3;
      transition: 0.2s ease;

      .content {
        flex-grow: 1;
        padding: 1rem;
      }
    }

    .about-item:hover {
      transform: scale(1.01) rotate(0.25deg);
      box-shadow: 0 0 10px var(--clr-gray-20);
    }

    .empty-item:hover {
      transform: none;
      box-shadow: none;
    }
  }
}
</style>
