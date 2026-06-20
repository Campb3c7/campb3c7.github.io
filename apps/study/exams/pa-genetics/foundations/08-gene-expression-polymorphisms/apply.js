addQuestions([
  {
    q: "A genetics professor shows her students a slide of two patients with Marfan syndrome. Patient A has tall stature, arachnodactyly, and severe aortic root dilation. Patient B has mild joint hypermobility and no cardiac involvement. Both have the same FBN1 mutation. The professor asks: 'What term describes the difference in severity between these two patients?'",
    choices: ["Gene expression", "Expressivity", "Penetrance", "Polymorphism"],
    correct: 1,
    explain: "Expressivity refers to the degree or intensity to which a phenotype is expressed. Both patients express the same gene mutation, but the severity (expressivity) differs — from severe multi-system to mild features."
  },
  {
    q: "A pathologist examines liver tissue and finds it produces albumin, while brain tissue from the same patient does not. Both tissues have identical DNA. The pathologist explains this difference by noting that:",
    choices: [
      "Liver cells have extra copies of the albumin gene",
      "Brain cells have deleted the albumin gene",
      "The albumin gene is expressed in liver cells but not in brain cells",
      "Liver cells undergo meiosis to produce albumin"
    ],
    correct: 2,
    explain: "All cells contain the same genes, but selective gene expression determines which proteins are made. The albumin gene is active (expressed) in liver cells but turned off in brain cells."
  },
  {
    q: "A genetic counselor is explaining a patient's test results. The patient has one normal allele and one disease-causing mutant allele for the CFTR gene. This patient's genotype is best described as:",
    choices: ["Homozygous wild type", "Homozygous mutant", "Heterozygous", "Compound heterozygous"],
    correct: 2,
    explain: "One wild-type allele + one mutant allele = heterozygous (Aa). Homozygous would require two identical alleles (AA or aa). Compound heterozygous requires two different mutant alleles."
  },
  {
    q: "A patient with cystic fibrosis is found to carry two different mutations in the CFTR gene — one inherited from each parent, neither of which is the wild-type allele. This genotype is best described as:",
    choices: ["Homozygous", "Heterozygous", "Compound heterozygous", "Hemizygous"],
    correct: 2,
    explain: "Two different mutant alleles of the same gene = compound heterozygous. This is distinct from simple heterozygous (one wild type + one mutant) and homozygous (two identical alleles)."
  },
  {
    q: "A forensic scientist uses DNA analysis to match a suspect to evidence at a crime scene. The technique she uses examines regions of the genome where the same short DNA sequence (2-9 base pairs) is repeated multiple times, with the number of repeats varying between individuals. She is analyzing:",
    choices: ["Single nucleotide polymorphisms", "VNTRs (minisatellites)", "STRs (microsatellites)", "Gene expression profiles"],
    correct: 2,
    explain: "STRs (short tandem repeats / microsatellites) have repeat sequences of 2-9 base pairs. They are the standard for forensic DNA profiling because repeat number varies highly between individuals. VNTRs have longer repeats (10-100 bp)."
  },
  {
    q: "A researcher is conducting a genome-wide association study (GWAS) to identify genetic risk factors for type 2 diabetes. She analyzes hundreds of thousands of variants, each representing a single-base difference at specific positions across the genome. These variants are known as:",
    choices: ["VNTRs", "STRs", "Introns", "Single nucleotide polymorphisms (SNPs)"],
    correct: 3,
    explain: "SNPs are single nucleotide variants at specific chromosome positions — the most numerous type of polymorphism in humans. GWAS studies use SNPs to identify associations between genetic variants and disease risk."
  },
  {
    q: "A medical student is confused about the difference between VNTRs and STRs. Her professor clarifies that the main distinguishing feature is:",
    choices: [
      "VNTRs are in coding regions while STRs are in non-coding regions",
      "VNTRs have longer repeat units (10-100 bp) while STRs have shorter repeats (2-9 bp)",
      "VNTRs are found only on sex chromosomes while STRs are on autosomes",
      "VNTRs are inherited maternally while STRs are inherited paternally"
    ],
    correct: 1,
    explain: "The key distinction is repeat unit length: VNTRs (minisatellites) have repeats of 10-100 base pairs, while STRs (microsatellites) have shorter repeats of 2-9 base pairs. Both can be found throughout the genome."
  },
  {
    q: "A genetics professor asks: 'A DNA variant is found in 0.5% of the population. Is this a polymorphism?' The correct answer is:",
    choices: [
      "Yes — any DNA variation is a polymorphism",
      "No — polymorphisms must occur in at least 1% of the population",
      "Yes — polymorphisms are defined as variants in at least 0.1% of the population",
      "No — polymorphisms only occur in coding regions"
    ],
    correct: 1,
    explain: "Polymorphisms are defined as DNA sequence variations occurring in at least 1% of the population. A variant found in 0.5% would be classified as a rare variant, not a polymorphism."
  }
]);
