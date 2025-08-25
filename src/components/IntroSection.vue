<script setup></script>

<template>
  <section class="section-wide" id="intro-section">
    <div class="container">
      <div class="inside-container">
        <img src="../assets/me.jpg" class="picture-me" alt="" />
        <h3 class="text-container">
          Hi. My name is Elma Harmsen and I am an interaction designer and frontend developer based
          in Sweden. My interest in design and technology has inspired me to become a UI and
          Interaction Designer. I have a pragmatic and practical mentality for design, and I believe
          in straightforward solutions. I value open-mindedness as well as sharing knowledge, and I
          like to be diligent in my work and to take opportunities to learn. I enjoy collaborating
          with people, and I take care to contribute to a positive and inclusive environment. While
          seeking out my next career opportunity, I am working to improve my design and development
          skills, so be sure to check out my latest development projects and designs.
        </h3>
        <div class="items">
          <div class="item">
            <h4 class="item__title">Background</h4>
            <h3 class="item__description">
              Human-Computer Interaction, <br />
              Web Development, <br />
              Multimedia Design
            </h3>
          </div>
          <div class="item">
            <h4 class="item__title">Previous job roles</h4>
            <h3 class="item__description">
              Web Developer <br />
              User Interface Designer <br />
            </h3>
          </div>
          <div class="item">
            <h4 class="item__title">Languages</h4>
            <h3 class="item__description">Dutch, English, Swedish</h3>
          </div>
          <div class="item">
            <h4 class="item__title">Location</h4>
            <h3 class="item__description">
              Stockholm, Uppsala <br />
              Sweden
            </h3>
          </div>
          <div class="item">
            <h4 class="item__title">Experience</h4>
            <h3 class="item__description">1,5+ years</h3>
          </div>
        </div>
        <div class="contact">
          <a href="mailto:contact.elma@tuta.com"
            ><h4 class="link-element">contact.elma@tuta.com</h4></a
          >
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
      gap: 2rem;
      padding: 10rem 0 10rem 0;
      margin: 0 -1rem;

      .picture-me {
        width: 100%;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      .text-container {
        grid-column-start: 2;
        grid-column-end: 3;
        .bold {
          font-family: 'IBMPlexSans-SemiBold';
        }
      }

      .items {
        grid-column-start: 2;
        grid-column-end: 3;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 1rem;

        .item {
          display: flex;
          flex-flow: column nowrap;
          row-gap: 0.25rem;

          &__title {
            color: var(--clr-gray-70);
          }

          &__description {
            font-family: 'IBMPlexSans-SemiBold';
          }
        }
      }

      .contact {
        grid-column-start: 2;
        grid-column-end: 3;

        .link-element {
          transition: 0.1s ease;
          letter-spacing: 1px;
          color: var(--clr-gray-70);
        }
        .link-element:hover {
          cursor: pointer;
          text-decoration: underline solid var(--clr-gray-100) 1.5px;
        }
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
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
        gap: 2rem 0;
        margin: 0 2rem;

        .picture-me {
          grid-row-start: 1;
          grid-row-end: 2;
          grid-column-start: 1;
          grid-column-end: 3;
        }

        .text-container {
          grid-row-start: 2;
          grid-row-end: 3;
        }

        .items {
          grid-row-start: 3;
          grid-row-end: 4;
        }

        .contact {
          grid-row-start: 4;
          grid-row-end: 5;
        }
      }
    }
  }
}
</style>
