<script setup></script>

<template>
  <section class="section-wide" id="project-objective">
    <div class="container">
      <div class="container__content">
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
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  padding-top: calc(3rem - 1px);
  margin-top: calc(10rem - (3rem - 1px));

  .container {
    background-color: var(--clr-white);
    padding: 10rem 0;

    &__content {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      gap: 32px;

      .inside-container {
        grid-column-start: 4;
        grid-column-end: 14;

        .text-container {
          display: flex;
          flex-flow: column nowrap;
          row-gap: 2rem;
        }
      }
    }
  }
}
</style>
