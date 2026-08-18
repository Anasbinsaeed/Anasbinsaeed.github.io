<script setup>
import { computed, ref, watch } from 'vue';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-vue-next';
import SkillPill from '../common/SkillPill.vue';
import mobileMockup from '../../assets/images/mobile.png';
import webMockup from '../../assets/images/web.png';

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
});

defineEmits(['close']);

const activeImageIndex = ref(0);

const projectImages = computed(() => {
  if (!props.project) return [];

  const images = props.project.images?.length ? props.project.images : [];
  const fallbackImages = props.project.coverImage ? [props.project.coverImage] : [];

  return [...new Set(images.length ? images : fallbackImages)];
});

const activeImage = computed(() => projectImages.value[activeImageIndex.value] ?? '');

const isMobileProject = computed(() => props.project?.category?.toLowerCase() === 'mobile');

const mockupImage = computed(() => (isMobileProject.value ? mobileMockup : webMockup));

function showPreviousImage() {
  if (!projectImages.value.length) return;
  activeImageIndex.value =
    activeImageIndex.value === 0 ? projectImages.value.length - 1 : activeImageIndex.value - 1;
}

function showNextImage() {
  if (!projectImages.value.length) return;
  activeImageIndex.value = (activeImageIndex.value + 1) % projectImages.value.length;
}

watch(
  () => props.project?.id,
  () => {
    activeImageIndex.value = 0;
  },
);
</script>

<template>
  <Teleport to="body">
    <div
      v-if="project"
      class="fixed inset-0 z-50 overflow-y-auto bg-ink/35 px-4 py-4 backdrop-blur-md sm:px-6"
      role="dialog"
      aria-modal="true"
      :aria-label="`${project.title} project details`"
      @keydown.esc="$emit('close')"
    >
      <button class="fixed inset-0 cursor-default" type="button" aria-label="Close project details" @click="$emit('close')"></button>

      <article class="relative ml-auto min-h-[calc(100vh-2rem)] w-full max-w-5xl border border-line bg-white shadow-soft">
        <div class="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
          <div>
            <p class="eyebrow">{{ project.category }} | {{ project.year }}</p>
            <h2 class="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">{{ project.title }}</h2>
          </div>
          <button
            class="focus-ring flex size-11 items-center justify-center rounded border border-line bg-white text-ink transition hover:border-ink"
            type="button"
            aria-label="Close project details"
            @click="$emit('close')"
          >
            <X :size="20" aria-hidden="true" />
          </button>
        </div>

        <div class="grid gap-7 p-5 sm:p-8">
          <div class="mx-auto w-full max-w-4xl">
            <div class="relative border border-line bg-white p-4 sm:p-6">
              <button
                class="focus-ring absolute left-3 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded border border-line bg-white text-ink disabled:cursor-not-allowed disabled:opacity-30"
                type="button"
                aria-label="Show previous project image"
                :disabled="projectImages.length <= 1"
                @click="showPreviousImage"
              >
                <ChevronLeft :size="20" aria-hidden="true" />
              </button>

              <div
                class="relative mx-auto"
                :class="isMobileProject ? 'max-w-[18rem] sm:max-w-[22rem]' : 'max-w-3xl'"
              >
                <div class="relative" :class="isMobileProject ? 'aspect-[683/1389]' : 'aspect-[3237/2048]'">
                  <div
                    v-if="activeImage"
                    class="absolute z-10 overflow-hidden bg-white"
                    :class="
                      isMobileProject
                        ? 'left-[3.4%] top-[1.7%] h-[96.2%] w-[93.2%] rounded-[2rem] sm:rounded-[2.75rem]'
                        : 'left-[8.75%] top-[9.25%] h-[76.5%] w-[81.75%] rounded-[0.65rem]'
                    "
                  >
                    <img
                      :src="activeImage"
                      :alt="`${project.title} screenshot ${activeImageIndex + 1}`"
                      class="h-full w-full object-cover"
                    />
                  </div>

                  <div v-else class="absolute inset-0 flex flex-col justify-end border border-line bg-white p-6">
                    <span class="font-display text-7xl font-bold leading-none text-ink/10">01</span>
                    <p class="mt-6 max-w-md font-display text-4xl font-bold leading-tight text-ink">
                      {{ project.title }}
                    </p>
                  </div>

                  <img
                    :src="mockupImage"
                    :alt="isMobileProject ? 'Mobile project mockup' : 'Web project mockup'"
                    class="relative z-20 h-full w-full object-contain pointer-events-none"
                  />
                </div>
              </div>

              <button
                class="focus-ring absolute right-3 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded border border-line bg-white text-ink disabled:cursor-not-allowed disabled:opacity-30"
                type="button"
                aria-label="Show next project image"
                :disabled="projectImages.length <= 1"
                @click="showNextImage"
              >
                <ChevronRight :size="20" aria-hidden="true" />
              </button>

              <p v-if="projectImages.length > 1" class="mt-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-ink">
                {{ activeImageIndex + 1 }} / {{ projectImages.length }}
              </p>
            </div>
          </div>

          <section class="border-t border-line pt-7">
            <p class="eyebrow">Overview</p>
            <div class="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
              <p class="max-w-3xl rounded border border-line bg-white p-5 text-base leading-8 text-ink sm:p-6 sm:text-lg">
                {{ project.description }}
              </p>
              <div class="flex max-w-md flex-wrap gap-2 md:justify-end">
                <SkillPill v-for="tool in project.stack" :key="tool" :label="tool" />
              </div>
            </div>
          </section>

          <section class="border-t border-line pt-0">
            <p class="eyebrow">Details</p>
            <div class="mt-4 max-w-4xl rounded border border-line bg-white py-0 pl-5 pr-0 sm:pl-7">
              <p class="whitespace-pre-line text-base leading-8 text-ink sm:text-lg sm:leading-9">
                {{ project.details || project.description }}
              </p>
            </div>
          </section>

          <div class="flex justify-end border-t border-line pt-6">
            <a
              v-if="project.link"
              :href="project.link"
              class="focus-ring inline-flex min-h-12 items-center gap-2 rounded border border-ink bg-white px-5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition"
              target="_blank"
              rel="noreferrer"
            >
              Visit Project
              <ArrowUpRight :size="16" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>
  </Teleport>
</template>
