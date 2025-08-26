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
            <h3>HTML & CSS</h3>
            <h3>JavaScript</h3>
            <h3>Git & Github</h3>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>Frameworks</h2>
          <div class="container">
            <h3>React Js</h3>
            <h3>&</h3>
            <h3>Vue Js</h3>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>Interaction Design</h2>
          <div class="container">
            <h3>Measuring & Analysing UI</h3>
            <h3>Usability Testing</h3>
            <h3>User Research</h3>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>UI/UX Design</h2>
          <div class="container">
            <h3>Design Principles</h3>
            <h3>Lofi & Hifi Prototyping</h3>
            <h3>Design Cycle</h3>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__description">
          <h2>HCI</h2>
          <div class="container">
            <h3>User Centred Design</h3>
            <h3>Embodied Interaction</h3>
            <h3>Non-exclusive Design</h3>
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

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 32px;
    margin: 0 -1rem;

    .title {
      font-family: 'DM Sans Bold';
      font-size: 3rem;
      line-height: 1.2;
      color: var(--clr-gray-100);
      text-align: center;
      justify-self: center;
      align-self: center;
    }

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
