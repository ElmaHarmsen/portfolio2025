<script setup>
import ProjectHeader from '@/components/ProjectHeader.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'
import ProjectObjective from '@/components/ProjectObjective.vue'
import ProcessGallery from '@/components/ProcessGallery.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import PrototypeGallery from '@/components/PrototypeGallery.vue'
import OutcomesSection from '@/components/ProjectOutcomes.vue'
</script>

<template>
  <main class="view">
    <ProjectHeader />
    <ProjectNavigation />
    <ProjectGallery />
    <ProjectObjective />
    <ProcessGallery />
    <ProjectDescription />
    <PrototypeGallery />
    <OutcomesSection />
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
