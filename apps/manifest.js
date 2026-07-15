// ───────────────────────────────────────────────────────────────
// SITE MANIFEST — the single source of truth for what apps exist.
//
// To add a new app to the site:
//   1. Create a folder:  apps/<your-app-name>/
//   2. Put an index.html inside it (plus any css/js/assets it needs,
//      all kept inside that same folder).
//   3. Add ONE entry to the list below.
// That's it. The homepage builds itself from this list.
//
// Fields:
//   folder       (required) folder name under apps/
//   title        (required) name shown on the homepage card
//   description  (optional) one-liner shown under the title
//   icon         (optional) an emoji for the card
//   tags         (optional) small labels, e.g. ["study", "tool"]
// ───────────────────────────────────────────────────────────────
window.APPS = [
  {
    folder: "study",
    title: "PA Study App",
    description: "Flashcards, quizzes, and study tools for PA school.",
    icon: "📚",
    tags: ["study"]
  },
  {
    folder: "clips",
    title: "Clip Generator",
    description: "Upload a video → auto jump cuts remove silence → export as a portrait 9:16 short-form clip.",
    icon: "✂️",
    tags: ["video", "creative"]
  },
  {
    folder: "macro-shooter",
    title: "Macro Shooter",
    description: "A 3D movement sandbox: map teleport spots, blink-dash around, and trigger a triangle attack. Experiment with macro-style PVP movement.",
    icon: "🎯",
    tags: ["game", "3d", "experiment"]
  },
  {
    folder: "macro-arena",
    title: "Macro Arena",
    description: "A 2D, text-styled combat arena: program your O in code or Scratch-style blocks. Every action costs ticks, so heavier thinking reacts slower. Dodge, block, and counter a slow, heavy-hitting foe — or take the controls yourself.",
    icon: "⚔️",
    tags: ["game", "2d", "experiment"]
  },
  {
    folder: "genetics-cases",
    title: "Genetics Case Files",
    description: "Interactive case-based genetics review — clinical scenarios, pathophysiology, and key facts for each disorder.",
    icon: "🧬",
    tags: ["study"]
  },
  {
    folder: "orbit-notes",
    title: "Orbit Notes",
    description: "Infinite nested mind-map notes — tap a bubble to dive into it, add child notes, attach photos, and zoom back out.",
    icon: "🪐",
    tags: ["notes", "tool"]
  },
  {
    folder: "sample",
    title: "Sample App",
    description: "A tiny example page showing how new apps plug into the site.",
    icon: "🎲",
    tags: ["demo"]
  },
  {
    folder: "tiny-ai",
    title: "Tiny Local AI",
    description: "A tiny language model that downloads once and runs entirely in your browser tab — no server, no API key.",
    icon: "🧠",
    tags: ["ai", "experiment"]
  }
];
