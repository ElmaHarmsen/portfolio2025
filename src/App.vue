<script setup>
import { RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <section id="view">
    <MainNav />
    <RouterView />
    <FooterSection />
  </section>
</template>

<style scoped lang="scss"></style>
