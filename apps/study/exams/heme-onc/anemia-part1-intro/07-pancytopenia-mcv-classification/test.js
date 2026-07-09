addQuestions([
  {
    q: "What should be done once anemia is found, regardless of how it was discovered?",
    choices: ["It can be ignored if the patient is asymptomatic", "It must be evaluated", "It should be re-checked in 1 year with no other action", "It only needs evaluation if severe"],
    correct: 1,
    explain: "No matter how it is discovered, anemia must be evaluated once it is found."
  },
  {
    q: "Why is it helpful to review a patient's prior bloodwork when anemia is found?",
    choices: [
      "To determine if the anemia is new or a chronic finding",
      "Prior bloodwork is never useful for anemia workup",
      "Only to check for billing purposes",
      "To determine the patient's blood type"
    ],
    correct: 0,
    explain: "Reviewing prior bloodwork helps determine if the anemia is new or a chronic finding, which affects the workup approach."
  },
  {
    q: "Pancytopenia refers to:",
    choices: [
      "Low RBC count only",
      "Low RBC, WBC, and platelet counts together",
      "High WBC count with normal RBC and platelets",
      "Low platelet count only"
    ],
    correct: 1,
    explain: "Pancytopenia refers to anemia accompanied by low WBC and platelet counts — all three cell lines affected."
  },
  {
    q: "What should be suspected when pancytopenia is present?",
    choices: ["Simple iron deficiency anemia", "A bone marrow process", "Dehydration", "Hyperthyroidism"],
    correct: 1,
    explain: "If pancytopenia (low WBC and platelets along with anemia) is present, a bone marrow process should be suspected."
  },
  {
    q: "What is the first step in determining the specific type of anemia?",
    choices: ["Reticulocyte count", "Mean Corpuscular Volume (MCV)", "Bone marrow biopsy", "SPEP/UPEP"],
    correct: 1,
    explain: "The MCV is the first step used to determine the specific type of anemia."
  },
  {
    q: "Does the MCV exclude microcytic or macrocytic cells that may be present in a blood sample?",
    choices: [
      "Yes, it excludes outlier cells",
      "No — MCV is an average of RBC sizes and does NOT exclude microcytic or macrocytic cells present in the sample",
      "It only measures the largest cells",
      "It only measures the smallest cells"
    ],
    correct: 1,
    explain: "MCV is an average of RBC sizes and does not exclude microcytic or macrocytic cells that may be present within the sample."
  },
  {
    q: "What MCV threshold defines microcytic anemia?",
    choices: ["< 85 fL (sometimes < 80 fL)", "80-100 fL", "> 100 fL", "> 120 fL"],
    correct: 0,
    explain: "Microcytic anemia is defined by small RBCs with MCV < 85 fL, sometimes cited as < 80 fL."
  },
  {
    q: "What MCV range defines normocytic anemia?",
    choices: ["< 80 fL", "80-100 fL", "100-120 fL", "> 120 fL"],
    correct: 1,
    explain: "Normocytic anemia is defined by a normal MCV, 80-100 fL."
  },
  {
    q: "What MCV threshold defines macrocytic anemia?",
    choices: ["< 80 fL", "80-100 fL", "> 100 fL", "> 200 fL"],
    correct: 2,
    explain: "Macrocytic anemia is defined by large RBCs with MCV > 100 fL."
  },
  {
    q: "Why is RDW needed in addition to MCV when classifying anemia?",
    choices: [
      "RDW is not actually needed; MCV alone is always sufficient",
      "Since MCV is only an average, RDW estimates the true population size distribution to confirm whether the MCV category accurately reflects the cell population",
      "RDW replaces the need for a CBC entirely",
      "RDW only matters in macrocytic anemia"
    ],
    correct: 1,
    explain: "RDW estimates the population size distribution, helping confirm (or call into question) whether the MCV-based category truly reflects a single, uniform anemia."
  },
  {
    q: "What does a WIDE RDW suggest?",
    choices: [
      "A uniform, restricted cell size range",
      "Both very small and very large cells (anisocytosis), which may average to a near-normal MCV, suggesting more than one etiology of anemia",
      "The patient has no anemia",
      "The patient definitely has iron deficiency alone"
    ],
    correct: 1,
    explain: "A wide RDW suggests anisocytosis — both very small and very large cells — which may average out to a near-normal MCV, and suggests more than one etiology of anemia may be present."
  },
  {
    q: "What does a NARROW RDW suggest?",
    choices: [
      "Multiple concurrent anemia etiologies",
      "A restricted, uniform cell size range, more likely attributable to just one etiology of anemia",
      "The patient has polycythemia",
      "The MCV result is inaccurate"
    ],
    correct: 1,
    explain: "A narrow RDW suggests a restricted cell size range, more likely representing a single etiology of anemia."
  },
  {
    q: "A patient has a 'normocytic' MCV but a WIDE RDW. What should this prompt the clinician to consider?",
    choices: [
      "This confirms a single, straightforward normocytic anemia with no further workup needed",
      "This should raise suspicion that two opposing processes (e.g., a microcytic and a macrocytic process occurring simultaneously) are averaging each other out, rather than one true normocytic etiology",
      "This is a lab error and should be repeated only",
      "This confirms polycythemia vera"
    ],
    correct: 1,
    explain: "A normocytic MCV with a wide RDW should raise suspicion for combined/opposing processes (e.g., concurrent iron deficiency and B12 deficiency) averaging to a falsely reassuring 'normal' MCV, rather than a single straightforward etiology."
  }
]);
