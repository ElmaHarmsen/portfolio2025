<script setup>
import ProjectHeader from '@/components/ProjectHeader.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import OutcomesSection from '@/components/OutcomesSection.vue'
import BlueContainer from '@/components/BlueContainer.vue'
</script>

<template>
  <main class="view">
    <ProjectHeader />
    <ProjectNavigation />
    <ProjectGallery />
    <ProcessSection />
    <OutcomesSection />
    <BlueContainer />
  </main>
</template>

<style scoped lang="scss">
.view {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 0 2rem;
  width: 100%;
  min-height: 100vh;
}
</style>
