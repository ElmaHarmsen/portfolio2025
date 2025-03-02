<script setup>
import DesignHeader from '@/components/DesignHeader.vue'
import DesignNavigation from '@/components/DesignNavigation.vue'
import DesignGallery from '@/components/DesignGallery.vue'
import PortraitGallery from '@/components/PortraitGallery.vue'
import LandscapeGallery from '@/components/LandscapeGallery.vue'
import DesignOutcomes from '@/components/DesignOutcomes.vue'
</script>

<template>
  <main class="view">
    <DesignHeader />
    <DesignNavigation />
    <DesignGallery />
    <PortraitGallery />
    <LandscapeGallery />
    <DesignOutcomes />
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
