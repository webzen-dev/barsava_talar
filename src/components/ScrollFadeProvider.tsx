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
  enableScrollTriger?: boolean;
  enabledStagger?: boolean;
  staggerTimeLine?:number
}

export default function ScrollFadeProvider({
  selector,
  duration = 0.8,
  translateY = 30,
  position = "top 80%",
  enableScrollTriger = true,
  enabledStagger = true,
  staggerTimeLine=0.5
}: ScrollFadeProviderProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    ScrollTrigger.batch(elements, {
      interval: enabledStagger ? 0.3 : 0,
      batchMax: elements.length,
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: translateY },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: enabledStagger ? staggerTimeLine: 0,
            scrollTrigger: enableScrollTriger
              ? {
                  trigger: batch[0],
                  start: position,
                  toggleActions: "play none none none",
                }
              : undefined,
          }
        );
      },
    });
  }, [selector, duration, translateY, position, enabledStagger]);

  return null;
}
