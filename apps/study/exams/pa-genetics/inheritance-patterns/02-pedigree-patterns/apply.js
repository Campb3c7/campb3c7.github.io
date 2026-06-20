addQuestions([
  {
    q: "A family presents to a geneticist. The father has a disorder, the mother is unaffected, and all three of their daughters are affected while their two sons are unaffected. This pattern is most consistent with:",
    choices: ["Autosomal dominant", "Autosomal recessive", "X-linked dominant", "Y-linked"],
    correct: 2,
    explain: "Affected father with ALL daughters affected and NO sons affected is the hallmark of X-linked dominant inheritance. The father passes his X (with the mutation) to all daughters and his Y to all sons."
  },
  {
    q: "Two unaffected parents have four children: one affected daughter and one affected son, plus two unaffected children. Both parents are found to be carriers of the same gene mutation. Genetic counseling reveals a 25% recurrence risk. This inheritance pattern is:",
    choices: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"],
    correct: 1,
    explain: "Two unaffected carrier parents with 25% risk of affected offspring (both sexes affected) = autosomal recessive. The trait appears in only one generation with unaffected parents."
  },
  {
    q: "A woman is a carrier of an X-linked recessive disorder. She has four sons. How many of her sons are expected to be affected?",
    choices: ["None", "One (25%)", "Two (50%)", "All four (100%)"],
    correct: 2,
    explain: "A carrier mother has a 50% chance of passing the mutant X to each son. Of 4 sons, approximately 2 (50%) would be expected to be affected. Sons who receive the normal X are unaffected."
  },
  {
    q: "A pedigree shows a disorder affecting males in every generation. Each affected male has an affected father, and every son of an affected male is also affected. No females are ever affected. This pattern is most consistent with:",
    choices: ["Autosomal dominant", "X-linked recessive", "X-linked dominant", "Y-linked"],
    correct: 3,
    explain: "Only males affected + affected father → ALL sons affected + no females affected = Y-linked inheritance. The Y chromosome passes from father to every son."
  },
  {
    q: "A couple seeks genetic counseling. The husband has hemophilia A (X-linked recessive), and the wife is not a carrier. What is the risk that their sons will be affected?",
    choices: ["0% — no sons will be affected", "25%", "50%", "100%"],
    correct: 0,
    explain: "The father passes his Y (not his X) to sons. The mother is not a carrier, so she contributes a normal X to all sons. No sons will be affected. However, ALL daughters will be carriers (receiving the father's mutant X)."
  },
  {
    q: "A genetic counselor notices that two unaffected parents who are first cousins have an affected child. The counselor suspects an autosomal recessive disorder. The consanguinity supports this suspicion because:",
    choices: [
      "Consanguinity causes new mutations",
      "Related parents are more likely to both carry the same rare recessive allele",
      "Consanguinity increases X-linked inheritance",
      "Consanguinity causes dominant disorders"
    ],
    correct: 1,
    explain: "Consanguinity (related parents) increases the probability that both parents carry the same rare recessive allele from a common ancestor, raising the risk of homozygous affected offspring."
  },
  {
    q: "A geneticist examines a pedigree with a disorder appearing in every generation, affecting both males and females equally, with each affected individual having at least one affected parent. Approximately half of each affected person's children are also affected. This is most consistent with:",
    choices: ["Autosomal recessive", "Autosomal dominant", "X-linked recessive", "Mitochondrial"],
    correct: 1,
    explain: "Both sexes equally affected + every generation (vertical) + 50% of offspring affected + at least one affected parent = autosomal dominant inheritance."
  },
  {
    q: "A woman with an X-linked dominant disorder marries an unaffected man. What is the expected pattern among their children?",
    choices: [
      "All daughters affected, no sons affected",
      "50% of all children affected regardless of sex",
      "Only sons affected",
      "No children affected"
    ],
    correct: 1,
    explain: "An affected woman (heterozygous) passes the mutant X to 50% of children. Both sons and daughters have a 50% chance of inheriting the affected X, so 50% of all children are affected regardless of sex."
  }
]);
