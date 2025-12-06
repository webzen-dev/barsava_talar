"use client";

import { ScrollTrigger } from "gsap/all";
import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeProviderProps {
  selector: string;
  duration?: number;
  translateY?: number;
  position?: string;
  enableScrollTrigger?: boolean;
  enabledStagger?: boolean;
  staggerTimeLine?: number;
}

export default function ScrollFadeProvider({
  selector,
  duration = 0.8,
  translateY = 30,
  position = "top 80%",
  enableScrollTrigger = true,
  enabledStagger = true,
  staggerTimeLine = 0.5,
}: ScrollFadeProviderProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(elements, {
        interval: enabledStagger ? 0.3 : 0,
        batchMax: elements.length,
        onEnter: (batch) => {
          if (elements._animated) return;
          gsap.fromTo(
            batch,
            { opacity: 0, y: translateY, immediateRender: false },
            {
              opacity: 1,
              y: 0,
              duration: duration,
              stagger: enabledStagger ? staggerTimeLine : 0,
              onComplete: () => {
                elements._animated = true; // mark as animated
              },
              scrollTrigger: enableScrollTrigger
                ? {
                    trigger: batch[0],
                    start: position,
                    toggleActions: "play none none none",
                    once: true,
                    // markers: true,
                  }
                : undefined,
            }
          );
        },
      });
    });

    return () => ctx.revert();
  });

  return null;
}

//  [
//     selector,
//     duration,
//     translateY,
//     position,
//     enabledStagger,
//     staggerTimeLine,
//     enableScrollTrigger,
//   ]
