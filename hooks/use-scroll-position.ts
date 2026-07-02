"use client";

import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ScrollState = {
  scroll: number;
  isScrolled: boolean;
  isHidden: boolean;
  progress: number;
};

const SCROLL_THRESHOLD = 32;
const HIDE_THRESHOLD = 160;

const defaultState: ScrollState = {
  scroll: 0,
  isScrolled: false,
  isHidden: false,
  progress: 0,
};

export function useScrollPosition(): ScrollState {
  const reducedMotion = useReducedMotion();
  const [state, setState] = useState<ScrollState>(defaultState);

  useLenis((lenis) => {
    if (reducedMotion) return;

    const scroll = lenis.scroll;
    const isScrolled = scroll > SCROLL_THRESHOLD;
    const isHidden = scroll > HIDE_THRESHOLD && lenis.direction === 1;

    setState((previous) => {
      if (
        previous.scroll === scroll &&
        previous.isScrolled === isScrolled &&
        previous.isHidden === isHidden &&
        previous.progress === lenis.progress
      ) {
        return previous;
      }

      return {
        scroll,
        isScrolled,
        isHidden,
        progress: lenis.progress,
      };
    });
  });

  useEffect(() => {
    if (!reducedMotion) return;

    const onScroll = () => {
      const scroll = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      setState({
        scroll,
        isScrolled: scroll > SCROLL_THRESHOLD,
        isHidden: scroll > HIDE_THRESHOLD,
        progress: max > 0 ? scroll / max : 0,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return state;
}
