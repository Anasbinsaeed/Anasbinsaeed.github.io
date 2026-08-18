<script setup>
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-vue-next';
import { usePortfolioContent } from '../../composables/usePortfolioContent';
import ExternalLink from '../common/ExternalLink.vue';

const { profile, stats } = usePortfolioContent();
</script>

<template>
  <section id="top" class="relative min-h-screen">
    <div class="container-x relative grid min-h-screen gap-12 py-10 lg:grid-cols-[1fr_23rem] lg:items-stretch">
      <div class="flex flex-col justify-between gap-14">
        <div class="flex items-center justify-between border-b border-line pb-6">
          <a href="#contact" class="focus-ring text-sm font-bold uppercase tracking-[0.18em] text-ink">
            Available for work
          </a>
          <span class="hidden text-sm font-bold uppercase tracking-[0.18em] text-ink sm:inline">
            {{ profile.location }}
          </span>
        </div>

        <div class="max-w-5xl">
          <p class="eyebrow">{{ profile.role }}</p>
          <h1 class="mt-6 font-display text-6xl font-bold leading-[0.82] text-ink sm:text-8xl lg:text-[8.5rem]">
            {{ profile.name }}
          </h1>
          <p class="mt-8 max-w-2xl text-xl leading-8 text-ink">
            {{ profile.summary }}
          </p>

          <div class="mt-10 flex flex-wrap gap-3">
            <ExternalLink :href="`mailto:${profile.email}`" label="Start a Project" />
            <a
              href="#projects"
              class="focus-ring inline-flex min-h-12 items-center gap-2 rounded border border-line bg-white px-5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:border-ink"
            >
              View Work
              <ArrowDown :size="16" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div class="grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
          <div v-for="item in stats" :key="item.label">
            <strong class="font-display text-4xl text-ink">{{ item.value }}</strong>
            <p class="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <aside class="flex flex-col justify-between border border-line bg-white p-6 lg:my-10">
        <div class="flex items-center justify-between">
          <Code2 class="text-ink" :size="28" aria-hidden="true" />
          <span class="font-display text-sm font-bold uppercase tracking-[0.18em] text-ink">
            Vue / Tailwind
          </span>
        </div>

        <div class="my-12">
          <p class="font-display text-4xl font-bold leading-tight text-ink">
            Interfaces that feel precise, fast, and ready to grow.
          </p>
          <p class="mt-6 leading-7 text-ink">{{ profile.intro }}</p>
        </div>

        <a
          href="#contact"
          class="focus-ring group inline-flex items-center justify-between border-t border-line pt-5 text-sm font-bold uppercase tracking-[0.14em] text-ink"
        >
          <span>{{ profile.availability }}</span>
          <ArrowUpRight
            :size="18"
            class="text-ink transition group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </aside>
    </div>
  </section>
</template>
