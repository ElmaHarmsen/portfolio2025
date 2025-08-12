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
        <h1 class="title">Design Values</h1>
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
          <swiper-slide class="my-slide"
            ><h1>Designing with Thought</h1>
            <h4>
              To be perceptive to the significance of design choices on individuals and collectives
              of people
            </h4></swiper-slide
          >
          <swiper-slide class="my-slide"
            ><h1>Understanding the Problem</h1>
            <h4>To understand a given problem from different perspectives</h4></swiper-slide
          >
          <swiper-slide class="my-slide"
            ><h1>Listening to Users</h1>
            <h4>To be an active listener to users' needs</h4></swiper-slide
          >
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
      padding: 0rem 0 10rem 0;
      margin: 0 -1rem;

      .title {
        font-family: 'IBMPlexSans-Bold';
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

          .bold {
            font-family: 'IBMPlexSans-SemiBold';
          }
        }
      }
    }
  }
}

::v-deep .swiper-button-prev,
::v-deep .swiper-button-next {
  color: #000;
}
</style>
