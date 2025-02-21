<script setup></script>

<template>
  <section class="section">
    <div class="section__content">
      <!-- variable property based on page -->
      <h1>Page Title Here</h1>
      <div class="page-navigation">
        <div class="item">
          <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
          <h3>Section Item</h3>
        </div>
        <div class="item">
          <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
          <h3>Section Item</h3>
        </div>
        <div class="item">
          <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
          <h3>Section Item</h3>
        </div>
        <div class="item">
          <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
          <h3>Section Item</h3>
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

  &__content {
    .page-navigation {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 0.5rem;
      margin: 2rem 0;

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
