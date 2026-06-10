// Test questions for: 5. Treatment by Phase (Bipolar lecture)
addQuestions([
  // Antidepressants
  {
    q: "Which antidepressants carry the highest risk for inducing mania or hypomania and should be specifically avoided in bipolar disorder?",
    choices: [
      "SSRIs and bupropion",
      "TCAs and venlafaxine",
      "Mirtazapine and trazodone",
      "MAOIs and buspirone"
    ],
    correct: 1,
    explain: "Tricyclic antidepressants (TCAs) and venlafaxine have the highest risk for inducing hypo/mania in bipolar disorder and should be specifically avoided. All antidepressant monotherapy should be avoided regardless of class."
  },
  {
    q: "What term describes the induction of a manic or hypomanic episode after initiating an antidepressant in a patient with unrecognized bipolar disorder?",
    choices: ["Mood lability", "Switching", "Rapid cycling", "Mixed episode transition"],
    correct: 1,
    explain: "\"Switching\" refers to the precipitation of mania or hypomania by an antidepressant. It occurs in 6–8% of patients with apparently unipolar depression who actually have an underlying bipolar disorder. This is why screening for bipolarity before prescribing antidepressants is essential."
  },

  // Manic phase treatment
  {
    q: "What is the first medication management step when a manic patient is found to be taking an antidepressant?",
    choices: [
      "Add lithium and continue the antidepressant at reduced dose",
      "Discontinue the antidepressant",
      "Increase the antidepressant to speed resolution of the depressive component",
      "Add a second antidepressant with a different mechanism"
    ],
    correct: 1,
    explain: "Discontinuing the antidepressant is the critical first step in managing a manic episode. Antidepressants can worsen or prolong mania. A mood stabilizer (or combination therapy for severe mania) is then initiated."
  },
  {
    q: "For a patient with severe mania including psychosis and homicidal ideation, what is the most appropriate treatment approach?",
    choices: [
      "Lithium monotherapy as an outpatient with close follow-up",
      "Hospitalization with (lithium or valproate) plus an antipsychotic",
      "Quetiapine monotherapy as an outpatient",
      "Start an SSRI to target the underlying depressive component"
    ],
    correct: 1,
    explain: "Severe mania with suicidal/homicidal ideation or psychosis requires hospitalization. Combination therapy — (lithium or valproate) plus an antipsychotic — is more effective than monotherapy and is the standard for severe presentations."
  },

  // Depressive phase treatment
  {
    q: "Which of the following agents is FDA-approved specifically for bipolar depression?",
    choices: [
      "Aripiprazole (Abilify)",
      "Quetiapine (Seroquel)",
      "Risperidone (Risperdal)",
      "Haloperidol (Haldol)"
    ],
    correct: 1,
    explain: "Quetiapine is FDA-approved for bipolar depression. Other FDA-approved options include lurasidone, cariprazine, lumateperone, and the olanzapine-fluoxetine combination. Aripiprazole is approved for acute mania and maintenance, not bipolar depression specifically. Risperidone and haloperidol are not approved for bipolar depression."
  },
  {
    q: "What dietary requirement must be communicated to a patient being started on lurasidone (Latuda) for bipolar depression?",
    choices: [
      "Must be taken on an empty stomach",
      "Must avoid all dairy products",
      "Must be taken with at least 350 calories",
      "Must avoid tyramine-containing foods"
    ],
    correct: 2,
    explain: "Lurasidone must be taken with at least 350 calories for adequate bioavailability. Without food, its absorption is significantly reduced. This is an important patient counseling point."
  },
  {
    q: "What is the target serum lithium level when treating bipolar disorder?",
    choices: ["0.2–0.5 mEq/L", "0.6–1.0 mEq/L", "1.2–1.5 mEq/L", "1.5–2.0 mEq/L"],
    correct: 1,
    explain: "The target serum lithium level for bipolar disorder is 0.6–1.0 mEq/L. Levels above 1.5 mEq/L are associated with toxicity (tremor, confusion, GI symptoms). Regular serum monitoring is required."
  },
  {
    q: "What serious adverse reaction is associated with rapid titration of lamotrigine or inconsistent compliance?",
    choices: [
      "Agranulocytosis",
      "Stevens-Johnson Syndrome",
      "Tardive dyskinesia",
      "Nephrogenic diabetes insipidus"
    ],
    correct: 1,
    explain: "Stevens-Johnson Syndrome (SJS), a potentially life-threatening mucocutaneous reaction, is the major risk with lamotrigine — particularly when the dose is increased too quickly or when compliance is inconsistent. Slow titration (25 mg/day, increasing by 25 mg every 2–3 weeks) is mandatory."
  },
  {
    q: "A patient on lamotrigine 200 mg/day misses 4 consecutive days of medication. What is the correct clinical response?",
    choices: [
      "Resume lamotrigine at 200 mg/day immediately",
      "Restart lamotrigine titration from 25 mg/day",
      "Double the next dose to compensate",
      "Switch to valproate given the compliance problem"
    ],
    correct: 1,
    explain: "If a patient misses more than 3 consecutive days of lamotrigine, the full titration must be restarted from 25 mg/day to prevent Stevens-Johnson Syndrome. Resuming at the previous dose after an extended break carries significant SJS risk."
  },

  // Maintenance
  {
    q: "Which antiepileptic drug has a specific FDA indication for bipolar maintenance therapy?",
    choices: ["Valproate (Depakote)", "Lamotrigine (Lamictal)", "Carbamazepine (Tegretol)", "Oxcarbazepine (Trileptal)"],
    correct: 1,
    explain: "Lamotrigine has a specific FDA indication for bipolar maintenance, primarily for preventing depressive episodes. Lithium and quetiapine are also effective maintenance options. Valproate and carbamazepine are used for acute mania but have less robust evidence for maintenance."
  },
  {
    q: "In bipolar disorder maintenance, what should be initiated when a patient cannot tolerate their current regimen and has never taken lithium?",
    choices: [
      "Start an SSRI to prevent depressive relapses",
      "Start lithium monotherapy",
      "Start a TCA for antidepressant coverage",
      "Discontinue all medications and monitor with therapy alone"
    ],
    correct: 1,
    explain: "When maintenance medications are not tolerated and the patient has not previously tried lithium, lithium monotherapy is the recommended next step. Lithium is the gold-standard mood stabilizer with the most robust long-term evidence, including suicide prevention."
  },
]);
