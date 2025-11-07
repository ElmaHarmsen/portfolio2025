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
        <span class="empty"></span>
        <div class="title">
          <h1>
            Frontend Developer <br />
            with awareness of<br />
            Interaction Design
          </h1>
          <h2 class="title__item">Elma Harmsen</h2>
        </div>
        <button class="home-btn" @click="scrollIntoView('projects-section')">
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
  height: calc(100vh - (6rem + 2rem));
  background-color: var(--clr-orange);

  .container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 2rem;
    height: 100%;

    .inside-container {
      grid-column-start: 4;
      grid-column-end: 14;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      height: 100%;

      .empty {
        height: 6rem;
      }

      .title {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 3;
        align-self: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 2rem;

        &__item {
          color: var(--clr-blue);
          text-transform: uppercase;
          font-family: 'DM Sans Bold';
        }

        h1 {
          text-align: center;
        }
      }

      .small-icon {
        width: 100px;
        background-color: orangered;
        padding: 0.5rem;
        border-radius: 100%;
      }

      .home-btn {
        position: relative;
        bottom: -3rem;
        align-self: center;
        cursor: pointer;
        background: linear-gradient(90deg, var(--clr-orange) 50%, var(--clr-blue) 50%);
        border: none;
        width: 6rem;
        height: 6rem;
        border-radius: 100%;
        transition: 0.25s ease-out;

        &__icon {
          width: 32px;
          display: none;
        }
      }
    }
  }

  .home-btn:hover {
    transform: rotate(360deg);
  }
}

@media (max-width: 450px) {
  .section-wide {
    grid-column-start: 1;
    grid-column-end: 2;

    .container {
      display: block;

      .inside-container {
        margin: 0 2rem;
        padding: 0;

        .title {
          align-self: flex-start;
          align-items: flex-start;

          h1 {
            text-align: left;
          }
        }

        .home-btn {
          width: 5rem;
          height: 5rem;
          bottom: -2.5rem;
          left: -1rem;

          &__icon {
            width: 28px;
          }
        }

        .home-btn:hover {
          transform: rotate(0);
        }
      }
    }
  }
}
</style>
