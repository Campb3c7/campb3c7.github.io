addQuestions([
  {
    q: "A 70-year-old woman with ESRD on hemodialysis develops non-valvular atrial fibrillation and needs anticoagulation for stroke prevention. Her nephrologist and cardiologist are discussing DOAC options. Which factor Xa inhibitor is most appropriate, and why?",
    choices: [
      "Apixaban — it is the DOAC of choice in ESRD, unlike rivaroxaban and edoxaban, which are contraindicated in severe renal impairment (GFR <30, or CrCl <15 for edoxaban)",
      "Rivaroxaban — it is preferred in ESRD due to its once-daily dosing",
      "Edoxaban — it is specifically designed for use in dialysis patients",
      "Any of the three oral factor Xa inhibitors would be equally appropriate in ESRD"
    ],
    correct: 0,
    explain: "Apixaban is specifically the DOAC of choice in ESRD, distinguishing it from rivaroxaban (contraindicated at GFR <30) and edoxaban (contraindicated at CrCl <15) — both of which have hard renal cutoffs that would exclude their use in this ESRD patient."
  },
  {
    q: "A 65-year-old man with excellent renal function (CrCl 105 mL/min) and a new diagnosis of non-valvular AFib is being considered for edoxaban. What issue does his renal function raise regarding this specific drug choice?",
    choices: [
      "Edoxaban cannot be used for CrCl >95 — his supra-normal renal clearance is actually a contraindication for this specific drug, unlike the other DOACs, so an alternative agent should be selected",
      "His excellent renal function makes edoxaban an ideal, low-risk choice with no dosing concerns",
      "His renal function is irrelevant to edoxaban dosing, which is fixed regardless of CrCl",
      "Edoxaban should be dosed at the reduced 30 mg dose given his high CrCl"
    ],
    correct: 0,
    explain: "Edoxaban has a unique 'too healthy or too diseased' renal rule — it cannot be used for CrCl greater than 95, in addition to being contraindicated for CrCl less than 15. This patient's CrCl of 105 exceeds the upper threshold, making edoxaban an inappropriate choice despite his otherwise excellent renal function; an alternative DOAC (e.g., apixaban or rivaroxaban, assuming no other contraindications) should be considered instead."
  },
  {
    q: "A 45-year-old woman develops heparin-induced thrombocytopenia (HIT) while on unfractionated heparin for VTE treatment. The plan is to eventually transition her to long-term warfarin, but an interim anticoagulant is needed that won't cross-react with her heparin-dependent antibodies. What is an appropriate niche choice, and why does it work in this specific scenario?",
    choices: [
      "Fondaparinux — its niche use is bridging a patient to warfarin in HIT, since it does not cross-react with the heparin-dependent antibodies driving the thrombocytopenia",
      "Unfractionated heparin at a lower dose — it remains appropriate despite the HIT diagnosis",
      "Enoxaparin — since it is a different heparin formulation, it will not cross-react with her antibodies",
      "Any anticoagulant is appropriate in HIT with no special selection considerations"
    ],
    correct: 0,
    explain: "Fondaparinux's specific niche use is bridging patients to warfarin in the setting of HIT, precisely because it does not cross-react with the heparin-dependent antibodies responsible for HIT — unlike enoxaparin (still a heparin derivative, with potential cross-reactivity) or continuing unfractionated heparin itself (which would perpetuate the HIT process)."
  },
  {
    q: "A 58-year-old man weighing 55 kg with a serum creatinine of 1.6 mg/dL and age 82 is being started on apixaban for non-valvular AFib. What dose should be used, and why?",
    choices: [
      "2.5 mg twice daily — he meets 3 of the dose-reduction criteria (age ≥80, weight ≤60 kg, and creatinine ≥1.5 mg/dL), well above the threshold of 2 or more criteria required for dose reduction",
      "5 mg twice daily — the standard dose, since dose reduction only applies if all 3 criteria plus additional factors are present",
      "10 mg twice daily — a loading dose is required given his advanced age",
      "Apixaban is contraindicated entirely given his combination of age, weight, and renal function"
    ],
    correct: 0,
    explain: "This patient meets all 3 dose-reduction criteria for apixaban in AFib — age ≥80 (82), body weight ≤60 kg (55 kg), and serum creatinine ≥1.5 mg/dL (1.6) — far exceeding the threshold of 2 or more criteria required to reduce the dose to 2.5 mg twice daily. Using the standard 5 mg twice daily dose in this frail, renally-impaired, low-weight, elderly patient would risk excessive drug exposure and bleeding."
  }
]);
