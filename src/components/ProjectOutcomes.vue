<script setup></script>

<template>
  <section class="section-wide" id="project-outcomes">
    <div class="container">
      <div class="container__content">
        <div class="inside-container">
          <div class="text-container">
            <h1>
              We advanced awareness on the negative impacts of fast fashion on the environment, and
              introduced a new approach to reduce fashion waste in local communities. Through an
              extensive design process including ideation, analysis, prototyping and testing, we
              conceptualised a solution to the problem and evaluated its desirability with the
              stakeholders. We were an international team of five members and I found that our
              collaboration during the project was both successful and inspiring ✨ We spent much
              time sharing knowledge and skills within the team, delegating tasks equally among the
              team members, and refining our design choices to match our ideas.
            </h1>
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
  padding-top: calc(3rem - 1px);
  margin-top: calc(10rem - (3rem - 1px));

  .container {
    background-color: var(--clr-purple-10);
    border-top: 1px solid var(--clr-gray-20);
    border-bottom: 1px solid var(--clr-gray-20);
    width: 100%;

    &__content {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      gap: 32px;
      padding: 4rem 0;

      .inside-container {
        grid-column-start: 4;
        grid-column-end: 14;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;

        .text-container {
          grid-column-start: 2;
          grid-column-end: 4;
          display: flex;
          flex-flow: column nowrap;
          row-gap: 2rem;
        }
      }
    }
  }
}
</style>
