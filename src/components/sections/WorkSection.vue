<script setup>
import SectionShell from '../common/SectionShell.vue';
import { usePortfolioContent } from '../../composables/usePortfolioContent';

const { experience } = usePortfolioContent();
</script>

<template>
  <SectionShell id="work" index="02" eyebrow="Experience" title="Work history with momentum.">
    <div class="divide-y divide-line border-y border-line">
      <article
        v-for="item in experience"
        :key="`${item.company}-${item.period}`"
        class="grid gap-5 py-7 md:grid-cols-[11rem_1fr]"
      >
        <p class="text-sm font-bold uppercase tracking-[0.14em] text-ink">{{ item.period }}</p>
        <div class="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 class="font-display text-2xl font-bold text-ink">{{ item.company }}</h3>
            <p class="mt-1 font-semibold text-ink">{{ item.role }}</p>
          </div>
          <p class="leading-7 text-ink">{{ item.impact }}</p>
        </div>
      </article>
    </div>
  </SectionShell>
</template>
