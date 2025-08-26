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
  <section class="section-wide" id="home-section">
    <div class="container">
      <div class="inside-container">
        <div class="title">
          <h2>Elma Harmsen</h2>
          <h1>
            Interaction <br />
            Designer
          </h1>
          <h1>
            & Frontend <br />
            Developer
          </h1>
        </div>
      </div>
      <div class="btn-container">
        <button class="home-btn" @click="scrollIntoView('intro-section')">
          <img src="../assets/icons/arrow--down.svg" class="home-btn__icon" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  height: calc(100vh - 7rem);

  .container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;
    height: 100%;

    .inside-container {
      grid-column-start: 4;
      grid-column-end: 14;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
      gap: 2rem;
      padding: 1rem;
      margin: 5rem -1rem 0 -1rem;
      height: 100%;

      .title {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 3;
        align-self: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 1rem;

        h1 {
          text-align: center;
        }
      }
    }

    .btn-container {
      grid-column-start: 2;
      grid-column-end: 16;
      align-self: flex-end;
      justify-self: flex-start;
      width: 3rem;
      height: 3rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;

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
}

@media (max-width: 450px) {
  .section-wide {
    grid-column-start: 1;
    grid-column-end: 2;

    .container {
      display: block;

      .inside-container {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 2rem;
        padding: 0;

        .title {
          grid-column-start: 1;
          grid-column-end: 2;
          row-gap: 0.5rem;
        }
      }

      .btn-container {
        position: relative;
        left: 2rem;
        bottom: 2rem;
        transform: translateY(-100%);
      }
    }
  }
}
</style>
