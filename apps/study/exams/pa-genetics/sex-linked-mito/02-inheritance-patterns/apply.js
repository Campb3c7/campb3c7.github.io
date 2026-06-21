addQuestions([
  {
    q: "A family presents to a geneticist. The grandfather has hemophilia A. His daughter is unaffected, but her son (the grandfather's grandson) is now diagnosed with hemophilia A. The daughter's other son is unaffected. This pedigree pattern is most consistent with:",
    choices: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Mitochondrial"],
    correct: 2,
    explain: "Affected grandfather → obligate carrier daughter → affected grandson with unaffected brother. The trait skips a generation through the carrier female with no male-to-male transmission — classic X-linked recessive."
  },
  {
    q: "A man with an X-linked dominant condition has children with an unaffected woman. The expected pattern among their offspring is:",
    choices: [
      "All sons affected, no daughters affected",
      "All daughters affected, no sons affected",
      "50% of all children affected regardless of sex",
      "No children affected"
    ],
    correct: 1,
    explain: "In XLD, the affected father passes his mutant X to all daughters (affected) and his Y to all sons (unaffected). This is a distinguishing feature of XLD — all daughters of an affected father are affected."
  },
  {
    q: "A woman with a mitochondrial disorder has four children — two sons and two daughters. Her husband is unaffected. The expected inheritance pattern is:",
    choices: [
      "Only daughters are affected",
      "Only sons are affected",
      "All four children inherit the mitochondrial mutation",
      "50% of children are affected"
    ],
    correct: 2,
    explain: "Mitochondrial DNA is inherited exclusively from the mother. An affected mother passes her mitochondria to all children regardless of sex. All four children inherit the mutation, though clinical severity may vary due to heteroplasmy."
  },
  {
    q: "A genetics student is asked to identify the inheritance pattern of a trait that affects only males in every generation, with every affected father having only affected sons. This pattern is:",
    choices: ["X-linked recessive", "Autosomal dominant with sex-limited expression", "Y-linked (holandric)", "X-linked dominant"],
    correct: 2,
    explain: "Father-to-all-sons transmission with only males affected in every generation = Y-linked (holandric) inheritance. XLR cannot show father-to-son transmission (fathers give Y, not X, to sons). Autosomal dominant would affect both sexes."
  }
]);
