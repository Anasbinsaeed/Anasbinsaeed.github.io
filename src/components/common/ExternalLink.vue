<script setup>
import { ArrowUpRight } from 'lucide-vue-next';

defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'solid',
  },
});
</script>

<template>
  <a
    :href="href"
    class="focus-ring inline-flex min-h-12 items-center gap-2 rounded px-5 text-sm font-bold uppercase tracking-[0.12em] transition"
    :class="
      variant === 'outline'
        ? 'border border-line bg-white text-ink hover:border-ink'
        : 'border border-ink bg-white text-ink'
    "
    target="_blank"
    rel="noreferrer"
  >
    {{ label }}
    <ArrowUpRight :size="16" aria-hidden="true" />
  </a>
</template>
