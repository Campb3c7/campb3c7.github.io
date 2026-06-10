addQuestions([
  // Epidemiology
  {
    q: "What is the lifetime prevalence of bipolar disorder?",
    choices: ["1.2%", "2.8%", "4.4%", "7.1%"],
    correct: 2,
    explain: "The lifetime prevalence of bipolar disorder is approximately 4.4%. Onset is typically in early adulthood at 18–20 years of age, and prevalence is nearly equal between males and females."
  },
  {
    q: "How much greater is the risk of death by suicide in patients with bipolar disorder compared to the general population?",
    choices: ["5 times greater", "10 times greater", "20 times greater", "50 times greater"],
    correct: 2,
    explain: "The incidence of death by suicide is approximately 20 times greater in patients with bipolar disorder compared to the general population. Additionally, 50% of patients with bipolar disorder attempt suicide at least once."
  },
  {
    q: "What percentage of patients with bipolar disorder attempt suicide at least once?",
    choices: ["15%", "30%", "50%", "70%"],
    correct: 2,
    explain: "50% of those with bipolar disorder attempt suicide at least once. Bipolar disorder may account for as many as one-quarter of all completed suicides."
  },

  // Pathogenesis
  {
    q: "Which neurotransmitter systems are primarily implicated in the pathogenesis of bipolar disorder?",
    choices: [
      "Acetylcholine and GABA",
      "Dopamine and serotonin",
      "Glutamate and norepinephrine",
      "Histamine and opioid"
    ],
    correct: 1,
    explain: "Bipolar disorder is characterized by dysregulation in the dopamine and serotonin systems, along with pathology in brain systems involved in regulating emotion."
  },
  {
    q: "Among all psychiatric disorders, which has the highest genetic link?",
    choices: [
      "Major depressive disorder",
      "Schizophrenia",
      "Bipolar I disorder",
      "Obsessive-compulsive disorder"
    ],
    correct: 2,
    explain: "Bipolar I disorder has the highest genetic link of all psychiatric disorders. Its inheritance is polygenic — multiple genes contribute rather than a single-gene pattern. It also shares susceptibility genes with schizophrenia."
  },

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

  // Red flags
  {
    q: "A patient with recurrent depression fails three adequate antidepressant trials. Which diagnosis should be strongly considered?",
    choices: [
      "Treatment-resistant unipolar MDD requiring augmentation with lithium",
      "Bipolar disorder — lack of response to multiple antidepressants is a red flag for bipolarity",
      "Persistent depressive disorder (dysthymia)",
      "Somatic symptom disorder"
    ],
    correct: 1,
    explain: "Failure of 3 or more adequate antidepressant trials is a recognized red flag for underlying bipolar disorder. Antidepressants may fail to work or may even worsen the course of bipolar disorder by inducing switching or rapid cycling."
  },

  // Screening tools
  {
    q: "Which bipolar screening tool is more sensitive and specific, particularly for detecting Bipolar II and milder spectrum conditions?",
    choices: [
      "MDQ (Mood Disorder Questionnaire)",
      "RMS (Rapid Mood Screener)",
      "PHQ-9",
      "YMRS (Young Mania Rating Scale)"
    ],
    correct: 1,
    explain: "The Rapid Mood Screener (RMS) is more sensitive and specific than the MDQ, particularly for identifying Bipolar II and milder bipolar spectrum presentations. The MDQ has good sensitivity in insightful Bipolar I patients but may miss patients with impaired insight or milder presentations."
  },
  {
    q: "A positive MDQ (Mood Disorder Questionnaire) result in a patient presenting with depression means which of the following?",
    choices: [
      "The patient has bipolar disorder and should be started on a mood stabilizer",
      "Bipolar disorder is confirmed and antidepressants should be immediately stopped",
      "Further clinical evaluation for bipolar disorder is warranted — the MDQ is a screening tool, not a diagnostic tool",
      "The patient should be referred to psychiatry without further evaluation in primary care"
    ],
    correct: 2,
    explain: "Screening tools like the MDQ and RMS are not diagnostic. A positive result indicates that a comprehensive clinical evaluation for bipolar disorder should be performed. Diagnosis requires full clinical assessment, not just a screening tool score."
  },

  // Labs
  {
    q: "Why is a TSH ordered in the initial workup for a patient presenting with mood symptoms?",
    choices: [
      "TSH levels predict lithium toxicity",
      "Thyroid dysfunction can mimic mood episodes — hyperthyroidism may resemble mania; hypothyroidism may resemble depression",
      "TSH is elevated in rapid cycling bipolar disorder",
      "TSH is needed to calculate the correct valproate dose"
    ],
    correct: 1,
    explain: "Thyroid dysfunction is a common medical cause of mood instability. Hyperthyroidism can cause symptoms resembling mania; hypothyroidism can cause depressive symptoms. TSH is ordered to rule out these treatable medical causes."
  },
  {
    q: "Which test is most critical to obtain before prescribing lithium or valproate to a patient with bipolar disorder?",
    choices: [
      "Serum lithium level",
      "Urine pregnancy test",
      "Fasting lipid panel",
      "Serum prolactin"
    ],
    correct: 1,
    explain: "Both lithium and valproate are teratogenic. A urine pregnancy test must be obtained before initiating these medications in any patient who could be pregnant. Valproate in particular carries a high risk of neural tube defects."
  },
  {
    q: "A CMP is obtained before initiating lithium therapy. Which organ systems does this primarily assess?",
    choices: [
      "Hepatic and thyroid function",
      "Renal function and electrolytes — both critical for lithium safety",
      "Hematologic function and cardiac conduction",
      "Adrenal and pituitary function"
    ],
    correct: 1,
    explain: "Lithium is renally excreted and has a narrow therapeutic window. A CMP provides baseline renal function (creatinine, BUN) and electrolytes — particularly sodium, since sodium depletion increases lithium reabsorption and toxicity risk. Hepatic function is more relevant for valproate."
  },

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

  // MSE
  {
    q: "Which mental status exam finding is most characteristic of the thought process during a manic episode?",
    choices: [
      "Thought blocking and poverty of speech",
      "Flight of ideas or tangential thinking",
      "Concrete thinking and perseveration",
      "Thought insertion and ideas of reference"
    ],
    correct: 1,
    explain: "Flight of ideas (rapid, loosely connected thought patterns) and tangential thinking are characteristic of the manic thought process. Thought blocking is more associated with schizophrenia spectrum disorders; poverty of speech is seen in depression or negative schizophrenia symptoms."
  },
  {
    q: "During a manic episode, what is the typical finding regarding insight and judgment on the mental status exam?",
    choices: [
      "Insight is intact and judgment is preserved",
      "Insight may be present but judgment is consistently poor",
      "Insight and judgment are both typically poor during mania",
      "Insight is preserved; only judgment is impaired"
    ],
    correct: 2,
    explain: "During a manic episode, both insight and judgment are typically poor. Patients often do not recognize that they are ill (poor insight) and make reckless decisions (poor judgment), which contributes to dangerous behaviors such as spending sprees, hypersexuality, and driving recklessly."
  }
]);
