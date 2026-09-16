import { useRef } from "react";

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const useStreamEngine = () => {
  const cancelledRef = useRef(false);

  const cancel = () => {
    cancelledRef.current = true;
  };

  const reset = () => {
    cancelledRef.current = false;
  };

  const typeText = (addChar, text, speed = 30) => {
    reset();
    return new Promise((resolve) => {
      if (reducedMotion) {
        for (const ch of text) addChar(ch);
        resolve();
        return;
      }
      let i = 0;
      const next = () => {
        if (cancelledRef.current) { resolve(); return; }
        if (i >= text.length) { resolve(); return; }
        addChar(text[i]);
        i++;
        const jitter = Math.random() * 10 - 5;
        setTimeout(next, Math.max(5, speed + jitter));
      };
      next();
    });
  };

  const fillBar = (onUpdate, duration = 1200) => {
    reset();
    return new Promise((resolve) => {
      if (reducedMotion) {
        onUpdate(100);
        resolve();
        return;
      }
      const steps = 30;
      const interval = duration / steps;
      let current = 0;
      const tick = () => {
        if (cancelledRef.current) { resolve(); return; }
        current++;
        const pct = Math.min(Math.round((current / steps) * 100), 100);
        onUpdate(pct);
        if (current >= steps) { resolve(); return; }
        setTimeout(tick, interval);
      };
      setTimeout(tick, interval);
    });
  };

  const stagger = (items, onItem, delay = 100) => {
    reset();
    return new Promise((resolve) => {
      let i = 0;
      const next = () => {
        if (cancelledRef.current) {
          resolve();
          return;
        }
        if (i >= items.length) {
          resolve();
          return;
        }
        onItem(items[i], i);
        i++;
        setTimeout(next, delay);
      };
      next();
    });
  };

  const instant = (fn) => {
    fn();
  };

  const wait = (ms) => {
    return new Promise((resolve) => {
      if (cancelledRef.current) {
        resolve();
        return;
      }
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };

  return {
    typeText,
    fillBar,
    stagger,
    instant,
    wait,
    cancel,
    isCancelled: cancelledRef,
  };
};

export default useStreamEngine;
