addQuestions([
  {
    q: "What should be done when a clinician suspects rapid acute blood loss?",
    choices: ["Hospitalize the patient and monitor H&H serially", "Discharge home with outpatient labs in one week", "Check a single H&H and take no further action", "Only monitor blood pressure, not H&H"],
    correct: 0,
    explain: "Whenever rapid acute blood loss is suspected, the patient should be hospitalized and the H&H monitored serially."
  },
  {
    q: "What determines the frequency of H&H monitoring in suspected acute blood loss?",
    choices: ["The rapidity of the blood loss (e.g., q4, q6, or q8 hours)", "The patient's age only", "The patient's blood type", "Monitoring frequency is always fixed at once daily regardless of severity"],
    correct: 0,
    explain: "Frequency of H&H monitoring depends on the rapidity of blood loss, ranging from every 4, 6, or 8 hours."
  },
  {
    q: "Why can the H&H appear falsely elevated immediately after acute blood loss?",
    choices: [
      "Because both plasma and RBCs are lost together initially, so the concentration doesn't yet reflect the true loss, and fluid retention outpaces new RBC production until equilibration occurs",
      "Because the lab test is inherently inaccurate in acute bleeding",
      "Because acute blood loss immediately increases RBC production to compensate",
      "Because plasma volume is lost faster than RBCs, concentrating the blood"
    ],
    correct: 0,
    explain: "Immediately after acute blood loss, whole blood (plasma and RBCs together) is lost, so H&H doesn't initially reflect the true magnitude of loss. Because fluid retained to compensate is proportionally more and faster than new RBC production, the H&H can appear falsely elevated/concentrated until equilibration occurs."
  },
  {
    q: "Approximately how long does equilibration take after bleeding stops?",
    choices: ["About 24 hours", "About 5 minutes", "About 1 week", "About 6 weeks"],
    correct: 0,
    explain: "Equilibration — the process by which H&H falls to accurately reflect true RBC mass lost — takes about 24 hours after bleeding stops."
  },
  {
    q: "If a patient's H&H trends downward over the first several hours after an episode of acute bleeding has stopped, what does this necessarily indicate?",
    choices: [
      "It does not necessarily indicate ongoing bleeding — it may simply reflect the equilibration process as plasma volume is restored",
      "It always definitively indicates ongoing active bleeding",
      "It indicates the patient's bone marrow has failed",
      "It has no clinical significance and should be ignored entirely"
    ],
    correct: 0,
    explain: "A downward-trending H&H in the hours after bleeding has stopped does not necessarily mean ongoing bleeding — it may simply reflect normal equilibration as plasma volume is restored and the H&H falls to a value that accurately reflects the true RBC mass lost."
  },
  {
    q: "In the blood donation equilibration example, immediately after donating a unit of blood, why does the measured H&H directly reflect the volume of blood removed?",
    choices: [
      "Because whole blood (plasma and RBCs in their original proportion) was removed directly, without time for compensatory fluid shifts to dilute the remaining blood",
      "Because donated blood is always replaced instantly by new RBCs",
      "Because plasma volume expands immediately upon donation, causing dilution before the H&H is even measured",
      "Because ferritin levels change instantaneously with blood donation"
    ],
    correct: 0,
    explain: "Because a unit of whole blood (containing plasma and RBCs in their original ratio) was removed directly and quickly, the immediately-measured H&H reflects a direct 1:1 relationship to the blood volume lost, before any compensatory fluid shifts or intake have had time to dilute the remaining blood."
  },
  {
    q: "After donating blood, why would replacing lost fluid volume (e.g., by drinking water) cause a subsequent H&H measurement to trend even lower?",
    choices: [
      "The same reduced RBC mass becomes further diluted as plasma volume is replenished, moving the H&H toward its true equilibrated value",
      "Drinking water directly destroys additional RBCs",
      "Fluid intake has no effect on H&H measurements",
      "Fluid intake stimulates additional blood loss"
    ],
    correct: 0,
    explain: "As plasma volume is replenished (through oral fluid intake or the body's own compensatory mechanisms), the same reduced RBC mass gets further diluted in a larger plasma volume, causing the H&H to trend lower as it approaches the new, true equilibrated value reflecting the actual RBC loss."
  }
]);
