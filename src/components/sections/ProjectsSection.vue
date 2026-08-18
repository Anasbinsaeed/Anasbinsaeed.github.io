<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { ArrowUpRight } from 'lucide-vue-next';
import SectionShell from '../common/SectionShell.vue';
import SkillPill from '../common/SkillPill.vue';
import ProjectDetailDrawer from '../projects/ProjectDetailDrawer.vue';
import { usePortfolioContent } from '../../composables/usePortfolioContent';

const { projects } = usePortfolioContent();
const selectedProjectId = ref(null);

const selectedProject = computed(() =>
  projects.value.find((project) => project.id === selectedProjectId.value) ?? null,
);

function getProjectHash(projectId) {
  return `#project/${projectId}`;
}

function syncProjectFromHash() {
  const [, projectId] = window.location.hash.match(/^#project\/(.+)$/) ?? [];
  selectedProjectId.value = projectId ? decodeURIComponent(projectId) : null;
}

function openProject(project) {
  selectedProjectId.value = project.id;
  window.history.pushState(null, '', getProjectHash(encodeURIComponent(project.id)));
}

function closeProject() {
  selectedProjectId.value = null;
  window.history.pushState(null, '', '#projects');
}

onMounted(() => {
  syncProjectFromHash();
  window.addEventListener('hashchange', syncProjectFromHash);
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncProjectFromHash);
});

watch(projects, () => {
  if (selectedProjectId.value && !selectedProject.value) {
    selectedProjectId.value = null;
  }
});
</script>

<template>
  <SectionShell id="projects" index="03" eyebrow="Projects" title="Selected builds.">
    <div class="grid gap-4">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        class="group grid gap-6 border border-line bg-white p-5 transition hover:border-ink md:grid-cols-[7rem_1fr_auto]"
      >
        <div
          class="flex aspect-square items-end justify-start border border-line bg-white p-4 text-ink"
          aria-hidden="true"
        >
          <span class="font-display text-4xl font-bold">{{ String(index + 1).padStart(2, '0') }}</span>
        </div>

        <div>
          <div class="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.14em] text-ink">
            <span>{{ project.category }}</span>
            <span>{{ project.year }}</span>
          </div>
          <h3 class="mt-3 font-display text-3xl font-bold text-ink">{{ project.title }}</h3>
          <p class="mt-3 max-w-2xl leading-7 text-ink">{{ project.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <SkillPill v-for="tool in project.stack" :key="tool" :label="tool" />
          </div>
        </div>

        <button
          type="button"
          class="focus-ring flex size-12 items-center justify-center rounded border border-line bg-white text-ink transition group-hover:border-ink"
          :aria-label="`Open ${project.title} details`"
          @click="openProject(project)"
        >
          <ArrowUpRight :size="18" aria-hidden="true" />
        </button>
      </article>
    </div>

    <ProjectDetailDrawer :project="selectedProject" @close="closeProject" />
  </SectionShell>
</template>
