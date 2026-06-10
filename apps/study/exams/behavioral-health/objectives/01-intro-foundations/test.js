// Test questions for: 1. Foundations of Behavioral Health  (SAMPLE)
// Each question = { q, choices, correct, explain }.
// "correct" is the INDEX of the right answer: 0 = first choice.
// To add more questions later, just append another addQuestions([...])
// block at the bottom of this file — they all get combined.
addQuestions([
  {
    q: "SAMPLE: Which element is required for a disturbance in mood or behavior to be considered a disorder?",
    choices: [
      "It must last longer than six months",
      "It must cause distress or functional impairment",
      "It must have a known biological cause",
      "It must require medication to treat"
    ],
    correct: 1,
    explain: "Clinically significant distress or impairment in functioning is the core requirement; duration criteria vary by diagnosis."
  },
  {
    q: "SAMPLE: The biopsychosocial model includes which three domains?",
    choices: [
      "Biological, psychological, social",
      "Behavioral, pharmacological, surgical",
      "Genetic, environmental, spiritual",
      "Cognitive, emotional, physical"
    ],
    correct: 0,
    explain: "Biological, psychological, and social factors are all assessed for every patient."
  }
]);

// ── Added later (example of the append pattern) ──────────────────
addQuestions([
  {
    q: "SAMPLE: Grief after a loss is considered a disorder when…",
    choices: [
      "It lasts more than one week",
      "It involves crying in public",
      "It exceeds expected intensity or duration and impairs functioning",
      "It is always a disorder"
    ],
    correct: 2,
    explain: "Normal stress reactions become pathological when they are out of proportion and impair functioning."
  }
]);
