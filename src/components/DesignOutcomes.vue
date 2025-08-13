<script setup></script>

<template>
  <section class="section-wide">
    <div class="container">
      <div class="inside-container">
        <h3 class="text-container">
          The
          <a href="https://www.dailyui.co/" class="link" target="_blank">Daily UI</a>
          Challenges have inspired me to become a better designer. So far I have experimented with
          many different style guides, layouts, screen dimensions and design systems. I have learned
          to be efficient while designing UIs and to explore different angles, but at the same time
          to be critical and not afraid to iterate on the designs. The challenge isn’t over yet, as
          I have many more Daily UI Design Challenges to complete, which is why this page will be
          updated on an ongoing basis with new designs. So be sure to tune in every once in a while
          to check out my latest UI designs.
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;
  background-color: var(--clr-white);
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
      gap: 32px;
      padding: 10rem 0;
      margin: 0 -1rem;

      .text-container {
        grid-column-start: 2;
        grid-column-end: 3;

        .link {
          color: var(--clr-green);
          transition: 0.1s ease;
        }

        .link:hover {
          text-decoration: var(--clr-green) underline 1.5px;
        }
      }
    }
  }
}
</style>
