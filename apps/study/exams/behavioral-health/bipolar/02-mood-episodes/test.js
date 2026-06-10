// Test questions for: 2. Mood Episodes — Mania, Hypomania, Major Depression (Bipolar lecture)
addQuestions([
  // Manic episode criteria
  {
    q: "What is the minimum duration of elevated or irritable mood and increased energy required to meet DSM-5 criteria for a manic episode?",
    choices: ["4 consecutive days", "5 days", "7 days", "14 days"],
    correct: 2,
    explain: "A manic episode requires symptoms lasting at least 7 days (or any duration if hospitalization is necessary). Hypomanic episodes require at least 4 consecutive days — a key distinguishing feature."
  },
  {
    q: "How many DIG FAST symptoms are required for a manic episode when the mood is only irritable rather than elevated or expansive?",
    choices: ["2 symptoms", "3 symptoms", "4 symptoms", "5 symptoms"],
    correct: 2,
    explain: "When mood is elevated or expansive, 3 or more DIG FAST symptoms are required. When mood is only irritable (not elevated), 4 or more symptoms are needed, reflecting a higher threshold when the mood change is less distinctive."
  },
  {
    q: "In the DIG FAST mnemonic for mania, what does the 'I' represent?",
    choices: [
      "Impulsivity in financial decisions",
      "Indiscretion — excessive involvement in pleasurable activities with potential for harmful consequences",
      "Insomnia requiring medical treatment",
      "Isolation from family and friends"
    ],
    correct: 1,
    explain: "In DIG FAST, 'I' stands for Indiscretion — excessive involvement in pleasurable activities that have the potential for painful consequences, such as spending sprees, hypersexuality, or reckless investments."
  },
  {
    q: "Which of the following is NOT one of the manic episode severity criteria in DSM-5?",
    choices: [
      "Marked impairment in social or occupational functioning",
      "Necessity for hospitalization to prevent harm",
      "Presence of psychotic features",
      "Persistently elevated mood for at least 3 consecutive days"
    ],
    correct: 3,
    explain: "The severity criteria for a manic episode are: marked functional impairment, necessity for hospitalization, or presence of psychotic features. Duration (≥7 days) is separate from the severity requirement. 'Three consecutive days' is not a DSM-5 criterion."
  },

  // Hypomanic vs manic
  {
    q: "What is the minimum duration required to diagnose a hypomanic episode?",
    choices: ["2 consecutive days", "4 consecutive days", "7 days", "2 weeks"],
    correct: 1,
    explain: "Hypomanic episodes require symptoms lasting at least 4 consecutive days. This is shorter than mania (≥7 days) and helps distinguish these two episode types."
  },
  {
    q: "Which finding immediately upgrades a suspected hypomanic episode to a manic episode by DSM-5 definition?",
    choices: [
      "Irritable rather than elevated mood",
      "Presence of psychotic features",
      "Duration exceeding 7 days",
      "Decreased need for sleep"
    ],
    correct: 1,
    explain: "By DSM-5 definition, hypomania cannot include psychotic features. If psychosis is present during an elevated-energy mood episode, it is classified as a manic episode regardless of other factors."
  },
  {
    q: "What is required to be true about the behavioral changes in a hypomanic episode that distinguishes it from normal variation in mood?",
    choices: [
      "They must lead to at least one occupational consequence",
      "They must be observable by others and represent a clear change from baseline behavior",
      "They must occur during a period of psychosocial stress",
      "They must be confirmed by two separate clinicians"
    ],
    correct: 1,
    explain: "In a hypomanic episode, the mood and behavioral changes must be observable by others and clearly represent a change from the person's usual behavior. This distinguishes it from normal mood variation — but importantly, it does not cause marked impairment."
  },

  // MDE criteria
  {
    q: "How many of the nine DSM-5 criteria must be present for at least 2 weeks to diagnose a major depressive episode?",
    choices: ["3 or more", "4 or more", "5 or more", "7 or more"],
    correct: 2,
    explain: "A major depressive episode requires 5 or more of the 9 DSM-5 criteria present for at least 2 weeks. Either depressed mood (criterion 1) or anhedonia (criterion 2) must be among the five."
  },
  {
    q: "Which two symptoms must be present among the five required for a major depressive episode?",
    choices: [
      "Insomnia and fatigue",
      "At least one of: depressed mood OR anhedonia",
      "Weight change and suicidal ideation",
      "Psychomotor change and poor concentration"
    ],
    correct: 1,
    explain: "Either depressed mood (criterion 1) or anhedonia — loss of interest or pleasure in all or nearly all activities (criterion 2) — must be present. The remaining 4 of the 9 criteria can be any combination."
  },
]);
