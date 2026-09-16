const BOX_LINES = [
  { parts: [{ text: "┌─────────────────────────────────────────┐", color: "var(--t-muted)" }] },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "Available Commands", color: "var(--t-highlight)", bold: true },
      { text: "                     │", color: "var(--t-muted)" },
    ],
  },
  { parts: [{ text: "├─────────────────────────────────────────┤", color: "var(--t-muted)" }] },
  { parts: [{ text: "│                                         │", color: "var(--t-muted)" }] },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "show skills", color: "var(--t-accent)" },
      { text: "       View technical skills│", color: "var(--t-text)" },
    ],
  },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "coffee", color: "var(--t-accent)" },
      { text: "            Brew virtual coffee  │", color: "var(--t-text)" },
    ],
  },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "bug", color: "var(--t-accent)" },
      { text: "               Random developer bug │", color: "var(--t-text)" },
    ],
  },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "debug", color: "var(--t-accent)" },
      { text: "             Run dev diagnostics  │", color: "var(--t-text)" },
    ],
  },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "feature", color: "var(--t-accent)" },
      { text: "           Estimate delivery    │", color: "var(--t-text)" },
    ],
  },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "sudo hire harsh", color: "var(--t-accent)" },
      { text: "   Install developer    │", color: "var(--t-text)" },
    ],
  },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "clear", color: "var(--t-accent)" },
      { text: "             Clear terminal       │", color: "var(--t-text)" },
    ],
  },
  { parts: [{ text: "│                                         │", color: "var(--t-muted)" }] },
  {
    parts: [
      { text: "│  ", color: "var(--t-muted)" },
      { text: "Tip: Some commands have surprises.", color: "var(--t-muted)", italic: true },
      { text: "     │", color: "var(--t-muted)" },
    ],
  },
  { parts: [{ text: "│                                         │", color: "var(--t-muted)" }] },
  { parts: [{ text: "└─────────────────────────────────────────┘", color: "var(--t-muted)" }] },
];

export async function helpCommand(engine, helpers) {
  engine.instant(() => {
    BOX_LINES.forEach((line) => helpers.addLine(line.parts));
  });
}

export async function helpMeCommand(engine, helpers, openWindow, executeCommand) {
  const sl1 = helpers.addStreamingLine();
  await engine.typeText(sl1.appendChar, "I'm trying.");
  await engine.wait(400);
  helpers.addLine([]);
  helpers.addLine([
    { text: 'Type ', color: "var(--t-text)" },
    {
      text: '"sudo hire harsh"',
      color: "var(--t-highlight)",
      clickable: true,
      onClick: () => executeCommand("sudo hire harsh"),
    },
    { text: " 😄", color: "var(--t-text)" },
  ]);
}
