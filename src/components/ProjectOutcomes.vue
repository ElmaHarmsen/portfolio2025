<script setup></script>

<template>
  <section class="section-wide" id="project-outcomes">
    <div class="container">
      <div class="inside-container">
        <div class="text-container">
          <h3>
            We advanced awareness on the negative impacts of fast fashion on the environment, and
            introduced a new approach to reduce fashion waste in local communities. Through an
            extensive design process including ideation, analysis, prototyping and testing, we
            conceptualised a solution to the problem and evaluated its desirability with the
            stakeholders. We were an international team of five members and I found that our
            collaboration during the project was both successful and inspiring. We spent much time
            sharing knowledge and skills within the team, delegating tasks equally among the team
            members, and refining our design choices to match our ideas.
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      padding: 10rem 0;
      margin: 0 -1rem;

      .text-container {
        grid-column-start: 2;
        grid-column-end: 3;
      }
    }
  }
}
</style>
