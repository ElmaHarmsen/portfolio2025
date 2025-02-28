<script setup></script>

<template>
  <section class="section">
    <h1>Something</h1>
    <div class="section__content">
      <div class="about-item first-item">
        <div class="picture"></div>
        <div class="content">
          <p class="paragraph">Short paragraph</p>
        </div>
      </div>
      <div class="about-item second-item">
        <div class="picture"></div>
        <div class="content">
          <p class="paragraph">Short paragraph</p>
        </div>
      </div>
      <div class="about-item third-item">
        <div class="picture"></div>
        <div class="content">
          <p class="paragraph">Short paragraph</p>
        </div>
      </div>
      <div class="about-item first-item">
        <div class="picture"></div>
        <div class="content">
          <p class="paragraph">Short paragraph</p>
        </div>
      </div>
      <div class="about-item second-item">
        <div class="picture"></div>
        <div class="content">
          <p class="paragraph">Short paragraph</p>
        </div>
      </div>
      <div class="about-item third-item">
        <div class="picture"></div>
        <div class="content">
          <p class="paragraph">Short paragraph</p>
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
    margin-top: 4rem;

    .about-item {
      display: flex;
      flex-flow: column nowrap;
      border: 1px solid var(--clr-gray-40);
      aspect-ratio: 3 / 4;
      transition: 0.2s ease;

      .picture {
        border-bottom: 1px solid var(--clr-gray-40);
        width: 100%;
        aspect-ratio: 1 / 1;
      }

      .content {
        flex-grow: 1;
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

    .first-item,
    .second-item,
    .third-item {
      backdrop-filter: blur(2px);
    }
  }
}
</style>
