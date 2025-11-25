"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

let isGsapRegistered = false;

const registerGsap = () => {
  if (!isGsapRegistered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    isGsapRegistered = true;
  }
};

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export default function AnimatedSection({
  children,
  className = "",
  id,
}: AnimatedSectionProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    registerGsap();
    const el = elementRef.current;
    if (!el || typeof window === "undefined") {
      return () => undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(node) => {
        elementRef.current = node;
      }}
      id={id}
      className={`section ${className}`.trim()}
    >
      {children}
    </section>
  );
}
