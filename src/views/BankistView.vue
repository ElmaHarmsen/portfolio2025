<script setup>
import BankistHeader from '@/components/BankistHeader.vue'
import BankistNavigation from '@/components/BankistNavigation.vue'
</script>

<template>
  <main class="view">
    <BankistHeader />
    <BankistNavigation />
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
