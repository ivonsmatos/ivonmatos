import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    const element = elementRef.current;

    if (!element || typeof window === "undefined") {
      return () => undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, element);

    return () => context.revert();
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
