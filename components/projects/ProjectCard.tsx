import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative rounded-2xl bg-surface border border-surface-border hover:border-onkai-orange/50 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded-2xl"
        aria-label={`View ${project.title} case study and details`}
      >
        <span className="sr-only">View project {project.title}</span>
      </Link>

      {/* Visual Header / Media Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-elevated border-b border-surface-border/60">
        <Image
          src={project.thumbnail}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

        {/* Status & Category Badge Overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20 pointer-events-none">
          <Badge status={project.status}>{project.status}</Badge>
          <Badge variant="outline">{project.category}</Badge>
        </div>

        {/* Year stamp */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-background/80 text-text-muted border border-surface-border/60 backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-onkai-orange transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              className="w-5 h-5 text-text-muted group-hover:text-onkai-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              aria-hidden="true"
            />
          </div>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-surface-border/40 flex flex-wrap items-center gap-1.5 z-20">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-muted border border-surface-border/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 text-text-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
