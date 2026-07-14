addQuestions([
  {
    q: "Approximately what percentage of the population is blood type B?",
    choices: ["45%", "40%", "11%", "4%"],
    correct: 2,
    explain: "Type B has a population frequency of approximately 11% (O is 45%, A is 40%, and AB is 4%)."
  },
  {
    q: "A Type B recipient can receive PRBCs from which donor blood type(s)?",
    choices: ["B and O only", "B and AB only", "All four types", "B only"],
    correct: 0,
    explain: "A Type B recipient has anti-A antibodies, so they can safely receive RBCs from Type B (matching antigen) or Type O (no antigens) donors, but not from A or AB donors."
  }
]);
