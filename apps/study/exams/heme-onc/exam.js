// ═══════════════════════════════════════════════════════════════
// HEMATOLOGY & ONCOLOGY — exam definition
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Hematology & Oncology",
  description: "Hematology & Oncology: lab fundamentals, hematopoiesis, WBC/RBC morphology, coagulation, electrolytes, and lab test selection.",
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
    }
  ]
});
