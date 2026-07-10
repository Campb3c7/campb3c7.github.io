addQuestions([
  {
    q: "A 45-year-old woman with a history of heavy menstrual periods presents for a routine visit. Labs show a platelet count of 550,000 and microcytic anemia with a low ferritin, consistent with iron deficiency anemia. She has no headache, visual symptoms, or numbness. What is the most appropriate next step?",
    choices: ["Start low-dose aspirin and hospitalize for observation", "Immediate hematology consult and bone marrow biopsy", "Immediate platelet apheresis given the elevated count", "Treat with iron supplementation and recheck a CBC in approximately 8 weeks"],
    correct: 3,
    explain: "This is thrombocytosis in an expected clinical situation — she has an identified reactive cause (iron deficiency anemia from menorrhagia) and is asymptomatic. The correct approach is to treat the underlying condition (iron) and retest the CBC after resolution (around 8 weeks), not to pursue an invasive workup for a primary marrow disorder."
  },
  {
    q: "A 58-year-old man is found incidentally to have a platelet count of 620,000 on routine labs. He denies any recent infection, surgery, trauma, or symptoms of anemia, and has no known malignancy. He has no headache, visual changes, numbness, bleeding, or thrombotic symptoms. What is the most appropriate next step?",
    choices: ["Immediate bone marrow biopsy without any further labs", "Repeat the platelet count, obtain a peripheral smear, and check serum ferritin, CRP, and ESR to look for an occult reactive cause", "Immediately diagnose essential thrombocythemia and start cytoreductive therapy", "No further workup is needed since he is asymptomatic"],
    correct: 1,
    explain: "This is thrombocytosis in an unexpected situation — no reactive cause is apparent. The correct next step is a stepwise reactive workup: repeat platelet count, peripheral smear, and inflammatory/iron markers (ferritin, CRP, ESR) before jumping to marrow biopsy or a myeloproliferative diagnosis."
  },
  {
    q: "A 62-year-old woman has a platelet count of 900,000. Repeat testing confirms the elevation, the peripheral smear shows no abnormal cells, and ESR and CRP are both normal, making an occult inflammatory or reactive process unlikely. What is the most appropriate next step?",
    choices: ["Refer to hematology; a bone marrow biopsy is likely needed to evaluate for an autonomous (myeloproliferative) process", "Reassure her that thrombocytosis without symptoms never requires further workup", "Start iron supplementation empirically", "Discharge with no follow-up since the smear is normal"],
    correct: 0,
    explain: "When thrombocytosis is confirmed, the smear is unremarkable, and inflammatory markers make a reactive cause unlikely, autonomous thrombocytosis (e.g., essential thrombocythemia) becomes the leading concern. A hematology consult and likely bone marrow biopsy are the appropriate next steps."
  },
  {
    q: "A 70-year-old man with a platelet count of 950,000 (known essential thrombocythemia) presents with sudden right-sided weakness and slurred speech concerning for acute stroke. What is the most appropriate management approach?",
    choices: ["Hospitalize, treat the acute thrombosis per stroke protocol, and consult hematology to consider platelet apheresis given the count is above 800,000", "Start low-dose aspirin as monotherapy and observe as an outpatient", "Discharge home with outpatient hematology follow-up in 2 weeks", "No specific hematologic intervention is needed since stroke management is unrelated to platelet count"],
    correct: 0,
    explain: "Thrombosis (here presenting as stroke symptoms) related to thrombocytosis warrants hospitalization and treatment of the thrombotic event, plus a hematology consult to consider platelet apheresis specifically because his count exceeds the 800,000 threshold — this is more urgent than the vasomotor-symptom pathway (low-dose ASA) or the purely reactive/expected-situation pathway (treat underlying cause, outpatient recheck)."
  },
  {
    q: "A 55-year-old woman with a platelet count of 700,000 reports several weeks of intermittent, waxing-and-waning headaches, along with episodes of tingling in her fingers. She has no focal weakness, no active bleeding, and no evidence of acute thrombosis on exam. What is the most appropriate management?",
    choices: ["Immediate platelet apheresis since her count is elevated", "Discharge with no treatment since there is no bleeding or thrombosis", "Full-dose therapeutic anticoagulation with a DOAC", "Begin low-dose aspirin, hospitalize, and consult hematology"],
    correct: 3,
    explain: "Waxing-and-waning vasomotor symptoms (headache, tingling) associated with thrombocytosis are managed with low-dose aspirin, hospitalization, and a hematology consult — distinct from the apheresis threshold used for frank thrombosis and from the outpatient-only approach used for a clearly expected reactive cause."
  }
]);
