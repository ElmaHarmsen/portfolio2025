<script setup>
import { RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
</script>

<template>
  <section>
    <MainNav />
    <RouterView />
  </section>
</template>
