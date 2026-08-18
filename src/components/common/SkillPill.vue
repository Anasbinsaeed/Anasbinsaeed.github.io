<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="rounded border border-line bg-white px-3 py-1 text-sm font-semibold text-ink">
    {{ label }}
  </span>
</template>
