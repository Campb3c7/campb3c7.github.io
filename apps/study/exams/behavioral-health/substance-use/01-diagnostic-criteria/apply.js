// Apply questions for: Diagnostic Criteria of Substance Use Disorders
addQuestions([
  {
    q: "A 29-year-old man reports he uses alcohol in larger amounts than he intends, has tried unsuccessfully to cut down twice, and craves it daily. He has no other symptoms over the past year. How is his alcohol use disorder best classified?",
    choices: ["No disorder — too few criteria", "Mild (2–3 criteria)", "Moderate (4–5 criteria)", "Severe (6+ criteria)"],
    correct: 1,
    explain: "He meets exactly 3 criteria (larger amounts, unsuccessful cut-down efforts, craving) within 12 months. 2–3 criteria = mild SUD."
  },
  {
    q: "A 45-year-old woman has taken gabapentin for chronic neuropathy for 2 years. When she abruptly stopped, she developed anxiety, sweating, and insomnia, which resolved when restarted. She has never escalated her dose, craved the drug, or used it for non-medical reasons. The best description is:",
    choices: ["Severe sedative use disorder", "Physical dependence without addiction", "Addiction without dependence", "Substance intoxication"],
    correct: 1,
    explain: "She has a withdrawal syndrome (physical dependence) but no compulsive behavior, craving, or harm-despite-consequences. Gabapentin is a classic example of dependence without addiction."
  },
  {
    q: "A 33-year-old with prior opioid use disorder has met none of the criteria except occasional craving for the past 6 months. Which specifier applies?",
    choices: ["Early remission", "Sustained remission", "On maintenance therapy", "In a controlled environment"],
    correct: 0,
    explain: "Six months with no criteria except craving falls in the 3–11 month window = early remission. Sustained remission requires 12+ months."
  },
  {
    q: "A 38-year-old man with opioid use disorder has been stable on buprenorphine for a year and meets no other criteria. How should his status be coded?",
    choices: ["No longer has a disorder; remove the diagnosis", "Sustained remission, on maintenance therapy", "Severe opioid use disorder, active", "Substance withdrawal"],
    correct: 1,
    explain: "He has gone 12+ months without criteria (sustained remission) and remains on buprenorphine, so the 'on maintenance therapy' specifier also applies."
  },
  {
    q: "A patient says, 'I now need three drinks to feel what one used to do.' This statement specifically describes which criterion?",
    choices: ["Withdrawal", "Tolerance", "Craving", "Hazardous use"],
    correct: 1,
    explain: "Needing markedly increased amounts for the same effect is the definition of tolerance (criterion 10)."
  },
  {
    q: "A patient reports that every morning he has tremor and nausea that go away only after his first drink. This best illustrates which criterion?",
    choices: ["Tolerance", "Withdrawal", "Impaired control", "Craving"],
    correct: 1,
    explain: "Drinking to relieve/avoid morning tremor and nausea is the withdrawal criterion (criterion 11), satisfied by taking the substance to relieve withdrawal."
  },
  {
    q: "A 22-year-old states she only meant to smoke cannabis on weekends but now finds she uses it most weeknights as well, more than she planned. Which criterion does this map to?",
    choices: ["Craving", "Taking the substance in larger amounts or over a longer period than intended", "Tolerance", "Hazardous use"],
    correct: 1,
    explain: "Using more than intended (escalating beyond the planned weekend pattern) is criterion 1 under impaired control."
  },
  {
    q: "A 50-year-old man arrives slurring speech and ataxic 30 minutes after drinking heavily, with disinhibited behavior. To diagnose alcohol intoxication, which additional element is REQUIRED by DSM-5?",
    choices: ["At least 2 of 11 criteria over 12 months", "Clinically significant problematic behavioral/psychological changes plus substance-specific signs not better explained by another condition", "Evidence of tolerance", "A 3-month duration"],
    correct: 1,
    explain: "Intoxication requires recent use, clinically significant problematic behavioral/psychological change, substance-specific signs, and exclusion of another cause. The 11-criteria/12-month rule applies to SUD, not intoxication."
  },
  {
    q: "A patient meets only 1 of the 11 criteria for stimulant use over the past year. What is the correct diagnostic conclusion?",
    choices: ["Mild stimulant use disorder", "Stimulant use disorder cannot be diagnosed — threshold not met", "Moderate stimulant use disorder", "Stimulant withdrawal"],
    correct: 1,
    explain: "At least 2 criteria within 12 months are required. One criterion does not meet the diagnostic threshold for any severity."
  },
  {
    q: "A patient on chronic prescribed morphine for cancer pain shows tolerance and would have withdrawal if stopped, but has no drug-seeking behavior and takes it exactly as directed. Best interpretation:",
    choices: ["Severe opioid use disorder because tolerance and withdrawal are present", "Expected physical dependence; tolerance and withdrawal alone do not establish a SUD here", "Addiction", "Substance-induced disorder"],
    correct: 1,
    explain: "Tolerance and withdrawal expected from appropriately prescribed opioids do not, by themselves, equal addiction or a SUD when there is no compulsive harmful use."
  },
  {
    q: "A 41-year-old continues drinking even though he knows it is worsening his diagnosed liver cirrhosis, and his physician has warned him. Which criterion does this satisfy?",
    choices: ["Craving", "Continued use despite a known persistent physical problem caused by it", "Tolerance", "Failure to fulfill role obligations"],
    correct: 1,
    explain: "Continuing despite knowledge of a persistent physical problem caused/worsened by the substance is criterion 9, under risky use."
  },
  {
    q: "A college student has missed multiple classes and lost a part-time job because of recurrent intoxication, and keeps using despite arguments with his family about it. These features map to which theme?",
    choices: ["Pharmacologic", "Risky use", "Social impairment", "Impaired control"],
    correct: 2,
    explain: "Failing role obligations (missed classes, lost job) and continued use despite interpersonal problems are both social impairment criteria."
  },
  {
    q: "A 36-year-old woman with cocaine use disorder is incarcerated and has not met any active criteria for 4 months while in custody. Which specifier is most appropriate?",
    choices: ["Sustained remission", "In a controlled environment", "On maintenance therapy", "No disorder"],
    correct: 1,
    explain: "Absence of criteria because access is restricted (jail) is best captured by the 'in a controlled environment' specifier rather than true remission."
  },
  {
    q: "A 28-year-old presents agitated and paranoid shortly after using a stimulant, with dilated pupils and tachycardia; symptoms are not explained by another mental disorder. Which diagnosis best fits, and why is it NOT a use disorder?",
    choices: ["Stimulant withdrawal — symptoms follow cessation", "Stimulant intoxication — acute signs follow recent use, and a single episode does not meet the 2-criteria/12-month SUD threshold", "Severe stimulant use disorder — paranoia counts as 6 criteria", "Physical dependence"],
    correct: 1,
    explain: "Acute problematic changes and substance-specific signs after recent use define intoxication. A single intoxication episode does not satisfy the SUD requirement of ≥2 criteria over 12 months."
  }
]);
