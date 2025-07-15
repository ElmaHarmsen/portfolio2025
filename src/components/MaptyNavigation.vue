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
  <section class="section-wide" id="mapty-project">
    <div class="container">
      <div class="container__content">
        <div class="page-intro">
          <h1>Mapty Development Project</h1>
          <h3>Part of The Complete JavaScript Course 2025: From Zero to Expert</h3>
          <h3>Design courtesy of Jonas Schmedtmann</h3>
          <a href="https://jscourse-mapty.netlify.app/" target="_blank"
            ><h3>jscourse-mapty.netlify.app</h3></a
          >
        </div>
        <div class="page-navigation">
          <div class="item" @click="scrollIntoView('second-ui')">
            <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
            <h3>Development Process</h3>
          </div>
          <div class="item" @click="scrollIntoView('ui-gallery')">
            <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
            <h3>Project Architecture</h3>
          </div>
          <div class="item" @click="scrollIntoView('first-ui')">
            <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
            <h3>Leaflet: External Library Integration</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;
  background-color: var(--clr-white);
  border-top: 1px solid var(--clr-gray-20);
  border-bottom: 1px solid var(--clr-gray-20);
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;
    padding: 4rem 0 10rem 0;

    &__content {
      grid-column-start: 4;
      grid-column-end: 14;

      .page-intro,
      .page-navigation {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 0.5rem;
        margin-top: 2rem;
      }

      .page-navigation {
        .item {
          display: flex;
          flex-flow: row nowrap;
          column-gap: 0.5rem;
          align-items: center;
          width: fit-content;
          transition: 0.2s ease;

          .icon {
            width: 1.25rem;
            height: 1.25rem;
          }
        }

        .item:hover {
          cursor: pointer;
          color: var(--clr-purple-70);
        }
      }
    }
  }
}
</style>
