import { useEffect, useRef } from "react";

const ASCII_LOGO = [
  "██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗",
  "██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║",
  "███████║███████║██████╔╝███████╗███████║",
  "██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║",
  "██║  ██║██║  ██║██║  ██║███████║██║  ██║",
  "╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝",
];

const LOADING_STEPS = [
  { text: "Loading personal profile...", delay: 200 },
  { text: "Loading environment...", delay: 200 },
  { text: "Checking coffee supply...", delay: 300 },
  { text: "Connecting creativity...", delay: 200 },
  { text: "Initializing portfolio...", delay: 400 },
];

// Module-level flag — resets on every page load, persists within the same load
let hasBootedThisPageLoad = false;

const BootSequence = ({ addLine, onComplete, containerRef }) => {
  const mountedRef = useRef(true);
  const pausedRef = useRef(false);
  // Prevents StrictMode's double-invoke from running the sequence twice.
  // Refs survive the artificial unmount/remount cycle in dev.
  const startedRef = useRef(false);

  const scrollDown = () => {
    requestAnimationFrame(() => {
      const el = containerRef?.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  };

  const wait = (ms) =>
    new Promise((res) => {
      const start = Date.now();
      const tick = () => {
        if (!mountedRef.current) { res(); return; }
        if (pausedRef.current) { setTimeout(tick, 50); return; }
        const elapsed = Date.now() - start;
        if (elapsed >= ms) res();
        else setTimeout(tick, Math.min(50, ms - elapsed));
      };
      tick();
    });

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const typeIntoLine = (lineId, text, color, speed = 30) => {
    return new Promise((resolve) => {
      if (reducedMotion) {
        addLine([{ text, color, _updateId: lineId }], lineId);
        resolve();
        return;
      }
      let i = 0;
      let built = "";
      const next = () => {
        if (!mountedRef.current) { resolve(); return; }
        if (pausedRef.current) { setTimeout(next, 50); return; }
        if (i >= text.length) { resolve(); return; }
        built += text[i];
        i++;
        addLine([{ text: built, color }], lineId);
        const jitter = Math.random() * 10 - 5;
        setTimeout(next, Math.max(5, speed + jitter));
      };
      next();
    });
  };

  useEffect(() => {
    mountedRef.current = true;

    const handleVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    if (startedRef.current) return;
    startedRef.current = true;

    const run = async () => {
      if (hasBootedThisPageLoad) {
        onComplete();
        return;
      }

      const titleId = addLine([{ text: "", color: "var(--t-accent)" }]);
      await typeIntoLine(titleId, "HarshOS Terminal v1.0.0", "var(--t-accent)");
      scrollDown();
      await wait(300);
      addLine([{ text: " " }]);
      await wait(200);

      for (const step of LOADING_STEPS) {
        if (!mountedRef.current) return;
        const lid = addLine([{ text: "", color: "var(--t-text)" }]);
        await typeIntoLine(lid, step.text, "var(--t-text)");
        await wait(step.delay);
        addLine(
          [
            { text: step.text, color: "var(--t-text)" },
            { text: " ✔", color: "var(--t-accent)" },
          ],
          lid,
        );
        scrollDown();
        await wait(150);
      }

      await wait(300);
      addLine([{ text: " " }]);

      for (const logoLine of ASCII_LOGO) {
        if (!mountedRef.current) return;
        addLine([{ text: logoLine, color: "var(--t-accent)" }]);
        scrollDown();
        if (!reducedMotion) await wait(50);
      }

      await wait(100);
      addLine([{ text: "HarshOS CLI v1.0.0", color: "var(--t-muted)" }]);
      await wait(200);
      addLine([{ text: " " }]);

      addLine([{ text: "Developer Environment Ready", color: "var(--t-accent)", bold: true }]);
      await wait(100);
      addLine([{ text: " " }]);
      addLine([
        { text: "  Logged in as    ", color: "var(--t-muted)" },
        { text: "visitor", color: "var(--t-text)" },
      ]);
      addLine([
        { text: "  Session         ", color: "var(--t-muted)" },
        { text: "Portfolio", color: "var(--t-text)" },
      ]);
      addLine([
        { text: "  Status          ", color: "var(--t-muted)" },
        { text: "ONLINE", color: "var(--t-accent)" },
      ]);
      await wait(300);
      addLine([{ text: " " }]);
      addLine([{ text: 'Type "help" to view available commands.', color: "var(--t-muted)" }]);
      await wait(100);
      scrollDown();

      if (mountedRef.current) {
        hasBootedThisPageLoad = true;
        onComplete();
      }
    };

    run();

    return () => {
      mountedRef.current = false;
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return null;
};

export default BootSequence;
