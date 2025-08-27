<script setup>
import HomeSection from '../components/HomeSection.vue'
import IntroSection from '@/components/IntroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import DesignValuesSection from '@/components/DesignValuesSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import CareerSection from '../components/CareerSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main class="view">
    <HomeSection />
    <IntroSection />
    <ProjectsSection />
    <DesignValuesSection />
    <SkillsSection />
    <CareerSection />
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
