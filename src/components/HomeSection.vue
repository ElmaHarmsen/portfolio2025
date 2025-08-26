<script setup>
const scrollIntoView = (id) => {
  if (!id) return
  const sectionElement = document.getElementById(id)
  console.log(id)
  if (!sectionElement) return
  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
</script>

<template>
  <section class="section" id="home-section">
    <div class="section__content">
      <div class="title">
        <span class="title__small">Elma Harmsen</span>
        <h1>
          Interaction <br />
          Designer <br />
          <span class="title__colored"
            >& Frontend <br />
            Developer</span
          >
        </h1>
      </div>
      <!-- <img src="../assets/blob.svg" class="blob" alt="Just a blob" /> -->
      <!-- <img src="../assets/home-img.png" class="home-img" alt="Cat" /> -->
      <div class="btn-container">
        <button class="home-btn" @click="scrollIntoView('intro-section')">
          <img src="../assets/icons/arrow--down.svg" class="home-btn__icon" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: calc(100% + (2 * 1rem));
  height: calc(100vh - 7rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: start;
  padding-top: 0 !important;

  &__content {
    margin: 0rem -2rem 2rem -1rem;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
    height: calc(100% - 7rem);
    padding: 1rem;

    .title {
      grid-row-start: 1;
      grid-row-end: 3;
      align-self: center;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 1rem;

      h1 {
        font-family: 'DM Sans Bold';
        font-size: 3rem;
        line-height: 1.2;
        color: var(--clr-gray-100);
      }

      &__small {
        font-family: 'DM Sans SemiBold';
        font-size: 1.5rem;
      }

      &__colored {
        color: var(--clr-green);
      }
    }

    .blob,
    .home-img {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .blob {
      position: relative;
      z-index: -1;
      width: 150%;
      height: 150%;
      transform: translateX(-20%);
    }

    .home-img {
      position: relative;
      z-index: 2;
      left: 25%;
      top: 35%;
      width: auto;
      height: 80%;
    }
  }

  .btn-container {
    align-self: flex-end;
    justify-self: flex-start;
    position: absolute;
    z-index: 3;
    bottom: 10rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .home-btn {
      background-color: var(--clr-green);
      border: 1px solid var(--clr-green);
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      transition: 0.1s ease;

      &__icon {
        width: 24px;
      }
    }

    .home-btn:hover {
      cursor: pointer;
    }
  }
}

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;
    width: calc(100% - (2 * 2rem));

    &__content {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 1fr);
      margin: 0rem 2rem 2rem 2rem;
      padding: 0;
      width: 100%;

      .title {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
      }

      .blob,
      .home-img {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 4;
      }

      .blob {
        display: none;
        position: absolute;
        z-index: -1;
        width: 125%;
        height: 125%;
        transform: translateY(0%) translateX(-20%);
      }

      .home-img {
        position: absolute;
        z-index: 2;
        transform: translateX(-25%) translateY(25%);
        width: auto;
        height: 30%;
      }
    }

    .btn-container {
      justify-self: center;
    }
  }
}
</style>
