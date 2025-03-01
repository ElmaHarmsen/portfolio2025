<script setup></script>

<template>
  <section class="container">
    <div class="container__content">
      <div class="inside-container">
        <h1 class="text">
          I am currently pursuing an ✨ inspiring design career ✨ in the nordics. I have previously
          worked with User Interface Design as well as Web Development, and I have just recently
          completed a master’s degree in Human-Computer Interaction at the Uppsala University. I
          would like to continue working with User Interface Design and Interaction Design, possibly
          expanding the scope to User Research and Usability Testing, and I am open to Web
          Development as well. In my next employment I am looking for companies offering full-time
          and on-site or hybrid positions in a collaborative and professional work environment. If I
          have captured your interest I would be delighted to hear from you 🙌
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  grid-column-start: 1;
  grid-column-end: 17;
  background-color: var(--clr-purple-10);
  border-top: 1px solid var(--clr-gray-20);
  border-bottom: 1px solid var(--clr-gray-20);
  width: 100%;
  margin-top: 10rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;

    .inside-container {
      grid-column-start: 4;
      grid-column-end: 14;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      padding: 4rem 0;
    }

    .text {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>
