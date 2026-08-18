<script setup>
import AppFooter from './components/layout/AppFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import StackSection from './components/sections/StackSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-white text-ink">
    <main class="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
