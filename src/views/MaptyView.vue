<script setup>
import MaptyHeader from '@/components/MaptyHeader.vue'
import MaptyNavigation from '@/components/MaptyNavigation.vue'
import MaptyCode from '@/components/MaptyCode.vue'
</script>

<template>
  <main class="view">
    <MaptyHeader />
    <MaptyNavigation />
    <MaptyCode />
  </main>
</template>

<style scoped lang="scss">
.view {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 0 2rem;
  width: 100%;

  .section {
    padding-top: 10rem;
  }
}
</style>
