addQuestions([
  {
    q: "A lab 'panel' or 'profile' is best defined as:",
    choices: ["A single highly specific test", "A collection of different tests ordered as a group", "Only tests that require fasting", "A test that never varies between facilities"],
    correct: 1,
    explain: "A panel/profile is a collection of different tests ordered together as a group; contents can vary slightly between facilities."
  },
  {
    q: "Which of the following is included in a CBC with differential?",
    choices: ["ALT and AST", "WBC count, RBC indices, platelet count, and differential", "BUN and creatinine", "PT and INR"],
    correct: 1,
    explain: "A CBC includes WBC count and differential, RBC count/Hgb/Hct/retic/indices, peripheral smear, and platelet count."
  },
  {
    q: "B12 and folate testing is primarily used to evaluate:",
    choices: ["Bacterial infection", "Megaloblastic/pernicious anemia and B12/folate deficiency", "Iron overload", "Platelet dysfunction"],
    correct: 1,
    explain: "B12/folate testing evaluates for megaloblastic (pernicious) anemia and vitamin B12/folate deficiency."
  },
  {
    q: "In addition to B12 and folate levels, which antibodies may be checked to evaluate for pernicious anemia?",
    choices: ["Anti-dsDNA antibodies", "Intrinsic factor binding antibodies and parietal cell antibodies", "Anti-CCP antibodies", "ANCA"],
    correct: 1,
    explain: "Pernicious anemia workup may include intrinsic factor binding antibodies and parietal cell antibodies."
  },
  {
    q: "Serum iron measures:",
    choices: ["Iron stored in ferritin", "Iron bound to (carried on) transferrin", "Total iron binding capacity", "Iron in the diet"],
    correct: 1,
    explain: "Total serum iron measures the amount of iron carried on transferrin, the transport molecule."
  },
  {
    q: "TIBC (Total Iron Binding Capacity) measures:",
    choices: ["The amount of iron currently bound to transferrin", "The iron-binding capacity of transferrin", "Iron stored in the bone marrow", "Ferritin synthesis rate"],
    correct: 1,
    explain: "TIBC measures the iron-binding capacity of transferrin — the less iron present, the more capacity remains to bind it."
  },
  {
    q: "Which of the following is increased in iron deficiency anemia?",
    choices: ["Serum iron", "Ferritin", "TIBC and transferrin", "Transferrin saturation"],
    correct: 2,
    explain: "In iron deficiency anemia, TIBC and transferrin increase (more binding capacity available), while serum iron, ferritin, and transferrin saturation decrease."
  },
  {
    q: "Transferrin saturation is calculated as:",
    choices: ["Serum iron / TIBC x 100", "TIBC / serum iron x 100", "Ferritin / TIBC x 100", "Serum iron x TIBC"],
    correct: 0,
    explain: "Transferrin saturation = (serum iron / TIBC) x 100."
  },
  {
    q: "A ferritin level of less than 10 ng/mL strongly supports which diagnosis?",
    choices: ["Hemochromatosis", "Iron deficiency anemia", "Vitamin B12 deficiency", "Chronic inflammation"],
    correct: 1,
    explain: "Ferritin < 10 ng/mL strongly supports a diagnosis of iron deficiency anemia."
  },
  {
    q: "Ferritin is increased in which of the following states, potentially masking coexisting iron deficiency?",
    choices: ["Iron deficiency anemia", "Stress, fever, inflammation, and cancer (acute phase reactant)", "Chronic blood loss", "Hemolytic anemia"],
    correct: 1,
    explain: "Ferritin behaves as an acute phase reactant and rises with stress, fever, inflammatory processes, and cancer, which can mask a coexisting iron deficiency."
  },
  {
    q: "How can iron stores be directly measured, as opposed to indirectly via ferritin?",
    choices: ["Serum iron level alone", "Biopsy of liver or bone marrow, stained with Prussian Blue to visualize hemosiderin", "Peripheral blood smear only", "Reticulocyte count"],
    correct: 1,
    explain: "Iron stores can be directly measured by biopsy of liver or bone marrow, stained with Prussian Blue to visualize hemosiderin granules."
  },
  {
    q: "HbA1c reflects average glucose levels over approximately what time period?",
    choices: ["24 hours", "1 week", "6-8 weeks", "6 months"],
    correct: 2,
    explain: "HbA1c reflects average glucose levels over the prior 6-8 weeks, unaffected by daily fluctuations."
  },
  {
    q: "According to ADA criteria, a fasting glucose in which range (on more than one occasion) indicates diabetes?",
    choices: ["70-100 mg/dL", "100-125 mg/dL", "> 125 mg/dL", "> 300 mg/dL only"],
    correct: 2,
    explain: "Fasting glucose > 125 mg/dL on more than one occasion meets ADA criteria for diabetes."
  },
  {
    q: "An HbA1c of 6.0% falls into which category?",
    choices: ["Normal", "Prediabetes", "Diabetes", "Hypoglycemia"],
    correct: 1,
    explain: "HbA1c 5.7-6.4% is classified as prediabetes; diabetes is diagnosed at 6.5% or higher."
  },
  {
    q: "Which lab value is a more specific and sensitive indicator of kidney function: BUN or creatinine?",
    choices: ["BUN", "Creatinine", "They are equally specific", "Neither reflects kidney function"],
    correct: 1,
    explain: "Creatinine is a more specific and sensitive indicator of impaired kidney function than BUN, which is also affected by protein intake and liver function."
  },
  {
    q: "Why are BUN and creatinine usually ordered together?",
    choices: [
      "Because BUN alone is confounded by protein intake and liver function, while creatinine is more specific to kidney function",
      "Because they measure the same thing and provide redundancy",
      "Because insurance requires both",
      "Because creatinine cannot be measured without BUN"
    ],
    correct: 0,
    explain: "BUN is affected by protein intake and liver function, so it is paired with the more specific and sensitive creatinine to better assess kidney function."
  },
  {
    q: "Which components are added to the standard electrolyte panel (Na, K, Cl, CO2) to make a BMP?",
    choices: ["ALT, AST, ALP", "Glucose, BUN, creatinine, calcium", "Albumin and total protein", "Magnesium and phosphorus"],
    correct: 1,
    explain: "A BMP = electrolyte panel + glucose, BUN, creatinine, and calcium."
  },
  {
    q: "Which components distinguish a CMP from a BMP?",
    choices: [
      "CMP adds albumin, total protein, ALT, AST, ALP, and total bilirubin",
      "CMP adds only glucose",
      "CMP adds magnesium and phosphorus",
      "CMP removes electrolytes"
    ],
    correct: 0,
    explain: "A CMP = BMP + albumin, total protein, ALT, AST, ALP, and total bilirubin."
  },
  {
    q: "Which lab panel specifically adds direct bilirubin (beyond what a CMP includes)?",
    choices: ["BMP", "Electrolyte panel", "LFTs (Hepatic Function Panel)", "Iron studies"],
    correct: 2,
    explain: "The LFT (hepatic function) panel includes albumin, total protein, ALT, AST, ALP, total bilirubin, AND direct bilirubin."
  },
  {
    q: "Which liver enzyme is considered a more specific marker of hepatocellular injury: ALT or AST?",
    choices: ["ALT", "AST", "Both are equally specific", "ALP is more specific than either"],
    correct: 0,
    explain: "ALT is a more specific marker of hepatocellular injury than AST, since AST is also found in other tissues."
  },
  {
    q: "Alkaline phosphatase (ALP) can help diagnose which two categories of disease?",
    choices: ["Cardiac and renal disease", "Liver damage and bone disorders", "Pancreatic and adrenal disease", "Only bone disorders"],
    correct: 1,
    explain: "ALP is found in liver and bone, so it can help diagnose liver damage/bile duct obstruction or bone disorders."
  },
  {
    q: "Bilirubin is produced from:",
    choices: ["Hepatocyte turnover", "Hemolysis (breakdown) of RBCs", "Muscle protein breakdown", "Platelet destruction"],
    correct: 1,
    explain: "Bilirubin is produced from hemolysis (breakdown) of RBCs, then processed in the liver and excreted in stool."
  },
  {
    q: "A patient presents with anemia, a low reticulocyte count, and a microcytic MCV. Based on standard workup logic, what should be ordered next?",
    choices: ["B12 and folate levels", "Iron studies (serum iron, ferritin, TIBC, transferrin saturation)", "PT/INR", "HbA1c"],
    correct: 1,
    explain: "Microcytic anemia with low retic count (decreased production) points toward iron deficiency, so iron studies are the appropriate next step."
  },
  {
    q: "A patient has a positive D-dimer result. What is the appropriate next step to confirm a true thrombus?",
    choices: ["Repeat the D-dimer immediately", "Order confirmatory imaging (e.g., CT pulmonary angiogram or venous duplex), since D-dimer alone is not specific", "No further workup is needed", "Start warfarin without imaging"],
    correct: 1,
    explain: "Because D-dimer is sensitive but not highly specific, a positive result should prompt confirmatory imaging rather than being treated as diagnostic on its own."
  }
]);
