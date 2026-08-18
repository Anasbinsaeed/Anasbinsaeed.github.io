<script setup>
import SectionShell from '../common/SectionShell.vue';
import { usePortfolioContent } from '../../composables/usePortfolioContent';

const { highlights } = usePortfolioContent();
</script>

<template>
  <SectionShell id="about" index="01" eyebrow="About" title="What drives the work.">
    <div class="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
      <div class="space-y-6 text-2xl font-medium leading-10 text-ink/85">
        <p>
          I care about interfaces that are simple to use and simple to maintain. That means clean
          layout systems, reusable components, sensible naming, and responsive behavior planned from
          the start.
        </p>
        <p>
          The goal is a portfolio that feels polished today and stays easy to grow tomorrow.
        </p>
      </div>

      <ul class="grid gap-3">
        <li
          v-for="item in highlights"
          :key="item"
          class="border-t border-line py-4 text-base font-bold uppercase tracking-[0.12em] text-ink"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </SectionShell>
</template>
