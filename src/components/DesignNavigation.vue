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
      <h1>Daily UI Designs</h1>
      <div class="page-navigation">
        <div class="item" @click="scrollIntoView('ui-gallery')">
          <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
          <h3>UI Gallery</h3>
        </div>
        <div class="item" @click="scrollIntoView('first-ui')">
          <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
          <h3>Purchase Receipt UI</h3>
        </div>
        <div class="item" @click="scrollIntoView('second-ui')">
          <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
          <h3>Analysis Chart UI</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  padding-top: 10rem;

  &__content {
    .page-navigation {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 0.5rem;
      margin-top: 2rem;

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
        color: var(--clr-blue-70);
      }
    }
  }
}
</style>
