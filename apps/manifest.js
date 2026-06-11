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
    folder: "sample",
    title: "Sample App",
    description: "A tiny example page showing how new apps plug into the site.",
    icon: "🎲",
    tags: ["demo"]
  }
];
