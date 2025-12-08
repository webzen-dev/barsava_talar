"use client";

import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeProviderProps {
  selector: string;
  duration?: number;
  translateY?: number;
  position?: string;
  enabledStagger?: boolean;
  enableScrollTrigger?: boolean;
  staggerTimeLine?: number;
}

export default function ScrollFadeProvider({
  selector,
  duration = 0.8,
  translateY = 30,
  position = "top 80%",
  enabledStagger = true,
  enableScrollTrigger = true,
  staggerTimeLine = 0.5,
}: ScrollFadeProviderProps) {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      if (enableScrollTrigger) {
        ScrollTrigger.batch(elements, {
          start: position,
          once: true,
          onEnter: (batch) => {
            gsap.fromTo(
              batch,
              { opacity: 0, y: translateY },
              {
                opacity: 1,
                y: 0,
                duration,
                stagger: enabledStagger ? staggerTimeLine : 0,
                ease: "power2.out",
              }
            );
          },
        });
      } else {
        gsap.fromTo(
          elements,
          { opacity: 0, y: translateY },
          {
            opacity: 1,
            y: 0,
            duration,
            stagger: enabledStagger ? staggerTimeLine : 0,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [
    selector,
    duration,
    translateY,
    position,
    enabledStagger,
    enableScrollTrigger,
    staggerTimeLine,
  ]);

  return null;
}
