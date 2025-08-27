<script setup>
import DesignHeader from '@/components/DesignHeader.vue'
import DesignNavigation from '@/components/DesignNavigation.vue'
import MusicplayerUI from '@/components/MusicplayerUI.vue'
import PortraitGallery from '@/components/PortraitGallery.vue'
import LandscapeGallery from '@/components/LandscapeGallery.vue'
import DesignOutcomes from '@/components/DesignOutcomes.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main class="view">
    <DesignHeader />
    <DesignNavigation />
    <MusicplayerUI />
    <PortraitGallery />
    <LandscapeGallery />
    <DesignOutcomes />
    <FooterSection />
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

@media (max-width: 450px) {
  .view {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
}
</style>
