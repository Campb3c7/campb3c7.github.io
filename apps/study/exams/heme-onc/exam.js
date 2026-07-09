// ═══════════════════════════════════════════════════════════════
// HEMATOLOGY & ONCOLOGY — exam definition
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Hematology & Oncology",
  description: "Hematology & Oncology: lab fundamentals, hematopoiesis, WBC/RBC morphology, coagulation, electrolytes, lab test selection, leukemias, lymphomas, multiple myeloma, blood products/transfusions, amyloidosis, sickle cell disease, methemoglobinemia, polycythemia vera, anemia (introduction, microcytic, normocytic, macrocytic, hemolytic anemias, and pharmacology), hematologic pharmacology (antiplatelets and anticoagulants), and coagulation/platelet disorders (hemostasis, thrombocytopenia, clotting factor disorders, thrombophilias).",
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
    },
    {
      folder: "blood-products-transfusions",
      name: "Blood Products & Transfusions",
      icon: "🩹",
      objectives: [
        { folder: "01-blood-components-indications",                    name: "1. Blood Components & Indications for Use",                          hy: true },
        { folder: "02-lab-value-increases-per-product",                  name: "2. Expected Lab Value Increases per Blood Product",                  hy: true },
        { folder: "03-transfusion-thresholds-prbc-platelets",            name: "3. Transfusion Thresholds for PRBCs & Platelets",                    hy: true },
        { folder: "04-specialized-blood-product-preparations",           name: "4. Specialized PRBC & Platelet Preparations",                        hy: true },
        { folder: "05-type-screen-crossmatch",                           name: "5. Type & Screen and Crossmatch",                                    hy: true },
        { folder: "06-abo-rh-compatibility",                             name: "6. ABO & Rh Compatibility (PRBCs vs. Plasma)",                       hy: true },
        { folder: "07-direct-indirect-coombs-testing",                   name: "7. Direct vs. Indirect Coombs Testing",                              hy: true },
        { folder: "08-platelet-refractoriness",                          name: "8. Platelet Refractoriness",                                         hy: true },
        { folder: "09-acute-transfusion-reaction-recognition-management", name: "9. Recognizing & Managing Acute Transfusion Reactions",              hy: true },
        { folder: "10-ahtr-dhtr",                                        name: "10. Acute vs. Delayed Hemolytic Transfusion Reactions",              hy: true },
        { folder: "11-taco-vs-trali",                                    name: "11. TACO vs. TRALI",                                                 hy: true },
        { folder: "12-fnhtr",                                            name: "12. Febrile Nonhemolytic Transfusion Reaction",                      hy: true },
        { folder: "13-allergic-anaphylactic-sepsis-reactions",           name: "13. Allergic, Anaphylactic & Septic Transfusion Reactions",          hy: true },
        { folder: "14-ta-gvhd",                                          name: "14. Transfusion-Associated Graft-vs-Host Disease",                   hy: true }
      ]
    },
    {
      folder: "heme-potpourri",
      name: "Amyloidosis, SCD, Methemoglobinemia & PV",
      icon: "🧩",
      objectives: [
        { folder: "01-amyloidosis-pathophysiology-histology",   name: "1. Amyloidosis: Pathophysiology & Histology",                     hy: true },
        { folder: "02-amyloidosis-organ-involvement",           name: "2. Amyloidosis: Dermatologic, Cardiac & Renal Involvement",       hy: true },
        { folder: "03-amyloidosis-diagnostic-workup",           name: "3. Amyloidosis: Diagnostic Workup",                               hy: true },
        { folder: "04-amyloidosis-al-attr-aa-comparison",       name: "4. AL vs. ATTR vs. AA Amyloidosis",                               hy: true },
        { folder: "05-sickle-cell-trait-vs-disease",            name: "5. Sickle Cell Trait vs. Homozygous HbS Disease",                 hy: true },
        { folder: "06-scd-natural-history-complications",       name: "6. SCD: Natural History & Complications",                         hy: true },
        { folder: "07-scd-dactylitis-vaso-occlusive-disease",   name: "7. Dactylitis & Vaso-Occlusive Disease",                           hy: true },
        { folder: "08-acute-chest-syndrome",                    name: "8. Acute Chest Syndrome",                                          hy: true },
        { folder: "09-scd-infections",                          name: "9. Infections in Sickle Cell Disease",                             hy: true },
        { folder: "10-scd-daily-treatment-crisis-management",   name: "10. SCD Daily Treatment & Vaso-Occlusive Crisis Management",       hy: true },
        { folder: "11-methemoglobinemia-pathophysiology-risk-factors", name: "11. Methemoglobinemia: Pathophysiology & Risk Factors",     hy: true },
        { folder: "12-methemoglobinemia-clinical-clues",        name: "12. Methemoglobinemia: Clinical Clues",                            hy: true },
        { folder: "13-methemoglobinemia-symptoms-workup",       name: "13. Methemoglobinemia: Symptoms & Workup",                         hy: true },
        { folder: "14-methemoglobinemia-treatment",             name: "14. Methemoglobinemia: Treatment",                                 hy: true },
        { folder: "15-pv-pathophysiology-epidemiology-clinical", name: "15. Polycythemia Vera: Pathophysiology, Epidemiology & Clinical", hy: true },
        { folder: "16-pv-diagnostic-criteria",                  name: "16. Polycythemia Vera: Diagnostic Criteria",                       hy: true },
        { folder: "17-jak2-associated-disorders",               name: "17. JAK2-Associated Disorders",                                    hy: true },
        { folder: "18-pv-management",                           name: "18. Polycythemia Vera: Management",                                hy: true }
      ]
    },
    {
      folder: "anemia-part1-intro",
      name: "Anemia — Introduction (Part 1)",
      icon: "🔬",
      objectives: [
        { folder: "01-erythropoiesis-epo-normal-hemoglobins", name: "1. Erythropoiesis, Erythropoietin & Normal Hemoglobins",     hy: true },
        { folder: "02-oxygen-affinity-dissociation-curve",    name: "2. Oxygen Affinity & the Oxyhemoglobin Dissociation Curve",  hy: true },
        { folder: "03-erythrocyte-life-cycle-iron-recycling", name: "3. Erythrocyte Life Cycle & Iron Recycling",                 hy: true },
        { folder: "04-hemolysis-definition-diagnostic-tests", name: "4. Hemolysis: Definition & Diagnostic Tests",                hy: true },
        { folder: "05-anemia-diagnostic-test-panel",          name: "5. The Full Anemia Diagnostic Test Panel",                   hy: true },
        { folder: "06-cbc-included-vs-ordered-labs",          name: "6. What's in a CBC vs. What Must Be Ordered Separately",     hy: true },
        { folder: "07-pancytopenia-mcv-classification",       name: "7. Pancytopenia & MCV-Based Classification",                 hy: true },
        { folder: "08-corrected-reticulocyte-count",          name: "8. Corrected Reticulocyte Count & Bone Marrow Response",     hy: true },
        { folder: "09-anemia-signs-symptoms-etiology",        name: "9. Signs, Symptoms & Etiology Clues in Anemia",              hy: true },
        { folder: "10-peripheral-smear-findings",             name: "10. Peripheral Smear Findings",                              hy: true }
      ]
    },
    {
      folder: "anemia-part2-microcytic",
      name: "Anemia — Microcytic Anemias (Part 2)",
      icon: "🧲",
      objectives: [
        { folder: "01-microcytic-anemia-differential",         name: "1. Differential Diagnosis of Microcytic Anemias",             hy: true },
        { folder: "02-iron-metabolism",                        name: "2. Iron Metabolism",                                          hy: true },
        { folder: "03-iron-deficiency-risk-populations",       name: "3. Populations at Risk for Iron Deficiency",                  hy: true },
        { folder: "04-iron-deficiency-signs-symptoms",         name: "4. Iron Deficiency: Signs & Symptoms",                        hy: true },
        { folder: "05-iron-deficiency-workup-labs",            name: "5. Iron Deficiency: Workup & Lab Interpretation",             hy: true },
        { folder: "06-ferritin-cautious-interpretation",       name: "6. Ferritin: When to Interpret Cautiously",                   hy: true },
        { folder: "07-iron-deficiency-management-treatment",   name: "7. Iron Deficiency: Management & Treatment",                  hy: true },
        { folder: "08-empiric-iron-special-populations",       name: "8. Empiric Iron Supplementation in Special Populations",      hy: true },
        { folder: "09-iron-overload-consequences",             name: "9. Consequences of Iron Overload",                            hy: true },
        { folder: "10-thalassemia-affected-populations",       name: "10. Populations Affected by Thalassemia",                     hy: true },
        { folder: "11-normal-hemoglobin-physiology",           name: "11. Normal Hemoglobin Physiology",                            hy: true },
        { folder: "12-alpha-vs-beta-thalassemia-comparison",   name: "12. Alpha vs. Beta Thalassemia: Comparison",                  hy: true },
        { folder: "13-alpha-thalassemia-pathophysiology-major", name: "13. Alpha Thalassemia Pathophysiology & Alpha Thal Major",  hy: true },
        { folder: "14-hemoglobin-h-disease",                   name: "14. Hemoglobin H Disease",                                    hy: true },
        { folder: "15-alpha-thal-trait-silent-carrier",        name: "15. Alpha Thalassemia Trait & Silent Carrier",                hy: true },
        { folder: "16-beta-thalassemia-pathophysiology-major", name: "16. Beta Thalassemia Pathophysiology & Beta Thal Major",      hy: true },
        { folder: "17-lead-toxicity",                          name: "17. Lead Toxicity",                                           hy: true },
        { folder: "18-sideroblastic-anemia-etiology",          name: "18. Sideroblastic Anemia Etiology",                           hy: true }
      ]
    },
    {
      folder: "anemia-part3-normocytic",
      name: "Anemia — Normocytic Anemias (Part 3)",
      icon: "⚖️",
      objectives: [
        { folder: "01-normocytic-anemia-ddx-approach",                name: "1. Differential Diagnosis & Workup Approach",                       hy: true },
        { folder: "02-erythropoiesis-physiology-acd-pathophysiology", name: "2. Erythropoiesis Physiology & ACD Pathophysiology",                hy: true },
        { folder: "03-acd-labs-vs-iron-deficiency",                   name: "3. ACD Labs vs. Iron Deficiency Anemia",                            hy: true },
        { folder: "04-acute-blood-loss-sources",                      name: "4. Acute Blood Loss: Sources",                                      hy: true },
        { folder: "05-acute-blood-loss-hh-trends-equilibration",      name: "5. Acute Blood Loss: H&H Trends & Equilibration",                  hy: true },
        { folder: "06-acute-blood-loss-management",                   name: "6. Acute Blood Loss: Management",                                   hy: true },
        { folder: "07-multiple-myeloma-anemia",                       name: "7. Anemia in Multiple Myeloma",                                     hy: true },
        { folder: "08-anemia-of-ckd",                                 name: "8. Anemia of Chronic Kidney Disease",                               hy: true },
        { folder: "09-myelophthisic-myelofibrosis-aplastic-prca",     name: "9. Myelophthisic Anemia, Myelofibrosis, Aplastic Anemia & PRCA",   hy: true }
      ]
    },
    {
      folder: "anemia-part4-macrocytic",
      name: "Anemia — Macrocytic Anemias (Part 4)",
      icon: "🔵",
      objectives: [
        { folder: "01-macrocytic-anemia-ddx",                   name: "1. Differential Diagnosis of Macrocytic Anemias",             hy: true },
        { folder: "02-megaloblastic-vs-nonmegaloblastic",       name: "2. Megaloblastic vs. Non-Megaloblastic Anemia",               hy: true },
        { folder: "03-medications-causing-macrocytosis",        name: "3. Medications Associated with Macrocytosis",                 hy: true },
        { folder: "04-b12-deficiency-anemia",                   name: "4. B12 Deficiency Anemia",                                    hy: true },
        { folder: "05-folate-deficiency-anemia",                name: "5. Folate Deficiency Anemia",                                 hy: true },
        { folder: "06-myelodysplastic-syndrome",                name: "6. Anemia due to Myelodysplastic Syndrome",                   hy: true },
        { folder: "07-alcohol-liver-disease-macrocytosis",      name: "7. Alcohol & Liver Disease as Causes of Macrocytosis",        hy: true }
      ]
    },
    {
      folder: "anemia-part5-hemolytic",
      name: "Anemia — Hemolytic Anemias (Part 5)",
      icon: "💥",
      objectives: [
        { folder: "01-hemolytic-anemia-definitions",       name: "1. Hemolytic Anemia Definitions",                          hy: true },
        { folder: "02-hemolysis-labs-smear-findings",      name: "2. Hemolysis Labs & Smear Findings",                       hy: true },
        { folder: "03-sickle-cell-disease-hemolysis",      name: "3. Sickle Cell Disease",                                   hy: true },
        { folder: "04-thalassemia-hemolysis-review",       name: "4. Thalassemia — Hemolysis Review",                        hy: true },
        { folder: "05-hereditary-spherocytosis",           name: "5. Hereditary Spherocytosis",                              hy: true },
        { folder: "06-g6pd-deficiency",                    name: "6. G6PD Deficiency",                                       hy: true },
        { folder: "07-autoimmune-hemolytic-anemia",        name: "7. Autoimmune Hemolytic Anemia: Warm vs. Cold",            hy: true },
        { folder: "08-microangiopathic-hemolytic-anemia",  name: "8. Microangiopathic Hemolytic Anemia (MAHA)",              hy: true }
      ]
    },
    {
      folder: "anemia-part6-pharmacology",
      name: "Anemia — Pharmacology (Part 6)",
      icon: "💊",
      objectives: [
        { folder: "01-iron-deficiency-treatment",              name: "1. Iron Deficiency Treatment",                    hy: true },
        { folder: "02-b12-supplementation",                    name: "2. B12 Supplementation",                          hy: true },
        { folder: "03-folate-supplementation",                 name: "3. Folate Supplementation",                       hy: true },
        { folder: "04-erythropoiesis-stimulating-agents",      name: "4. Erythropoiesis Stimulating Agents (ESAs)",     hy: true },
        { folder: "05-hydroxyurea",                            name: "5. Hydroxyurea",                                  hy: true },
        { folder: "06-g-csf",                                  name: "6. Granulocyte Colony Stimulating Factors",       hy: true }
      ]
    },
    {
      folder: "hematologic-pharmacology",
      name: "Hematologic Pharmacology — Antithrombotics",
      icon: "🩹",
      objectives: [
        { folder: "01-drug-names-trade-generic",   name: "1. Trade & Generic Drug Names",                         hy: true },
        { folder: "02-aspirin",                    name: "2. Aspirin",                                            hy: true },
        { folder: "03-oral-thienopyridines",       name: "3. Oral Thienopyridines (Clopidogrel, Prasugrel, Ticagrelor)", hy: true },
        { folder: "04-warfarin",                   name: "4. Warfarin",                                           hy: true },
        { folder: "05-unfractionated-heparin",     name: "5. Unfractionated Heparin",                             hy: true },
        { folder: "06-enoxaparin-lmwh",            name: "6. Enoxaparin & Low Molecular Weight Heparins",         hy: true },
        { folder: "07-dabigatran",                 name: "7. Dabigatran",                                         hy: true },
        { folder: "08-xa-inhibitors-fondaparinux", name: "8. Rivaroxaban, Apixaban, Edoxaban & Fondaparinux",     hy: true }
      ]
    },
    {
      folder: "coag-part1-hemostasis",
      name: "Coagulation & Platelet Disorders (Part I): Normal Hemostasis & Meds",
      icon: "🧬",
      objectives: [
        { folder: "01-normal-hemostasis-platelet-lifecycle", name: "1. Normal Hemostasis & Platelet Lifecycle",         hy: true },
        { folder: "02-bleeding-types-locations",             name: "2. Types & Locations of Bleeding",                 hy: true },
        { folder: "03-platelet-count-thresholds",            name: "3. Platelet Count Thresholds",                     hy: true },
        { folder: "04-medication-effects-coagulation",       name: "4. Medication Effects on Coagulation",             hy: true },
        { folder: "05-cox2-nsaid-asa-interaction",           name: "5. COX-2 Inhibitors & NSAID/ASA Interaction",      hy: true },
        { folder: "06-blood-vessel-vasculitis-disorders",    name: "6. Blood Vessel & Vasculitis Disorders",           hy: true }
      ]
    },
    {
      folder: "coag-part2-thrombocytopenia",
      name: "Coagulation & Platelet Disorders (Part II): Thrombocytopenic Disorders",
      icon: "🩸",
      objectives: [
        { folder: "01-thrombocytopenia-mechanisms",             name: "1. Three Mechanisms of Thrombocytopenia",       hy: true },
        { folder: "02-itp-pathophysiology-workup",              name: "2. ITP: Pathophysiology & Workup",              hy: true },
        { folder: "03-itp-treatment-management",                name: "3. ITP: Treatment & Management",                hy: true },
        { folder: "04-drug-induced-immune-thrombocytopenia",    name: "4. Drug-Induced Immune Thrombocytopenia",       hy: true },
        { folder: "05-heparin-induced-thrombocytopenia",        name: "5. Heparin-Induced Thrombocytopenia (HIT)",     hy: true }
      ]
    }
  ]
});
