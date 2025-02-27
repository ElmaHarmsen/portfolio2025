<script setup></script>

<template>
  <section class="container">
    <div class="container__content">
      <div class="inside-container">
        <h1 class="text">
          The
          <a href="https://www.dailyui.co/" class="link" target="_blank">Daily UI</a>
          Challenges have indeed inspired me to become a better designer. So far I have experimented
          with many different style guides, layouts, screen dimensions and design systems. I have
          learned to be efficient while designing UIs and to explore different angles, but at the
          same time to be critical and not afraid to iterate on the designs. The challenge isn’t
          over yet, as I have many more Daily UI Design Challenges to complete, which is why this
          page will be updated on an ongoing basis with new designs. So be sure to tune in every
          once in a while to check out my latest UI designs ✨
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  grid-column-start: 1;
  grid-column-end: 17;
  background-color: var(--clr-blue-10);
  border-top: 1px solid var(--clr-gray-20);
  border-bottom: 1px solid var(--clr-gray-20);
  width: 100%;
  margin-top: 10rem;

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
      padding: 4rem 0;
    }

    .text {
      grid-column-start: 2;
      grid-column-end: 4;

      .link {
        color: var(--clr-blue-70);
        transition: 0.1s ease;
      }

      .link:hover {
        text-decoration: var(--clr-blue-70) underline 1.5px;
      }
    }
  }
}
</style>
