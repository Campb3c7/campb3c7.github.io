addQuestions([
  {
    q: "A healthy couple has their first child, who is diagnosed with cystic fibrosis. Neither parent has CF, and there is no known family history. The parents ask how this happened. The best explanation is:",
    choices: [
      "The mutation occurred de novo in the child",
      "Both parents are carriers — each passed one mutant allele to the child, who inherited two copies",
      "Only one parent is a carrier; the other allele mutated spontaneously",
      "The child inherited the mutation from only the mother"
    ],
    correct: 1,
    explain: "CF is autosomal recessive. Both unaffected parents must be carriers (obligate carriers) — each contributed one mutant CFTR allele, and the child received two copies (aa). This is the most common scenario: carrier parents are unaware until an affected child is born."
  },
  {
    q: "A woman is identified as a carrier for sickle cell trait (HbAS). Her partner has no African ancestry and tests negative for the sickle cell mutation. She asks about their children's risk. You should explain:",
    choices: [
      "Each child has a 25% chance of sickle cell disease",
      "Each child has a 50% chance of sickle cell disease",
      "No children will have sickle cell disease, but 50% will be carriers",
      "No children will be carriers or affected"
    ],
    correct: 2,
    explain: "Carrier (Aa) × Non-carrier (AA) = 0% affected, 50% carriers, 50% non-carriers. Since the partner does not carry the mutation, no child can inherit two copies. However, half will inherit the mother's mutant allele and be carriers."
  },
  {
    q: "Two parents are both carriers for an autosomal recessive disorder. They already have two affected children. They ask what the chance is that their third child will also be affected. The correct answer is:",
    choices: ["Nearly 100%, since two children are already affected", "50%", "25%", "Less than 10%"],
    correct: 2,
    explain: "Each pregnancy is an independent event. The risk is always 25% for carrier × carrier, regardless of previous outcomes. Having two affected children does not change the probability for the next pregnancy."
  },
  {
    q: "A 25-year-old Ashkenazi Jewish woman is planning a pregnancy. Her obstetrician recommends carrier screening for Tay-Sachs disease. She tests positive as a carrier. The most important next step is:",
    choices: [
      "No further testing needed — carrier status is harmless",
      "Carrier screening of her partner to determine offspring risk",
      "Immediate genetic therapy for the woman",
      "Prenatal testing regardless of partner status"
    ],
    correct: 1,
    explain: "The carrier herself is unaffected, but offspring risk depends on the partner's carrier status. If the partner is also a carrier (1 in 30 in Ashkenazi Jews), each pregnancy carries a 25% risk. Partner screening is the essential next step for informed reproductive planning."
  },
  {
    q: "A man with an autosomal recessive disorder (aa) marries a woman who is a carrier (Aa). They want to know the risk to their children. The correct counseling is:",
    choices: [
      "25% chance of affected children",
      "50% chance of affected children and 50% carriers",
      "All children will be carriers but none affected",
      "75% chance of affected children"
    ],
    correct: 1,
    explain: "Affected (aa) × Carrier (Aa): offspring are 50% aa (affected) and 50% Aa (carriers). No child will be homozygous normal (AA). This is a higher risk than the typical carrier × carrier scenario."
  }
]);
