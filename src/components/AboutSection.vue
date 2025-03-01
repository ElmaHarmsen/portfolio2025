<script setup></script>

<template>
  <section class="section" id="about-section">
    <h1>About me</h1>
    <div class="section__content">
      <div class="about-item">
        <div class="picture picture-design"></div>
        <div class="content">
          <h1>I'm a Design Enthusiast</h1>
          <p class="paragraph">
            I have a strong interest in design, and I am fascinated by the relationship between
            human behaviour and technology.
          </p>
        </div>
      </div>
      <div class="about-item">
        <div class="picture picture-interaction"></div>
        <div class="content">
          <h1>I’m a UI & Interaction Designer</h1>
          <p class="paragraph">
            I believe in a user-centred design approach as well as straightforward and functional
            solutions to design problems.
          </p>
        </div>
      </div>
      <!-- <div class="about-item">
        <div class="picture picture-design"></div>
        <div class="content">
          <h1>I have a technical background</h1>
          <p class="paragraph">Some paragraph</p>
        </div>
      </div>
      <div class="about-item">
        <div class="picture picture-design"></div>
        <div class="content">
          <h1>I have studied internationally</h1>
          <p class="paragraph">Some paragraph</p>
        </div>
      </div> -->
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
    margin-top: 4rem;

    .about-item {
      display: flex;
      flex-flow: column nowrap;
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 3 / 4;
      transition: 0.2s ease;

      .picture {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(2px);
        width: 100%;
        aspect-ratio: 1 / 1;
      }

      .picture-design {
        background-image: url('../assets/design-enthusiast.png');
        background-size: cover;
      }

      .picture-interaction {
        background-image: url('../assets/interaction-design.png');
        background-size: cover;
      }

      .content {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 1rem;
        background-color: var(--clr-white);
        padding: 1rem;

        .paragraph {
          font-family: 'IBMPlexSans-Regular';
          font-size: 0.875rem;
        }
      }
    }

    .about-item:hover {
      transform: scale(1.01) rotate(0.25deg);
      box-shadow: 0 0 10px var(--clr-gray-20);
    }
  }
}
</style>
