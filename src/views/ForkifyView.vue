<script setup>
import ForkifyHeader from '@/components/ForkifyHeader.vue'
import ForkifyNavigation from '@/components/ForkifyNavigation.vue'
import ForkifyCode from '@/components/ForkifyCode.vue'
</script>

<template>
  <main class="view">
    <ForkifyHeader />
    <ForkifyNavigation />
    <ForkifyCode />
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
