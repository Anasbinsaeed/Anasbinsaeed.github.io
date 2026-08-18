import { onMounted, ref } from 'vue';
import {
  experience as fallbackExperience,
  highlights as fallbackHighlights,
  navItems,
  profile as fallbackProfile,
  projects as fallbackProjects,
  socials as fallbackSocials,
  stackGroups as fallbackStackGroups,
  stats,
} from '@/data/portfolio';
import {
  getExperiences,
  getPortfolioSettings,
  getProjects,
  getSkills,
  type PortfolioExperience,
  type PortfolioProject,
  type PortfolioSettings,
  type PortfolioSkill,
} from '@/services/portfolioService';

const profile = ref(fallbackProfile);
const socials = ref(fallbackSocials);
const highlights = ref(fallbackHighlights);
const experience = ref(fallbackExperience);
const projects = ref(fallbackProjects);
const stackGroups = ref(fallbackStackGroups);
const isLoading = ref(false);
const error = ref<string | null>(null);
let hasLoaded = false;

function formatPeriod(item: PortfolioExperience) {
  const start = item.start_date ? new Date(item.start_date).getFullYear() : '';
  const end = item.is_current ? 'Present' : item.end_date ? new Date(item.end_date).getFullYear() : '';
  return [start, end].filter(Boolean).join(' - ');
}

function applySettings(settings: PortfolioSettings | null) {
  if (!settings) return;

  profile.value = {
    ...profile.value,
    name: settings.hero_name || profile.value.name,
    role: settings.hero_subtitle || profile.value.role,
    email: settings.contact_email || profile.value.email,
    summary: settings.hero_description || profile.value.summary,
    intro: settings.about || profile.value.intro,
  };

  socials.value = [
    settings.contact_github && { label: 'GitHub', href: settings.contact_github },
    settings.contact_linkedin && { label: 'LinkedIn', href: settings.contact_linkedin },
    settings.contact_email && { label: 'Email', href: `mailto:${settings.contact_email}` },
  ].filter(Boolean) as typeof fallbackSocials;
}

function mapProjects(rows: PortfolioProject[]) {
  if (!rows.length) return;

  projects.value = rows.map((project, index) => ({
    id: project.id,
    title: project.name,
    category: project.type,
    year: project.created_at ? String(new Date(project.created_at).getFullYear()) : 'Featured',
    description: project.description || project.details,
    details: project.details,
    images: project.images ?? [],
    coverImage: project.cover_image,
    link: project.link,
    stack: project.tags ?? [],
    accent: '',
  }));
}

function mapExperiences(rows: PortfolioExperience[]) {
  if (!rows.length) return;

  experience.value = rows.map((item) => ({
    period: formatPeriod(item),
    company: item.company,
    role: item.role,
    impact: item.description,
  }));
}

function mapSkills(rows: PortfolioSkill[]) {
  if (!rows.length) return;

  const groups = rows.reduce<Record<string, string[]>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] ?? [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  stackGroups.value = Object.entries(groups).map(([title, items]) => ({ title, items }));
}

async function loadPortfolioContent() {
  if (hasLoaded) return;

  hasLoaded = true;
  isLoading.value = true;
  error.value = null;

  try {
    const [settings, projectRows, experienceRows, skillRows] = await Promise.all([
      getPortfolioSettings(),
      getProjects(),
      getExperiences(),
      getSkills(),
    ]);

    applySettings(settings);
    mapProjects(projectRows);
    mapExperiences(experienceRows);
    mapSkills(skillRows);
  } catch (caughtError) {
    error.value = caughtError instanceof Error ? caughtError.message : 'Unable to load portfolio content.';
  } finally {
    isLoading.value = false;
  }
}

export function usePortfolioContent() {
  onMounted(loadPortfolioContent);

  return {
    error,
    experience,
    highlights,
    isLoading,
    navItems,
    profile,
    projects,
    socials,
    stackGroups,
    stats,
  };
}
