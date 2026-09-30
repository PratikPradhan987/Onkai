import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { projects, getProjectBySlug } from '@/content/projects';
import { constructMetadata } from '@/lib/metadata';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return constructMetadata({
      title: 'Project Not Found',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${project.title} — Onkai Studio`,
    description: project.description,
    image: project.heroImage,
    canonical: `/work/${project.slug}`,
  });
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-10 md:pt-16 pb-24">
      <Container size="default">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-onkai-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded p-1"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header Info */}
        <header className="space-y-6 max-w-4xl pb-10 border-b border-surface-border/50">
          <div className="flex flex-wrap items-center gap-3">
            <Badge status={project.status}>{project.status}</Badge>
            <Badge variant="outline">{project.category}</Badge>
            <span className="text-xs font-mono text-text-muted">
              Released {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
            {project.tagline}
          </p>

          {/* Action Links */}
          {project.links && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-onkai-orange text-white font-medium text-sm hover:bg-onkai-orange-hover transition-colors shadow-md shadow-onkai-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-elevated text-text-primary border border-surface-border text-sm font-medium hover:border-surface-border/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Hero Showcase Image */}
        <div className="my-12 relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-surface-elevated border border-surface-border">
          <Image
            src={project.heroImage}
            alt={`${project.title} detailed interface showcase`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Main Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          {/* Main narrative */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section aria-labelledby="overview-heading" className="space-y-4">
              <h2 id="overview-heading" className="text-xs font-mono uppercase tracking-[0.2em] text-onkai-orange font-semibold">
                Overview &amp; Purpose
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
                {project.description}
              </p>
            </section>

            {/* Case Study Details */}
            {project.caseStudy && (
              <div className="space-y-10">
                <section aria-labelledby="challenge-heading" className="space-y-3">
                  <h3 id="challenge-heading" className="text-xl font-bold text-white">
                    The Challenge
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed font-normal">
                    {project.caseStudy.challenge}
                  </p>
                </section>

                <section aria-labelledby="solution-heading" className="space-y-3">
                  <h3 id="solution-heading" className="text-xl font-bold text-white">
                    Engineering Solution
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed font-normal">
                    {project.caseStudy.solution}
                  </p>
                </section>

                <section aria-labelledby="outcome-heading" className="space-y-3">
                  <h3 id="outcome-heading" className="text-xl font-bold text-white">
                    Outcome &amp; Performance
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed font-normal">
                    {project.caseStudy.outcome}
                  </p>
                </section>

                <section aria-labelledby="features-heading" className="space-y-4 pt-4 border-t border-surface-border/50">
                  <h3 id="features-heading" className="text-xl font-bold text-white">
                    Core Technical Features
                  </h3>
                  <ul className="space-y-2.5">
                    {project.caseStudy.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary">
                        <CheckCircle2 className="w-5 h-5 text-onkai-orange shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Additional Screenshots if present */}
                {project.caseStudy.previewImages && project.caseStudy.previewImages.length > 0 && (
                  <section aria-labelledby="gallery-heading" className="space-y-4 pt-6">
                    <h3 id="gallery-heading" className="text-xl font-bold text-white">
                      Interface Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.caseStudy.previewImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface-elevated border border-surface-border"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* Accessibility Notes Callout */}
            {project.accessibilityNotes && (
              <section
                aria-labelledby="a11y-heading"
                className="p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-surface-border/80 space-y-3"
              >
                <div className="flex items-center gap-2.5 text-onkai-orange">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                  <h3 id="a11y-heading" className="text-sm font-mono font-semibold uppercase tracking-wider">
                    Accessibility &amp; Inclusion Engineering
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.accessibilityNotes}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar / Specs */}
          <aside className="space-y-8 lg:border-l lg:border-surface-border/50 lg:pl-8">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
                Category
              </h3>
              <p className="text-sm font-medium text-white capitalize">
                {project.category}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
                Status
              </h3>
              <Badge status={project.status}>{project.status}</Badge>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-surface-elevated text-text-secondary border border-surface-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-surface-border/50 space-y-4">
              <p className="text-xs text-text-muted">
                Need similar engineering capabilities for your product?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-onkai-orange hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange rounded"
              >
                <span>Commission a project like this</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </Container>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </article>
  );
}
