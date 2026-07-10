addQuestions([
  {
    q: "A new point-of-care glucose meter is tested against a lab reference standard. On five repeated measurements of the same blood sample, the meter gives values of 118, 119, 118, 120, and 119 mg/dL, but the true lab value is 95 mg/dL. This meter is best described as:",
    choices: ["Accurate but not precise", "Precise but not accurate", "Neither accurate nor precise", "Both accurate and precise"],
    correct: 1,
    explain: "The five readings cluster tightly together (high agreement with each other = precise) but are all far from the true value of 95 mg/dL (not accurate). A device can be precise without being accurate."
  },
  {
    q: "A 55-year-old man has a platelet count of 250,000/mm3 (within normal range) but has recurrent mucosal bleeding. Platelet aggregation studies reveal impaired platelet aggregation in response to ristocetin. This finding represents which type of abnormality?",
    choices: ["Neither — this is a sensitivity issue", "Both qualitative and quantitative", "A quantitative abnormality, since platelet number is being assessed", "A qualitative abnormality, since platelet function is being assessed"],
    correct: 3,
    explain: "The platelet count (amount) is normal, but the platelets are not functioning properly — this is a qualitative defect, consistent with something like von Willebrand disease, not thrombocytopenia."
  },
  {
    q: "Public health officials are designing a new test to screen the general population for early-stage tuberculosis before confirmatory testing. Which test characteristic should be maximized, and why?",
    choices: ["Specificity, to avoid treating anyone who does not have TB", "Accuracy, so the test matches the true prevalence", "Sensitivity, to avoid missing anyone who might have TB", "Precision, so repeat tests always agree"],
    correct: 2,
    explain: "Screening tests are designed to catch as many true cases as possible, even at the cost of some false positives, because missed cases (false negatives) are the bigger harm at this stage. High sensitivity minimizes false negatives. Confirmatory testing (higher specificity) follows to rule out false positives."
  },
  {
    q: "A rapid strep test has a sensitivity of 85% and specificity of 95%. A 10-year-old with a sore throat and exudative tonsils tests negative on the rapid strep test. What is the most appropriate next step, and why?",
    choices: ["Reassure the family — a negative sensitive test rules out disease", "Send a confirmatory throat culture, because an 85% sensitivity means false negatives are common enough to miss true cases", "Start empiric antibiotics regardless of the result", "Repeat the rapid strep test immediately for confirmation"],
    correct: 1,
    explain: "An 85% sensitivity is only moderately sensitive (not high enough to reliably rule out disease with a negative result). With a clinical picture still suggestive of strep, a negative rapid test in this setting warrants a backup throat culture to avoid missing a true case."
  },
  {
    q: "A hospital lab validates a new hemoglobin analyzer by running the same control sample 20 times. The results are tightly clustered but consistently 1.5 g/dL below the certified reference value. When the lab manager recalibrates the device so its average now matches the reference standard, which property was most directly improved?",
    choices: ["Qualitative performance", "Sensitivity", "Accuracy", "Specificity"],
    correct: 2,
    explain: "The device was already precise (tightly clustered results) but not accurate (systematically off from the true value). Recalibrating to match the reference standard improves accuracy, the nearness of measurements to the true value."
  }
]);
