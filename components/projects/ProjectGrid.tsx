import React from 'react';
import { Project } from '@/types/project';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  featuredSlug?: string;
}

export function ProjectGrid({ projects, featuredSlug }: ProjectGridProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      role="region"
      aria-label="Projects list"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          featured={project.slug === featuredSlug}
        />
      ))}
    </div>
  );
}
