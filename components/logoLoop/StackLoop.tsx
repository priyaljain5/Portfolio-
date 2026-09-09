"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Key,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  SiPython,
  SiFastapi,
  SiDjango,
  SiSwagger,
  SiMariadb,
  SiMysql,
  SiPostgresql,
  SiKeycloak,
  SiDocker,
  SiGit,
  SiGithub,
  SiWordpress,
  SiPhp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import { LogoLoop, type LogoItem } from "./LogoLoop";
import { FadeIn } from "@/components/ui/motion-primitives";
import Shuffle from "@/components/Shuffle";

const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiSwagger />, title: "REST / OpenAPI", href: "https://www.openapis.org" },
  { node: <SiMariadb />, title: "MariaDB", href: "https://mariadb.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
];

const servicesLogos = [
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiKeycloak />, title: "Keycloak", href: "https://www.keycloak.org" },
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML" },
  { node: <SiCss />, title: "CSS", href: "https://developer.mozilla.org/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
];

function LogoTooltip({ item }: { item: LogoItem }) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    const rect = spanRef.current?.getBoundingClientRect();
    if (rect) setCoords({ x: rect.left + rect.width / 2, y: rect.top });
    timerRef.current = setTimeout(() => setVisible(true), 600);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  const title = (item as any).title ?? (item as any).alt ?? "";
  const href = (item as any).href as string | undefined;
  const nodeContent =
    "node" in item ? (
      (item as any).node
    ) : (
      <img
        src={(item as any).src}
        alt={(item as any).alt ?? ""}
        className="h-[var(--logoloop-logoHeight)] w-auto"
      />
    );

  const iconEl = (
    <span
      ref={spanRef}
      className="inline-flex items-center group-hover/item:scale-120 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {nodeContent}
    </span>
  );

  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={title}
          className="inline-flex items-center no-underline rounded hover:opacity-80 transition-opacity duration-200 focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
        >
          {iconEl}
        </a>
      ) : (
        iconEl
      )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {visible && title && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, scale: 0.8, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 6 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  position: "fixed",
                  left: coords.x,
                  top: coords.y - 12,
                  transform: "translate(-50%, -100%)",
                  zIndex: 9999,
                  pointerEvents: "none",
                }}
              >
                <div className="relative bg-foreground text-background text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap tracking-wide">
                  {title}
                  <span
                    aria-hidden
                    className="absolute top-full left-1/2 -translate-x-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTopWidth: "5px",
                      borderTopStyle: "solid",
                      borderTopColor: "var(--foreground)",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export type StackLoopProps = {
  withHeading?: boolean;
};

export function StackLoop({ withHeading = false }: StackLoopProps): ReactNode {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const renderItem = useCallback(
    (item: LogoItem, _key: Key) => <LogoTooltip item={item} />,
    []
  );

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeading ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <Shuffle
              text="My stack"
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
              The languages, frameworks, and tools I reach for to build and
              ship products.
            </p>
          </FadeIn>
        ) : null}

        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <LogoLoop
            logos={techLogos}
            speed={isScrolling ? 0 : 100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technology stack"
            renderItem={renderItem}
          />
          <LogoLoop
            logos={servicesLogos}
            speed={isScrolling ? 0 : 100}
            direction="right"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Tools and services"
            className="mt-6"
            renderItem={renderItem}
          />
        </div>
      </div>
    </section>
  );
}
