import { SKILLS } from "../../../constants/terminalData";

export async function showSkillsCommand(engine, helpers) {
  const loadLine = helpers.addStreamingLine();
  await engine.typeText(loadLine.appendChar, "Loading skill tree...");
  await engine.wait(300);
  helpers.addLine([]);

  // Table header
  const col1 = 14; // category column width
  const col2 = 22; // skill column width
  const header =
    "  " + "Category".padEnd(col1) + "Skills";
  helpers.addLine([{ text: header, color: "var(--t-highlight)", bold: true }]);
  helpers.addLine([{ text: "  " + "─".repeat(56), color: "var(--t-muted)" }]);

  for (const { category, items } of SKILLS) {
    if (engine.isCancelled.current) break;

    const skillNames = items.map((s) => s.name);

    await engine.stagger(
      skillNames,
      (name, idx) => {
        const categoryLabel = idx === 0 ? category.padEnd(col1) : " ".repeat(col1);
        helpers.addLine([
          { text: "  ", color: "var(--t-text)" },
          { text: categoryLabel, color: "var(--t-highlight)" },
          { text: name, color: "var(--t-text)" },
        ]);
      },
      80,
    );

    helpers.addLine([{ text: "  " + "─".repeat(56), color: "var(--t-muted)" }]);
  }
}
