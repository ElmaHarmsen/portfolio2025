<script setup>
import HomeSection from '../components/HomeSection.vue'
import IntroSection from '@/components/IntroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import DesignerSection from '../components/DesignerSection.vue'
import DeveloperSection from '../components/DeveloperSection.vue'
import CareerSection from '../components/CareerSection.vue'
</script>

<template>
  <main class="view">
    <HomeSection />
    <IntroSection />
    <ProjectsSection />
    <AboutSection />
    <DesignerSection />
    <DeveloperSection />
    <CareerSection />
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
