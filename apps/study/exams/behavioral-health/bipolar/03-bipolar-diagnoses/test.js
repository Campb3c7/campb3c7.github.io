// Test questions for: 3. Bipolar I, Bipolar II, Cyclothymia & Specifiers (Bipolar lecture)
addQuestions([
  // Bipolar I vs II
  {
    q: "What is the key diagnostic distinction between Bipolar I and Bipolar II disorder?",
    choices: [
      "Bipolar I requires a major depressive episode; Bipolar II does not",
      "Bipolar I requires a history of at least one manic episode; Bipolar II requires only hypomania",
      "Bipolar II has more severe individual episodes than Bipolar I",
      "Bipolar I is associated with predominantly depressive episodes"
    ],
    correct: 1,
    explain: "Bipolar I requires at least one manic episode (with marked impairment or psychosis). Bipolar II requires at least one hypomanic episode plus at least one MDE — with no manic episode ever. Bipolar II is NOT a milder form due to the heavy burden of recurrent depression."
  },
  {
    q: "What percentage of patients initially diagnosed with major depressive disorder are later reclassified as Bipolar II after experiencing a hypomanic episode?",
    choices: ["4%", "8%", "12%", "20%"],
    correct: 2,
    explain: "12% of patients initially diagnosed with MDD go on to have a hypomanic episode and are reclassified as Bipolar II. This underscores why clinicians must always screen depressed patients for a history of elevated mood states."
  },
  {
    q: "Is a major depressive episode required to diagnose Bipolar I disorder?",
    choices: [
      "Yes — at least one MDE and one manic episode are both required",
      "No — a manic episode alone is sufficient for Bipolar I",
      "Yes — but the MDE must precede the manic episode",
      "No — unless the patient is under age 25"
    ],
    correct: 1,
    explain: "A major depressive episode is NOT required to diagnose Bipolar I disorder. A single manic episode is sufficient. However, most patients with Bipolar I do experience depressive episodes over the course of their illness."
  },

  // Cyclothymia
  {
    q: "What is the minimum duration of subthreshold hypomanic and depressive symptoms required to diagnose cyclothymic disorder in adults?",
    choices: ["6 months", "1 year", "2 years", "3 years"],
    correct: 2,
    explain: "Cyclothymic disorder in adults requires ≥2 years of subthreshold hypomanic and depressive symptoms (neither meeting full criteria for an episode). In children and adolescents, 1 year is the minimum."
  },
  {
    q: "What happens to the diagnosis of cyclothymic disorder if the patient later develops a full major depressive episode?",
    choices: [
      "Cyclothymia is retained and MDD is added as a comorbidity",
      "The cyclothymia diagnosis is abandoned; the new episode determines the new diagnosis",
      "Cyclothymia can coexist with MDD as long as the depressive episodes remain brief",
      "Nothing changes — cyclothymia is diagnosed for life once established"
    ],
    correct: 1,
    explain: "By definition, cyclothymia requires that full criteria for MDE, mania, or hypomania have never been met. If a full manic, hypomanic, or major depressive episode occurs, the cyclothymia diagnosis is no longer appropriate and a new diagnosis (e.g., Bipolar I, Bipolar II) is established."
  },

  // Specifiers
  {
    q: "How many mood episodes per year are required to meet the specifier 'with rapid cycling'?",
    choices: ["2 or more", "3 or more", "4 or more", "6 or more"],
    correct: 2,
    explain: "The 'with rapid cycling' specifier requires 4 or more distinct mood episodes within a 12-month period. Rapid cycling is associated with a poorer prognosis."
  },
  {
    q: "The 'with mixed features' specifier for a manic episode requires which of the following?",
    choices: [
      "Simultaneous presence of depressed mood and elevated energy",
      "At least 3 criteria from the opposite-pole episode (depressive criteria) to be met simultaneously",
      "Psychotic features during a depressive episode",
      "Rapid alternation between mania and depression within a single day"
    ],
    correct: 1,
    explain: "The 'with mixed features' specifier is applied when at least 3 criteria from the opposite-pole episode are met during the current episode. For a manic episode, this means ≥3 depressive criteria are simultaneously present."
  },
]);
