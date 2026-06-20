addQuestions([
  {
    q: "A genetics professor asks a student to explain why nondisjunction during meiosis I produces different gametic outcomes than nondisjunction during meiosis II. The correct answer is:",
    choices: [
      "Meiosis I nondisjunction affects sister chromatids; meiosis II affects homologs",
      "Meiosis I nondisjunction produces four abnormal gametes; meiosis II produces two abnormal and two normal",
      "Meiosis I and II nondisjunction produce identical outcomes",
      "Meiosis II nondisjunction is more severe because it affects homologous chromosomes"
    ],
    correct: 1,
    explain: "In meiosis I nondisjunction, homologs fail to separate, so all four resulting gametes are abnormal (two have an extra chromosome, two are missing one). In meiosis II, sister chromatids fail to separate, producing two normal gametes and two abnormal ones (one extra, one missing)."
  },
  {
    q: "A couple's newborn is diagnosed with trisomy 21 after karyotyping reveals 47, XY, +21. The most likely underlying mechanism is:",
    choices: [
      "Nondisjunction during meiosis I in the oocyte",
      "Nondisjunction during meiosis II in the sperm",
      "A Robertsonian translocation in the father",
      "Mitotic failure during embryonic development"
    ],
    correct: 0,
    explain: "Approximately 90% of trisomy 21 cases result from nondisjunction during meiosis I in the oocyte (maternal origin). About 10% result from paternal nondisjunction. Robertsonian translocations account for ~5% of Down syndrome cases."
  },
  {
    q: "A medical student asks why monosomy X (Turner syndrome) can survive to birth while autosomal monosomies cannot. The best explanation is:",
    choices: [
      "The X chromosome is smaller than all autosomes",
      "X-inactivation means normal cells already function with only one active X, so loss of one X is better tolerated",
      "Turner syndrome always involves mosaicism",
      "Autosomal monosomies are caused by a different mechanism than sex chromosome monosomies"
    ],
    correct: 1,
    explain: "Normal females already inactivate one X chromosome (Lyon hypothesis), so cells routinely function with one active X. Loss of one X in Turner syndrome is therefore more tolerable than loss of an autosome, where both copies are needed for normal gene dosage."
  }
]);
