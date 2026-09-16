import { EASTER_EGGS } from "../../../constants/terminalData";

export async function easterEggCommand(key, engine, helpers, executeCommand) {
  switch (key) {
    case "ls":
      helpers.addLine([{ text: "  " + EASTER_EGGS.ls, color: "var(--t-error)" }]);
      break;
    case "cd":
      helpers.addLine([{ text: "  " + EASTER_EGGS.cd, color: "var(--t-text)" }]);
      break;
    case "rm -rf":
      helpers.addLine([{ text: "  " + EASTER_EGGS["rm -rf"], color: "var(--t-warning)" }]);
      break;
    case "exit":
      helpers.addLine([{ text: "  " + EASTER_EGGS.exit, color: "var(--t-text)" }]);
      break;
    case "vim":
      helpers.addLine([{ text: "  " + EASTER_EGGS.vim, color: "var(--t-text)" }]);
      break;
    case "ping":
      helpers.addLine([{ text: "  " + EASTER_EGGS.ping, color: "var(--t-accent)" }]);
      break;
    case "hello":
    case "hi":
      helpers.addLine([{ text: "  " + EASTER_EGGS[key], color: "var(--t-text)" }]);
      break;
    case "sudo":
      helpers.addLine([{ text: "  " + EASTER_EGGS.sudo, color: "var(--t-muted)" }]);
      break;
    case "hire":
      helpers.addLine([
        { text: "  Almost. Try: ", color: "var(--t-text)" },
        {
          text: "sudo hire harsh",
          color: "var(--t-highlight)",
          clickable: true,
          onClick: () => executeCommand("sudo hire harsh"),
        },
      ]);
      break;
    case "show":
      helpers.addLine([{ text: "  " + EASTER_EGGS.show, color: "var(--t-muted)" }]);
      break;
    case "help me":
      break;
    default:
      break;
  }
}
