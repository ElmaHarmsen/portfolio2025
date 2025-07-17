<script setup></script>

<template>
  <section class="section-wide" id="intro-section">
    <div class="container">
      <div class="container__content">
        <div class="inside-container">
          <h1 class="text-container">
            Greetings✌️ My name is Elma Harmsen and I am a design enthusiast based in Sweden. My
            interest in design and technology has inspired me to become a UI and Interaction
            Designer. I have a pragmatic and practical mentality for design, and I believe in
            straightforward solutions. I value open-mindedness as well as sharing knowledge, and I
            like to be diligent in my work and to take opportunities to learn. I enjoy collaborating
            with people, and I take care to contribute to a positive and inclusive environment.
            While seeking out my next career opportunity, I am working to improve my design and
            development skills. Be sure to check out my latest projects and designs by scrolling
            further⚡
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;

  .container {
    background-color: var(--color-background);
    width: 100%;

    &__content {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      gap: 32px;

      .inside-container {
        grid-column-start: 4;
        grid-column-end: 14;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
        padding: 10rem 0 10rem 0;

        .text-container {
          grid-column-start: 2;
          grid-column-end: 4;
        }
      }
    }
  }
}
</style>
