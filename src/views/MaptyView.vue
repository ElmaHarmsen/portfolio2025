<script setup>
import MaptyHeader from '@/components/MaptyHeader.vue'
import MaptyNavigation from '@/components/MaptyNavigation.vue'
</script>

<template>
  <main class="view">
    <MaptyHeader />
    <MaptyNavigation />
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
