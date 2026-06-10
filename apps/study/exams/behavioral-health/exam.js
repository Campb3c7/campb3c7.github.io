// ═══════════════════════════════════════════════════════════════
// BEHAVIORAL HEALTH — exam definition
//
// Structure: exam → lectures → objectives → learn/test/apply.
// Each lecture is a folder in this directory; each objective is a
// folder inside its lecture, holding learn.js (cards), test.js
// (recall questions), and apply.js (vignettes). All three files
// are optional — an objective can start with just learn.js.
//
// To add a lecture: create its folder + objective folders, then
// add one entry below. See apps/study/CLAUDE.md for templates.
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Behavioral Health",
  description: "Lecture-by-lecture review. Foundations and Anxiety are placeholder samples awaiting real material.",
  lectures: [
    {
      folder: "bipolar",
      name: "Bipolar",
      icon: "🌗",
      objectives: [
        { folder: "01-overview-and-pathogenesis", name: "1. Overview, Epidemiology & Pathogenesis",          hy: true },
        { folder: "02-mood-episodes",             name: "2. Mood Episodes: Mania, Hypomania, Depression",    hy: true },
        { folder: "03-bipolar-diagnoses",         name: "3. Bipolar I, Bipolar II, Cyclothymia & Specifiers", hy: true },
        { folder: "04-evaluation-and-screening",  name: "4. Evaluation, Screening & Workup",                 hy: true },
        { folder: "05-treatment",                 name: "5. Treatment by Phase",                             hy: true }
      ]
    },
    {
      folder: "anxiety",
      name: "Anxiety",
      icon: "😰",
      objectives: [
        { folder: "01-anxiety-disorders", name: "1. Anxiety Disorders (sample)", hy: true }
      ]
    },
    {
      folder: "foundations",
      name: "Foundations",
      icon: "🧩",
      objectives: [
        { folder: "01-intro-foundations", name: "1. Foundations of Behavioral Health (sample)", hy: true }
      ]
    }
  ]
});
