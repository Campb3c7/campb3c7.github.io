// Apply questions for: 6. Diagnostic Exams & Their Significance
addQuestions([
  {
    q: "A 34-year-old started on bupropion 3 weeks ago for depression and smoking cessation has a routine urine drug screen that is positive for amphetamines. He denies any stimulant use and has no clinical signs of intoxication. What is the most likely explanation?",
    choices: ["He is lying and is using methamphetamine", "Bupropion is causing a false-positive amphetamine result", "Bupropion is causing a false-negative result", "The screen detected a tainted batch of drugs"],
    correct: 1,
    explain: "Bupropion (Wellbutrin) is a classic cause of a false-positive amphetamine immunoassay. A false positive means the drug is absent but the test reads positive. Confirmatory testing (e.g., GC-MS) would be negative."
  },
  {
    q: "A patient who eats two poppy seed bagels every morning has a urine screen that returns positive for opioids. She takes no opioid medications and has no withdrawal or intoxication signs. What does this represent?",
    choices: ["A true positive requiring treatment", "A false-positive opioid result from poppy seeds", "A false-negative opioid result", "Diversion of buprenorphine"],
    correct: 1,
    explain: "Poppy seeds are a classic cause of a false-positive opioid screen. The urine does not contain illicit opioid use; the test reads positive because of dietary poppy seed exposure."
  },
  {
    q: "A 41-year-old woman on sertraline for anxiety has a urine drug screen positive for benzodiazepines during a custody evaluation. She has never been prescribed a benzodiazepine and shows no sedation. The most likely cause is:",
    choices: ["Sertraline causing a false-positive benzodiazepine result", "Covert benzodiazepine use", "A false-negative result", "GGT elevation interfering with the assay"],
    correct: 0,
    explain: "Sertraline (Zoloft) is a known cause of a false-positive benzodiazepine immunoassay. The substance is not actually present; confirmatory testing would clarify."
  },
  {
    q: "A patient taking quetiapine at night for insomnia has a urine screen positive for tricyclic antidepressants. He is not on any TCA. Which medication best explains this, and what is the phenomenon?",
    choices: ["Quetiapine; false-positive TCA", "Quetiapine; false-negative TCA", "Sertraline; false-positive TCA", "Bupropion; true-positive TCA"],
    correct: 0,
    explain: "Quetiapine (Seroquel) — like cyclobenzaprine (Flexeril) — causes a false-positive TCA result. The TCA is not present; the immunoassay cross-reacts."
  },
  {
    q: "A patient on cyclobenzaprine for back spasm screens positive for tricyclic antidepressants. He denies TCA use. The structural similarity of cyclobenzaprine to TCAs explains the result. This is best classified as:",
    choices: ["A false negative", "A false positive", "A true positive", "An adulterated specimen"],
    correct: 1,
    explain: "Cyclobenzaprine (Flexeril) is structurally similar to tricyclics and causes a false-positive TCA screen — the urine does not actually contain a TCA."
  },
  {
    q: "A migraine patient taking Fioricet several times a week has a urine drug screen positive for barbiturates. She takes no other sedatives. What is the explanation?",
    choices: ["Fioricet contains butalbital, a barbiturate, producing a true positive for barbiturates", "Fioricet causes a false-positive benzodiazepine result", "Fioricet causes a false-positive amphetamine result", "The result is a false negative"],
    correct: 0,
    explain: "Fioricet contains butalbital, an actual barbiturate. The 'false positive' association in the lecture reflects that clinicians may not realize the barbiturate is coming from prescribed Fioricet rather than illicit barbiturate use."
  },
  {
    q: "A patient on phenylephrine and pseudoephedrine for chronic congestion screens positive for amphetamines during a pre-employment test. He uses no stimulants. The best next step in interpreting this is to recognize that:",
    choices: ["These decongestants cross-react and cause a false-positive amphetamine result", "He is using methamphetamine", "The result is a false negative", "GGT is interfering with the immunoassay"],
    correct: 0,
    explain: "Phenylephrine and pseudoephedrine (Sudafed) cause false-positive amphetamine results due to structural similarity. Confirmatory testing distinguishes true amphetamine use."
  },
  {
    q: "A 52-year-old man with a long drinking history has labs showing AST 180 and ALT 80. How should this pattern be interpreted?",
    choices: ["AST:ALT ratio of ~2:1, classic for alcohol-related liver injury", "AST:ALT ratio favoring viral hepatitis", "Normal liver enzymes", "A ratio diagnostic of pancreatitis"],
    correct: 0,
    explain: "AST 180 / ALT 80 gives an AST:ALT ratio of ≥ 2:1, the classic pattern of alcohol-related liver injury."
  },
  {
    q: "A patient minimizes her drinking but has macrocytic anemia (elevated MCV) and an elevated GGT. You want objective evidence of RECENT alcohol use. Which biomarker best confirms drinking within roughly the past 2 weeks?",
    choices: ["GGT", "MCV", "PEth (phosphatidylethanol)", "CDT only"],
    correct: 2,
    explain: "MCV and GGT suggest chronic use but are nonspecific. PEth is the direct biomarker that detects alcohol use within roughly the past 2 weeks, confirming recent drinking."
  },
  {
    q: "A patient claims he has been completely sober for 3 weeks, but his PEth returns positive. Given the PEth window, what is the most accurate interpretation?",
    choices: ["PEth confirms he has been sober for over a month", "PEth detects use within ~2 weeks, so a positive result is inconsistent with 3 weeks of abstinence and suggests more recent drinking", "PEth only reflects use from over 2 weeks ago", "PEth is a false positive from poppy seeds"],
    correct: 1,
    explain: "PEth detects alcohol use within roughly the prior 2 weeks. A positive PEth is inconsistent with a claim of 3 weeks of sobriety and points to more recent drinking."
  },
  {
    q: "A patient with macrocytosis, elevated GGT, and an AST:ALT of 2:1 also has a low folate level and large immature nonfunctional red cells on smear. The anemia is best described as:",
    choices: ["Iron-deficiency microcytic anemia", "Megaloblastic anemia from folate deficiency", "Anemia of chronic disease", "Hemolytic anemia"],
    correct: 1,
    explain: "Folic acid (folate) deficiency in chronic alcohol use produces megaloblastic anemia with large immature nonfunctional megaloblasts, consistent with the elevated MCV."
  },
  {
    q: "A 48-year-old alcohol-dependent man presents with confusion, fever, and neck stiffness while in withdrawal. Beyond starting withdrawal management, why are a lumbar puncture and cranial CT warranted?",
    choices: ["To calculate the CIWA-Ar score", "To rule out mimics or coexisting conditions such as CNS infection or trauma", "To confirm folate deficiency", "To measure phosphatidylethanol"],
    correct: 1,
    explain: "Infection (e.g., meningitis), trauma (e.g., subdural hematoma), metabolic derangements, overdose, hepatic failure, and GI bleeding can mimic or coexist with alcohol withdrawal. LP and CT help rule these out."
  },
  {
    q: "A patient in alcohol withdrawal is assessed with the CIWA-Ar and scores 22. How should this score guide management?",
    choices: ["It indicates absent/minimal withdrawal; no medication needed", "It indicates mild-to-moderate withdrawal", "It indicates severe withdrawal, warranting aggressive symptom-triggered treatment", "It is below the threshold for any treatment"],
    correct: 2,
    explain: "A CIWA-Ar of ≥ 20 indicates severe alcohol withdrawal (≤8 absent/minimal; 9–19 mild-to-moderate). A score of 22 warrants aggressive treatment."
  },
  {
    q: "A patient is being inducted onto buprenorphine for opioid use disorder. His COWS score is 6. Per COWS interpretation, what does this suggest about whether he is in adequate withdrawal for safe induction?",
    choices: ["A score of 6 is moderate withdrawal, clearly adequate for induction", "A score of 6 is only mild withdrawal; he may not yet be in sufficient withdrawal, risking precipitated withdrawal if buprenorphine is started too early", "A score of 6 is severe withdrawal", "COWS does not assess opioid withdrawal"],
    correct: 1,
    explain: "COWS 5–12 is mild withdrawal. A score of 6 suggests only mild withdrawal; starting buprenorphine before sufficient withdrawal (often a higher COWS) risks precipitated withdrawal. Clinicians typically wait for adequate objective withdrawal before induction."
  }
]);
