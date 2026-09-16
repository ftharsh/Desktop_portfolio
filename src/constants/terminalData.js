import { techStack } from "#constants";

export const BUGS = [
  { id: 184, line1: "Fixed one bug.", line2: "Unlocked three new ones." },
  { id: 248, line1: "The code works.", line2: "Nobody knows why." },
  { id: 403, line1: "Works perfectly.", line2: "Production disagrees." },
  { id: 502, line1: "Deleted 200 lines.", line2: "Everything still works." },
  { id: 101, line1: "It worked on my machine.", line2: "Shipped the machine." },
  { id: 999, line1: "git blame pointed at me.", line2: "From two years ago." },
];

export const EASTER_EGGS = {
  ls: "Permission denied. This isn't your machine 😄",
  cd: "There's nowhere else to go. You're already home.",
  "rm -rf": "Nice try.",
  exit: "You can check out, but you can never leave.",
  vim: 'You\'d never get out. Try "help" instead.',
  ping: "Pong.",
  hello: 'Hey there! Type "help" to see what I can do.',
  hi: 'Hey there! Type "help" to see what I can do.',
  sudo: "Usage: sudo hire harsh",
  hire: "Almost. Try: sudo hire harsh",
  show: "Usage: show skills",
};

const categoryProficiency = {
  Frontend: 90,
  Backend: 80,
  Mobile: 75,
  Styling: 85,
  Database: 70,
  "Dev Tools": 85,
};

export const SKILLS = techStack.map(({ category, items }) => ({
  category,
  items: items.map((name) => ({
    name,
    proficiency: categoryProficiency[category] ?? 75,
  })),
}));
