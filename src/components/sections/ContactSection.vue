<script setup>
import { ArrowUpRight, Copy, Mail } from 'lucide-vue-next';
import SectionShell from '../common/SectionShell.vue';
import ExternalLink from '../common/ExternalLink.vue';
import { usePortfolioContent } from '../../composables/usePortfolioContent';

const { profile, socials } = usePortfolioContent();
</script>

<template>
  <SectionShell id="contact" index="05" eyebrow="Contact" title="Tell me what you want to launch.">
    <div class="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="max-w-2xl text-3xl font-medium leading-tight text-ink/85">
          Need a portfolio, landing page, or Vue interface that looks professional and is built to
          scale? Send me a note.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <ExternalLink :href="`mailto:${profile.email}`" label="Email Me" />
          <a
            :href="`mailto:${profile.email}`"
            class="focus-ring inline-flex min-h-12 items-center gap-2 rounded border border-line bg-white px-5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:border-ink"
          >
            <Mail :size="16" aria-hidden="true" />
            {{ profile.email }}
          </a>
        </div>
      </div>

      <div class="border-y border-line py-2">
        <a
          v-for="item in socials"
          :key="item.label"
          :href="item.href"
          class="focus-ring flex items-center justify-between gap-4 border-b border-line py-5 text-lg font-bold text-ink last:border-b-0"
          target="_blank"
          rel="noreferrer"
        >
          {{ item.label }}
          <Copy v-if="item.label === 'Email'" :size="18" aria-hidden="true" />
          <ArrowUpRight v-else :size="18" aria-hidden="true" />
        </a>
      </div>
    </div>
  </SectionShell>
</template>
