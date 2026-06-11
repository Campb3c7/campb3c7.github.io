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
  description: "Foundations, Depression, Anxiety, Bipolar, Schizophrenia & Dissociative Disorders, Substance Use, Antipsychotics, and comprehensive Behavioral Health Pharmacology.",
  lectures: [
    {
      folder: "intro-to-bh",
      name: "Intro to BH",
      icon: "🧩",
      objectives: [
        { folder: "01-epidemiology-public-health", name: "1. Epidemiology, Prevalence & Public Health", hy: true },
        { folder: "02-dsm-5-purpose-utility",      name: "2. DSM-5 Purpose, Organization & Utility",     hy: true },
        { folder: "03-dsm-5-categories",           name: "3. The 22 DSM-5 Categories",                   hy: true },
        { folder: "04-focused-psychiatric-history", name: "4. Focused Psychiatric History",              hy: true },
        { folder: "05-mental-status-exam",         name: "5. Mental Status Examination",                 hy: true },
        { folder: "06-screening-tools",            name: "6. Behavioral Health Screening Tools",         hy: true },
        { folder: "07-medical-mimics",             name: "7. Medical Mimics of Psychiatric Illness",     hy: true },
        { folder: "08-therapy-modalities",         name: "8. Therapy Modalities",                        hy: true }
      ]
    },
    {
      folder: "depression",
      name: "Depression",
      icon: "🌧️",
      objectives: [
        { folder: "01-depression-vs-normal-sadness",         name: "1. Depression vs Normal Sadness",                       hy: true },
        { folder: "02-epidemiology-across-lifespan",         name: "2. Epidemiology Across the Lifespan",                   hy: true },
        { folder: "03-biopsychosocial-etiology-neurobiology", name: "3. Biopsychosocial Etiology & Neurobiology",           hy: true },
        { folder: "04-mde-mdd-dsm-criteria",                 name: "4. MDE & MDD DSM-5-TR Criteria",                        hy: true },
        { folder: "05-mdd-pdd-pmdd-differentiation",         name: "5. Differentiate MDD, PDD & PMDD",                      hy: true },
        { folder: "06-clinical-presentations-patterns",      name: "6. Clinical Presentations & Symptom Patterns",          hy: true },
        { folder: "07-differential-and-medical-mimics",      name: "7. Differential Diagnosis & Medical Mimics",            hy: true },
        { folder: "08-evidence-based-depression-assessment", name: "8. Evidence-Based Depression Assessment",               hy: true },
        { folder: "09-screening-recommendations-tools",      name: "9. Screening Recommendations & Tools",                  hy: true },
        { folder: "10-phq-2-phq-9-interpretation",           name: "10. PHQ-2 & PHQ-9 Interpretation",                      hy: true },
        { folder: "11-specifiers-special-populations",       name: "11. Specifiers & Special Populations",                  hy: true },
        { folder: "12-suicide-risk-warning-protection",      name: "12. Suicide Risk, Warning Signs & Protective Factors",  hy: true },
        { folder: "13-treatment-approaches",                 name: "13. Psychotherapy & Pharmacologic Approaches",          hy: true },
        { folder: "14-antidepressant-classes",               name: "14. Antidepressant Classes & Patient Considerations",   hy: true },
        { folder: "15-treatment-selection-by-presentation",  name: "15. Treatment Selection by Presentation & Severity",    hy: true },
        { folder: "16-serotonin-syndrome-tca-overdose",      name: "16. Serotonin Syndrome & TCA Overdose",                 hy: true }
      ]
    },
    {
      folder: "anxiety",
      name: "Anxiety Disorders",
      icon: "😰",
      objectives: [
        { folder: "01-normal-vs-pathological-anxiety", name: "1. Normal vs Pathological Anxiety",        hy: true },
        { folder: "02-epidemiology",                   name: "2. Epidemiology",                          hy: true },
        { folder: "03-biopsychosocial-etiology",       name: "3. Biopsychosocial Etiology",              hy: true },
        { folder: "04-major-disorders-and-criteria",   name: "4. Major Disorders & Diagnostic Criteria", hy: true },
        { folder: "05-dsm-5-clinical-application",      name: "5. Apply DSM-5 Criteria",                  hy: true },
        { folder: "06-screening-and-assessment",       name: "6. Screening & Assessment Tools",          hy: true },
        { folder: "07-differential-diagnosis",         name: "7. Differential Diagnosis",                hy: true },
        { folder: "08-common-comorbidities",           name: "8. Common Comorbidities",                  hy: true },
        { folder: "09-evidence-based-treatment",       name: "9. Evidence-Based Treatment Plans",        hy: true },
        { folder: "10-anxiety-medications",            name: "10. Anxiety Medications",                  hy: true }
      ]
    },
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
      folder: "antipsychotics",
      name: "Antipsychotics",
      icon: "🧪",
      objectives: [
        { folder: "01-schizophrenia-pathophysiology",   name: "1. Schizophrenia Pathophysiology",   hy: true },
        { folder: "02-fga-sga-pharmacology",            name: "2. FGA & SGA Pharmacology",          hy: true },
        { folder: "03-fga-sga-differentiation",         name: "3. Differentiating FGA vs SGA",      hy: true },
        { folder: "04-neuroleptic-malignant-syndrome",  name: "4. Neuroleptic Malignant Syndrome",  hy: true }
      ]
    },
    {
      folder: "pharm",
      name: "Behavioral Health Pharm",
      icon: "💉",
      objectives: [
        { folder: "00-master-medication-inventory",      name: "0. Master Medication Inventory",         hy: true },
        { folder: "01-classes-and-mechanisms",           name: "1. Classes & Mechanisms",                hy: true },
        { folder: "02-class-to-disorder-map",            name: "2. What Class Treats What?",             hy: true },
        { folder: "03-drug-to-class-recognition",        name: "3. What Class Is This Drug?",            hy: true },
        { folder: "04-cross-disorder-medications",       name: "4. Medications Used Across Disorders",   hy: true },
        { folder: "05-high-yield-individual-drugs",      name: "5. High-Yield Individual Drugs",         hy: true },
        { folder: "06-adverse-effects-contraindications", name: "6. Adverse Effects & Contraindications", hy: true },
        { folder: "07-monitoring-and-counseling",        name: "7. Monitoring & Patient Counseling",     hy: true },
        { folder: "08-emergencies-toxicity-withdrawal",  name: "8. Emergencies, Toxicity & Withdrawal",  hy: true },
        { folder: "09-pance-medication-selection",       name: "9. PANCE-Style Medication Selection",    hy: true }
      ]
    }
  ]
});
