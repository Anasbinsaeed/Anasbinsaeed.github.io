<script setup>
import { usePortfolioContent } from '../../composables/usePortfolioContent';

const { profile, socials } = usePortfolioContent();
</script>

<template>
  <footer class="border-t border-line py-8">
    <div class="container-x flex flex-col gap-5 text-sm font-semibold text-ink sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; 2026 {{ profile.name }}. Built with Vue.js and Tailwind CSS.</p>
      <div class="flex flex-wrap gap-4">
        <a
          v-for="item in socials"
          :key="item.label"
          :href="item.href"
          class="focus-ring uppercase tracking-[0.12em] transition"
          target="_blank"
          rel="noreferrer"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
