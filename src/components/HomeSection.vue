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
      <h1 class="title">
        Interaction <br />
        Designer <br />
        <span class="title__colored"
          >& Frontend <br />
          Developer</span
        >
      </h1>
      <img src="../assets/blob.svg" class="blob" alt="Blob" />
      <img src="../assets/home-img.png" class="home-img" alt="Cat" />
      <div class="container">
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
      font-family: 'IBMPlexSans-Bold';
      font-size: 3rem;
      line-height: 1.2;
      color: var(--clr-gray-100);
      align-self: center;

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
      z-index: 1;
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

  .container {
    align-self: flex-end;
    justify-self: flex-start;
    clip-path: circle(50% at 50% 50%);
    // background-color: var(--clr-light);
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
</style>
