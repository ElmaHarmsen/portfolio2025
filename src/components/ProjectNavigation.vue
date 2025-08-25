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
  <section class="section-wide">
    <div class="container">
      <div class="container__content">
        <div class="page-intro">
          <h1 class="title">Fynder Project</h1>
          <div class="items">
            <div class="item">
              <h4 class="item__title">Completed</h4>
              <h3 class="item__description">September 2022 & November 2022</h3>
            </div>
            <div class="item">
              <h4 class="item__title">Context</h4>
              <h3 class="item__description">University Project</h3>
            </div>
          </div>
        </div>
        <div class="page-navigation">
          <div class="nav-items">
            <div class="nav-item" @click="scrollIntoView('project-gallery')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Gallery</h1>
            </div>
            <div class="nav-item" @click="scrollIntoView('project-objective')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Objective</h1>
            </div>
            <div class="nav-item" @click="scrollIntoView('project-description')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Description</h1>
            </div>
            <div class="nav-item" @click="scrollIntoView('project-outcomes')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Outcomes</h1>
            </div>
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
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;
    padding: 10rem 0;

    &__content {
      grid-column-start: 4;
      grid-column-end: 14;

      .page-intro,
      .page-navigation {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 2rem;
        margin-top: 2rem;

        .title {
          font-family: 'DM Sans Bold';
          font-size: 3rem;
          line-height: 1.2;
          color: var(--clr-gray-100);
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
              color: var(--clr-gray-70);
            }

            &__description {
              font-family: 'DM Sans SemiBold';
            }
          }
        }
      }

      .page-navigation {
        .nav-items {
          display: flex;
          flex-flow: column nowrap;
          row-gap: 0.5rem;
          .nav-item {
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

          .nav-item:hover {
            cursor: pointer;
            color: var(--clr-green);
          }
        }
      }
    }
  }
}
</style>
