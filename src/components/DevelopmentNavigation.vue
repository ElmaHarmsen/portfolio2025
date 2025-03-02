<script setup></script>

<template>
  <section class="section-wide">
    <div class="container">
      <div class="container__content">
        <h1>This page is a work in progress still, but will be updated soon</h1>
        <div class="page-navigation">
          <div class="item">
            <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
            <h3>Something</h3>
          </div>
          <div class="item">
            <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
            <h3>Something</h3>
          </div>
          <div class="item">
            <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
            <h3>Something</h3>
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
