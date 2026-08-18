<script setup>
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';
import { usePortfolioContent } from '../../composables/usePortfolioContent';

const { navItems, profile } = usePortfolioContent();
const isMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
    <nav class="container-x flex min-h-16 flex-wrap items-center justify-between gap-6 py-3">
      <a href="#top" class="focus-ring font-display text-lg font-bold uppercase tracking-[0.08em]">
        {{ profile.name }}
      </a>

      <div class="hidden items-center gap-7 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="focus-ring text-sm font-bold uppercase tracking-[0.14em] text-ink/70 transition hover:text-ink"
        >
          {{ item.label }}
        </a>
      </div>

      <a
        :href="`mailto:${profile.email}`"
        class="focus-ring hidden rounded-full border border-ink px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] transition hover:bg-ink hover:text-paper sm:inline-flex"
      >
        Hire Me
      </a>

      <button
        class="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-line md:hidden"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Open navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Menu :size="18" aria-hidden="true" />
      </button>

      <div
        v-show="isMenuOpen"
        id="mobile-navigation"
        class="grid w-full gap-2 border-t border-line pt-3 md:hidden"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="focus-ring py-2 text-sm font-bold uppercase tracking-[0.14em] text-ink/70 transition hover:text-ink"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>
  </header>
</template>
