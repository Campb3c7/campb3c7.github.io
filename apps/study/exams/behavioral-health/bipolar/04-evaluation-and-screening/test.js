// Test questions for: 4. Evaluation, Screening & Workup (Bipolar lecture)
addQuestions([
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
