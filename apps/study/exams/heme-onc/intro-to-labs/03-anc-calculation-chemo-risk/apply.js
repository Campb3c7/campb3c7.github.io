addQuestions([
  {
    q: "A 60-year-old woman with breast cancer is due for her next cycle of chemotherapy. Her CBC shows WBC 4,000 cells/mm3, with a differential of 1% bands and 30% segs. Based on her ANC, what is her infection risk category and the most appropriate next step?",
    choices: [
      "ANC = 1,240; fairly low risk; proceed with chemotherapy",
      "ANC = 1,240; moderate risk; consider delaying chemotherapy",
      "ANC = 4,000; low risk; proceed with chemotherapy",
      "ANC = 12,400; neutrophilia; hold chemotherapy for infection workup"
    ],
    correct: 0,
    explain: "ANC = 4 × (0.01 + 0.30) = 4 × 0.31 = 1,240 cells/mm3, which falls in the 1,000–1,500 range, classified as fairly low risk, so chemotherapy could reasonably proceed with close monitoring."
  },
  {
    q: "A 45-year-old man on chemotherapy develops a fever of 101.8°F. His CBC shows WBC 1,500 cells/mm3, with a differential of 2% bands and 10% segs. What is his ANC, and what does this mean clinically?",
    choices: [
      "ANC = 180 cells/mm3; high risk of infection; this represents a medical emergency (febrile neutropenia)",
      "ANC = 1,500 cells/mm3; fairly low risk; outpatient management is appropriate",
      "ANC = 1,800 cells/mm3; normal; no additional workup needed",
      "ANC = 18,000 cells/mm3; neutrophilia consistent with bacterial infection"
    ],
    correct: 0,
    explain: "ANC = 1.5 × (0.02 + 0.10) = 1.5 × 0.12 = 180 cells/mm3, which is well below 500 — high risk. Combined with fever, this is febrile neutropenia, a medical emergency requiring urgent evaluation and empiric broad-spectrum antibiotics."
  },
  {
    q: "A patient's CBC shows WBC of 8,000 cells/mm3 with a differential of 3% bands and 62% segs. The oncology team is deciding whether her ANC supports proceeding with chemotherapy today. What is her ANC and risk category?",
    choices: [
      "ANC = 5,200 cells/mm3; within normal range, chemotherapy can proceed",
      "ANC = 8,000 cells/mm3; neutropenic, hold chemotherapy",
      "ANC = 520 cells/mm3; high risk, hold chemotherapy",
      "ANC = 65 cells/mm3; critical, hold chemotherapy"
    ],
    correct: 0,
    explain: "ANC = 8 × (0.03 + 0.62) = 8 × 0.65 = 5,200 cells/mm3, well within the normal range (1,500–8,000), so chemotherapy can proceed as scheduled."
  },
  {
    q: "A resident calculates a patient's ANC by multiplying the total WBC (reported as 6,000 cells/mm3, used as 6) by the sum of the band and lymphocyte percentages. Why is this calculation incorrect, and what should be used instead?",
    choices: [
      "The calculation should use monocytes and eosinophils instead",
      "ANC should be calculated using bands and segs (neutrophils), not lymphocytes, since ANC measures neutrophil granulocytes",
      "The WBC should not be converted to thousands",
      "ANC has no standard formula and must be measured directly"
    ],
    correct: 1,
    explain: "ANC specifically measures neutrophil granulocytes (bands + segs), not lymphocytes. Substituting lymphocyte percentage would give a clinically meaningless number that doesn't reflect the patient's actual capacity to fight bacterial infection."
  }
]);
