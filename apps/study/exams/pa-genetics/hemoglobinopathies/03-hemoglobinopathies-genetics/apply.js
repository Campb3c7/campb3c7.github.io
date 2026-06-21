addQuestions([
  {
    q: "A couple of African American descent are both carriers of sickle cell trait (AS). They want to know the risk to their children. The correct genetic counseling is:",
    choices: [
      "25% chance of sickle cell disease (SS), 50% sickle cell trait (AS), 25% normal (AA)",
      "50% chance of sickle cell disease",
      "All children will have sickle cell trait",
      "No risk because trait is not a disease"
    ],
    correct: 0,
    explain: "AS × AS follows standard autosomal recessive genetics: 25% AA (normal), 50% AS (trait), 25% SS (disease). Each pregnancy carries a 25% risk of sickle cell disease. Carrier screening before pregnancy allows informed reproductive decisions."
  },
  {
    q: "A public health official asks why the sickle cell mutation persists at high frequency in sub-Saharan Africa despite causing a fatal disease in homozygotes. The best explanation is:",
    choices: [
      "The mutation is too recent to have been eliminated by natural selection",
      "Heterozygous carriers (AS) have a selective survival advantage through malaria resistance, maintaining the allele in the population",
      "All individuals with SS survive to reproductive age with modern medicine",
      "The mutation rate is too high for selection to eliminate it"
    ],
    correct: 1,
    explain: "This is heterozygote advantage (balanced polymorphism). AS carriers resist malaria, giving them a survival advantage in endemic regions. Although SS is often fatal, the survival benefit to AS carriers keeps the S allele at high frequency in the population."
  },
  {
    q: "A Southeast Asian couple is found to carry alpha thalassemia deletions. The husband is missing 2 alpha genes on one chromosome (−−/αα, cis deletion) and the wife is missing 1 alpha gene on each chromosome (−α/−α, trans deletion). Their risk of having a child with hydrops fetalis is:",
    choices: [
      "25% — the husband can pass the −− chromosome, and if combined with −α from the wife, the child would have HbH disease, not hydrops",
      "0% — neither parent can transmit −− to combine with −− from the other",
      "50%",
      "100%"
    ],
    correct: 0,
    explain: "Hydrops fetalis (−−/−−) requires inheriting −− from both parents. The husband can pass −−, but the wife can only pass −α (her deletions are in trans). The worst outcome is −−/−α (HbH disease, 3 deletions), not hydrops. This is why the cis vs trans distinction matters clinically in alpha thalassemia."
  },
  {
    q: "A patient with sickle cell disease (SS) is found to also have hereditary persistence of fetal hemoglobin (HPFH). Compared to typical SS patients, this individual's clinical course would most likely be:",
    choices: [
      "Identical — HPFH has no effect on sickle cell disease",
      "Worse — excess HbF interferes with oxygen delivery",
      "Milder — elevated HbF (α2γ2) does not sickle and dilutes HbS, reducing sickling crises",
      "More severe due to increased hemoglobin instability"
    ],
    correct: 2,
    explain: "HbF does not polymerize like HbS. Co-inheritance of HPFH increases HbF levels, diluting HbS in each red cell and reducing sickling. This is also the therapeutic rationale for hydroxyurea, which increases HbF production."
  }
]);
