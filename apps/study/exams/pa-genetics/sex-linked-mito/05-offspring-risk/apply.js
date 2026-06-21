addQuestions([
  {
    q: "A woman whose father had hemophilia A is pregnant. Her husband is unaffected. She asks about the risk to their baby. The correct counseling is:",
    choices: [
      "The baby has no risk regardless of sex",
      "She is an obligate carrier — if the baby is a boy, there is a 50% chance he will have hemophilia A",
      "Only daughters are at risk",
      "The baby will definitely have hemophilia A if male"
    ],
    correct: 1,
    explain: "All daughters of a hemophilic father are obligate carriers (they received his only X, which carries the mutation). As a carrier (XAXa) with an unaffected husband (XAY), each son has a 50% chance of being affected. Daughters have a 50% chance of being carriers."
  },
  {
    q: "A man has Rett syndrome-spectrum disorder (MECP2 duplication, X-linked dominant). His wife is unaffected. They want to know the risk to their children. The geneticist should explain:",
    choices: [
      "50% of all children will be affected",
      "All daughters will be affected (receive his X) and no sons will be affected (receive his Y)",
      "Only sons will be affected",
      "No children will be affected because Rett only affects females"
    ],
    correct: 1,
    explain: "In X-linked dominant: affected father passes his mutant X to ALL daughters (100% affected) and his Y to ALL sons (0% affected). This is a key distinguishing feature of XLD from the affected father — daughters and sons are affected in an all-or-none pattern by sex."
  },
  {
    q: "A couple presents for genetic counseling. The woman has Leber hereditary optic neuropathy (LHON), a mitochondrial disorder. Her husband is unaffected. They want to know the risk to future children. The most accurate statement is:",
    choices: [
      "Only their sons are at risk",
      "Only their daughters are at risk",
      "All children will inherit the mitochondrial mutation, but clinical expression varies due to heteroplasmy — severity cannot be predicted for individual children",
      "There is a 50% chance for each child"
    ],
    correct: 2,
    explain: "Mitochondrial inheritance: an affected mother passes her mtDNA to all children regardless of sex. However, due to heteroplasmy and the mitochondrial bottleneck, the proportion of mutant mitochondria — and therefore clinical severity — varies unpredictably among children."
  },
  {
    q: "A genetics student is analyzing a pedigree: an affected man has unaffected sons and all daughters are affected. The affected daughters pass the trait to approximately 50% of their children regardless of sex. This inheritance pattern is most consistent with:",
    choices: ["Autosomal dominant", "X-linked recessive", "X-linked dominant", "Mitochondrial"],
    correct: 2,
    explain: "Affected father → all daughters affected, no sons affected = X-linked dominant. The affected daughters (heterozygous) then pass the mutant X to 50% of offspring regardless of sex, confirming XLD. If it were mitochondrial, the affected father would have had zero affected children."
  }
]);
