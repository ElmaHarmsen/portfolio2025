<script setup></script>

<template>
  <section class="section" id="skills-section">
    <div class="section__content">
      <h1 class="title">
        Skills & <br />
        Services
      </h1>
      <div class="service-item">
        <div class="service-item__description">
          <h2>Frontend Dev</h2>
          <div class="container">
            <h2>HTML & CSS</h2>
            <h2>JavaScript</h2>
            <h2>Git & Github</h2>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>Frameworks</h2>
          <div class="container">
            <h2>React Js</h2>
            <h2>Vue Js</h2>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>Interaction Design</h2>
          <div class="container">
            <h2>Measuring & Analysing UI</h2>
            <h2>Usability Testing</h2>
            <h2>User Research</h2>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>UI/UX</h2>
          <div class="container">
            <h2>Design Principles</h2>
            <h2>Lofi & Hifi Prototyping</h2>
            <h2>Design Cycle</h2>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>HCI</h2>
          <div class="container">
            <h2>User Centred Design</h2>
            <h2>Embodied Interaction</h2>
            <h2>Non-exclusive Design</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  padding: 10rem 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 -1rem;

    .title {
      text-align: center;
      justify-self: center;
      align-self: center;
      color: var(--clr-blue);
    }

    .service-item {
      aspect-ratio: 1 / 1;
      transition: all 0.2s ease;
      background-color: var(--clr-blue);

      &__description {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        row-gap: 2rem;
        padding: 2rem;
        height: 100%;

        .container {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          row-gap: 0.25rem;
        }

        .column {
          flex-flow: column nowrap;
          row-gap: 1rem;
        }
        .row {
          flex-flow: row nowrap;
          align-items: center;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;
    padding-top: 5rem !important;

    &__content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      margin: 0 2rem;

      .service-item {
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }
}
</style>
