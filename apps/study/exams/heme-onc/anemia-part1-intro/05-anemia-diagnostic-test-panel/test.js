addQuestions([
  {
    q: "Hemoglobin (Hgb) measures:",
    choices: ["The platelet count", "The total WBC count", "The volume of RBCs as a percentage", "The amount of hemoglobin per volume of blood (mg/dL)"],
    correct: 3,
    explain: "Hemoglobin measures the amount of hemoglobin per volume of blood, expressed in mg/dL."
  },
  {
    q: "Hematocrit (Hct) measures:",
    choices: ["The total iron binding capacity", "The volume of RBCs in the blood, expressed as a percentage", "The reticulocyte percentage", "The amount of hemoglobin per volume of blood"],
    correct: 1,
    explain: "Hematocrit measures the volume of RBCs in the blood, expressed as a percentage."
  },
  {
    q: "Why should Hct (and to a lesser extent Hgb) be interpreted cautiously?",
    choices: ["They only reflect WBC count, not RBC mass", "They are always inaccurate regardless of clinical context", "They are concentrations affected by changes in plasma volume (e.g., dehydration or volume overload)", "They cannot be measured accurately by modern lab equipment"],
    correct: 2,
    explain: "H&H values are concentrations that can be affected by changes in plasma volume, independent of true RBC mass — dehydration can falsely elevate them, and volume overload can falsely lower them."
  },
  {
    q: "If anemia is accompanied by low WBC and platelet counts (pancytopenia), what should be suspected?",
    choices: ["A bone marrow process", "Thyroid disease", "Dehydration", "Simple iron deficiency"],
    correct: 0,
    explain: "Pancytopenia (low RBCs, WBCs, and platelets together) should raise suspicion for an underlying bone marrow process."
  },
  {
    q: "Why can the RBC count be high despite anemia in some cases?",
    choices: ["This only occurs with macrocytic anemia", "If RBCs are very small (microcytic), the RBC count can be high despite anemia", "This never occurs", "RBC count and anemia are unrelated"],
    correct: 1,
    explain: "If RBCs are very small (microcytic), the RBC count can be high despite the presence of anemia, since more small cells are needed to carry the same (reduced) total hemoglobin mass."
  },
  {
    q: "What does MCV measure?",
    choices: ["The amount of hemoglobin per RBC", "The range of RBC sizes", "The total number of RBCs", "The average size of the RBC"],
    correct: 3,
    explain: "MCV (mean corpuscular volume) measures the average size of the RBC."
  },
  {
    q: "What does RDW measure?",
    choices: ["The average RBC size", "The total RBC count", "The range of RBC sizes", "The reticulocyte percentage"],
    correct: 2,
    explain: "RDW (red cell distribution width) measures the range of RBC sizes."
  },
  {
    q: "Is the reticulocyte count included in a standard CBC?",
    choices: ["Only for pediatric patients", "Yes, automatically", "Only in emergency settings", "No, it must be specifically ordered"],
    correct: 3,
    explain: "The reticulocyte count is not part of a standard CBC and must be specifically ordered."
  },
  {
    q: "What does serum iron measure?",
    choices: ["Iron absorption from the GI tract", "The main iron-binding protein level", "The iron storage capacity of the liver", "The total amount of iron in the blood"],
    correct: 3,
    explain: "Serum iron measures the total amount of iron in the blood."
  },
  {
    q: "What is transferrin's role, and what percentage of its binding sites are typically used to transport iron in a healthy person?",
    choices: ["A liver enzyme; percentage saturation is irrelevant", "The main iron storage protein; about 90% used in health", "An acute phase reactant only, unrelated to iron binding", "The main iron-binding protein; about 1/3 of binding sites used in health"],
    correct: 3,
    explain: "Transferrin is the main binding protein for iron in the blood; in a healthy person, about 1/3 of its binding sites are used to transport iron."
  },
  {
    q: "What does TIBC measure, and how does it relate to transferrin?",
    choices: ["TIBC measures serum iron directly and is unrelated to transferrin", "TIBC is identical to percent saturation", "TIBC measures ferritin levels directly", "TIBC measures all proteins available to bind iron (including transferrin) and is an indirect measurement of transferrin"],
    correct: 3,
    explain: "TIBC (total iron binding capacity) measures all proteins available to bind iron, including transferrin, and serves as an indirect measurement of transferrin."
  },
  {
    q: "How is % saturation calculated?",
    choices: ["Using ferritin alone", "It cannot be calculated, only measured directly", "Using either the transferrin or TIBC value, when serum iron is known", "Using hemoglobin and hematocrit only"],
    correct: 2,
    explain: "% saturation is calculated using either the transferrin or TIBC value, when the serum iron level is known."
  },
  {
    q: "Why is ferritin considered the most useful indicator of iron deficiency?",
    choices: ["Ferritin is the easiest test to order", "Ferritin directly measures hemoglobin", "Ferritin stores can be significantly decreased before any fall in serum iron concentration occurs", "Ferritin levels never change with inflammation"],
    correct: 2,
    explain: "Ferritin is the most useful indicator of iron deficiency because ferritin stores fall significantly before serum iron concentration drops, making it a more sensitive early marker."
  },
  {
    q: "What important caveat applies to interpreting ferritin levels?",
    choices: ["Ferritin cannot be measured in the presence of anemia", "Ferritin is also an acute phase reactant and may be elevated with significant inflammation, potentially masking true iron deficiency", "Ferritin is never affected by inflammation", "Ferritin only reflects recent dietary iron intake"],
    correct: 1,
    explain: "Ferritin is an acute phase reactant and may be elevated with significant inflammation, which can mask an underlying iron deficiency."
  },
  {
    q: "Why can a serum folate level be misleading when evaluating anemia?",
    choices: ["It highly reflects the patient's most recent diet, not necessarily true body folate stores", "It only measures B12, not folate", "It is never accurate under any circumstances", "It cannot be measured in a standard lab"],
    correct: 0,
    explain: "Serum folate level may be misleading because it highly reflects a patient's most recent diet rather than true body folate stores."
  },
  {
    q: "Which folate test is more valid for evaluating anemia, though rarely ordered?",
    choices: ["Urine folate level", "CSF folate level", "RBC folate level", "Serum folate level"],
    correct: 2,
    explain: "RBC folate levels may be more valid for evaluating anemia but are rarely ordered in practice."
  },
  {
    q: "In which clinical situations is empiric folic acid supplementation given without necessarily confirming deficiency first?",
    choices: ["Only in hyperthyroidism", "Only in cirrhosis", "Pregnancy or when starting methotrexate", "Only in renal failure"],
    correct: 2,
    explain: "Empiric folic acid supplementation is given in situations where folate deficiency is expected, such as pregnancy or when starting methotrexate."
  },
  {
    q: "Which liver enzymes are elevated in cases of liver inflammation, as part of the LFT panel?",
    choices: ["AST and ALT", "LDH and haptoglobin only", "Amylase and lipase", "TSH and T4"],
    correct: 0,
    explain: "AST and ALT are liver enzymes elevated with liver inflammation, as part of the broader LFT panel that also includes LDH and bilirubin."
  },
  {
    q: "What does the haptoglobin test specifically measure?",
    choices: ["Total hemoglobin in circulation", "Bound haptoglobin-hemoglobin complexes only", "Serum iron levels", "The free haptoglobin available to bind hemoglobin"],
    correct: 3,
    explain: "The haptoglobin test measures the free haptoglobin available to bind hemoglobin; it is low when hemolysis is occurring because more of it becomes bound."
  },
  {
    q: "TSH is used as a screening test for which condition, which can itself cause anemia?",
    choices: ["Thyroid disease", "Bone marrow failure", "Liver disease", "Renal disease"],
    correct: 0,
    explain: "TSH is the screening test for thyroid disease; hypothyroidism can be a cause of anemia."
  },
  {
    q: "SPEP/UPEP is used to look for which malignancy, typically seen in older adults?",
    choices: ["AML", "Hodgkin lymphoma", "Multiple myeloma", "CML"],
    correct: 2,
    explain: "SPEP/UPEP (serum and urine protein electrophoresis) is used to look for multiple myeloma, a plasma cell malignancy most common in adults 50s and older."
  },
  {
    q: "What is hemoglobin electrophoresis used to identify?",
    choices: ["Iron deficiency", "Hemoglobinopathies (e.g., sickle cell disease, thalassemia)", "Liver disease", "Thyroid disease"],
    correct: 1,
    explain: "Hemoglobin electrophoresis is used to identify hemoglobinopathies such as sickle cell disease and thalassemia."
  },
  {
    q: "The direct antiglobulin test (DAT/Coombs) is used to determine:",
    choices: ["If the patient is producing an antibody to their own RBCs", "The total iron binding capacity", "The reticulocyte percentage", "Thyroid function"],
    correct: 0,
    explain: "The DAT (Coombs test) is used in the workup of hemolytic anemias to determine if there is an antibody to RBCs that the patient is producing."
  },
  {
    q: "How is a bone marrow biopsy performed?",
    choices: ["As a noninvasive blood draw", "As an invasive bedside test obtaining a core of marrow and an aspirate for pathologist review", "Only under general anesthesia in the OR", "Via a simple urine sample"],
    correct: 1,
    explain: "Bone marrow biopsy is an invasive test done at the bedside to obtain a core of marrow and aspirate for exam by a pathologist."
  },
  {
    q: "What are the drawbacks of genetic testing in the anemia workup?",
    choices: ["It is always free and instantaneous", "It cannot detect thalassemia", "It replaces the need for a CBC", "It is expensive and takes days to weeks to result"],
    correct: 3,
    explain: "Genetic testing is expensive and takes several days to weeks to result, usually reserved for identifying thalassemia, sickle cell disease, and other hemoglobinopathies."
  }
]);
