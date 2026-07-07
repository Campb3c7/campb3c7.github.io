addQuestions([
  {
    q: "What does ANC stand for?",
    choices: ["Absolute Neutrophil Count", "Active Neutrophil Concentration", "Absolute Nucleated Cells", "Average Neutrophil Calculation"],
    correct: 0,
    explain: "ANC = Absolute Neutrophil Count, the total number of neutrophil granulocytes (bands + segs) present in the blood."
  },
  {
    q: "What is the correct formula for calculating the ANC?",
    choices: [
      "Total WBC × (% bands + % segs)",
      "Total WBC ÷ (% bands + % segs)",
      "Total WBC × % lymphocytes",
      "Total WBC − (% bands + % segs)"
    ],
    correct: 0,
    explain: "ANC = total WBC × (% bands + % segs), with total WBC in thousands and the percentages converted to a decimal."
  },
  {
    q: "When calculating ANC, the total WBC count should be entered as:",
    choices: ["A percentage", "Cells per mm3 exactly as reported", "The number in thousands", "The number in millions"],
    correct: 2,
    explain: "The total WBC count is used in thousands (e.g., a WBC of 8,000 cells/mm3 is entered as 8) when calculating ANC."
  },
  {
    q: "A patient has a WBC of 5,000 cells/mm3 with a differential of 2% bands and 48% segs. What is the ANC?",
    choices: ["1,500 cells/mm3", "2,500 cells/mm3", "5,000 cells/mm3", "250 cells/mm3"],
    correct: 1,
    explain: "ANC = 5 × (0.02 + 0.48) = 5 × 0.50 = 2,500 cells/mm3."
  },
  {
    q: "A patient has a WBC of 10,000 cells/mm3 with a differential of 5% bands and 60% segs. What is the ANC?",
    choices: ["6,500 cells/mm3", "5,000 cells/mm3", "10,000 cells/mm3", "650 cells/mm3"],
    correct: 0,
    explain: "ANC = 10 × (0.05 + 0.60) = 10 × 0.65 = 6,500 cells/mm3."
  },
  {
    q: "What is the normal reference range for ANC?",
    choices: ["500 – 4,000 cells/mm3", "1,500 – 8,000 cells/mm3", "4,000 – 10,000 cells/mm3", "140,000 – 400,000 cells/mm3"],
    correct: 1,
    explain: "The normal ANC range is 1,500 – 8,000 cells/mm3."
  },
  {
    q: "Neutrophilia (elevated ANC > 8,000 cells/mm3) is most commonly due to:",
    choices: ["Viral infection", "Infection (commonly bacterial) or noninfectious inflammation", "Chemotherapy", "Vitamin B12 deficiency"],
    correct: 1,
    explain: "Neutrophilia is typically caused by infection (commonly bacterial) or noninfectious inflammation."
  },
  {
    q: "Neutropenia (ANC < 1,500 cells/mm3) is used primarily in clinical practice to:",
    choices: ["Diagnose viral hepatitis", "Determine whether it is safe to give chemotherapy", "Diagnose iron deficiency anemia", "Monitor warfarin therapy"],
    correct: 1,
    explain: "ANC/neutropenia is used primarily to determine whether chemotherapy can be safely given based on infection risk."
  },
  {
    q: "An ANC of 1,200 cells/mm3 in a chemotherapy patient corresponds to which infection risk category?",
    choices: ["High risk", "Moderate risk", "Fairly low risk", "No risk"],
    correct: 2,
    explain: "An ANC between 1,000 and 1,500 cells/mm3 is classified as fairly low risk of infection."
  },
  {
    q: "An ANC of 700 cells/mm3 in a chemotherapy patient corresponds to which infection risk category?",
    choices: ["Fairly low risk", "Moderate risk", "High risk", "Normal, no risk"],
    correct: 1,
    explain: "An ANC between 500 and 1,000 cells/mm3 is classified as moderate risk of infection."
  },
  {
    q: "An ANC of 300 cells/mm3 in a chemotherapy patient corresponds to which infection risk category?",
    choices: ["Fairly low risk", "Moderate risk", "High risk", "Normal, no risk"],
    correct: 2,
    explain: "An ANC below 500 cells/mm3 is classified as high risk of infection."
  }
]);
