<script setup>
import ForkifyHeader from '@/components/ForkifyHeader.vue'
import ForkifyNavigation from '@/components/ForkifyNavigation.vue'
</script>

<template>
  <main class="view">
    <ForkifyHeader />
    <ForkifyNavigation />
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
