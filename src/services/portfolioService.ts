import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type PortfolioSettings = Tables<'portfolio_settings'>;
export type PortfolioProject = Tables<'projects'>;
export type PortfolioExperience = Tables<'experiences'>;
export type PortfolioSkill = Tables<'skills'>;

export async function getPortfolioSettings() {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('portfolio_settings')
    .select('*')
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getProjects() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getExperiences() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getSkills() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data ?? [];
}
