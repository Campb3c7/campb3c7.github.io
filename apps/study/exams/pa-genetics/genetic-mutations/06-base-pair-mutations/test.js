addQuestions([
  {
    q: "A base pair substitution that does not change the amino acid encoded is called a:",
    choices: ["Missense mutation", "Nonsense mutation", "Silent mutation", "Frame-shift mutation"],
    correct: 2,
    explain: "A silent mutation changes a base pair but does not alter the amino acid. The substitution is tolerated because multiple codons can encode the same amino acid (redundancy of the genetic code)."
  },
  {
    q: "A base pair substitution that changes the codon to encode a different amino acid is called a:",
    choices: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Splice site mutation"],
    correct: 1,
    explain: "A missense mutation changes one codon to encode a different amino acid. This may cause the protein to be structurally abnormal or unstable."
  },
  {
    q: "A base pair substitution that creates a premature stop codon is called a:",
    choices: ["Silent mutation", "Missense mutation", "Nonsense mutation", "In-frame mutation"],
    correct: 2,
    explain: "A nonsense mutation changes an amino acid codon into a premature stop codon, ending translation before the protein is complete."
  },
  {
    q: "A nonsense mutation results in:",
    choices: [
      "No change in the protein",
      "A single amino acid change",
      "A truncated protein that is abnormal or quickly degraded",
      "Increased gene expression"
    ],
    correct: 2,
    explain: "Nonsense mutations create premature stop codons, producing truncated proteins that are either abnormally shaped with altered function or very unstable and quickly degraded."
  },
  {
    q: "Splice site mutations occur at which locations?",
    choices: ["Centromeres", "Promoter regions", "Intron-exon boundaries", "Telomeres"],
    correct: 2,
    explain: "Splice site mutations are single base mutations at intron-exon boundaries that interfere with the normal splicing of introns during mRNA processing."
  },
  {
    q: "What can splice site mutations result in?",
    choices: [
      "Normal protein production",
      "Partial deletion of an exon or excision within an exon",
      "Increased gene expression only",
      "Pyrimidine dimer formation"
    ],
    correct: 1,
    explain: "Splice site mutations can cause partial deletion of exons or aberrant excision, altering the coding sequence and producing structurally unstable or abnormal proteins."
  },
  {
    q: "Promoter mutations can affect protein production by:",
    choices: [
      "Changing amino acid sequence directly",
      "Altering regulation of transcription, resulting in increased or decreased gene expression",
      "Creating premature stop codons",
      "Forming pyrimidine dimers"
    ],
    correct: 1,
    explain: "Promoter mutations alter transcription regulation — they can decrease RNA polymerase affinity for the promoter site or affect enhancer/transcription factor function, resulting in net increased or decreased gene expression."
  },
  {
    q: "A frame-shift mutation occurs when the number of deleted or inserted base pairs is:",
    choices: ["A multiple of 3", "Not a multiple of 3", "Exactly 3", "Greater than 10"],
    correct: 1,
    explain: "Frame-shift mutations occur when the number of deleted or inserted bases is NOT a multiple of 3. This shifts the reading frame, causing all downstream amino acids to be different."
  },
  {
    q: "An in-frame mutation occurs when the number of deleted or inserted base pairs is:",
    choices: ["Not a multiple of 3", "A multiple of 3", "Exactly 1", "Always greater than 9"],
    correct: 1,
    explain: "In-frame mutations involve deletions or insertions that ARE a multiple of 3 (3, 6, 9, etc.), maintaining the reading frame. Only a few amino acids are changed."
  },
  {
    q: "Frame-shift mutations are especially harmful because:",
    choices: [
      "They only affect one amino acid",
      "All amino acids after the mutation site are different",
      "They only occur in non-coding regions",
      "They always create stop codons"
    ],
    correct: 1,
    explain: "Frame-shift mutations shift the reading frame so that ALL amino acids downstream of the mutation are different, resulting in either an abnormal protein or no protein at all."
  },
  {
    q: "Compared to frame-shift mutations, in-frame mutations are generally:",
    choices: [
      "More severe",
      "Less severe because the protein may still function",
      "Equally severe",
      "Always silent"
    ],
    correct: 1,
    explain: "In-frame mutations change only a few amino acids while maintaining the reading frame, so the protein may still function. Frame-shift mutations alter all downstream amino acids and are generally more devastating."
  },
  {
    q: "Single base pair mutations in coding DNA are:",
    choices: [
      "Observable microscopically",
      "Not observable microscopically",
      "Only found in germ line cells",
      "Always lethal"
    ],
    correct: 1,
    explain: "Single base pair mutations are too small to be seen under a microscope. Chromosomal alterations (gain or loss of whole chromosomes) are observable microscopically."
  },
  {
    q: "Which type of base pair substitution is generally most severe?",
    choices: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Promoter mutation"],
    correct: 2,
    explain: "Nonsense mutations are generally most severe among single base substitutions because they create premature stop codons, truncating the entire protein. Missense changes only one amino acid; silent mutations have no effect."
  }
]);
