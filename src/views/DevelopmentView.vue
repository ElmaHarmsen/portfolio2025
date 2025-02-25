<script setup>
import DevelopmentHeader from '@/components/DevelopmentHeader.vue'
import DevelopmentNavigation from '@/components/DevelopmentNavigation.vue'
import BlueContainer from '@/components/BlueContainer.vue'
</script>

<template>
  <section class="view">
    <DevelopmentHeader />
    <DevelopmentNavigation />
    <BlueContainer />
  </section>
</template>

<style scoped lang="scss">
.view {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 0 2rem;
  width: 100%;
  min-height: 100vh;
}
</style>
