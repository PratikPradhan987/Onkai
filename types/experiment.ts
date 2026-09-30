export type ExperimentStatus = 'concept' | 'prototype' | 'experiment' | 'live' | 'archived';

export interface Experiment {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: ExperimentStatus;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}
