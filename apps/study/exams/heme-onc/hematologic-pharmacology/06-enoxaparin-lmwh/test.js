addQuestions([
  {
    q: "What is the molecular weight range and mean for unfractionated heparin components?",
    choices: ["4,000-30,000 daltons, mean ~16,000 daltons", "2,000-8,000 daltons, mean ~4,500 daltons", "500-1,000 daltons, mean ~750 daltons", "50,000-100,000 daltons, mean ~75,000 daltons"],
    correct: 0,
    explain: "Unfractionated heparin consists of components with molecular weights ranging from 4,000 to 30,000 daltons, with a mean of 16,000 daltons."
  },
  {
    q: "What is the average molecular weight and range for LMWH?",
    choices: ["Average ~4,500 daltons, range 2,000-8,000 daltons", "Average ~16,000 daltons, range 4,000-30,000 daltons", "Average ~500 daltons, range 100-1,000 daltons", "Average ~50,000 daltons, range 30,000-70,000 daltons"],
    correct: 0,
    explain: "LMWH has an average molecular weight of 4,500 daltons, with a narrower range of 2,000-8,000 daltons."
  },
  {
    q: "What is the mechanism of action of enoxaparin (LMWH)?",
    choices: [
      "Enhances the action of antithrombin and inhibits factor Xa",
      "Directly inhibits thrombin without involving antithrombin",
      "Interferes with hepatic synthesis of vitamin K-dependent clotting factors",
      "Irreversibly blocks the P2Y12 receptor"
    ],
    correct: 0,
    explain: "LMWH (enoxaparin) enhances the action of antithrombin and inhibits factor Xa."
  },
  {
    q: "How does LMWH's effect on aPTT and factor Xa inhibition compare to unfractionated heparin?",
    choices: [
      "LMWH has a smaller effect on aPTT and more strongly inhibits factor Xa than UFH",
      "LMWH has a larger effect on aPTT and less strongly inhibits factor Xa than UFH",
      "LMWH and UFH have identical effects on aPTT and factor Xa inhibition",
      "LMWH has no effect on factor Xa, unlike UFH"
    ],
    correct: 0,
    explain: "LMWHs have a smaller effect on the aPTT and more strongly inhibit factor Xa than UFH, which is why anti-Xa levels (rather than aPTT) are used to monitor LMWH when needed."
  },
  {
    q: "What is the preferred therapeutic dosing regimen for enoxaparin?",
    choices: ["1 mg/kg twice daily (preferred), or 1.5 mg/kg once daily SQ", "40 mg SQ daily", "150 mg PO twice daily", "5,000 units SQ every 8 hours"],
    correct: 0,
    explain: "The preferred therapeutic dosing for enoxaparin is 1 mg/kg twice daily, with 1.5 mg/kg once daily SQ as an alternative."
  },
  {
    q: "What is the standard prophylactic dose of enoxaparin, and how is it adjusted for renal impairment?",
    choices: ["40 mg SQ daily; adjusted to 30 mg if GFR is 15-30 mL/min", "1 mg/kg twice daily; no adjustment needed for renal impairment", "5,000 units SQ every 8 hours; adjusted to 2,500 units for renal impairment", "20 mg SQ daily; adjusted to 40 mg for renal impairment"],
    correct: 0,
    explain: "The standard prophylactic dose of enoxaparin is 40 mg SQ daily, adjusted to 30 mg if the GFR is between 15-30 mL/min."
  },
  {
    q: "What are the indications for enoxaparin?",
    choices: [
      "VTE prevention/treatment, new-onset AFib/flutter (prevention of embolic phenomena), and ACS/NSTEMI (therapeutic dose)",
      "Only mechanical valve prophylaxis",
      "Only stroke prevention",
      "Only chemotherapy-associated anemia"
    ],
    correct: 0,
    explain: "Enoxaparin is indicated for VTE (prevention and treatment), new-onset atrial fibrillation or flutter (therapeutic dose), and acute coronary syndromes/NSTEMI (therapeutic dose)."
  },
  {
    q: "How does the risk of thrombocytopenia with enoxaparin compare to unfractionated heparin?",
    choices: ["Thrombocytopenia occurs to a lesser extent with enoxaparin than with unfractionated heparin", "Thrombocytopenia occurs to a greater extent with enoxaparin than with unfractionated heparin", "Thrombocytopenia risk is identical between the two", "Enoxaparin never causes thrombocytopenia, while UFH always does"],
    correct: 0,
    explain: "Thrombocytopenia occurs with enoxaparin, but to a lesser extent than with unfractionated heparin."
  },
  {
    q: "In what setting should enoxaparin NOT be used at THERAPEUTIC doses?",
    choices: ["Late-stage CKD IV or V", "Mild CKD stage II", "Normal renal function", "Any stage of liver disease"],
    correct: 0,
    explain: "Enoxaparin should not be used at therapeutic doses in late-stage CKD IV or V."
  },
  {
    q: "What is the guidance for enoxaparin prophylactic dosing in CKD stage V (ESRD)?",
    choices: [
      "Prophylactic dosing should not be used at all in CKD stage V (ESRD); the dose should be adjusted for GFR <30 but not used unmodified at that stage",
      "Prophylactic dosing requires no adjustment in ESRD",
      "Prophylactic dosing should be doubled in ESRD",
      "Enoxaparin has no renal-related dosing precautions at any CKD stage"
    ],
    correct: 0,
    explain: "The prophylactic dose should be adjusted for GFR less than 30, and should NOT be used (unmodified) at the standard prophylactic dose in CKD stage V (ESRD)."
  },
  {
    q: "What is dalteparin, and how do its indications/precautions/ADRs compare to enoxaparin?",
    choices: ["A LMWH with indications, precautions, and ADRs the same as enoxaparin", "A direct thrombin inhibitor with a distinct ADR profile from enoxaparin", "A factor Xa inhibitor unrelated to the heparin class", "A vitamin K antagonist similar to warfarin"],
    correct: 0,
    explain: "Dalteparin is another LMWH; its indications, precautions, and ADRs are the same as enoxaparin."
  },
  {
    q: "Why do most clinicians preferentially use enoxaparin over dalteparin?",
    choices: [
      "Dalteparin dosages vary substantially with indication, making enoxaparin's more standardized dosing preferable",
      "Dalteparin is far more expensive than enoxaparin in all settings",
      "Dalteparin has significantly more severe ADRs than enoxaparin",
      "Dalteparin is not FDA-approved for any indication"
    ],
    correct: 0,
    explain: "Dalteparin dosages vary substantially with indication, and for this reason, most clinicians will use enoxaparin instead, which has more standardized dosing."
  },
  {
    q: "Can dalteparin be used in ESRD, and how can its dose be monitored/titrated?",
    choices: [
      "Cannot be used in ESRD; anti-Xa activity can be used to monitor and titrate the dose",
      "Can be used freely in ESRD with no monitoring needed",
      "Cannot be used in any renal impairment, including mild CKD",
      "Dalteparin dosing cannot be monitored by any laboratory test"
    ],
    correct: 0,
    explain: "Dalteparin requires caution with CKD and cannot be used in ESRD; anti-Xa activity can be used to monitor and titrate the dose when needed."
  }
]);
