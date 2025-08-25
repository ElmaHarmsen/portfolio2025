<script setup></script>

<template>
  <section class="section" id="skills-section">
    <div class="section__content">
      <div class="service-item">
        <div class="img interaction-design"></div>
        <div class="service-item__description">
          <div class="container column">
            <h1>Interaction Design</h1>
            <h4>
              User Interface Design <br />
              User Experience Design <br />
              User Research <br />
              Usability <br />
              Testing
            </h4>
          </div>
          <div class="container row"></div>
        </div>
      </div>
      <div class="service-item">
        <div class="img frontend-development"></div>
        <div class="service-item__description">
          <div class="container column">
            <h1>Frontend Development</h1>
            <h4>
              JavaScript <br />
              HTML & CSS <br />
              React Js <br />
              Vue Js <br />
              Git & Github
            </h4>
          </div>
          <div class="container row"></div>
        </div>
      </div>
      <div class="service-item">
        <div class="img hci"></div>
        <div class="service-item__description">
          <div class="container column">
            <h1>Human-Computer Interaction</h1>
            <h4>
              User Centred Design <br />
              Embodied Interaction <br />
              Measuring & Analysing UX <br />
              Non-exclusive Design
            </h4>
          </div>
          <div class="container row"></div>
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
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin: 0 -1rem;

    .service-item {
      display: grid;
      grid-template-rows: repeat(2, 50%);
      transition: all 0.2s ease;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      .img {
        background-color: #ffffff;
        opacity: 0.8;
        aspect-ratio: 16 / 9;
      }

      .interaction-design {
        background-image:
          linear-gradient(#3c534a 2.6px, transparent 2.6px),
          linear-gradient(90deg, #3c534a 2.6px, transparent 2.6px),
          linear-gradient(#3c534a 1.3px, transparent 1.3px),
          linear-gradient(90deg, #3c534a 1.3px, #ffffff 1.3px);
        background-size:
          65px 65px,
          65px 65px,
          13px 13px,
          13px 13px;
        background-position:
          -2.6px -2.6px,
          -2.6px -2.6px,
          -1.3px -1.3px,
          -1.3px -1.3px;
      }

      .frontend-development {
        background-image: linear-gradient(45deg, #3c534a 50%, #ffffff 50%);
        background-size: 15px 15px;
      }

      .hci {
        background-image:
          repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 15px),
          repeating-linear-gradient(#e8edec, #3c534a);
      }

      &__description {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        row-gap: 1rem;
        background-color: var(--clr-white);
        padding: 1rem;
        aspect-ratio: 16 / 9;

        h1 {
          color: var(--clr-gray-100);
          font-family: 'IBMPlexSans-SemiBold';
          font-size: 1.5rem;
        }

        .container {
          display: flex;
          justify-content: space-between;

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
      grid-template-rows: repeat(3, 1fr);
      margin: 0 2rem;

      .service-item {
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }
}
</style>
