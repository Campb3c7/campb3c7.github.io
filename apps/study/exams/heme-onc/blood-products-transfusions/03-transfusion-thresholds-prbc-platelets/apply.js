addQuestions([
  {
    q: "A 74-year-old man with a history of coronary artery disease is admitted for community-acquired pneumonia. His Hgb is 8.3 g/dL, and he is otherwise stable without chest pain. Should he be transfused, and why?",
    choices: [
      "Yes, transfuse — his cardiovascular disease lowers his threshold to 10 g/dL and he is below it",
      "No, do not transfuse — with preexisting cardiovascular disease his threshold is ≤ 8 g/dL, and his Hgb of 8.3 is above that",
      "Yes, transfuse — all patients with any cardiovascular history should be kept above 10 g/dL",
      "No, transfusion is never indicated in pneumonia regardless of Hgb"
    ],
    correct: 1,
    explain: "Patients with preexisting cardiovascular disease have a transfusion threshold of ≤ 8 g/dL. His Hgb of 8.3 g/dL is above this threshold, so transfusion is not indicated based on this lab value alone (though clinical symptoms should still be considered)."
  },
  {
    q: "A 60-year-old woman presents with an NSTEMI. Her Hgb is 9.2 g/dL. Based on the ACS-specific threshold, should she receive a PRBC transfusion?",
    choices: [
      "No — her Hgb is above the general trigger of 7 g/dL",
      "Yes — patients with ACS/MI have a threshold of < 10 g/dL, and her Hgb of 9.2 falls below this",
      "No — ACS patients should never be transfused regardless of Hgb",
      "Yes — but only if her platelet count is also low"
    ],
    correct: 1,
    explain: "ACS/MI patients have a more liberal transfusion threshold of < 10 g/dL (rather than the general 7 g/dL trigger), given their reduced tolerance for anemia-related myocardial oxygen supply-demand mismatch. Her Hgb of 9.2 falls below this threshold."
  },
  {
    q: "A 35-year-old man arrives after a high-speed motorcycle collision with a distended abdomen, hypotension, and tachycardia. His initial Hgb is 13.5 g/dL (near normal). Should transfusion be withheld given this normal-appearing Hgb?",
    choices: [
      "Yes, withhold transfusion since his Hgb is normal",
      "No — severely hemorrhaging trauma patients should be transfused based on clinically estimated blood loss, since the Hgb drop lags behind the actual bleeding event and may not yet reflect ongoing hemorrhage",
      "Yes, but only after his Hgb definitively drops below 7 g/dL",
      "No, but only platelets should be given, not PRBCs"
    ],
    correct: 1,
    explain: "In acute severe hemorrhage, Hgb can appear falsely reassuring because equilibration hasn't occurred yet — the drop in Hgb happens after the bleeding event. Clinically estimated blood loss (hypotension, tachycardia, mechanism) should guide transfusion, not a single early Hgb value."
  },
  {
    q: "A 50-year-old woman with acute leukemia and fever of 101.5°F has a platelet count of 15,000/mcL with no active bleeding. Based on threshold guidance for fever/sepsis, should she receive a platelet transfusion?",
    choices: [
      "No — her count of 15,000 is above the 10,000 threshold for spontaneous bleeding prevention",
      "Yes — in the setting of fever/sepsis, the threshold rises to < 20,000, and her count of 15,000 falls below this",
      "No — platelets are never given prophylactically in fever",
      "Yes — but only if she is also actively bleeding"
    ],
    correct: 1,
    explain: "Fever or sepsis raises the platelet transfusion threshold to < 20,000 (from the baseline 10,000 threshold for bleeding prevention), since infection can increase bleeding risk and consume platelets. Her count of 15,000 falls below this adjusted threshold."
  },
  {
    q: "A 68-year-old man with thrombocytopenia (platelet count 45,000/mcL) is scheduled for an elective lumbar puncture. Should he receive platelets prior to the procedure?",
    choices: [
      "No — his count is above the 10,000 threshold",
      "Yes — invasive procedures like LP require a threshold of < 50,000, and his count of 45,000 falls below this",
      "No — LP has no platelet threshold requirement",
      "Yes — but only if he develops fever first"
    ],
    correct: 1,
    explain: "Preparation for invasive procedures such as LP or therapeutic endoscopy requires a platelet threshold of < 50,000. His count of 45,000 falls below this threshold, so platelet transfusion should be considered prior to the procedure."
  },
  {
    q: "A 45-year-old woman received 2 units of PRBCs 20 minutes ago for symptomatic anemia. Her Hgb was 6.5 g/dL prior to transfusion. When can her post-transfusion Hgb be appropriately checked, and what value would be expected if transfusion was effective?",
    choices: [
      "It should be checked in 24 hours; expect no change",
      "It can be checked now, at 15 minutes post-transfusion; expect an increase to approximately 8.5 g/dL (about 1 g/dL per unit)",
      "It should never be rechecked after PRBC transfusion",
      "It can be checked now; expect an increase to approximately 12.5 g/dL"
    ],
    correct: 1,
    explain: "Hgb can be checked as early as 15 minutes after PRBC transfusion completion. With each unit raising Hgb by approximately 1 g/dL, 2 units should raise her Hgb from 6.5 to approximately 8.5 g/dL."
  }
]);
