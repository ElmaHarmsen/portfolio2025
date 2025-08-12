<script setup></script>

<template>
  <section class="section" id="skills-section">
    <div class="section__content">
      <div class="service-item">
        <div class="interaction-design"></div>
        <div class="service-item__description">
          <div class="container column">
            <h1>Interaction Design</h1>
            <h4>
              User Interface Design <br />
              User Experience Design <br />
              User Research <br />
              Usability
            </h4>
          </div>
          <div class="container row"></div>
        </div>
      </div>
      <div class="service-item">
        <div class="frontend-development"></div>
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
        <div class="hci"></div>
        <div class="service-item__description">
          <div class="container column">
            <h1>Human-Computer Interaction</h1>
            <h4>User Centred Design <br /></h4>
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

      &__img {
        width: 100%;
        aspect-ratio: 16 / 9;
      }

      .interaction-design {
        background-color: #ffffff;
        opacity: 0.8;
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
        aspect-ratio: 16 /9;
      }

      .frontend-development {
        background-color: #ffffff;
        opacity: 0.8;
        background-image: linear-gradient(45deg, #3c534a 50%, #ffffff 50%);
        background-size: 15px 15px;
        aspect-ratio: 16 /9;
      }

      .hci {
        background-color: #ffffff;
        opacity: 0.8;
        background-image:
          repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 15px),
          repeating-linear-gradient(#e8edec, #3c534a);
        aspect-ratio: 16 /9;
      }

      &__description {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        row-gap: 1rem;
        background-color: var(--clr-white);
        padding: 1rem;
        aspect-ratio: 16 /9;

        h1 {
          color: var(--clr-gray-100);
        }

        .container {
          display: flex;
          justify-content: space-between;

          h4 {
            color: var(--clr-gray-70);
          }

          .icon {
            width: 28px;
            height: 28px;
            transform: rotate(-45deg);
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

    // .skill-item {
    //   display: flex;
    //   flex-flow: column nowrap;
    //   justify-content: flex-start;
    //   aspect-ratio: 16 / 9;
    //   padding: 1rem;
    //   box-shadow:
    //     rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    //     rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    //   &__icon {
    //     width: 30%;
    //     align-self: center;
    //   }

    //   .content {
    //     flex-grow: 1;
    //     padding: 1rem;
    //   }
    // }

    .bg-blue-1 {
      background-color: var(--clr-white);
    }

    .bg-blue-2 {
      background-color: var(--clr-white);
    }

    .bg-blue-3 {
      background-color: var(--clr-white);
    }

    .bg-purple-1 {
      background-color: var(--clr-white);
    }

    .bg-purple-2 {
      background-color: var(--clr-white);
    }

    .bg-purple-3 {
      background-color: var(--clr-white);
    }
    // .skill-item:hover {
    //   transform: scale(1.01) rotate(0.25deg);
    //   box-shadow: 0 0 10px var(--clr-gray-20);
    // }
  }
}
</style>
