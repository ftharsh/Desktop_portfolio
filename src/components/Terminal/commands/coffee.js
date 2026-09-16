export async function coffeeCommand(engine, helpers) {
  const brewLine = helpers.addStreamingLine();
  await engine.typeText(brewLine.appendChar, "Brewing coffee...");
  helpers.addLine([]);

  const barLine = helpers.addStreamingLine();
  barLine.setParts([
    { text: "  [", color: "var(--t-muted)" },
    { text: "", color: "var(--t-muted)" },
    { text: "░".repeat(32), color: "var(--t-muted)" },
    { text: "] 0%", color: "var(--t-text)" },
  ]);

  await engine.fillBar((pct) => {
    const total = 32;
    const filled = Math.round((pct / 100) * total);
    const empty = total - filled;
    const barColor = pct < 50 ? "var(--t-muted)" : "var(--t-accent)";
    barLine.setParts([
      { text: "  [", color: "var(--t-muted)" },
      { text: "█".repeat(filled), color: barColor },
      { text: "░".repeat(empty), color: "var(--t-muted)" },
      { text: "] " + pct + "%", color: "var(--t-text)" },
    ]);
  }, 1200);

  await engine.wait(200);
  helpers.addLine([]);
  helpers.addLine([{ text: "  Coffee Ready ☕", color: "var(--t-accent)" }]);
  helpers.addLine([]);

  helpers.addLine([{ text: "  Current Buffs", color: "var(--t-highlight)", bold: true }]);
  helpers.addLine([{ text: "  ─────────────", color: "var(--t-muted)" }]);

  const buffs = [
    { label: "+20  Focus       ", bar: "██████████████████████" },
    { label: "+15  Debugging   ", bar: "████████████████" },
    { label: "+10  Creativity  ", bar: "███████████" },
  ];

  await engine.stagger(
    buffs,
    (buff) => {
      helpers.addLine([
        { text: "  " + buff.label, color: "var(--t-text)" },
        { text: buff.bar, color: "var(--t-accent)" },
      ]);
    },
    80,
  );

  helpers.addLine([]);
  helpers.addLine([
    { text: "  Duration: Until next meeting.", color: "var(--t-muted)", italic: true },
  ]);
}
