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

@media (max-width: 450px) {
  .view {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
}
</style>
