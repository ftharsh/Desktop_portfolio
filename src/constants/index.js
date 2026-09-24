const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/bt.svg",
  },
  {
    id: 2,
    img: "/icons/wifi.svg",
  },
  {
    id: 3,
    img: "/icons/battery.png",
  },
  {
    id: 4,
    img: "/icons/search.svg",
  },
  {
    id: 5,
    img: "/icons/user.svg",
  },
  {
    id: 6,
    img: "/images/mode.png",
  },
  {
    id: 7,
    img: "/images/siri.png",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },

  {
    id: "launchpad",
    name: "launchpad",
    icon: "launchpad.png",
    canOpen: false,
  },
  {
    id: "iMessage",
    name: "iMessage",
    icon: "messages.png",
    canOpen: true,
  },
  {
    id: "mail",
    name: "mail",
    icon: "mail.png",
    canOpen: false,
  },
  {
    id: "maps",
    name: "maps",
    icon: "maps.png",
    canOpen: false,
  },

  {
    id: "facetime",
    name: "facetime",
    icon: "facetime.png",
    canOpen: true,
    isNotification: true,
  },
  {
    id: "calendar",
    name: "calendar",
    icon: "calendar.png",
    canOpen: false,
  },

  {
    id: "notes",
    name: "Notes",
    icon: "Notes.png",
    canOpen: true,
  },
  {
    id: "reminders",
    name: "reminders",
    icon: "reminders.png",
    canOpen: false,
  },

  {
    id: "appletv",
    name: "tv",
    icon: "apple-tv.png",
    canOpen: false,
  },
  {
    id: "music",
    name: "music",
    icon: "music.png",
    canOpen: false,
  },
  {
    id: "podcasts",
    name: "podcasts",
    icon: "podcasts.png",
    canOpen: false,
  },
  {
    id: "appstore",
    name: "appstore",
    icon: "appstore.png",
    canOpen: false,
  },
  {
    id: "settings",
    name: "settings",
    icon: "applesettings.png",
    canOpen: false,
  },
  {
    id: "spotify",
    name: "spotify",
    icon: "spotify.png",
    canOpen: true,
  },
  {
    id: "youtube",
    name: "youtube",
    icon: "youtube.png",
    canOpen: false,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
    finderLocation: "trash",
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    siteName: "JS Mastery",
    snippet:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It. Explore the full article for an in-depth breakdown of concepts, examples, and best practices.",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    siteName: "JS Mastery",
    snippet:
      "The Ultimate Guide to Mastering Three.js for 3D Development. Explore the full article for an in-depth breakdown of concepts, examples, and best practices.",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    siteName: "JS Mastery",
    snippet:
      "The Ultimate Guide to Mastering GSAP Animations. Explore the full article for an in-depth breakdown of concepts, examples, and best practices.",
  },
];

const safariTabs = [
  { label: "AI Mode" },
  { label: "All", active: true },
  { label: "Images" },
  { label: "Shopping" },
  { label: "Videos" },
  { label: "News" },
  { label: "Short videos" },
  { label: "More", caret: true },
  { label: "Tools", caret: true },
];

const safariMeta = {
  query: "portfolio",
  resultsCount: "About 5,010,000,000 results (0.38 seconds)",
};

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  safariTabs,
  safariMeta,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Harsh.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Harsh.png",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  spotify: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  notes: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  iMessage: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

const NOTES_FOLDERS = [
  { id: "java", name: "Java", color: "#f0c040" },
  { id: "devops", name: "DevOps", color: "#5ac8fa" },
  { id: "system-design", name: "System Design", color: "#30d158" },
  { id: "kafka", name: "Kafka", color: "#ff6b6b" },
  { id: "databases", name: "Databases", color: "#bf5af2" },
  { id: "project-ideas", name: "Project Ideas", color: "#ffd60a" },
  { id: "easter-egg", name: "Dekha jayega", color: "#8e8e93" },
];

const NOTES_DATA = {
  java: {
    title: "Java",
    items: [
      { text: "ConcurrentHashMap vs Hashtable", done: true },
      { text: "JVM Garbage Collection (G1, ZGC)", done: true },
      { text: "Spring @Transactional gotchas", done: true },
      { text: "volatile vs synchronized", done: true },
      { text: "HashMap internal resizing", done: true },
      { text: "ClassLoaders — how they actually work", done: false },
      { text: "Java Memory Model deep dive", done: false },
      { text: "Virtual Threads (Project Loom)", done: false },
      { text: "CompletableFuture chaining patterns", done: false },
    ],
    doubts: [
      "Why does JIT compilation sometimes make cold starts slower?",
      "When would you pick ZGC over G1 in production?",
      "Does @Async use a separate thread pool or the servlet pool?",
    ],
  },

  devops: {
    title: "DevOps",
    items: [
      { text: "Docker multi-stage builds", done: true },
      { text: "K8s pod lifecycle and probes", done: true },
      { text: "Helm chart templating", done: true },
      { text: "EKS node groups vs Fargate", done: false },
      { text: "Terraform state management", done: false },
      { text: "ArgoCD GitOps workflow", done: false },
    ],
    doubts: [
      "When does HPA conflict with cluster autoscaler?",
      "Is Fargate worth it for small teams vs managed node groups?",
    ],
  },

  "system-design": {
    title: "System Design",
    items: [
      { text: "Rate limiting algorithms", done: true },
      { text: "Circuit breaker pattern", done: true },
      { text: "Event sourcing vs CRUD", done: false },
      { text: "CQRS when and why", done: false },
      { text: "Consistent hashing", done: false },
      { text: "Leader election (Raft basics)", done: false },
    ],
    doubts: [
      "Event sourcing — how do you handle schema evolution on old events?",
      "Is CQRS overkill for anything under 10k RPS?",
    ],
  },

  kafka: {
    title: "Kafka",
    items: [
      { text: "Consumer groups and rebalancing", done: true },
      { text: "Partition strategy and ordering", done: true },
      { text: "Exactly-once semantics", done: false },
      { text: "Kafka Streams vs Flink", done: false },
      { text: "Schema Registry and Avro", done: false },
    ],
    doubts: ["How does Kafka guarantee exactly-once across consumer restarts?"],
  },

  databases: {
    title: "Databases",
    items: [
      { text: "PostgreSQL EXPLAIN ANALYZE", done: true },
      { text: "Index types: B-tree vs Hash vs GIN", done: true },
      { text: "Connection pooling (HikariCP tuning)", done: true },
      { text: "PostgreSQL partitioning strategies", done: false },
      { text: "MVCC internals", done: false },
      { text: "Query planner cost estimation", done: false },
    ],
    doubts: [
      "When does a partial index outperform a full index?",
      "Is pg_stat_statements enough for prod monitoring?",
    ],
  },

  "project-ideas": {
    title: "Project Ideas",
    items: [
      { text: "MCP server exposing personal tools", done: false },
      { text: "Mini container runtime (no Docker)", done: false },
      { text: "Distributed rate limiter with dashboard", done: false },
      { text: "Webhook chaos testing tool for HookRelay", done: false },
    ],
    doubts: [],
  },

  "easter-egg": {
    title: "Dekha jayega",
    stanzas: [
      [
        "Jo hoga dekha jayega, kal ki kal dekhenge,",
        "Zyada se zyada kya hi hoga? Thode taane sahenge!",
        "Abhi ki socho mere bhai, future wali tension kaat do,",
        "Dimaag ka dahi mat karo, chill maar ke waqt guzaar do.",
      ],
      [
        "Jo hai, so hai, chhod na yaar, uss baat pe mitti pao,",
        "Faltu load nahi lene ka, mast raho aur momos khao.",
        "Bina soche samjhe chal, rasta khud hi mil jayega,",
        "Galat train mein baith gaye, toh naya shehar dikh jayega!",
      ],
      [
        "Raam bharose chal raha hai, honi ko kaun taal sakta hai?",
        "Bank account chahe khali ho, apna attitude ubaal maarta hai!",
        "Karke dekhte hain pehle, aaram se baad mein pachtayenge,",
        'Galti pakdi gayi agar, toh "Sorry bro" bol ke muskurayenge.',
      ],
      [
        "Jo mil raha hai lapet lo, chahe free ka Wi-Fi ya khana,",
        "Pehle kaand kar lete hain, baad mein dhoondhenge bahana.",
        "Ek hi toh zindagi hai, kya darna aur kya rona?",
        "Duniya palti ya code phata, apna kaam hai ghode bech ke sona!",
      ],
    ],
    doubts: [],
  },
};

export { NOTES_DATA, NOTES_FOLDERS };

export const IMESSAGE_GREETING =
  "Hey! I'm Harsh's AI assistant. Ask me anything.";
export const IMESSAGE_PLACEHOLDER = "Ask about Harsh...";
export const IMESSAGE_SUBTITLE = "AI · Ask me anything";
export const IMESSAGE_NAME = "Harsh";
export const IMESSAGE_SUGGESTED_QUESTIONS = [
  "What's his tech stack?",
  "Tell me about his projects",
  "Is he open to work?",
  "What does he do at Nextuple?",
];

export const GEMINI_API_BASE =
  "https://generativelanguage.googleapis.com/v1beta/models";
export const GEMINI_MODEL = "gemini-3.5-flash-lite";

export const PORTFOLIO_LINKS = {
  github: "https://github.com/ftharsh",
  linkedin: "https://www.linkedin.com/in/harshvardhan-hari",
  portfolio: "https://ftharsh.com",
};

export const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/playlist/6GbgDQTMlWbaqfblvWFKHF";

// Replace with your actual Formspree form ID from formspree.io
export const FORMSPREE_URL = "https://formspree.io/f/xljdrqov";

export const CAL_BOOKING_URL = "https://cal.com/harshvardhan-hari-wwtz1x/30min";

export const CONTACT_META = {
  eyebrow: "backend engineer",
  name: "Harshvardhan Hari",
  location: "Patna, India · IST",
  tagline:
    "turning coffee, curiosity, and mild chaos into production-ready software.",
  infoRows: [
    {
      label: "email",
      value: "hariharshvardhan22@gmail.com",
      href: "mailto:hariharshvardhan22@gmail.com",
      isLink: true,
    },
    { label: "based", value: "Patna, India", href: null, isLink: false },
  ],
};

export const CONTACT_ACTIONS = [
  { label: "email", href: "mailto:hariharshvardhan22@gmail.com" },
  { label: "github", href: "https://github.com/ftharsh" },
  { label: "linked", href: "https://www.linkedin.com/in/harshvardhan-hari" },
  { label: "twitter", href: "https://x.com/ftharsh" },
];

export const STICKY_NOTE_ITEMS = [
  { text: "Survive B.Tech", done: true },
  { text: "Become an engineer cool enough to center a <div> on the first try", done: false },
  { text: "Ship HookRelay before it ships my sanity", done: false },
  { text: "Get first job", done: true },
  { text: "Get jacked enough to carry my technical debt", done: false },
  { text: "Build this portfolio", done: true },
  { text: "Attempt the impossible: make chai better than mom's", done: false },
  { text: "Fund my ZNMD-style Europe road trip", done: false },
  { text: "Buy a Triumph Speed Triple 1200 RS", done: false },
];

export const BOOT_SEQUENCE = {
  sessionKey: "harsh-portfolio-has-booted",
  fadeStartMs: 4500,
  removeAfterMs: 5500,
};
