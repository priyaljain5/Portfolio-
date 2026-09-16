import CircularGallery from "@/components/about/CircularGallery";
import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { HeroCarousel } from "@/components/about/hero-carousel";
import ClickSpark from "@/components/ClickSpark";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { getGalleryItems } from "@/lib/gallery";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  const galleryItems = getGalleryItems();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <ClickSpark
        sparkColor="var(--foreground)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <section className="mx-auto w-full max-w-160 px-6 pt-44 pb-16 sm:px-10 sm:pt-56 sm:pb-24">
          <FadeIn delay={0.3}>
            <div className="border-foreground/5 bg-foreground/1.5 dark:bg-foreground/3 rounded-4xl border p-8 sm:p-12">
              <h1 className="text-foreground font-serif text-[1.75rem] font-medium tracking-tight sm:text-[2rem]">
                Hello! I&rsquo;m{" "}
                <span className="border-foreground/30 border-b pb-0.5">
                  Priyal Jain
                </span>
                .
              </h1>

              <div className="text-foreground/75 mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight sm:text-[18px]">
                <p>
                  I&rsquo;m a{" "}
                  <strong className="text-foreground font-semibold">
                    Software Engineer
                  </strong>{" "}
                  with hands-on backend experience in{" "}
                  <strong className="text-foreground font-semibold">
                    Python and FastAPI
                  </strong>
                  , currently building a{" "}
                  <strong className="text-foreground font-semibold">
                    Credit Management System (CMS)
                  </strong>{" "}
                  at TCS.
                </p>

                <p>
                  I work across{" "}
                  <strong className="text-foreground font-semibold">
                    RESTful API design, database schema design, business logic,
                    and third-party integrations
                  </strong>
                  , with{" "}
                  <strong className="text-foreground font-semibold">
                    MariaDB, SQL, and Keycloak-based authentication (RBAC)
                  </strong>
                  .
                </p>

                <p>
                  I&rsquo;m comfortable shipping across{" "}
                  <strong className="text-foreground font-semibold">
                    DEV, QA, UAT, and Production
                  </strong>{" "}
                  with Git and Docker in Agile sprint cycles, and have been
                  recognized with multiple team performance awards.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="mx-auto w-full max-w-160 px-6 pb-20 sm:px-10 sm:pb-28">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-10">
              <Experience />
              <Education />
              <Skills />
              <Stack />
              <div className="relative h-48 overflow-hidden sm:h-56 md:h-64">
                <CircularGallery
                  title="Captured Moments"
                  items={galleryItems}
                  bend={2}
                  borderRadius={0.05}
                  scrollEase={0.07}
                  fontUrl=""
                  font="bold 46px Orbitron"
                  scrollSpeed={3}
                />
              </div>
              <HeroCarousel />
            </div>
          </FadeIn>
        </section>

        <ContactCard />
        <div className="h-12 sm:h-16" />
      </ClickSpark>
    </main>
  );
}
