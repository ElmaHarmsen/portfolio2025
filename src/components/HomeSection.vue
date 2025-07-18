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
      <!-- <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob">
        <path
          fill="#3C534A"
          d="M44.2,-60.2C59.9,-49.4,77.1,-40,85.5,-25.2C93.8,-10.4,93.3,9.9,82.9,22.3C72.5,34.8,52.3,39.5,36.9,46.5C21.4,53.5,10.7,62.9,-3.5,67.7C-17.7,72.5,-35.3,72.7,-44,63.5C-52.7,54.3,-52.4,35.6,-56.4,19.3C-60.4,3,-68.6,-11,-66.3,-22.6C-64,-34.3,-51.3,-43.6,-38.5,-55.4C-25.7,-67.2,-12.8,-81.4,0.7,-82.3C14.2,-83.3,28.5,-71,44.2,-60.2Z"
          transform="translate(100 100)"
        />
      </svg> -->
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
        color: var(--clr-bright);
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
      background-color: var(--clr-bright);
      border: 1px solid var(--clr-bright);
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
