export async function clearCommand(engine, helpers) {
  helpers.clearLines();
}

export async function resumeCommand(engine, helpers, openWindow) {
  const sl = helpers.addStreamingLine();
  await engine.typeText(sl.appendChar, "  Opening resume...");
  await engine.wait(300);
  helpers.addLine([
    { text: "  → Launching Resume window...", color: "var(--t-highlight)" },
  ]);
  openWindow("resume");
}

export async function contactCommand(engine, helpers, openWindow) {
  const sl = helpers.addStreamingLine();
  await engine.typeText(sl.appendChar, "  Opening contact...");
  await engine.wait(300);
  helpers.addLine([
    { text: "  → Launching Contact window...", color: "var(--t-highlight)" },
  ]);
  openWindow("contact");
}
