// ═══════════════════════════════════════════════════════════════
// HEMATOLOGY & ONCOLOGY — exam definition
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Hematology & Oncology",
  description: "Hematology & Oncology: lab fundamentals, hematopoiesis, WBC/RBC morphology, coagulation, electrolytes, lab test selection, leukemias, lymphomas, and multiple myeloma.",
  lectures: [
    {
      folder: "intro-to-labs",
      name: "Introduction to Labs",
      icon: "🧪",
      objectives: [
        { folder: "01-accuracy-precision-qual-quant-sens-spec", name: "1. Accuracy, Precision, Qualitative/Quantitative, Sensitivity/Specificity", hy: true },
        { folder: "02-panic-values-wbc-hgb-plt",                 name: "2. Panic Values: WBC, Hemoglobin & Platelets",                            hy: true },
        { folder: "03-anc-calculation-chemo-risk",                name: "3. ANC Calculation & Chemotherapy Infection Risk",                        hy: true },
        { folder: "04-hematopoiesis-leuko-erythro-thrombo",       name: "4. Hematopoiesis: Leukopoiesis, Erythropoiesis & Thrombopoiesis",         hy: true },
        { folder: "05-wbc-rbc-morphology",                        name: "5. Normal & Abnormal WBC/RBC Morphology",                                 hy: true },
        { folder: "06-coagulation-cascade-hemostasis",            name: "6. Coagulation Cascade & Hemostasis",                                     hy: true },
        { folder: "07-electrolytes",                              name: "7. Electrolytes & Their Role in Bodily Function",                         hy: true },
        { folder: "08-lab-test-selection-panels",                 name: "8. Lab Test Selection, Panels & Next Steps",                              hy: true }
      ]
    },
    {
      folder: "leukemia-lymphoma-mm",
      name: "Leukemia, Lymphoma & Multiple Myeloma",
      icon: "🎗️",
      objectives: [
        { folder: "01-acute-chronic-leukemias-myeloid-lymphoid", name: "1. Acute vs. Chronic Leukemias: Myeloid & Lymphoid",              hy: true },
        { folder: "02-philadelphia-chromosome-tki",              name: "2. Philadelphia Chromosome & Tyrosine Kinase Inhibitors",         hy: true },
        { folder: "03-cml-three-stages",                         name: "3. The Three Stages of CML",                                      hy: true },
        { folder: "04-leukemia-diagnostic-tools",                name: "4. CBC, Flow Cytometry, FISH & Bone Marrow Biopsy",               hy: true },
        { folder: "05-leukemoid-reaction",                       name: "5. Leukemoid Reaction",                                           hy: true },
        { folder: "06-hodgkin-vs-non-hodgkin-lymphoma",          name: "6. Hodgkin vs. Non-Hodgkin Lymphoma",                             hy: true },
        { folder: "07-hodgkin-lymphoma-diagnosis",                name: "7. Diagnosing Hodgkin Lymphoma",                                  hy: true },
        { folder: "08-burkitt-lymphoma",                          name: "8. Burkitt Lymphoma",                                             hy: true },
        { folder: "09-waldenstrom-macroglobulinemia",             name: "9. Waldenström Macroglobulinemia",                                hy: true },
        { folder: "10-lymphoma-staging",                          name: "10. Lymphoma Staging (Ann Arbor)",                                hy: true },
        { folder: "11-multiple-myeloma",                          name: "11. Multiple Myeloma",                                            hy: true }
      ]
    }
  ]
});
