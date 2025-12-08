// TimelessLoadImageProvider.ts
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TimelessLoadImageProvider() {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".timeless-moments-element");
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(elements, {
        start: "top 80%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, x: -60 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.5, ease: "power2.out" }
          );
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
