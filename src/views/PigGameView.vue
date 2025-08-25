<script setup>
import PigGameHeader from '@/components/PigGameHeader.vue'
import PigGameNavigation from '@/components/PigGameNavigation.vue'
import PigGameCode from '@/components/PigGameCode.vue'
</script>

<template>
  <main class="view">
    <PigGameHeader />
    <PigGameNavigation />
    <PigGameCode />
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
