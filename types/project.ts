export type ProjectCategory = 'app' | 'game' | 'web' | 'experiment';

export type ProjectStatus = 'concept' | 'prototype' | 'development' | 'released' | 'archived';

export interface ProjectLinks {
  live?: string;
  appStore?: string;
  playStore?: string;
  github?: string;
  article?: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  previewImages?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: number;
  technologies: string[];
  featured: boolean;
  thumbnail: string;
  heroImage: string;
  links?: ProjectLinks;
  accessibilityNotes?: string;
  caseStudy?: CaseStudy;
}
