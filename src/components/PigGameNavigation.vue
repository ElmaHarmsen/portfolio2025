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
  <section class="section-wide" id="piggame-project">
    <div class="container">
      <div class="container__content">
        <div class="page-intro">
          <h1 class="title">Pig Game Project</h1>
          <div class="items">
            <div class="item">
              <h4 class="item__title">Completed in</h4>
              <h3 class="item__description">
                The Complete JavaScript Course 2025: From Zero to Expert
              </h3>
            </div>
            <div class="item">
              <h4 class="item__title">Design</h4>
              <h3 class="item__description">Courtesy of Jonas Schmedtmann</h3>
            </div>
            <div class="item">
              <a href="https://jscourse-piggame.netlify.app/" class="link" target="_blank"
                ><h4>jscourse-piggame.netlify.app</h4></a
              >
              <a href="https://github.com/ElmaHarmsen/pig-game" class="link" target="_blank"
                ><h4>github.com/ElmaHarmsen/pig-game</h4></a
              >
            </div>
          </div>
        </div>
        <div class="page-navigation">
          <div class="nav-items">
            <div class="nav-item" @click="scrollIntoView('reset-function')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Game Initalization</h1>
            </div>
            <div class="nav-item" @click="scrollIntoView('diceroll-function')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Diceroll Functionality</h1>
            </div>
            <div class="nav-item" @click="scrollIntoView('scoring-function')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Scoring Functionality</h1>
            </div>
            <div class="nav-item" @click="scrollIntoView('switchplayer-function')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h1>Switch Player Functionality</h1>
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
          font-family: 'IBMPlexSans-Bold';
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
              font-family: 'IBMPlexSans-SemiBold';
            }
          }

          .link {
            color: var(--clr-gray-70);
          }

          .link:hover {
            cursor: pointer;
            text-decoration: underline solid var(--clr-gray-100) 1.5px;
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
