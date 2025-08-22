<script setup>
import BankistHeader from '@/components/BankistHeader.vue'
import BankistNavigation from '@/components/BankistNavigation.vue'
import BankistCode from '@/components/BankistCode.vue'
</script>

<template>
  <main class="view">
    <BankistHeader />
    <BankistNavigation />
    <BankistCode />
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
