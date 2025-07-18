<script setup></script>

<template>
  <section class="section-wide" id="career-section">
    <div class="container">
      <div class="inside-container">
        <h3 class="text-container">
          I am currently pursuing an inspiring design and development career in the nordics. I have
          previously worked with User Interface Design as well as Web Development, and I have just
          recently completed a master’s degree in Human-Computer Interaction at the Uppsala
          University. I would like to continue working with User Interface Design and Interaction
          Design, possibly expanding the scope to User Research and Usability Testing, and I am open
          to Frontend Development as well. In my next employment I am looking for companies offering
          full-time and on-site or hybrid positions in a collaborative and professional work
          environment. If I have captured your interest I would be delighted to hear from you.
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
      }
    }
  }
}
</style>
