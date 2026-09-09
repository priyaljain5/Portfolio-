"use client";

import {
  ArrowRight,
  ArrowUpRight,
  DollarSign,
  Github,
  MessageCircle,
  Newspaper,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import Shuffle from "@/components/Shuffle";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  liveUrl?: string;
  githubUrl?: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "cms",
    icon: DollarSign,
    iconLabel: "Credit Management System",
    title: "A credit management system powering lending decision logic.",
    description:
      "Built production RESTful APIs with FastAPI/Django and MariaDB, modeled raw data into logical decision graphs via IRAS, and secured access with Keycloak RBAC.",
    meta: "Associate Software Engineer — TCS, 2024–Present",
    imageRatio: 1376 / 768,
    image: "/images/borrowin.png",
    imageAlt: "Credit Management System",
  },
  {
    id: "placemexcel",
    icon: Newspaper,
    iconLabel: "PlaceMExcel",
    title: "A student placement resource platform.",
    description:
      "Company info, placement-drive details, and test-prep material, with all data managed in PostgreSQL.",
    meta: "Personal Project — HTML, CSS, Node.js, PostgreSQL",
    imageRatio: 1376 / 768,
    image: "/images/techlog.png",
    imageAlt: "PlaceMExcel placement platform",
  },
  {
    id: "chatbot",
    icon: MessageCircle,
    iconLabel: "Chatbot Flows",
    title: "Customer-engagement chatbot conversation flows.",
    description:
      "Designed and optimized chatbot flows and platform configuration with data-driven tuning, and built and customized WordPress sites with PHP and JavaScript.",
    meta: "MBG Card India, 2023–2024",
    imageRatio: 1376 / 768,
    image: "/images/chatdash.png",
    imageAlt: "Chatbot conversation flows",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 2) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <Shuffle
              text="My projects"
              tag="h2"
              className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]"
              shuffleDirection="right"
              textAlign="center"
              animationMode="evenodd"
              stagger={0.025}
              duration={0.4}
              triggerOnce
              triggerOnHover={true}
              threshold={0}
            />
            <p className="text-foreground/65 max-w-[33ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the work
              I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border-foreground/8 focus-ring group bg-background text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card border-foreground/8 bg-background flex cursor-pointer flex-col gap-4 rounded-3xl border p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 bg-background inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
            <Icon className="text-foreground h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="text-foreground text-sm font-medium tracking-tight">
            {project.iconLabel}
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="View source on GitHub"
                className="border-foreground/10 text-foreground/40 hover:border-foreground/20 hover:text-foreground inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="View live project"
                className="border-foreground/10 text-foreground/40 hover:border-foreground/20 hover:text-foreground inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors"
              >
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </header>

        <div
          className="project-card__image ring-foreground/5 bg-foreground/5 relative w-full overflow-hidden rounded-2xl ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              quality={95}
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-foreground text-[20px] leading-[1.2] font-medium tracking-tight sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-foreground/65 text-[14px] leading-normal tracking-tight sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="text-foreground/50 px-1 pb-2 text-[12px] tracking-tight">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
