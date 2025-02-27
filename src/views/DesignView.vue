<script setup>
import ProjectHeader from '@/components/ProjectHeader.vue'
import DesignNavigation from '@/components/DesignNavigation.vue'
import DesignGallery from '@/components/DesignGallery.vue'
import PortraitGallery from '@/components/PortraitGallery.vue'
import LandscapeGallery from '@/components/LandscapeGallery.vue'
import DesignBlueContainer from '@/components/DesignBlueContainer.vue'
</script>

<template>
  <main class="view">
    <ProjectHeader />
    <DesignNavigation />
    <DesignGallery />
    <PortraitGallery />
    <LandscapeGallery />
    <DesignBlueContainer />
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
