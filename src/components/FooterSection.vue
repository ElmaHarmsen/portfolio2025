<script setup></script>

<template>
  <section class="section" id="footer-section">
    <div class="container">
      <div class="container__links">
        <a href="https://www.linkedin.com/in/elma-harmsen/" class="link-element" target="_blank"
          ><h3>linkedin.com/elma-harmsen</h3></a
        >
        <a href="https://github.com/ElmaHarmsen" class="link-element" target="_blank"
          ><h3>github.com/ElmaHarmsen</h3></a
        >
        <a
          href="https://drive.google.com/file/d/1Pj7Q5WT-dUnqJ_0f3keKfio07Coyuew5/view?usp=sharing"
          class="link-element"
          target="_blank"
          ><h3>Curriculum Vitae</h3></a
        >
        <a href="mailto:contact.elma@tuta.com" class="link-element"
          ><h3>contact.elma@tuta.com</h3></a
        >
      </div>
      <h4 class="text-element">Last updated 26 August 2025</h4>
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
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 2;
  grid-column-end: 16;
  width: 100%;
  background-color: var(--clr-orange);

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: start;
    padding-bottom: 2rem;

    .items {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 1.25rem;

      .item {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 0.25rem;

        &__description {
          font-family: 'DM Sans Bold';
        }
      }
    }

    &__links,
    .text-element {
      grid-column-start: 1;
      grid-column-end: 2;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 0.5rem;
      width: fit-content;

      .link-element {
        transition: 0.1s ease;
      }

      .link-element:hover {
        text-decoration: underline solid var(--clr-gray-100) 1.75px;
      }
    }

    .text-element {
      font-family: 'DM Sans Medium';
      align-self: flex-end;
    }

    h3 {
      font-family: 'DM Sans SemiBold';
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;

    .container {
      grid-template-columns: 1fr;
      margin: 0 2rem;
      gap: 4rem;

      .items {
        grid-column-start: 1;
        grid-column-end: 2;
      }

      &__links,
      .text-element {
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .link-element {
        text-decoration: underline solid var(--clr-gray-100) 1.75px;
      }
    }

    .footer {
      padding: 6rem 2rem 4rem 2rem;
    }
  }
}
</style>
