<script setup>
import HomeSection from '../components/HomeSection.vue'
import BlueContainer from '../components/BlueContainer.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import DesignerSection from '../components/DesignerSection.vue'
import DeveloperSection from '../components/DeveloperSection.vue'
</script>

<template>
  <main class="view">
    <HomeSection />
    <BlueContainer />
    <ProjectsSection />
    <AboutSection />
    <DesignerSection />
    <DeveloperSection />
    <BlueContainer />
  </main>
</template>

<style scoped lang="scss">
.view {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 10rem 2rem;
  width: 100%;
}
</style>
