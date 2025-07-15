<script setup>
import PigGameHeader from '@/components/PigGameHeader.vue'
import PigGameNavigation from '@/components/PigGameNavigation.vue'
</script>

<template>
  <main class="view">
    <PigGameHeader />
    <PigGameNavigation />
  </main>
</template>

<style>
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
