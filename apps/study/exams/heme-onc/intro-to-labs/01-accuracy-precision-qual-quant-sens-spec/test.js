addQuestions([
  {
    q: "Reference ranges are based on data collected from what population?",
    choices: ["Hospitalized patients", "Healthy individuals", "Patients with the disease of interest", "Elderly patients only"],
    correct: 1,
    explain: "Reference ranges come from data on healthy individuals and provide a standard for identifying results that indicate disease."
  },
  {
    q: "Reference ranges vary with which patient factors?",
    choices: ["Age, gender, and race", "Only age", "Only gender", "Insurance status"],
    correct: 0,
    explain: "Reference ranges vary with age, gender, and race, so the appropriate range must always be checked."
  },
  {
    q: "A measuring device that consistently gives results very close to the known, true value is described as:",
    choices: ["Precise", "Accurate", "Sensitive", "Specific"],
    correct: 1,
    explain: "Accuracy is the nearness of a measurement to the standard or true value."
  },
  {
    q: "Precision refers to:",
    choices: [
      "Nearness of a measurement to the true value",
      "The degree to which several measurements agree with each other",
      "The ability to detect all true positives",
      "The ability to exclude false positives"
    ],
    correct: 1,
    explain: "Precision is the degree to which repeated measurements provide answers very close to each other, regardless of whether they are close to the true value."
  },
  {
    q: "A qualitative test evaluates:",
    choices: ["The amount of a substance", "Whether something is functioning properly", "The true value of a measurement", "False positive rate"],
    correct: 1,
    explain: "Qualitative tests evaluate quality/function — for example, von Willebrand's disease reflects abnormal platelet function, not platelet number."
  },
  {
    q: "Thrombocytopenia is best classified as which type of lab finding?",
    choices: ["Qualitative", "Quantitative", "Sensitivity-based", "Specificity-based"],
    correct: 1,
    explain: "Thrombocytopenia is a quantitative finding — it reflects the amount (count) of platelets, which is low."
  },
  {
    q: "Sensitivity is calculated as:",
    choices: [
      "TP / (TP + FN)",
      "TN / (TN + FP)",
      "TP / (TP + FP)",
      "TN / (TN + FN)"
    ],
    correct: 0,
    explain: "Sensitivity = true positives / (true positives + false negatives) — how well a test catches everyone who truly has the disease."
  },
  {
    q: "Specificity is calculated as:",
    choices: [
      "TP / (TP + FN)",
      "TN / (TN + FP)",
      "TP / (TP + FP)",
      "FN / (FN + TP)"
    ],
    correct: 1,
    explain: "Specificity = true negatives / (true negatives + false positives) — how well a test excludes everyone who does not have the disease."
  },
  {
    q: "A test with high sensitivity has:",
    choices: ["A high true-negative rate", "A high true-positive rate (few false negatives)", "A high false-positive rate", "No clinical value"],
    correct: 1,
    explain: "High sensitivity means a high true-positive rate — the test rarely misses disease (few false negatives)."
  },
  {
    q: "A test with high specificity has:",
    choices: ["A high true-positive rate", "A high true-negative rate (few false positives)", "A high false-negative rate", "No clinical value"],
    correct: 1,
    explain: "High specificity means a high true-negative rate — the test rarely mislabels healthy people as diseased (few false positives)."
  },
  {
    q: "For a screening test, which property is generally prioritized?",
    choices: ["Higher specificity", "Higher sensitivity", "Higher precision only", "Lower cost only"],
    correct: 1,
    explain: "Screening tests prioritize high sensitivity so that true cases are not missed (fewer false negatives)."
  },
  {
    q: "For a confirmatory test, which property is generally prioritized?",
    choices: ["Higher sensitivity", "Higher specificity", "Lower accuracy", "Higher false-positive rate"],
    correct: 1,
    explain: "Confirmatory tests prioritize high specificity so that disease-free individuals are not falsely diagnosed (fewer false positives)."
  }
]);
