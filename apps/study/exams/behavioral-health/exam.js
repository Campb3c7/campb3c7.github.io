// ═══════════════════════════════════════════════════════════════
// BEHAVIORAL HEALTH — exam definition
//
// Each objective listed here is a folder under objectives/ that
// can contain learn.js (cards), test.js (recall questions), and
// apply.js (vignette questions). All three files are optional —
// an objective can start with just learn.js.
//
// To add an objective: create its folder + files, then add one
// entry to the list below. See apps/study/CLAUDE.md for templates.
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Behavioral Health",
  description: "SAMPLE CONTENT — placeholder objectives proving the format works. Replace with real material.",
  objectives: [
    { folder: "01-intro-foundations",  name: "1. Foundations of Behavioral Health", hy: true },
    { folder: "02-anxiety-disorders",  name: "2. Anxiety Disorders",                hy: true }
  ]
});
