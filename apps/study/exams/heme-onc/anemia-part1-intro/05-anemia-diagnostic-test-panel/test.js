addQuestions([
  {
    q: "Hemoglobin (Hgb) measures:",
    choices: ["The volume of RBCs as a percentage", "The amount of hemoglobin per volume of blood (mg/dL)", "The total WBC count", "The platelet count"],
    correct: 1,
    explain: "Hemoglobin measures the amount of hemoglobin per volume of blood, expressed in mg/dL."
  },
  {
    q: "Hematocrit (Hct) measures:",
    choices: ["The amount of hemoglobin per volume of blood", "The volume of RBCs in the blood, expressed as a percentage", "The total iron binding capacity", "The reticulocyte percentage"],
    correct: 1,
    explain: "Hematocrit measures the volume of RBCs in the blood, expressed as a percentage."
  },
  {
    q: "Why should Hct (and to a lesser extent Hgb) be interpreted cautiously?",
    choices: [
      "They are always inaccurate regardless of clinical context",
      "They are concentrations affected by changes in plasma volume (e.g., dehydration or volume overload)",
      "They cannot be measured accurately by modern lab equipment",
      "They only reflect WBC count, not RBC mass"
    ],
    correct: 1,
    explain: "H&H values are concentrations that can be affected by changes in plasma volume, independent of true RBC mass — dehydration can falsely elevate them, and volume overload can falsely lower them."
  },
  {
    q: "If anemia is accompanied by low WBC and platelet counts (pancytopenia), what should be suspected?",
    choices: ["Simple iron deficiency", "A bone marrow process", "Dehydration", "Thyroid disease"],
    correct: 1,
    explain: "Pancytopenia (low RBCs, WBCs, and platelets together) should raise suspicion for an underlying bone marrow process."
  },
  {
    q: "Why can the RBC count be high despite anemia in some cases?",
    choices: [
      "This never occurs",
      "If RBCs are very small (microcytic), the RBC count can be high despite anemia",
      "RBC count and anemia are unrelated",
      "This only occurs with macrocytic anemia"
    ],
    correct: 1,
    explain: "If RBCs are very small (microcytic), the RBC count can be high despite the presence of anemia, since more small cells are needed to carry the same (reduced) total hemoglobin mass."
  },
  {
    q: "What does MCV measure?",
    choices: ["The range of RBC sizes", "The average size of the RBC", "The total number of RBCs", "The amount of hemoglobin per RBC"],
    correct: 1,
    explain: "MCV (mean corpuscular volume) measures the average size of the RBC."
  },
  {
    q: "What does RDW measure?",
    choices: ["The average RBC size", "The range of RBC sizes", "The total RBC count", "The reticulocyte percentage"],
    correct: 1,
    explain: "RDW (red cell distribution width) measures the range of RBC sizes."
  },
  {
    q: "Is the reticulocyte count included in a standard CBC?",
    choices: ["Yes, automatically", "No, it must be specifically ordered", "Only in emergency settings", "Only for pediatric patients"],
    correct: 1,
    explain: "The reticulocyte count is not part of a standard CBC and must be specifically ordered."
  },
  {
    q: "What does serum iron measure?",
    choices: ["The total amount of iron in the blood", "The iron storage capacity of the liver", "The main iron-binding protein level", "Iron absorption from the GI tract"],
    correct: 0,
    explain: "Serum iron measures the total amount of iron in the blood."
  },
  {
    q: "What is transferrin's role, and what percentage of its binding sites are typically used to transport iron in a healthy person?",
    choices: [
      "The main iron-binding protein; about 1/3 of binding sites used in health",
      "The main iron storage protein; about 90% used in health",
      "A liver enzyme; percentage saturation is irrelevant",
      "An acute phase reactant only, unrelated to iron binding"
    ],
    correct: 0,
    explain: "Transferrin is the main binding protein for iron in the blood; in a healthy person, about 1/3 of its binding sites are used to transport iron."
  },
  {
    q: "What does TIBC measure, and how does it relate to transferrin?",
    choices: [
      "TIBC measures serum iron directly and is unrelated to transferrin",
      "TIBC measures all proteins available to bind iron (including transferrin) and is an indirect measurement of transferrin",
      "TIBC measures ferritin levels directly",
      "TIBC is identical to percent saturation"
    ],
    correct: 1,
    explain: "TIBC (total iron binding capacity) measures all proteins available to bind iron, including transferrin, and serves as an indirect measurement of transferrin."
  },
  {
    q: "How is % saturation calculated?",
    choices: [
      "Using either the transferrin or TIBC value, when serum iron is known",
      "Using ferritin alone",
      "Using hemoglobin and hematocrit only",
      "It cannot be calculated, only measured directly"
    ],
    correct: 0,
    explain: "% saturation is calculated using either the transferrin or TIBC value, when the serum iron level is known."
  },
  {
    q: "Why is ferritin considered the most useful indicator of iron deficiency?",
    choices: [
      "Ferritin levels never change with inflammation",
      "Ferritin stores can be significantly decreased before any fall in serum iron concentration occurs",
      "Ferritin is the easiest test to order",
      "Ferritin directly measures hemoglobin"
    ],
    correct: 1,
    explain: "Ferritin is the most useful indicator of iron deficiency because ferritin stores fall significantly before serum iron concentration drops, making it a more sensitive early marker."
  },
  {
    q: "What important caveat applies to interpreting ferritin levels?",
    choices: [
      "Ferritin is also an acute phase reactant and may be elevated with significant inflammation, potentially masking true iron deficiency",
      "Ferritin is never affected by inflammation",
      "Ferritin only reflects recent dietary iron intake",
      "Ferritin cannot be measured in the presence of anemia"
    ],
    correct: 0,
    explain: "Ferritin is an acute phase reactant and may be elevated with significant inflammation, which can mask an underlying iron deficiency."
  },
  {
    q: "Why can a serum folate level be misleading when evaluating anemia?",
    choices: [
      "It highly reflects the patient's most recent diet, not necessarily true body folate stores",
      "It is never accurate under any circumstances",
      "It only measures B12, not folate",
      "It cannot be measured in a standard lab"
    ],
    correct: 0,
    explain: "Serum folate level may be misleading because it highly reflects a patient's most recent diet rather than true body folate stores."
  },
  {
    q: "Which folate test is more valid for evaluating anemia, though rarely ordered?",
    choices: ["RBC folate level", "Serum folate level", "Urine folate level", "CSF folate level"],
    correct: 0,
    explain: "RBC folate levels may be more valid for evaluating anemia but are rarely ordered in practice."
  },
  {
    q: "In which clinical situations is empiric folic acid supplementation given without necessarily confirming deficiency first?",
    choices: ["Pregnancy or when starting methotrexate", "Only in cirrhosis", "Only in renal failure", "Only in hyperthyroidism"],
    correct: 0,
    explain: "Empiric folic acid supplementation is given in situations where folate deficiency is expected, such as pregnancy or when starting methotrexate."
  },
  {
    q: "Which liver enzymes are elevated in cases of liver inflammation, as part of the LFT panel?",
    choices: ["AST and ALT", "LDH and haptoglobin only", "TSH and T4", "Amylase and lipase"],
    correct: 0,
    explain: "AST and ALT are liver enzymes elevated with liver inflammation, as part of the broader LFT panel that also includes LDH and bilirubin."
  },
  {
    q: "What does the haptoglobin test specifically measure?",
    choices: [
      "Total hemoglobin in circulation",
      "The free haptoglobin available to bind hemoglobin",
      "Bound haptoglobin-hemoglobin complexes only",
      "Serum iron levels"
    ],
    correct: 1,
    explain: "The haptoglobin test measures the free haptoglobin available to bind hemoglobin; it is low when hemolysis is occurring because more of it becomes bound."
  },
  {
    q: "TSH is used as a screening test for which condition, which can itself cause anemia?",
    choices: ["Thyroid disease", "Liver disease", "Renal disease", "Bone marrow failure"],
    correct: 0,
    explain: "TSH is the screening test for thyroid disease; hypothyroidism can be a cause of anemia."
  },
  {
    q: "SPEP/UPEP is used to look for which malignancy, typically seen in older adults?",
    choices: ["Multiple myeloma", "CML", "Hodgkin lymphoma", "AML"],
    correct: 0,
    explain: "SPEP/UPEP (serum and urine protein electrophoresis) is used to look for multiple myeloma, a plasma cell malignancy most common in adults 50s and older."
  },
  {
    q: "What is hemoglobin electrophoresis used to identify?",
    choices: ["Hemoglobinopathies (e.g., sickle cell disease, thalassemia)", "Liver disease", "Iron deficiency", "Thyroid disease"],
    correct: 0,
    explain: "Hemoglobin electrophoresis is used to identify hemoglobinopathies such as sickle cell disease and thalassemia."
  },
  {
    q: "The direct antiglobulin test (DAT/Coombs) is used to determine:",
    choices: [
      "If the patient is producing an antibody to their own RBCs",
      "The total iron binding capacity",
      "The reticulocyte percentage",
      "Thyroid function"
    ],
    correct: 0,
    explain: "The DAT (Coombs test) is used in the workup of hemolytic anemias to determine if there is an antibody to RBCs that the patient is producing."
  },
  {
    q: "How is a bone marrow biopsy performed?",
    choices: [
      "As a noninvasive blood draw",
      "As an invasive bedside test obtaining a core of marrow and an aspirate for pathologist review",
      "Only under general anesthesia in the OR",
      "Via a simple urine sample"
    ],
    correct: 1,
    explain: "Bone marrow biopsy is an invasive test done at the bedside to obtain a core of marrow and aspirate for exam by a pathologist."
  },
  {
    q: "What are the drawbacks of genetic testing in the anemia workup?",
    choices: ["It is expensive and takes days to weeks to result", "It is always free and instantaneous", "It cannot detect thalassemia", "It replaces the need for a CBC"],
    correct: 0,
    explain: "Genetic testing is expensive and takes several days to weeks to result, usually reserved for identifying thalassemia, sickle cell disease, and other hemoglobinopathies."
  }
]);
