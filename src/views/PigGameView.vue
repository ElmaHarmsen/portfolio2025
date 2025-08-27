<script setup>
import PigGameHeader from '@/components/PigGameHeader.vue'
import PigGameNavigation from '@/components/PigGameNavigation.vue'
import PigGameCode from '@/components/PigGameCode.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main class="view">
    <PigGameHeader />
    <PigGameNavigation />
    <PigGameCode />
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
