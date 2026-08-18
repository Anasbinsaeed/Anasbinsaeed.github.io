<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section :id="id" class="relative border-t border-line py-16 sm:py-20 lg:py-24">
    <div class="container-x grid gap-10 lg:grid-cols-[12rem_1fr]">
      <div class="lg:block">
        <div>
          <p class="eyebrow">{{ eyebrow }}</p>
          <h2 class="mt-3 max-w-md font-display text-4xl font-bold leading-[0.95] text-ink sm:text-5xl">
          {{ title }}
          </h2>
        </div>
      </div>

      <div class="min-w-0">
        <slot />
      </div>
    </div>
  </section>
</template>
