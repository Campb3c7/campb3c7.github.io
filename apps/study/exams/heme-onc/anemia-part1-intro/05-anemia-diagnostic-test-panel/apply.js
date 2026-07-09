addQuestions([
  {
    q: "A 68-year-old man presents with a hemoglobin of 20 g/dL after presenting with severe vomiting and diarrhea for 3 days with poor oral intake. Prior labs from 6 months ago showed Hgb 13 g/dL. What is the most likely explanation for this dramatic change?",
    choices: [
      "He has developed polycythemia vera acutely",
      "His H&H is falsely elevated due to decreased plasma volume from dehydration, not a true increase in RBC mass — H&H should be interpreted cautiously since it reflects concentration, not absolute amount",
      "This must represent a lab error requiring immediate repeat testing only",
      "He has developed a hemoglobinopathy"
    ],
    correct: 1,
    explain: "H&H values are concentrations affected by plasma volume. Severe dehydration from vomiting/diarrhea reduces plasma volume, falsely elevating the H&H even though true RBC mass hasn't actually increased — a classic pitfall requiring cautious interpretation of these values."
  },
  {
    q: "A 55-year-old woman with fatigue is found to have Hgb 9 g/dL, WBC 2,100/mcL (low), and platelets 85,000/mcL (low). What should this combination of findings prompt suspicion for, beyond a simple anemia workup?",
    choices: [
      "Simple iron deficiency anemia",
      "A bone marrow process, given the pancytopenia (all three cell lines low) rather than an isolated anemia",
      "Dehydration",
      "Hyperthyroidism"
    ],
    correct: 1,
    explain: "When anemia is accompanied by low WBC and platelet counts (pancytopenia), a bone marrow process should be suspected as the underlying cause, rather than working up the anemia in isolation."
  },
  {
    q: "A patient with anemia has a ferritin level of 150 ng/mL (within normal range) but has active rheumatoid arthritis with elevated CRP. The clinician suspects iron deficiency despite the 'normal' ferritin. What is the reasoning behind this suspicion?",
    choices: [
      "Ferritin is never useful in inflammatory conditions and should be ignored entirely",
      "Ferritin is an acute phase reactant that can be falsely elevated by inflammation, potentially masking a true underlying iron deficiency — a 'normal' ferritin in this context doesn't rule out iron deficiency",
      "This reasoning is flawed; a normal ferritin always rules out iron deficiency",
      "Ferritin only reflects folate stores, not iron"
    ],
    correct: 1,
    explain: "Ferritin behaves as an acute phase reactant and rises with inflammation (as in active RA), which can falsely normalize or elevate the level despite true iron deficiency — clinicians must consider this when interpreting ferritin in inflammatory conditions."
  },
  {
    q: "A pregnant woman with mild anemia has a low-normal serum folate level. Rather than ordering an RBC folate level to confirm deficiency, her PA decides to start empiric folic acid supplementation. Is this an appropriate approach?",
    choices: [
      "No, RBC folate must always be confirmed before any supplementation",
      "Yes — in situations where folate deficiency is expected, such as pregnancy, empiric folic acid supplementation is a reasonable standard approach without necessarily pursuing the more valid but rarely-ordered RBC folate level",
      "No, serum folate is always accurate and needs no further action",
      "Yes, but only after a bone marrow biopsy"
    ],
    correct: 1,
    explain: "In situations where folate deficiency is expected (such as pregnancy or starting methotrexate), empiric folic acid supplementation is a standard, reasonable approach, given that serum folate can be misleading and RBC folate (though more valid) is rarely ordered in practice."
  },
  {
    q: "A 60-year-old man presents with new back pain, anemia, and an elevated total protein with a low albumin-to-globulin ratio. Which test should be ordered to evaluate for the most likely underlying malignancy, and what is that malignancy?",
    choices: [
      "Hemoglobin electrophoresis; sickle cell disease",
      "SPEP/UPEP; multiple myeloma, a plasma cell malignancy most common in adults 50s and older",
      "TSH; hypothyroidism",
      "DAT; autoimmune hemolytic anemia"
    ],
    correct: 1,
    explain: "New back pain, anemia, and an abnormal protein pattern (elevated total protein, low albumin-to-globulin ratio suggesting a monoclonal protein) in an older adult should prompt SPEP/UPEP to evaluate for multiple myeloma, a plasma cell malignancy classically presenting in this demographic."
  },
  {
    q: "A patient with suspected hemolytic anemia has a positive DAT. The clinical team wants to know whether the marrow is compensating appropriately for the ongoing RBC destruction. Which additional, separately-ordered test would answer this question?",
    choices: [
      "TSH",
      "A (corrected) reticulocyte count, since it is not included in a standard CBC and must be specifically ordered to assess bone marrow response",
      "SPEP/UPEP",
      "Serum folate level"
    ],
    correct: 1,
    explain: "The reticulocyte count (which must be specifically ordered, since it's not part of a standard CBC) assesses whether the bone marrow is appropriately compensating for hemolysis — a corrected value above 2% would indicate an appropriate marrow response."
  }
]);
