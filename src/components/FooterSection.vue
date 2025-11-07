<script setup></script>

<template>
  <section class="section" id="footer-section">
    <div class="container">
      <div class="container__links">
        <h3>Links</h3>
        <a href="https://www.linkedin.com/in/elma-harmsen/" class="link-element" target="_blank"
          ><h2>linkedin.com/elma-harmsen</h2></a
        >
        <a href="https://github.com/ElmaHarmsen" class="link-element" target="_blank"
          ><h2>github.com/ElmaHarmsen</h2></a
        >
        <a
          href="https://drive.google.com/file/d/1Pj7Q5WT-dUnqJ_0f3keKfio07Coyuew5/view?usp=sharing"
          class="link-element"
          target="_blank"
          ><h2>Curriculum Vitae</h2></a
        >
        <a href="mailto:contact.elma@tuta.com" class="link-element"
          ><h2>contact.elma@tuta.com</h2></a
        >
      </div>
      <h3 class="text-element">Last updated 7 November 2025</h3>
      <div class="items">
        <div class="item">
          <h3 class="item__title">Background</h3>
          <div class="item__description">
            <h2>Human-Computer Interaction</h2>
            <h2>Web Development</h2>
            <h2>Multimedia Design</h2>
          </div>
        </div>
        <div class="item">
          <h3 class="item__title">Previous job roles</h3>
          <div class="item__description">
            <h2>Web Developer</h2>
            <h2>User Interface Designer</h2>
          </div>
        </div>
        <div class="item">
          <h3 class="item__title">Languages</h3>
          <h2>Dutch, English, Swedish</h2>
        </div>
        <div class="item">
          <h3 class="item__title">Location</h3>
          <div class="item__description">
            <h2>Stockholm,</h2>
            <h2>Uppsala Sweden</h2>
          </div>
        </div>
        <div class="item">
          <h3 class="item__title">Experience</h3>
          <h2>1,5+ years</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  background-color: var(--clr-blue);

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: start;
    padding: 20rem 2rem 2rem 2rem;

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
        transform: translateX(1rem);
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
      gap: 4rem;
      padding-top: 10rem;

      .items {
        grid-column-start: 1;
        grid-column-end: 2;
      }

      &__links,
      .text-element {
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }
}
</style>
