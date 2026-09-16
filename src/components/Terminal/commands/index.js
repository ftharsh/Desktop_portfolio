import { helpCommand, helpMeCommand } from "./help";
import { showSkillsCommand } from "./showSkills";
import { coffeeCommand } from "./coffee";
import { bugCommand } from "./bug";
import { debugCommand } from "./debug";
import { featureCommand } from "./feature";
import { hireCommand } from "./hire";
import { clearCommand, resumeCommand, contactCommand } from "./system";
import { easterEggCommand } from "./easterEggs";

const COMMANDS = [
  "help",
  "show skills",
  "coffee",
  "bug",
  "debug",
  "feature",
  "sudo hire harsh",
  "clear",
  "resume",
  "contact",
];

const EASTER_EGG_KEYS = ["ls", "cd", "rm -rf", "exit", "vim", "ping", "hello", "hi", "sudo", "hire", "show", "help me"];

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

function fuzzyMatch(input) {
  let best = null;
  let bestDist = Infinity;
  for (const cmd of COMMANDS) {
    const dist = levenshtein(input, cmd);
    if (dist < bestDist) {
      bestDist = dist;
      best = cmd;
    }
  }
  return bestDist <= 3 ? best : null;
}

export function getTabCompletions(partial) {
  const lower = partial.toLowerCase();
  return COMMANDS.filter((cmd) => cmd.startsWith(lower));
}

export async function executeCommand(rawCmd, engine, helpers, openWindow, selfExecute) {
  const normalized = rawCmd.trim().replace(/\s+/g, " ").toLowerCase();

  if (!normalized) return;

  if (EASTER_EGG_KEYS.includes(normalized)) {
    if (normalized === "help me") {
      await helpMeCommand(engine, helpers, openWindow, selfExecute);
    } else {
      await easterEggCommand(normalized, engine, helpers, selfExecute);
    }
    return;
  }

  switch (normalized) {
    case "help":
      await helpCommand(engine, helpers);
      return;
    case "show skills":
      await showSkillsCommand(engine, helpers);
      return;
    case "coffee":
      await coffeeCommand(engine, helpers);
      return;
    case "bug":
      await bugCommand(engine, helpers);
      return;
    case "debug":
      await debugCommand(engine, helpers);
      return;
    case "feature":
      await featureCommand(engine, helpers);
      return;
    case "sudo hire harsh":
      await hireCommand(engine, helpers, openWindow);
      return;
    case "clear":
      await clearCommand(engine, helpers);
      return;
    case "resume":
      await resumeCommand(engine, helpers, openWindow);
      return;
    case "contact":
      await contactCommand(engine, helpers, openWindow);
      return;
    default:
      break;
  }

  const suggestion = fuzzyMatch(normalized);
  helpers.addLine([
    { text: '  Command not found: "' + normalized + '"', color: "var(--t-error)" },
  ]);
  helpers.addLine([]);
  if (suggestion) {
    helpers.addLine([
      { text: "  Did you mean: ", color: "var(--t-text)" },
      {
        text: suggestion + "?",
        color: "var(--t-highlight)",
        clickable: true,
        onClick: () => selfExecute(suggestion),
      },
    ]);
  } else {
    helpers.addLine([
      { text: '  Type "', color: "var(--t-text)" },
      {
        text: "help",
        color: "var(--t-highlight)",
        clickable: true,
        onClick: () => selfExecute("help"),
      },
      { text: '" for available commands.', color: "var(--t-text)" },
    ]);
  }
}
