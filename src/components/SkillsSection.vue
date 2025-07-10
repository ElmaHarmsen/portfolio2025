<script setup></script>

<template>
  <section class="section" id="skills-section">
    <div class="section__content">
      <div class="skill-item first-item">
        <img src="../assets/interaction-design.png" class="skill-image" alt="" />
        <div class="content">
          <h3>UI Design</h3>
          <p>
            Something here <br />
            and continues here
          </p>
        </div>
      </div>
      <div class="skill-item second-item">
        <img src="../assets/interaction-design.png" class="skill-image" alt="" />
        <div class="content">
          <h3>Interaction Design</h3>
          <p>
            Something here <br />
            and continues here
          </p>
        </div>
      </div>
      <div class="skill-item third-item">
        <img src="../assets/interaction-design.png" class="skill-image" alt="" />
        <div class="content">
          <h3>Frontend Development</h3>
          <p>
            Something here <br />
            and continues here
          </p>
        </div>
      </div>
      <div class="skill-item first-item">
        <img src="../assets/design-enthusiast.png" class="skill-image" alt="" />
        <div class="content">
          <h3>User Research</h3>
          <p>
            Something here <br />
            and continues here
          </p>
        </div>
      </div>
      <div class="skill-item second-item">
        <img src="../assets/design-enthusiast.png" class="skill-image" alt="" />
        <div class="content">
          <h3>Usability Testing</h3>
          <p>
            Something here <br />
            and continues here
          </p>
        </div>
      </div>
      <div class="skill-item third-item">
        <img src="../assets/design-enthusiast.png" class="skill-image" alt="" />
        <div class="content">
          <h3>User-Centred Design</h3>
          <p>
            Something here <br />
            and continues here
          </p>
        </div>
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
    margin-bottom: calc(10rem - (3rem - 1px));

    .skill-item {
      display: flex;
      flex-flow: column nowrap;
      background-color: var(--clr-white);
      backdrop-filter: blur(2px);
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 3 / 4;
      transition: 0.2s ease;
      border-radius: 1rem;

      .skill-image {
        aspect-ratio: 1 /1;
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      .content {
        flex-grow: 1;
        padding: 1rem;
      }
    }

    .skill-item:hover {
      transform: scale(1.01) rotate(0.25deg);
      box-shadow: 0 0 10px var(--clr-gray-20);
    }
  }
}
</style>
