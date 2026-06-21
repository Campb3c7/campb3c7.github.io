addQuestions([
  {
    q: "In autosomal recessive inheritance, how many mutant alleles must a person inherit to be affected?",
    choices: ["One (from either parent)", "Two (one from each parent)", "One from the mother only", "Three or more"],
    correct: 1,
    explain: "Autosomal recessive inheritance requires two copies of the mutant allele — one from each parent — to produce disease."
  },
  {
    q: "Autosomal recessive disorders affect males and females:",
    choices: ["Males more often", "Females more often", "Equally", "Only males"],
    correct: 2,
    explain: "AR disorders are not sex-linked, so males and females are affected equally."
  },
  {
    q: "In a pedigree, autosomal recessive disorders typically appear in:",
    choices: [
      "Every generation (vertical pattern)",
      "One generation among siblings (horizontal pattern)",
      "Only males in alternating generations",
      "Only females"
    ],
    correct: 1,
    explain: "AR disorders typically appear in one generation (horizontal pattern) — affected individuals are usually siblings with unaffected carrier parents."
  },
  {
    q: "When both parents are carriers of an AR condition (Aa × Aa), the chance that each child will be affected is:",
    choices: ["10%", "25%", "50%", "75%"],
    correct: 1,
    explain: "Carrier × Carrier (Aa × Aa): 25% AA (unaffected), 50% Aa (carrier), 25% aa (affected). Each pregnancy has a 25% chance of an affected child."
  },
  {
    q: "When both parents are carriers (Aa × Aa), the chance that each child will be a carrier is:",
    choices: ["25%", "50%", "75%", "100%"],
    correct: 1,
    explain: "Carrier × Carrier: 50% of offspring are carriers (Aa), 25% are homozygous normal (AA), and 25% are affected (aa)."
  },
  {
    q: "Among the unaffected offspring of two carrier parents, what proportion are carriers?",
    choices: ["One half", "Two thirds", "Three quarters", "All of them"],
    correct: 1,
    explain: "Of the 75% unaffected offspring (25% AA + 50% Aa), two thirds (50/75) are carriers."
  },
  {
    q: "If a carrier (Aa) has children with a non-carrier (AA), the risk of an affected child is:",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 0,
    explain: "Carrier × Non-carrier (Aa × AA) produces no affected children. Offspring are either AA (50%) or Aa carriers (50%)."
  },
  {
    q: "If an affected individual (aa) has children with a non-carrier (AA), all offspring will be:",
    choices: ["Affected", "Carriers", "Unaffected non-carriers", "A mix of affected and unaffected"],
    correct: 1,
    explain: "Affected × Non-carrier (aa × AA) → all offspring are Aa (carriers). None are affected, but all carry one copy of the mutation."
  },
  {
    q: "If a carrier (Aa) has children with an affected individual (aa), the risk of an affected child is:",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 2,
    explain: "Carrier × Affected (Aa × aa) → 50% affected (aa) and 50% carriers (Aa). No homozygous normal offspring."
  },
  {
    q: "When counseling a known carrier about offspring risk, the most important factor to determine is:",
    choices: [
      "The carrier's age",
      "The partner's carrier status",
      "The carrier's sex",
      "The number of prior pregnancies"
    ],
    correct: 1,
    explain: "Offspring risk depends entirely on the partner's carrier status. If the partner is also a carrier, there is a 25% chance per pregnancy of an affected child. If the partner is not a carrier, no children will be affected."
  },
  {
    q: "Unaffected parents of a child with an autosomal recessive disorder are termed:",
    choices: ["Homozygous", "Obligate carriers", "Hemizygous", "Compound heterozygotes"],
    correct: 1,
    explain: "Unaffected parents of an affected child are obligate carriers — they must each carry one copy of the mutant allele (heterozygous) to have produced an affected (homozygous) child."
  }
]);
