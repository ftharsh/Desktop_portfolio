import { BUGS } from "../../../constants/terminalData";

export async function bugCommand(engine, helpers) {
  const bug = BUGS[Math.floor(Math.random() * BUGS.length)];

  helpers.addLine([]);
  helpers.addLine([
    { text: "  Bug #" + bug.id, color: "var(--t-warning)", bold: true },
  ]);
  helpers.addLine([{ text: "  ────────", color: "var(--t-muted)" }]);

  const line1 = helpers.addStreamingLine();
  line1.appendPart({ text: "  ", color: null });
  await engine.typeText(line1.appendChar, bug.line1);

  await engine.wait(300);

  const line2 = helpers.addStreamingLine();
  line2.appendPart({ text: "  ", color: null });
  await engine.typeText(line2.appendChar, bug.line2);
  helpers.addLine([]);
}
