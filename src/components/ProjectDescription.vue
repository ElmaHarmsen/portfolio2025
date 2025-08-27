<script setup></script>

<template>
  <section class="section-wide" id="project-description">
    <div class="container">
      <div class="inside-container">
        <div class="text-container">
          <h3>
            The goal of our project was to ensure that fashion items maintain a longer life cycle by
            means of consumer-to-consumer interactions through organised clothing swap events in
            local communities.
          </h3>
          <h3>
            We started the project with a definition of the problem by answering the five
            W-questions, assessing the why, what, who, where and when of the problem. Through a
            series of interviews with the stakeholders we identified their shopping habits, fashion
            styles, discarding habits, as well as their knowledge and opinions on the problem. By
            concluding that the main issue of fast fashion revolves around the short lifespan of
            clothes which results in the frequent purchasing of new fashion garments, we then
            brainstormed on potential solutions to this problem. We used the PACT analysis as well
            as the Fogg behavioural model to further identify which specific factors our solution
            would need to address. We then defined functional and non-functional requirements, and
            prioritised the need for each of these requirements using the MoSCoW method. After this,
            we started with a series of design iterations, from paper prototypes to lo-fi and hi-fi
            wireframes, followed by multiple iterations of user testing sessions.
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
