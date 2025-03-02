<script setup></script>

<template>
  <section class="section-wide" id="project-description">
    <div class="container">
      <div class="container__content">
        <div class="inside-container">
          <div class="text-container">
            <h1>
              The goal of our project was to ensure that fashion items maintain a longer life cycle
              by means of consumer-to-consumer interactions through organised clothing swap events
              in local communities.
            </h1>
            <h1>
              We started the project with a definition of the problem by answering the five
              W-questions, assessing the why, what, who, where and when of the problem. Through a
              series of interviews with the stakeholders we identified their shopping habits,
              fashion styles, discarding habits, as well as their knowledge and opinions on the
              problem. By concluding that the main issue of fast fashion revolves around the short
              lifespan of clothes which results in the frequent purchasing of new fashion garments,
              we then brainstormed on potential solutions to this problem. We used the PACT analysis
              as well as the Fogg behavioural model to further identify which specific factors our
              solution would need to address. We then defined functional and non-functional
              requirements, and prioritised the need for each of these requirements using the MoSCoW
              method. After this, we started with a series of design iterations, from paper
              prototypes to lo-fi and hi-fi wireframes, followed by multiple iterations of user
              testing sessions.
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
  width: 100%;
  padding-top: calc(3rem - 1px);
  margin-top: calc(10rem - (3rem - 1px));

  .container {
    background-color: var(--clr-white);
    border-top: 1px solid var(--clr-gray-20);
    border-bottom: 1px solid var(--clr-gray-20);
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
