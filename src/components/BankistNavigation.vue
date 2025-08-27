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
  <section class="section-wide" id="bankist-project">
    <div class="container">
      <div class="container__content">
        <div class="page-intro">
          <h1>Bankist Project</h1>
          <div class="items">
            <div class="item">
              <h3>As part of The Complete JavaScript Course 2025: From Zero to Expert</h3>
            </div>
            <div class="item">
              <h4 class="item__title">Login with</h4>
              <h3 class="item__description">
                Username: js <br />
                Pin: 1111
              </h3>
              <h3 class="item__description">
                Username: jd <br />
                Pin: 2222
              </h3>
            </div>
            <div class="item">
              <a href="https://jscourse-bankist.netlify.app/" class="link" target="_blank"
                ><h3>jscourse-bankist.netlify.app</h3></a
              >
              <a href="https://github.com/ElmaHarmsen/bankist-project" class="link" target="_blank"
                ><h3>github.com/ElmaHarmsen/bankist-project</h3></a
              >
            </div>
          </div>
        </div>
        <div class="page-navigation">
          <div class="nav-items">
            <div class="nav-item" @click="scrollIntoView('data-transformations')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h2>Data & Data Transformations</h2>
            </div>
            <div class="nav-item" @click="scrollIntoView('login-logout')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h2>Login & Logout Functionality</h2>
            </div>
            <div class="nav-item" @click="scrollIntoView('transfers-loans')">
              <img src="../assets/icons/text--new-line.svg" class="icon" alt="new line" />
              <h2>Transfer & Loan Functionality</h2>
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

        .items {
          display: flex;
          flex-flow: column nowrap;
          row-gap: 1rem;

          .item {
            display: flex;
            flex-flow: column nowrap;
            row-gap: 0.25rem;
            width: fit-content;
          }

          .link {
            cursor: pointer;

            h3 {
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

@media (max-width: 450px) {
  .section-wide {
    grid-column-start: 1;
    grid-column-end: 2;

    .container {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 2rem;

      &__content {
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }
}
</style>
