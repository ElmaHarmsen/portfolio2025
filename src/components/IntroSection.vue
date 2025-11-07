<script setup></script>

<template>
  <section class="section-wide" id="intro-section">
    <div class="container">
      <div class="inside-container">
        <!-- <img src="../assets/me.jpg" class="picture-me" alt="" /> -->
        <div class="text-container">
          <p class="title">Hello!</p>
          <h2>
            I am an interaction designer and frontend developer established in Sweden since 2022. My
            deep interest in design has inspired me to become an User Interface and Interaction
            Designer, whereas my love for building made me become a developer as well. I have a
            pragmatic and practical mentality in my work, and I believe in straightforward
            solutions. I value open-mindedness and the sharing of knowledge. I tend to be diligent
            in my work and like to take opportunities to learn. I enjoy collaborating with people,
            and I take care to contribute to a positive and inclusive environment. While seeking out
            my next career opportunity here in Sweden, I am working to improve my design and
            development skills, so be sure to check out my latest development projects and designs
            below.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;

    .inside-container {
      grid-column-start: 4;
      grid-column-end: 14;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 20rem 0;

      .text-container {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 1.25rem;
        grid-column-start: 1;
        grid-column-end: 3;

        .title {
          color: var(--clr-blue);
          text-transform: uppercase;
          font-family: 'DM Sans Bold';
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .section-wide {
    grid-column-start: 1;
    grid-column-end: 2;

    .container {
      display: block;

      .inside-container {
        display: block;
        margin: 0 2rem;
        padding: 10rem 0;
      }
    }
  }
}
</style>
