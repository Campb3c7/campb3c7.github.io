addQuestions([
  {
    q: "A 30-year-old woman with acute heavy vaginal bleeding has a Hgb of 7 g/dL and a corrected reticulocyte count of 3.5%. How should this reticulocyte finding be interpreted in the context of her presentation?",
    choices: [
      "This indicates a bone marrow problem requiring biopsy",
      "This corrected retic count > 2% indicates appropriate bone marrow proliferation, consistent with her acute blood loss — the marrow is responding correctly to compensate for the bleeding",
      "This indicates B12 deficiency",
      "This is an inappropriately low response given her severe anemia"
    ],
    correct: 1,
    explain: "A corrected reticulocyte count > 2% indicates appropriate bone marrow proliferation, fitting with acute blood loss anemia (from her heavy vaginal bleeding) — the marrow is appropriately ramping up production to compensate."
  },
  {
    q: "A 65-year-old man with fatigue has a Hgb of 8 g/dL and a corrected reticulocyte count of 0.8%. What does this finding suggest, and what should the next steps in workup focus on?",
    choices: [
      "This indicates hemolysis; order a DAT",
      "This corrected retic count < 2% indicates hypoproliferation — an inadequate marrow response — suggesting either an underlying bone marrow problem or a nutrient deficiency (iron, B12, folate); workup should focus on these areas rather than assuming ongoing blood loss or hemolysis",
      "This indicates acute blood loss requiring transfusion",
      "This is a normal finding requiring no further evaluation"
    ],
    correct: 1,
    explain: "A corrected retic count < 2% indicates hypoproliferation, pointing away from hemolysis or acute blood loss (which would show an elevated retic response) and toward either a primary bone marrow problem or a nutrient deficiency limiting erythropoiesis — the workup should focus on iron studies, B12/folate, and consideration of bone marrow evaluation if nutrients are normal."
  },
  {
    q: "A patient has a raw (uncorrected) reticulocyte count of 4%, which seems elevated. However, her Hct is severely low at 15% (normal ~40%). Why is it important to calculate the corrected reticulocyte count rather than relying on the raw 4% value?",
    choices: [
      "The raw value is always sufficient and correction is unnecessary",
      "Because the raw reticulocyte percentage depends on the degree of anemia, a severely low Hct like hers requires a markedly elevated raw retic count just to represent a truly adequate marrow response — the correction accounts for this, and her true corrected value may actually reveal inadequate compensation despite the seemingly high raw number",
      "Correction only matters for mild anemia, not severe anemia",
      "The raw retic count and corrected retic count are always identical"
    ],
    correct: 1,
    explain: "With a severely low Hct, a raw retic percentage that looks 'elevated' may actually represent an inadequate response once corrected for the degree of anemia — the correction formula (% retics × [patient Hct/normal Hct]) accounts for this, since severe anemia requires a proportionally larger raw retic percentage just to represent adequate marrow compensation. Calculating this patient's example: 4% × (15/40) = 1.5%, which is actually below the 2% threshold, indicating hypoproliferation despite the seemingly reassuring raw number."
  },
  {
    q: "A hematology fellow explains that a corrected reticulocyte count helps distinguish two broad categories of anemia. A student asks for a simple way to remember the distinction. What is the best summary?",
    choices: [
      "High corrected retic = marrow is responding appropriately to a peripheral problem (hemolysis/blood loss); low corrected retic = the problem lies with the marrow itself or its nutrient supply",
      "High corrected retic always means bone marrow failure",
      "Low corrected retic always means active hemolysis",
      "The corrected retic count cannot distinguish between any anemia categories"
    ],
    correct: 0,
    explain: "This captures the key conceptual distinction: an elevated corrected retic count reflects the marrow appropriately compensating for a peripheral problem (cells being destroyed or lost), while a low corrected retic count reflects the marrow itself failing to respond adequately — either due to an intrinsic marrow problem or a lack of necessary nutrients."
  }
]);
