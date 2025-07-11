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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
