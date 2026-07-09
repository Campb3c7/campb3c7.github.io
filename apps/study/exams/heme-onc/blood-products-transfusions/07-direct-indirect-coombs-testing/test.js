addQuestions([
  {
    q: "The direct Coombs test detects:",
    choices: [
      "Free antibodies floating in the patient's plasma",
      "Antibodies and/or complement already bound to the surface of the patient's own RBCs",
      "Coagulation factor deficiencies",
      "Bacterial contamination of blood products"
    ],
    correct: 1,
    explain: "The direct Coombs test detects antibodies and/or complement already bound to antigens on the patient's own RBC surface."
  },
  {
    q: "How is the direct Coombs test performed?",
    choices: [
      "Coombs reagent (anti-human globulin) is added directly to a sample of the patient's RBCs",
      "The patient's plasma is mixed with donor test RBCs and Coombs reagent",
      "The patient's serum is cultured for bacteria",
      "The donor's RBCs are irradiated and examined"
    ],
    correct: 0,
    explain: "The direct Coombs test involves adding Coombs reagent directly to a sample of the patient's own RBCs."
  },
  {
    q: "When is the direct Coombs test typically performed?",
    choices: [
      "Only for prenatal screening",
      "When an acute transfusion reaction is suspected",
      "Only prior to elective surgery",
      "Only for platelet transfusions"
    ],
    correct: 1,
    explain: "The direct Coombs test is performed when an acute transfusion reaction is suspected, to detect if antibody/complement is already bound to the patient's RBCs."
  },
  {
    q: "The indirect Coombs test detects:",
    choices: [
      "Antibodies already bound to the patient's own RBCs",
      "Unexpected antibodies floating in the recipient's plasma that could react with donor RBCs",
      "Bone marrow plasma cell infiltration",
      "Bacterial contamination"
    ],
    correct: 1,
    explain: "The indirect Coombs test detects unexpected free antibodies in the recipient's plasma that could potentially react with donor RBCs."
  },
  {
    q: "How is the indirect Coombs test performed?",
    choices: [
      "Coombs reagent is added directly to the patient's own RBCs",
      "The patient's plasma is added to test RBCs (from the donor) plus anti-human globulin",
      "The donor's plasma is added to the patient's RBCs only",
      "Both tests use identical methodology"
    ],
    correct: 1,
    explain: "The indirect Coombs test adds the patient's plasma to donor test RBCs plus anti-human globulin (universal reagent)."
  },
  {
    q: "The indirect Coombs test is a key component of which pre-transfusion workflow?",
    choices: ["Type and screen initial ABO typing only", "Crossmatch, specifically for patients with a positive antibody screen", "Platelet count monitoring", "Coagulation factor assays"],
    correct: 1,
    explain: "The indirect Coombs test is used in crossmatch workup for patients with a positive antibody screen or a reaction on immediate spin crossmatch."
  },
  {
    q: "Besides transfusion crossmatch, what other clinical scenario uses the indirect Coombs technique?",
    choices: ["Diagnosing acute hemolytic transfusion reaction", "Prenatal screening for Rh antibodies in Rh-negative mothers", "Diagnosing ta-GVHD", "Diagnosing TRALI"],
    correct: 1,
    explain: "The indirect Coombs test technique is also used for prenatal screening of Rh antibodies in Rh-negative mothers."
  },
  {
    q: "Which test is more appropriate for confirming that a transfusion reaction is currently occurring, based on evidence already present on the patient's circulating RBCs?",
    choices: ["Indirect Coombs test", "Direct Coombs test", "Sudan Black stain", "Flow cytometry"],
    correct: 1,
    explain: "The direct Coombs test detects antibody/complement already bound to the patient's RBCs, making it the appropriate diagnostic test when a reaction is suspected to be actively occurring."
  },
  {
    q: "Which test result (positive) is defined by an agglutination reaction?",
    choices: ["Only the direct Coombs test", "Only the indirect Coombs test", "Both the direct and indirect Coombs tests", "Neither test uses agglutination"],
    correct: 2,
    explain: "Both direct and indirect Coombs tests use an agglutination reaction to indicate a positive result — the difference is what's being tested (the patient's own RBCs vs. patient plasma against donor RBCs)."
  },
  {
    q: "A key distinction between the two Coombs tests is their timing/purpose. Which best describes this distinction?",
    choices: [
      "Direct Coombs is predictive/screening (before a reaction); indirect Coombs is diagnostic (after a reaction)",
      "Direct Coombs is diagnostic (confirms a reaction already happening); indirect Coombs is predictive/screening (before transfusion, to prevent a reaction)",
      "Both tests serve identical predictive purposes",
      "Neither test has any timing significance"
    ],
    correct: 1,
    explain: "Direct Coombs confirms an existing/ongoing reaction (testing the patient's own RBCs for bound antibody), while indirect Coombs is a screening test performed before transfusion to predict compatibility."
  }
]);
