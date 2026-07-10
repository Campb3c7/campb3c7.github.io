addQuestions([
  {
    q: "An 82-year-old woman with a history of CHF receives 2 units of PRBCs rapidly for symptomatic anemia. Six hours later she develops dyspnea, hypertension (168/95), JVD, and an S3 gallop. Chest X-ray shows pulmonary edema and cardiomegaly. What is the most likely diagnosis and immediate treatment?",
    choices: ["TACO; treat with diuretics (e.g., furosemide 20-40 mg IV) after stopping the transfusion", "TRALI; treat with IV fluids and vasopressors", "AHTR; treat with normal saline at 100-200 mL/hr", "Anaphylaxis; treat with epinephrine"],
    correct: 0,
    explain: "Elderly patient with CHF (risk factor), hypertension, JVD, S3, and CXR showing pulmonary edema with cardiomegaly within 12 hours of transfusion is classic for TACO. Treatment includes stopping the transfusion and diuretic therapy."
  },
  {
    q: "A 40-year-old woman with septic shock on mechanical ventilation receives a unit of FFP. Ninety minutes later, she develops worsening hypoxemia (O2 sat 84% on FiO2 0.6) and new hypotension. Chest X-ray shows bilateral diffuse patchy infiltrates. What is the most likely diagnosis, and why would diuretics be an inappropriate treatment choice?",
    choices: ["TACO; diuretics are first-line and would help", "TRALI; diuretics would not effectively treat this noncardiogenic process and could worsen her existing hypotension", "FNHTR; diuretics are not indicated but also not harmful", "AHTR; diuretics would treat the underlying hemolysis"],
    correct: 1,
    explain: "This presentation (rapid hypoxemia and hypotension within 1-2 hours of plasma transfusion in a septic, mechanically ventilated patient — both TRALI risk factors — with bilateral infiltrates) is classic for TRALI. Since TRALI is a noncardiogenic capillary leak process, diuretics won't help and may worsen her hypotension, unlike TACO where diuretics are the mainstay."
  },
  {
    q: "A clinician is trying to distinguish TACO from TRALI in a patient with acute hypoxic respiratory distress after transfusion. Which combination of findings would most strongly support TACO over TRALI?",
    choices: ["Hypertension, elevated BNP, JVD, and S3 gallop", "Hypotension, normal BNP, and onset within 1-2 hours of transfusion start", "History of septic shock and mechanical ventilation", "Bilateral diffuse infiltrates with no cardiac exam findings"],
    correct: 0,
    explain: "Hypertension, elevated BNP, JVD, and S3 gallop are all findings that point toward TACO (a cardiogenic, volume-overload process), in contrast to TRALI's typical hypotension and noncardiogenic mechanism."
  },
  {
    q: "A 75-year-old man with ESRD on hemodialysis requires 3 units of PRBCs for a Hgb of 6.2 g/dL. What is the most appropriate transfusion strategy to minimize his risk of TACO, given his renal disease risk factor?",
    choices: ["Avoid transfusion entirely regardless of symptoms", "Transfuse one unit at a reduced rate and assess his response before giving additional units, considering prophylactic diuresis given his high-risk status", "Transfuse all 3 units simultaneously as quickly as possible to correct anemia rapidly", "Give all 3 units with no monitoring since dialysis will remove excess volume"],
    correct: 1,
    explain: "In high-risk patients (here, ESRD/hemodialysis, a recognized TACO risk factor), TACO prevention includes transfusing one unit and assessing response before giving additional units, reducing transfusion rate, and considering prophylactic diuresis — rather than rapid multi-unit transfusion."
  },
  {
    q: "A patient develops respiratory distress 3 hours into a plasma transfusion. Chest X-ray shows bilateral diffuse patchy infiltrates and hypoxemia with O2 sat 87% on room air. However, the patient also has active pneumonia diagnosed 2 days ago. How should this case be classified?",
    choices: ["Possible TRALI, since the patient has an alternative risk factor for ARDS (pneumonia) that could also explain the findings", "Definitive TRALI, since all the criteria for hypoxemia and imaging are met", "This cannot be a transfusion reaction since the patient has a preexisting lung infection", "TACO, since any pulmonary edema after transfusion is TACO by definition"],
    correct: 0,
    explain: "When a patient has an alternative risk factor for ARDS (here, active pneumonia) in addition to meeting hypoxemia and imaging criteria within the transfusion window, the diagnosis is classified as 'Possible TRALI' rather than definitive TRALI, since the alternative cause cannot be fully excluded."
  }
]);
