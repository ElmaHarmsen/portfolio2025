<script setup>
import PageNavigation from '@/components/PageNavigation.vue'
import ProjectHeader from '@/components/ProjectHeader.vue'
</script>

<template>
  <main class="view">
    <ProjectHeader />
    <PageNavigation />
  </main>
</template>

<style scoped lang="scss">
.view {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 10rem 2rem;
  width: 100%;
  min-height: 100vh;
}
</style>
