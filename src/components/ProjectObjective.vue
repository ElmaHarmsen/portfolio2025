<script setup></script>

<template>
  <section class="section-wide" id="project-objective">
    <div class="container">
      <div class="inside-container">
        <div class="text-container">
          <h3>
            The objective of the project was to reduce the negative environmental impact of modern
            day’s consumer culture in the fashion industry by targeting the circular economy of
            fashion use in the Uppsala student community, thereby emphasising on reducing
            consumption and, consequently, reducing fashion waste.
          </h3>
          <h3>
            We designed an application which promotes the reuse of fashion garments through
            organised clothing swap events in local Uppsala student communities.
          </h3>
        </div>
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
      padding: 10rem 0;

      .text-container {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 2rem;
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
        display: grid;
        grid-template-columns: 3rem 1fr;
        gap: 2rem 0;
        margin: 0 2rem;

        .text-container {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 2;
          grid-column-end: 3;
          row-gap: 0.75rem;
        }
      }
    }
  }
}
</style>
