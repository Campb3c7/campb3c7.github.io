addQuestions([
  {
    q: "A biochemistry student is analyzing a segment of double-stranded DNA and finds that 30% of the bases are adenine. What percentage of the bases are guanine?",
    choices: ["10%", "20%", "30%", "40%"],
    correct: 1,
    explain: "If adenine is 30%, then thymine must also be 30% (A pairs with T). That accounts for 60%, leaving 40% for G+C. Since G pairs with C, guanine = 20% and cytosine = 20%."
  },
  {
    q: "A researcher is studying a region of DNA that is very resistant to denaturation (separation of strands) by heat. She hypothesizes this region is enriched in a specific base pair. Which base pair is most likely enriched in this region?",
    choices: [
      "Adenine-Thymine (2 hydrogen bonds)",
      "Guanine-Cytosine (3 hydrogen bonds)",
      "Adenine-Uracil (2 hydrogen bonds)",
      "Thymine-Guanine (1 hydrogen bond)"
    ],
    correct: 1,
    explain: "G-C base pairs have 3 hydrogen bonds (vs. 2 for A-T), making them stronger and more resistant to heat denaturation. Regions rich in G-C are harder to denature."
  },
  {
    q: "A genetics professor asks students to arrange DNA structural components from the least condensed to the most condensed form. A student correctly answers:",
    choices: [
      "Chromosome → chromatin loop → solenoid → nucleosome → DNA",
      "DNA → nucleosome → solenoid → chromatin loop → chromosome",
      "Nucleosome → DNA → solenoid → chromosome → chromatin loop",
      "Solenoid → nucleosome → DNA → chromatin loop → chromosome"
    ],
    correct: 1,
    explain: "DNA packaging from least to most condensed: bare DNA → wraps around histones to form nucleosomes → nucleosomes coil into solenoids → solenoids form chromatin loops → fully condensed chromosome."
  },
  {
    q: "A molecular biologist discovers a mutation that disrupts histone proteins, preventing DNA from wrapping around them. Which level of DNA packaging would be directly disrupted first?",
    choices: ["Solenoid formation", "Nucleosome formation", "Chromatin loop formation", "Chromosome condensation"],
    correct: 1,
    explain: "Nucleosome formation is the first level of DNA packaging, where DNA coils around a histone core. Without functional histones, nucleosomes cannot form, and all subsequent levels of packaging are disrupted."
  },
  {
    q: "A student examining a DNA molecule notes that nucleotides can only be added to the 3' end during replication. When describing direction relative to a gene, the 5' direction is referred to as:",
    choices: ["Downstream", "Upstream", "Lateral", "Central"],
    correct: 1,
    explain: "The 5' direction is 'upstream' and the 3' direction is 'downstream' when referring to orientation along a gene. Nucleotides are added to the 3' (downstream) end."
  },
  {
    q: "A forensic scientist is asked to explain why DNA evidence is so specific to individuals. She explains that the unique sequence of bases along each person's chromosomes creates a unique pattern. The fundamental unit that carries this genetic information within the DNA strand is the:",
    choices: ["Phosphate group", "Deoxyribose sugar", "Nitrogenous base", "Histone protein"],
    correct: 2,
    explain: "The nitrogenous bases (A, T, G, C) encode the genetic information. While the phosphate and sugar form the backbone structure, the sequence of bases is what makes each person's DNA unique."
  }
]);
