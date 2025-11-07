<script setup>
import { register } from 'swiper/element/bundle'
register()

const spaceBetween = 10
const onProgress = (e) => {
  const [swiper, progress] = e.detail
  console.log(swiper, progress)
}
</script>

<template>
  <section class="section" id="about-section">
    <div class="section__content">
      <div class="inside-container">
        <swiper-container
          :slides-per-view="1"
          :space-between="spaceBetween"
          :breakpoints="{
            768: {
              slidesPerView: 1,
            },
          }"
          loop="true"
          navigation="true"
          pagination="true"
          @swiperprogress="onProgress"
          @wpiderslidechange="onSlideChange"
          class="my-swiper"
        >
          <swiper-slide class="my-slide">
            <p class="slide-nr">Design Value #1</p>
            <h1>Designing with Thought</h1>
            <h2>
              To be perceptive to the significance of design choices on individuals and collectives
              of people
            </h2></swiper-slide
          >
          <swiper-slide class="my-slide">
            <p class="slide-nr">Design Value #2</p>
            <h1>Understanding the Problem</h1>
            <h2>To understand a given problem from different perspectives</h2></swiper-slide
          >
          <swiper-slide class="my-slide">
            <p class="slide-nr">Design Value #3</p>
            <h1>Listening to Users</h1>
            <h2>To be an active listener to users' needs</h2>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  grid-column-start: 1;
  grid-column-end: 17;
  width: 100%;
  background-color: var(--clr-blue);
  margin-bottom: 10rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;

    .inside-container {
      grid-column-start: 4;
      grid-column-end: 14;
      padding: 20rem 0;
      margin: 0 -1rem;

      .title {
        font-family: 'DM Sans Bold';
        font-size: 3rem;
        line-height: 1.2;
        text-align: center;
      }

      .my-swiper {
        min-height: 300px;

        .my-slide {
          min-height: 300px;
          padding: 2rem;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          row-gap: 1rem;
          text-align: center;

          .slide-nr {
            text-transform: uppercase;
            font-family: 'DM Sans Bold';
          }

          .bold {
            font-family: 'DM Sans SemiBold';
          }
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .section {
    grid-column-start: 1;
    grid-column-end: 2;
    width: 100%;
    margin-bottom: 0rem;

    &__content {
      grid-template-columns: repeat(1, 1fr);
      margin: 0rem 2rem 2rem 2rem;
      padding: 0;
      width: calc(100% - (2 * 2rem));

      .inside-container {
        grid-column-start: 1;
        grid-column-end: 2;
        margin: 0;
        padding: 10rem 0;

        .my-swiper {
          width: calc(100vw - (2 * 2rem));
        }
      }
    }
  }
}
</style>
