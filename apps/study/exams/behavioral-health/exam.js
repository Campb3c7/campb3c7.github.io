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
  description: "Bipolar Disorders, Substance Use Disorders, Schizophrenia & Dissociative Disorders.",
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
      folder: "substance-use",
      name: "Substance Use",
      icon: "💊",
      objectives: [
        { folder: "01-diagnostic-criteria",      name: "1. Diagnostic Criteria of SUDs",                       hy: true },
        { folder: "02-pathogenesis",             name: "2. Pathogenesis",                                      hy: true },
        { folder: "03-epidemiology",             name: "3. Epidemiology",                                      hy: true },
        { folder: "04-risk-factors",             name: "4. Risk Factors",                                      hy: true },
        { folder: "05-intoxication-withdrawal",  name: "5. Intoxication & Withdrawal by Substance",            hy: true },
        { folder: "06-diagnostic-exams",         name: "6. Diagnostic Exams & Their Significance",             hy: true },
        { folder: "07-treatment",                name: "7. Treatment of Substance Use Disorders",              hy: true }
      ]
    },
    {
      folder: "schizophrenia",
      name: "Schizophrenia & Dissociative Disorders",
      icon: "🌀",
      objectives: [
        { folder: "01-epidemiology-risk-factors", name: "1. Epidemiology & Risk Factors",                           hy: true },
        { folder: "02-pathogenesis",              name: "2. Pathogenesis",                                        hy: true },
        { folder: "03-spectrum-disorders",        name: "3. Spectrum Disorders (Schizophreniform, Brief, SAD)",   hy: true },
        { folder: "04-delusional-catatonia",      name: "4. Delusional Disorder & Catatonia",                     hy: true },
        { folder: "05-signs-symptoms",            name: "5. Signs & Symptoms (Positive & Negative)",              hy: true },
        { folder: "06-mental-status-exam",        name: "6. Mental Status Exam Findings",                         hy: true },
        { folder: "07-treatment",                 name: "7. Treatment (Acute & Maintenance)",                     hy: true },
        { folder: "08-dissociative-disorders",    name: "8. Dissociative Disorders (DID, DA)",                    hy: true }
      ]
    }
  ]
});
