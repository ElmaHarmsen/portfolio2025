<script setup></script>

<template>
  <section class="section" id="skills-section">
    <h1 class="section__title">Skills & Services</h1>
    <div class="section__content">
      <div class="service-item">
        <div class="service-item__description">
          <h1>Interaction Design</h1>
          <div class="container">
            <h4>Measuring & Analysing UI</h4>
            <h4>Usability Testing</h4>
            <h4>User Research</h4>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h1>UI/UX Design</h1>
          <div class="container">
            <h4>Design Principles</h4>
            <h4>Lofi & Hifi Prototyping</h4>
            <h4>Design Cycle</h4>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h1>HCI</h1>
          <div class="container">
            <h4>User Centred Design</h4>
            <h4>Embodied Interaction</h4>
            <h4>Non-exclusive Design</h4>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h1>Frontend Dev</h1>
          <div class="container">
            <h4>HTML & CSS</h4>
            <h4>JavaScript</h4>
            <h4>Git & Github</h4>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h1>Frameworks</h1>
          <div class="container">
            <h4>React Js</h4>
            <h4>&</h4>
            <h4>Vue Js</h4>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h1>Personal Skills</h1>
          <div class="container">
            <h4>Creative & Innovative</h4>
            <h4>Organised Approach</h4>
            <h4>Detail Oriented</h4>
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
  padding-bottom: 10rem;

  &__title {
    font-family: 'DM Sans Bold';
    font-size: 3rem;
    line-height: 1.2;
    color: var(--clr-gray-100);
    text-align: center;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 32px;
    margin: 5rem -1rem 0 -1rem;

    .service-item {
      aspect-ratio: 1 / 1;
      transition: all 0.2s ease;
      background-color: #ffffff;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      &__description {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        row-gap: 1rem;
        background-color: var(--clr-white);
        padding: 1rem;
        height: 100%;

        h1 {
          color: var(--clr-gray-100);
          font-family: 'DM Sans SemiBold';
          font-size: 1.5rem;
        }

        .container {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          row-gap: 0.25rem;

          h4 {
            color: var(--clr-gray-100);
          }
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
