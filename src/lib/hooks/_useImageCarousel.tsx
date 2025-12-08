"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import type { EmblaCarouselType } from "embla-carousel";

export function useImageCarousel() {
  const [snaps, setSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleInit = useCallback((api: EmblaCarouselType) => {
    const snaps = api.scrollSnapList();

    setSnaps(snaps);

    if (snaps.length > 0) {
      setSelectedIndex(api.selectedScrollSnap());
    }
  }, []);

  const handleSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const [refCarousel, api] = useEmblaCarousel(
    {
      watchResize: false,
      watchSlides: false,
      direction: "rtl",
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (api != null) setSnaps(api.scrollSnapList());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    queueMicrotask(() => {
      handleInit(api);
      handleSelect(api);
    });

    api.on("reInit", handleInit);
    api.on("reInit", handleSelect);
    api.on("select", handleSelect);

    return () => {
      api.off("reInit", handleInit);
      api.off("reInit", handleSelect);
      api.off("select", handleSelect);
    };
  }, [api, handleInit, handleSelect]);

  return {
    refCarousel,
    selectedIndex,
    snaps,
    api,
  };
}
