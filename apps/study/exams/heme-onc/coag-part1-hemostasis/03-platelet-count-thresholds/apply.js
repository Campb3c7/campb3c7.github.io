addQuestions([
  {
    q: "A patient with a platelet count of 65,000/µL is scheduled for a central venous catheter placement. The interventionalist asks whether this count is adequate. What is the correct assessment?",
    choices: [
      "Yes — the threshold for central venous line insertion/invasive procedures is >50,000, and this patient's count of 65,000 exceeds that threshold",
      "No — the threshold for any invasive procedure is >100,000, so this count is inadequate",
      "No — the threshold for line insertion is >80,000, so this count is inadequate",
      "The platelet count is irrelevant to line insertion risk"
    ],
    correct: 0,
    explain: "The desired platelet count for central venous line insertion or other invasive procedures is greater than 50,000 — this patient's count of 65,000 meets that threshold and is adequate for the planned procedure."
  },
  {
    q: "A patient with a platelet count of 75,000/µL is being considered for major abdominal surgery. The surgical team asks if this count is sufficient. What is the most accurate response, and what threshold applies?",
    choices: [
      "No — major surgery or CNS procedures require a platelet count >100,000, and this patient's count of 75,000 falls short; platelet transfusion or count correction should be considered before proceeding",
      "Yes — 75,000 exceeds the >50,000 threshold, which is sufficient for major surgery",
      "Yes — major surgery only requires >10,000, the baseline threshold for spontaneous bleeding prevention",
      "The platelet count threshold for major surgery is identical to that for minor surgery"
    ],
    correct: 0,
    explain: "Major surgery requires the highest platelet threshold, greater than 100,000 — a count of 75,000 falls short of this requirement (though it would be adequate for minor surgery, which requires >80,000, or invasive procedures, which require >50,000). Given the higher bleeding risk and consequences of major surgery, the count should be corrected before proceeding."
  },
  {
    q: "A hospitalized patient with sepsis has a platelet count of 15,000/µL, trending down over the past 24 hours, with no active bleeding. The team is deciding whether to proceed with starting a prophylactic anticoagulant for VTE prevention. What should guide this decision regarding platelet count?",
    choices: [
      "The threshold for administering an anticoagulant is >50,000 — this patient's count of 15,000 is well below that threshold, and starting anticoagulation should be deferred or reconsidered given the bleeding risk, independent of the separate >20,000 threshold that applies to preventing spontaneous bleeding in sepsis specifically",
      "The threshold for anticoagulant administration is >10,000, so this count is adequate to proceed",
      "Platelet count has no bearing on the decision to start anticoagulation",
      "The sepsis-specific threshold of >20,000 is the only relevant consideration, and since her count is close to that, anticoagulation can proceed"
    ],
    correct: 0,
    explain: "Administration of an anticoagulant or ASA requires a platelet count greater than 50,000 — a distinct and higher threshold than the sepsis-specific spontaneous-bleeding-prevention threshold of >20,000. This patient's count of 15,000 is below both thresholds, but specifically fails the >50,000 bar required before starting an anticoagulant, so this should be deferred or carefully reconsidered given her active thrombocytopenia and bleeding risk."
  }
]);
