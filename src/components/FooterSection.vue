<script setup></script>

<template>
  <section class="section">
    <div class="container footer">
      <div class="container__links">
        <a href="https://www.linkedin.com/in/elma-harmsen/" class="link-element" target="_blank"
          ><h4>linkedin.com/elma-harmsen</h4></a
        >
        <a href="https://github.com/ElmaHarmsen" class="link-element" target="_blank"
          ><h4>github.com/ElmaHarmsen</h4></a
        >
        <a
          href="https://drive.google.com/file/d/1FmRRrdNe6owK4m1elNwwhpEkGN6vlfcW/view?usp=sharing"
          class="link-element"
          target="_blank"
          ><h4>Curriculum Vitae</h4></a
        >
        <a href="" class="link-element"><h4>contact.elma@tuta.com</h4></a>
      </div>
      <h4 class="text-element">Last updated 18 July 2025</h4>
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

  .footer {
    background-color: var(--clr-bright);
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
