addQuestions([
  {
    q: "For both hemoglobin and platelets, what pattern do the panic value thresholds follow?",
    choices: ["Low value = clot risk; high value = bleeding risk", "Both low and high values indicate infection risk", "Low value = bleeding/transfusion risk; high value = clot risk", "Panic values only apply to the high end for these labs"],
    correct: 2,
    explain: "Hemoglobin and platelets share the same directional logic: a critically low value raises bleeding/transfusion risk, while a critically high value raises thrombosis risk."
  },
  {
    q: "Unlike hemoglobin and platelets, both a critically low AND a critically high total WBC panic value point toward which underlying concern?",
    choices: ["Bleeding versus clotting risk", "Electrolyte imbalance", "Infection or malignancy", "Hyperviscosity syndrome"],
    correct: 2,
    explain: "WBC is the outlier among the three panic values — a critically low WBC signals risk of fatal infection, while a critically high WBC signals massive infection or malignancy (e.g., leukemia), rather than following a bleeding-vs-clotting axis."
  }
]);
