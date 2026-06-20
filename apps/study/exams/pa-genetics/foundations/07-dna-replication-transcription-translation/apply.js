addQuestions([
  {
    q: "A molecular biologist is studying a drug that specifically blocks RNA polymerase II. Which cellular process would be most directly inhibited?",
    choices: ["DNA replication", "mRNA transcription", "Translation at the ribosome", "DNA packaging into nucleosomes"],
    correct: 1,
    explain: "RNA polymerase II is essential for transcription — it binds to the promoter site on DNA and synthesizes mRNA. Blocking it prevents mRNA production. DNA replication uses DNA polymerase; translation uses ribosomes."
  },
  {
    q: "A researcher discovers that a cell line has a mutation preventing the removal of introns from primary mRNA. What would be the most direct consequence?",
    choices: [
      "DNA cannot replicate",
      "Mature mRNA contains non-coding sequences, leading to abnormal proteins",
      "tRNA cannot carry amino acids",
      "Ribosomes cannot form"
    ],
    correct: 1,
    explain: "If introns are not excised, the mature mRNA retains non-coding sequences. When translated, these extra sequences produce abnormal, non-functional proteins. Normal processing removes introns and splices exons together."
  },
  {
    q: "A biochemistry student is examining a ribosome moving along an mRNA strand. The ribosome encounters the codon UAA. What happens next?",
    choices: [
      "A new amino acid is added to the polypeptide chain",
      "Translation starts from the beginning again",
      "Translation terminates and the ribosome disassembles",
      "The ribosome switches to transcription"
    ],
    correct: 2,
    explain: "UAA is a stop codon. When the ribosome encounters it, translation terminates — the ribosome disassembles and the completed polypeptide chain is released. AUG is the start codon."
  },
  {
    q: "A patient has a genetic condition caused by a mutation in the gene's promoter region. The mutation prevents RNA polymerase II from binding. The protein encoded by this gene will be:",
    choices: [
      "Produced normally but misfolded",
      "Produced in excess",
      "Not produced at all",
      "Produced but truncated"
    ],
    correct: 2,
    explain: "If RNA polymerase II cannot bind the promoter, transcription cannot begin. No mRNA is made, so no protein can be produced through translation. This is a complete loss of gene expression."
  },
  {
    q: "A pharmacology student learns that a certain antibiotic works by binding to bacterial ribosomes and preventing them from reading mRNA. This drug specifically inhibits which process?",
    choices: ["DNA replication", "Transcription", "Translation", "RNA processing"],
    correct: 2,
    explain: "Ribosomes are the site of translation (mRNA → protein). An antibiotic that prevents ribosomes from reading mRNA blocks translation. Many antibiotics (tetracycline, aminoglycosides) work by this mechanism."
  },
  {
    q: "A genetics student is asked: 'DNA is in the nucleus, but proteins are made in the cytoplasm. What molecule carries the genetic information from nucleus to cytoplasm?' The correct answer is:",
    choices: ["tRNA", "rRNA", "mRNA", "DNA polymerase"],
    correct: 2,
    explain: "mRNA (messenger RNA) is transcribed from DNA in the nucleus, undergoes processing (intron removal, 5' cap, poly(A) tail), then exits to the cytoplasm where ribosomes translate it into protein."
  },
  {
    q: "A researcher observes that DNA replication in human cells completes surprisingly quickly despite the enormous size of the genome. She attributes this to a specific feature of replication. Which feature?",
    choices: [
      "Replication proceeds from only one end",
      "Replication begins at multiple points simultaneously via replication bubbles",
      "Only exons are replicated",
      "Replication occurs during mitosis when chromosomes are condensed"
    ],
    correct: 1,
    explain: "Replication begins at multiple replication bubbles simultaneously across the chromosome, rather than proceeding linearly from one end. This parallelism allows the enormous genome to be copied efficiently."
  },
  {
    q: "A molecular biology student is tracing the path of genetic information in a cell. She correctly diagrams the flow as: DNA in the nucleus → an intermediate molecule exits to the cytoplasm → protein is assembled at the ribosome. The intermediate molecule she diagrams is single-stranded, uses ribose sugar, and contains uracil instead of thymine. This molecule is:",
    choices: ["tRNA", "rRNA", "mRNA", "DNA"],
    correct: 2,
    explain: "mRNA fits all descriptions: single-stranded, contains ribose sugar, uses uracil instead of thymine, transcribed in the nucleus, and travels to the cytoplasm for translation at ribosomes."
  }
]);
