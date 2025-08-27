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
            <h2>Design Value #1</h2>
            <h2>Designing with Thought</h2>
            <p>
              To be perceptive to the significance of design choices on individuals and collectives
              of people
            </p></swiper-slide
          >
          <swiper-slide class="my-slide">
            <h2>Design Value #2</h2>
            <h2>Understanding the Problem</h2>
            <p>To understand a given problem from different perspectives</p></swiper-slide
          >
          <swiper-slide class="my-slide">
            <h2>Design Value #3</h2>
            <h2>Listening to Users</h2>
            <p>To be an active listener to users' needs</p>
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
  background-color: var(--clr-white);

  &__content {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;

    .inside-container {
      grid-column-start: 4;
      grid-column-end: 14;
      padding: 10rem 0;
      margin: 0 -1rem;

      .title {
        font-family: 'DM Sans Bold';
        font-size: 3rem;
        line-height: 1.2;
        color: var(--clr-gray-100);
        text-align: center;
      }

      .my-swiper {
        min-height: 300px;

        .my-slide {
          min-height: 300px;
          padding: 1rem;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          row-gap: 1rem;
          text-align: center;

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

    &__content {
      grid-template-columns: repeat(1, 1fr);
      margin: 0rem 2rem 2rem 2rem;
      padding: 0;
      width: calc(100% - (2 * 2rem));

      .inside-container {
        grid-column-start: 1;
        grid-column-end: 2;
        margin: 0;

        .my-swiper {
          width: calc(100vw - (2 * 2rem));
        }
      }
    }
  }
}
</style>
