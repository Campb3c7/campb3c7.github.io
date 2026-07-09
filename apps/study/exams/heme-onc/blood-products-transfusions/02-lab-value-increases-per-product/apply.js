addQuestions([
  {
    q: "A 70-year-old man with a Hgb of 6.5 g/dL is transfused 2 units of PRBCs. What Hgb would you expect after transfusion, assuming no ongoing blood loss?",
    choices: ["6.5 g/dL (no change)", "~7.5 g/dL", "~8.5 g/dL", "~10.5 g/dL"],
    correct: 2,
    explain: "Each unit of PRBCs raises Hgb by approximately 1 g/dL, so 2 units should raise Hgb by approximately 2 g/dL, from 6.5 to approximately 8.5 g/dL."
  },
  {
    q: "A 55-year-old woman with a platelet count of 8,000/mcL receives 1 unit of platelets. A repeat count 1 hour later shows only 12,000/mcL, far below the expected 30,000-50,000/mcL rise. What does this poor response most likely suggest?",
    choices: [
      "This is a completely normal, expected response and no further evaluation is needed",
      "This suggests platelet refractoriness, and further evaluation for immune (HLA alloimmunization) or non-immune causes (sepsis, DIC, splenomegaly, certain medications) should be considered",
      "This confirms she has von Willebrand disease",
      "This confirms a hemolytic transfusion reaction has occurred"
    ],
    correct: 1,
    explain: "An inadequate rise in platelet count after transfusion (well below the expected 30,000-50,000/mcL per unit) suggests platelet refractoriness, which can be caused by immune mechanisms (HLA alloimmunization) or non-immune causes (sepsis, DIC, splenomegaly, certain medications)."
  },
  {
    q: "A 60-year-old man with severe liver disease and active bleeding has a coagulopathy requiring correction. The team plans to give FFP. How many units would typically be needed to meaningfully correct severe coagulation factor deficiencies, and by roughly what percentage would this raise his factor levels?",
    choices: [
      "1 unit; ~20%",
      "4 units; approximately 20%",
      "10 units; approximately 50%",
      "1 unit is always sufficient regardless of severity"
    ],
    correct: 1,
    explain: "Since each unit of FFP raises coagulation factors by only 3-5%, correcting severe deficiencies in an average adult typically requires about 4 units, raising factor levels by approximately 20% — important for setting realistic expectations and dosing FFP appropriately."
  },
  {
    q: "A trauma patient receives 4 units of PRBCs for a Hgb that was 5.0 g/dL. Fifteen minutes after the last unit, his Hgb is checked and found to be only 6.0 g/dL, far less than the expected rise of approximately 4 g/dL (1 g/dL per unit). Ongoing bleeding has been ruled out. What does this discrepancy most likely suggest?",
    choices: [
      "This is an entirely expected response with no further workup needed",
      "Something is preventing the expected rise — consider ongoing occult hemolysis/bleeding, dilution, or a transfusion reaction impairing the response, and investigate further",
      "The Hgb was checked too late to be meaningful",
      "PRBC transfusions never reliably raise Hgb, so no correlation should be expected"
    ],
    correct: 1,
    explain: "A rise well below the expected ~1 g/dL per unit (here, only 1 g/dL total after 4 units, rather than ~4 g/dL) despite ruled-out ongoing bleeding should prompt investigation for causes such as hemolysis (including a transfusion reaction), dilutional effects, or continued unrecognized blood loss."
  }
]);
