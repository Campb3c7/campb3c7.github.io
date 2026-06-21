addQuestions([
  {
    q: "A carrier mother of an X-linked recessive disorder has children with an unaffected man. The risk that each son will be affected is:",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 2,
    explain: "Carrier mother (XAXa) × normal father (XAY): 50% of sons will be affected (XaY) and 50% normal (XAY). Sons get one of the mother's two X chromosomes at random."
  },
  {
    q: "A carrier mother of an X-linked recessive disorder has children with an unaffected man. The risk that each daughter will be a carrier is:",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 2,
    explain: "50% of daughters will be carriers (XAXa) and 50% will be normal (XAXA). No daughters will be affected (they always get father's normal X)."
  },
  {
    q: "An affected father with an X-linked recessive disorder has children with a normal (non-carrier) mother. Which is true about their offspring?",
    choices: [
      "50% of sons will be affected",
      "All daughters will be carriers, all sons will be normal",
      "All sons will be affected",
      "50% of daughters will be affected"
    ],
    correct: 1,
    explain: "Affected father (XaY) × normal mother (XAXA): all daughters get his Xa → all are carriers (XAXa). All sons get his Y (not his X) → all are normal (XAY)."
  },
  {
    q: "An affected father with an X-linked dominant disorder has children with an unaffected mother. The percentage of affected daughters is:",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 3,
    explain: "XLD affected father (XAY) × normal mother (XaXa): all daughters receive his mutant X → 100% of daughters are affected. All sons receive his Y → 0% of sons are affected."
  },
  {
    q: "An affected mother with an X-linked dominant disorder has children with an unaffected father. The risk to each child is:",
    choices: [
      "All children affected",
      "50% of sons and 50% of daughters affected",
      "Only sons are at risk",
      "Only daughters are at risk"
    ],
    correct: 1,
    explain: "XLD affected mother (XAXa) × normal father (XaY): 50% of sons affected (XAY) and 50% of daughters affected (XAXa). Both sexes have equal 50% risk."
  },
  {
    q: "A man with a Y-linked trait has children. The percentage of sons who will inherit the trait is:",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 3,
    explain: "Y-linked: father passes his Y to all sons → 100% of sons inherit the trait. Daughters receive his X, not Y → 0% of daughters are affected."
  },
  {
    q: "A woman with a mitochondrial disorder has children with an unaffected man. The percentage of children who inherit the mutation is:",
    choices: ["0%", "50%", "75%", "100%"],
    correct: 3,
    explain: "Mitochondrial DNA is inherited exclusively from the mother. An affected mother passes her mitochondria to 100% of children (both sons and daughters). Severity varies due to heteroplasmy."
  },
  {
    q: "A man with a mitochondrial disorder has children with an unaffected woman. The percentage of children who inherit the mutation is:",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 0,
    explain: "Sperm contribute almost no mitochondria to the zygote. An affected father transmits the mutation to 0% of children."
  },
  {
    q: "A carrier mother of hemophilia A marries an affected man with hemophilia A. What is the risk that their daughter will be affected?",
    choices: ["0%", "25%", "50%", "100%"],
    correct: 2,
    explain: "Carrier mother (XAXa) × affected father (XaY): daughters can be XAXa (carrier, 50%) or XaXa (affected, 50%). This is one of the rare scenarios where a female can be affected with an XLR disorder — she inherits the mutant allele from both parents."
  }
]);
