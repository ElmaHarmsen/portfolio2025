<script setup></script>

<template>
  <section class="section" id="footer-section">
    <div class="container footer">
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
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;

    &__links,
    .text-element {
      grid-column-start: 2;
      grid-column-end: 3;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 0.25rem;
      width: fit-content;

      .link-element {
        transition: 0.1s ease;
        letter-spacing: 0.9px;
      }

      .link-element:hover {
        text-decoration: underline solid var(--clr-gray-100) 1.5px;
      }
    }

    .text-element {
      font-family: 'DM Sans Medium';
      align-self: flex-end;
      color: var(--clr-gray-100);
    }

    h3 {
      font-family: 'DM Sans SemiBold';

      color: var(--clr-gray-100);
    }
  }

  .footer {
    background-color: var(--clr-orange);
    height: 370px;
    padding: 6rem 0 4rem 0;
    gap: 32px;
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

      &__links,
      .text-element {
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }

    .footer {
      padding: 6rem 2rem 4rem 2rem;
    }
  }
}
</style>
