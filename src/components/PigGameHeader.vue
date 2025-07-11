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
  <section class="section">
    <div class="section__content">
      <video id="piggame-video" autoplay loop>
        <source src="../assets/piggame-recording.mp4" type="video/mp4" />
      </video>
      <!-- <div class="container left"></div>
      <div class="container middle" @click="scrollIntoView('first-ui')">
        <h1>Development Process</h1>
        <img src="../assets/icons/arrow--forward-1.svg" class="icon-default" alt="arrow right" />
      </div>
      <div class="container right" @click="scrollIntoView('second-ui')">
        <h1>Project Architecture</h1>
        <img src="../assets/icons/arrow--forward-1.svg" class="icon-default" alt="arrow right" />
      </div> -->
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  margin-top: 3rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 0;

    #piggame-video {
      width: 100vw;
      height: auto;
    }

    .container {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      height: calc(100vh - 3rem - 4rem);
      width: auto;
      padding: 1rem;
      transition: 0.2s ease;

      h1 {
        color: var(--clr-gray-100);
      }

      .icon-default {
        width: 2rem;
        height: 2rem;
        align-self: end;
      }
    }
    .left {
      grid-column-start: 1;
      grid-column-end: 9;
      border-right: 1px solid var(--clr-gray-40);
    }

    .middle {
      grid-column-start: 9;
      grid-column-end: 13;
      border-right: 1px solid var(--clr-gray-40);
    }

    .right {
      grid-column-start: 13;
      grid-column-end: 17;
      border: none;
    }

    .middle:hover,
    .right:hover {
      cursor: pointer;
      background-color: var(--clr-white);
    }
  }
}
</style>
