<script setup>
// const scrollIntoView = (id) => {
//   if (!id) return
//   const sectionElement = document.getElementById(id)
//   console.log(id)
//   if (!sectionElement) return
//   sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
// }
</script>

<template>
  <section class="section" id="home-section">
    <div class="section__content">
      <div class="container">
        <h1 class="title">
          Interaction Designer <br />
          & Frontend Developer
        </h1>
        <div class="items">
          <div class="item">
            <h4 class="item__title">Background</h4>
            <h3 class="item__description">
              Human-Computer Interaction, <br />
              Web Development
            </h3>
          </div>
          <div class="item">
            <h4 class="item__title">Location</h4>
            <h3 class="item__description">
              Stockholm area, <br />
              Sweden
            </h3>
          </div>
          <div class="item">
            <h4 class="item__title">Experience</h4>
            <h3 class="item__description">2+ years</h3>
          </div>
          <div class="item">
            <h4 class="link-element">contact.elma@tuta.com</h4>
          </div>
        </div>
      </div>
      <div class="graphic"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: calc(100% + (2 * 1rem));
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: start;
  padding-top: 0 !important;

  &__content {
    margin: 5rem -2rem 2rem -1rem;
    // background-image: url('../assets/cover-image.png');
    // background-size: cover;
    background-color: var(--clr-white);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    // padding: 1rem;
    width: 100%;
    height: 100%;

    .container {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      height: 100%;
      width: calc(100% + 3rem);
      padding: 2rem 3rem;

      .title {
        font-family: 'IBMPlexSans-Bold';
        font-size: 3rem;
        line-height: 1.2;
      }

      .items {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 1rem;

        .item {
          display: flex;
          flex-flow: column nowrap;
          row-gap: 0.25rem;
          &__title {
          }
          &__description {
            font-family: 'IBMPlexSans-SemiBold';
          }
          .link-element {
            transition: 0.1s ease;
            letter-spacing: 1px;
            color: var(--clr-gray-100);
          }
        }
      }
    }

    // .graphic {
    //   grid-column-start: 2;
    //   grid-column-end: 3;
    //   grid-row-start: 1;
    //   grid-row-end: 3;
    //   background-image: url('../assets/cover-image.png');
    //   background-size: cover;
    //   width: 100%;
    // }
  }
}
</style>
