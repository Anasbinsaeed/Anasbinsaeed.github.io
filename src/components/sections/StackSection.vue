<script setup>
import SectionShell from '../common/SectionShell.vue';
import SkillPill from '../common/SkillPill.vue';
import { usePortfolioContent } from '../../composables/usePortfolioContent';

const { stackGroups } = usePortfolioContent();
</script>

<template>
  <SectionShell id="stack" index="04" eyebrow="Stack" title="Frontend systems I use.">
    <div class="grid gap-4 md:grid-cols-3">
      <article
        v-for="group in stackGroups"
        :key="group.title"
        class="border border-line bg-white p-6"
      >
        <h3 class="font-display text-2xl font-bold text-ink">{{ group.title }}</h3>
        <div class="mt-6 flex flex-wrap gap-2">
          <SkillPill v-for="item in group.items" :key="item" :label="item" />
        </div>
      </article>
    </div>
  </SectionShell>
</template>
