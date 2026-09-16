const SPINNER_FRAMES = ["|", "/", "-", "\\"];

export async function hireCommand(engine, helpers, openWindow) {
  helpers.addLine([]);

  const pwPromptLine = helpers.addStreamingLine();
  pwPromptLine.setParts([
    { text: "  [sudo] password for recruiter: ", color: "var(--t-text)" },
  ]);

  const password = "********";
  for (let i = 0; i < password.length; i++) {
    if (engine.isCancelled.current) return;
    pwPromptLine.appendPart({ text: "*", color: "var(--t-muted)" });
    await engine.wait(60);
  }

  await engine.wait(500);
  helpers.addLine([]);

  const authLine = helpers.addStreamingLine();
  await engine.typeText(authLine.appendChar, "  Authenticating...");

  const spinnerLine = helpers.addStreamingLine();
  let frame = 0;
  let spinnerDone = false;
  const spinnerInterval = setInterval(() => {
    if (spinnerDone) return;
    spinnerLine.setParts([
      { text: "  " + SPINNER_FRAMES[frame % SPINNER_FRAMES.length], color: "var(--t-muted)" },
    ]);
    frame++;
  }, 100);

  await engine.wait(1000);
  spinnerDone = true;
  clearInterval(spinnerInterval);
  spinnerLine.setParts([]);

  helpers.addLine([]);

  const checklist = [
    ["GitHub Profile        ", "Verified"],
    ["Projects              ", "Reviewed"],
    ["Technical Skills      ", "Assessed"],
    ["Communication         ", "Confirmed"],
    ["Problem Solving       ", "Validated"],
  ];

  await engine.stagger(
    checklist,
    ([label, status]) => {
      helpers.addLine([
        { text: "  ✔ ", color: "var(--t-accent)" },
        { text: label, color: "var(--t-text)" },
        { text: status, color: "var(--t-accent)" },
      ]);
    },
    300,
  );

  await engine.wait(400);
  helpers.addLine([]);

  const readyLine = helpers.addStreamingLine();
  await engine.typeText(readyLine.appendChar, "  Checking production readiness...");
  helpers.addLine([]);

  const barLine = helpers.addStreamingLine();
  barLine.setParts([
    { text: "  [", color: "var(--t-muted)" },
    { text: "░".repeat(34), color: "var(--t-muted)" },
    { text: "] 0%", color: "var(--t-text)" },
  ]);

  await engine.fillBar((pct) => {
    const total = 34;
    const filled = Math.round((pct / 100) * total);
    const empty = total - filled;
    barLine.setParts([
      { text: "  [", color: "var(--t-muted)" },
      { text: "█".repeat(filled), color: "var(--t-accent)" },
      { text: "░".repeat(empty), color: "var(--t-muted)" },
      { text: "] " + pct + "%", color: "var(--t-text)" },
    ]);
  }, 1500);

  await engine.wait(300);
  helpers.addLine([]);

  const boxLines = [
    [{ text: "  ╔══════════════════════════════════════╗", color: "var(--t-accent)" }],
    [{ text: "  ║                                      ║", color: "var(--t-accent)" }],
    [
      { text: "  ║   ", color: "var(--t-accent)" },
      { text: "Installation Complete.", color: "var(--t-accent)", bold: true },
      { text: "             ║", color: "var(--t-accent)" },
    ],
    [{ text: "  ║                                      ║", color: "var(--t-accent)" }],
    [
      { text: "  ║   ", color: "var(--t-accent)" },
      { text: "Harsh added to Engineering.", color: "var(--t-accent)" },
      { text: "        ║", color: "var(--t-accent)" },
    ],
    [{ text: "  ║                                      ║", color: "var(--t-accent)" }],
    [
      { text: "  ║   ", color: "var(--t-accent)" },
      { text: "⚠  Warning:", color: "var(--t-warning)" },
      { text: "                        ║", color: "var(--t-accent)" },
    ],
    [
      { text: "  ║   ", color: "var(--t-accent)" },
      { text: "May occasionally say", color: "var(--t-warning)" },
      { text: "               ║", color: "var(--t-accent)" },
    ],
    [
      { text: "  ║   ", color: "var(--t-accent)" },
      { text: '"One last bug fix..."', color: "var(--t-warning)" },
      { text: "              ║", color: "var(--t-accent)" },
    ],
    [{ text: "  ║                                      ║", color: "var(--t-accent)" }],
    [{ text: "  ╚══════════════════════════════════════╝", color: "var(--t-accent)" }],
  ];

  boxLines.forEach((parts) => helpers.addLine(parts));

  helpers.addLine([]);
  helpers.addLine([{ text: "  Recommended next steps:", color: "var(--t-muted)" }]);
  helpers.addLine([]);
  helpers.addLine([
    { text: "  → resume    ", color: "var(--t-highlight)" },
    { text: "Open resume", color: "var(--t-text)" },
    {
      text: " [click]",
      color: "var(--t-highlight)",
      clickable: true,
      onClick: () => openWindow("resume"),
    },
  ]);
  helpers.addLine([
    { text: "  → contact   ", color: "var(--t-highlight)" },
    { text: "Get in touch", color: "var(--t-text)" },
    {
      text: " [click]",
      color: "var(--t-highlight)",
      clickable: true,
      onClick: () => openWindow("contact"),
    },
  ]);
  helpers.addLine([]);
}
