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
        { folder: "01-epidemiology-risk-factors", name: "1. Epidemiology & Risk Factors",                        hy: true },
        { folder: "02-pathogenesis",              name: "2. Pathogenesis",                                       hy: true },
        { folder: "03-episode-criteria",          name: "3. Manic, Hypomanic & Depressive Episode Criteria",     hy: true },
        { folder: "04-screening-tools",           name: "4. Screening Tools",                                    hy: true },
        { folder: "05-signs-and-symptoms",        name: "5. Signs & Symptoms of Bipolar Disorders",              hy: true },
        { folder: "06-mental-status-exam",        name: "6. Mental Status Exam Findings",                        hy: true },
        { folder: "07-diagnostic-workup",         name: "7. Diagnostic Workup",                                  hy: true },
        { folder: "08-treatment",                 name: "8. Treatment by Phase",                                 hy: true }
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
