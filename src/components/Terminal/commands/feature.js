export async function featureCommand(engine, helpers) {
  const reqLine = helpers.addStreamingLine();
  await engine.typeText(reqLine.appendChar, "  Feature Request Received.");
  await engine.wait(300);
  helpers.addLine([]);

  const steps = [
    "Analyzing requirements...  ",
    "Consulting backlog...      ",
    "Negotiating with PM...     ",
  ];

  for (const step of steps) {
    if (engine.isCancelled.current) break;
    const sl = helpers.addStreamingLine();
    sl.appendPart({ text: "  ", color: null });
    await engine.typeText(sl.appendChar, step);
    await engine.wait(400);
    sl.appendPart({ text: " ✔", color: "var(--t-accent)" });
  }

  await engine.wait(500);
  helpers.addLine([]);
  helpers.addLine([
    { text: "  Estimated Time    ", color: "var(--t-muted)" },
    { text: "2 hours", color: "var(--t-text)" },
  ]);

  const actualLine = helpers.addStreamingLine();
  actualLine.setParts([
    { text: "  Actual Time       ", color: "var(--t-muted)" },
  ]);
  await engine.wait(200);
  actualLine.appendPart({ text: "¯\\_(ツ)_/¯", color: "var(--t-warning)" });
}
