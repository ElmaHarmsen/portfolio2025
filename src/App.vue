<script setup>
import MainNav from './components/MainNav.vue'
import HomeSection from './components/HomeSection.vue'
import BlueContainer from './components/BlueContainer.vue'
import ProjectsSection from './components/ProjectsSection.vue'
</script>

<template>
  <section id="view">
    <MainNav />
    <HomeSection />
    <BlueContainer />
    <ProjectsSection />
  </section>
</template>

<style scoped lang="scss">
#view {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 2rem;
  width: 100%;
}
</style>
