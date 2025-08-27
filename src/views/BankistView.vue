<script setup>
import BankistHeader from '@/components/BankistHeader.vue'
import BankistNavigation from '@/components/BankistNavigation.vue'
import BankistCode from '@/components/BankistCode.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main class="view">
    <BankistHeader />
    <BankistNavigation />
    <BankistCode />
    <FooterSection />
  </main>
</template>

<style scoped lang="scss">
.view {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 0 2rem;
  width: 100%;
}

@media (max-width: 450px) {
  .view {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
}
</style>
