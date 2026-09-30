'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/types/project';
import { ProjectCard } from './ProjectCard';

interface WorkFilterViewProps {
  initialProjects: Project[];
}

const categories: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Mobile Apps', value: 'app' },
  { label: 'Games', value: 'game' },
  { label: 'Web Experiences', value: 'web' },
  { label: 'Experiments', value: 'experiment' },
];

export function WorkFilterView({ initialProjects }: WorkFilterViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category filter pills */}
      <div
        className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-surface border border-surface-border w-fit"
        role="tablist"
        aria-label="Filter projects by discipline"
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange ${
                isSelected
                  ? 'bg-onkai-orange text-white shadow-md'
                  : 'text-text-secondary hover:text-white hover:bg-surface-elevated'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        role="region"
        aria-label={`${selectedCategory} projects`}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-surface border border-surface-border text-text-muted">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
