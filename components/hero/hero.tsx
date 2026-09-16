"use client";

import { type ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import Shuffle from "@/components/Shuffle";

const PORTRAIT_SRC = "/cover-main.jpeg";
const PORTRAIT_HOVER_SRC = "/cover.jpeg";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-32 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hey
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Priyal
            </p>

            <h1 className="flex flex-col items-start">
              <Shuffle
                text="Python backend"
                tag="span"
                className="font-serif text-[1.8rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3rem]"
                style={{ whiteSpace: "nowrap" }}
                shuffleDirection="right"
                textAlign="left"
                animationMode="evenodd"
                stagger={0.02}
                duration={0.4}
                triggerOnce
                triggerOnHover={false}
              />
              <Shuffle
                text="developer"
                tag="span"
                className="font-serif text-[2rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3rem]"
                style={{ whiteSpace: "nowrap" }}
                shuffleDirection="left"
                textAlign="left"
                animationMode="evenodd"
                stagger={0.02}
                duration={0.4}
                triggerOnce
                triggerOnHover={false}
              />
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              A backend engineer building fast, secure RESTful APIs and microservices with FastAPI and SQL.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Priyal Jain"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
