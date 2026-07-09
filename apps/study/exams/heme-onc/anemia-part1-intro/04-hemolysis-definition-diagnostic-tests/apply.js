addQuestions([
  {
    q: "A 45-year-old woman presents with fatigue and jaundice. Labs show unconjugated bilirubin 3.2 mg/dL (elevated), LDH 450 U/L (elevated), and haptoglobin < 10 mg/dL (low). What do these findings confirm, and what test should be ordered next to determine the mechanism?",
    choices: [
      "These findings confirm liver disease; order an abdominal ultrasound next",
      "These findings confirm the hemolysis triad; order a direct antiglobulin test (DAT/Coombs) to determine whether this is immune-mediated hemolysis",
      "These findings are inconclusive and require no further workup",
      "These findings confirm iron deficiency anemia; order iron studies next"
    ],
    correct: 1,
    explain: "Elevated unconjugated bilirubin + elevated LDH + low haptoglobin is the classic hemolysis triad, confirming hemolysis. The next step is a DAT (Coombs test) to determine whether the hemolysis is immune-mediated (positive) or has a non-immune cause (negative)."
  },
  {
    q: "A patient with confirmed hemolysis (via the lab triad) has a positive direct antiglobulin test. What does this result specifically indicate about the mechanism of her hemolysis?",
    choices: [
      "This confirms a mechanical cause of hemolysis, like a prosthetic heart valve",
      "This confirms an immune-mediated process — the patient is producing an antibody against her own RBCs, consistent with autoimmune hemolytic anemia",
      "This result is unrelated to the mechanism of hemolysis",
      "This confirms she has G6PD deficiency"
    ],
    correct: 1,
    explain: "A positive DAT indicates the patient is producing an antibody against her own RBC antigens — confirming an immune-mediated (autoimmune) mechanism of hemolysis, rather than a mechanical or enzymatic cause."
  },
  {
    q: "A patient with a mechanical aortic valve develops hemolysis confirmed by the lab triad. The DAT returns negative. How should this negative result be interpreted given his clinical context?",
    choices: [
      "The negative DAT means he does not actually have hemolysis",
      "The negative DAT is expected and consistent with a non-immune (mechanical) mechanism of hemolysis from shear stress across the prosthetic valve, rather than an antibody-mediated process",
      "The DAT result is unrelated to hemolysis mechanism and should be ignored",
      "A negative DAT always indicates iron deficiency"
    ],
    correct: 1,
    explain: "A negative DAT in a patient with a mechanical valve is consistent with a non-immune, mechanical mechanism of hemolysis (shear stress fragmenting RBCs as they pass across the prosthetic valve) — the DAT appropriately points away from an antibody-mediated process in this clinical context."
  },
  {
    q: "A patient has an elevated unconjugated bilirubin but normal LDH and normal haptoglobin. A colleague suggests ordering a DAT to look for immune-mediated hemolysis. What is the issue with this plan?",
    choices: [
      "There is no issue; DAT should always be ordered for any bilirubin elevation",
      "The full hemolysis triad has not been met (LDH and haptoglobin are normal), so hemolysis has not yet been confirmed — ordering a DAT at this point is premature, and a liver cause for the isolated bilirubin elevation should be considered first",
      "DAT is only used for anemia workup, never for bilirubin abnormalities",
      "This patient definitely has hemolysis and the DAT will confirm the mechanism"
    ],
    correct: 1,
    explain: "Since the hemolysis triad requires all three findings (elevated unconjugated bilirubin AND elevated LDH AND low haptoglobin), and only bilirubin is abnormal here, hemolysis has not been confirmed. It would be more appropriate to first investigate a liver cause for the isolated unconjugated hyperbilirubinemia before pursuing a DAT for hemolysis."
  }
]);
