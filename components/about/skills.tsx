import type { ReactNode } from "react";
import Shuffle from "../Shuffle";

const SKILLS = [
  "REST API Design",
  "Microservices",
  "Database Schema Design",
  "Business Logic Implementation",
  "Third-Party Integrations",
  "Keycloak SSO / RBAC",
  "ETL (IRAS)",
  "Agile / Scrum",
  "Docker & Git Workflows",
];

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <Shuffle
          text="What I Do"
          tag="h3"
          className="font-serif text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.25rem]"
          shuffleDirection="right"
          textAlign="left"
          animationMode="evenodd"
          stagger={0.03}
          duration={0.35}
          triggerOnce
          triggerOnHover
        />
      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
