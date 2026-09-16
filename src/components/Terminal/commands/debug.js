const SPINNER_FRAMES = ["|", "/", "-", "\\"];

export async function debugCommand(engine, helpers) {
  const initLine = helpers.addStreamingLine();
  await engine.typeText(initLine.appendChar, "  Initializing debugger...");

  const spinnerLine = helpers.addStreamingLine();
  spinnerLine.setParts([{ text: "  ", color: null }]);

  let frame = 0;
  let spinnerDone = false;
  const spinnerInterval = setInterval(() => {
    if (spinnerDone) return;
    spinnerLine.setParts([
      { text: "  " + SPINNER_FRAMES[frame % SPINNER_FRAMES.length], color: "var(--t-muted)" },
    ]);
    frame++;
  }, 100);

  await engine.wait(800);
  spinnerDone = true;
  clearInterval(spinnerInterval);
  spinnerLine.setParts([]);

  helpers.addLine([]);

  const steps = [
    "Add console.log()",
    "Add more console.log()",
    "Question life choices.",
    "Stack Overflow.",
    "It was a typo.",
  ];

  await engine.stagger(
    steps,
    (step, i) => {
      helpers.addLine([
        { text: "  Step " + (i + 1) + "    ", color: "var(--t-highlight)" },
        { text: step, color: "var(--t-text)" },
      ]);
    },
    400,
  );

  await engine.wait(300);
  helpers.addLine([]);
  helpers.addLine([{ text: "  Session complete.", color: "var(--t-accent)" }]);
  helpers.addLine([{ text: "  Bugs found: 0", color: "var(--t-text)" }]);
  helpers.addLine([{ text: "  Sanity remaining: 12%", color: "var(--t-warning)" }]);
}
