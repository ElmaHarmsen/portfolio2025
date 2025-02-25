<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section">
    <div class="container buttons" id="footer-section">
      <!-- needs to be dynamic based on the current page -->
      <RouterLink to="/uidesigns" class="button">
        <div>
          <h4>Up next</h4>
          <h3>Daily UI Designs</h3>
        </div>
      </RouterLink>
      <a href="https://www.linkedin.com/in/elma-harmsen/" class="button" target="_blank">
        <div>
          <h4>Contact me</h4>
          <h3>Reach out on LinkedIn</h3>
        </div>
      </a>
    </div>
    <div class="container footer">
      <div class="container__links">
        <a href="https://www.linkedin.com/in/elma-harmsen/" class="link-element" target="_blank"
          ><h4>linkedin.com/elma-harmsen</h4></a
        >
        <a href="https://github.com/ElmaHarmsen" class="link-element" target="_blank"
          ><h4>github.com/ElmaHarmsen</h4></a
        >
        <a
          href="https://drive.google.com/file/d/1Lvo313Ju4-CGauQBNB02DeypoxZ1TM1f/view?usp=sharing"
          class="link-element"
          target="_blank"
          ><h4>Curriculum Vitae</h4></a
        >
      </div>
      <h4 class="text-element">Last updated 21 Feburary 2025</h4>
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
        text-decoration: underline solid var(--clr-white-10) 1.5px;
      }
    }

    .text-element {
      align-self: flex-end;
    }

    h4 {
      color: var(--clr-white-10);
    }
  }

  .buttons {
    background-color: var(--clr-gray-100);
    height: 128px;
    padding: 0 2rem;

    .button {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 0.25rem;
      padding: 1rem;
      height: 100%;
      transition: 0.1s ease;
    }

    .button:hover {
      cursor: pointer;
      background-color: var(--clr-gray-90);
    }

    h3 {
      color: var(--clr-white);
    }
  }

  .footer {
    background-color: var(--clr-black);
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
</style>
