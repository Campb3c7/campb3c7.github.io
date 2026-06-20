addQuestions([
  {
    q: "A patient with sickle cell disease has a single base pair change in the beta-globin gene that substitutes valine for glutamic acid at position 6. The rest of the protein is synthesized normally. This mutation is best classified as:",
    choices: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Frame-shift mutation"],
    correct: 1,
    explain: "Sickle cell disease results from a missense mutation — a single base pair substitution that changes one codon to encode a different amino acid (glutamic acid → valine). The rest of the reading frame is unaffected."
  },
  {
    q: "A researcher discovers that a patient's gene has a single base change that converts a codon for tryptophan (UGG) into a stop codon (UGA). The resulting protein is only 30% of its normal length. This mutation is classified as:",
    choices: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Splice site mutation"],
    correct: 2,
    explain: "A single base change converting an amino acid codon to a premature stop codon is a nonsense mutation. Translation terminates early, producing a truncated protein (only 30% of normal length)."
  },
  {
    q: "A child with cystic fibrosis is found to have a deletion of 3 base pairs in the CFTR gene, removing a single phenylalanine residue (ΔF508). The remaining amino acids in the protein are in the correct reading frame. This deletion is classified as:",
    choices: ["Frame-shift mutation", "In-frame mutation", "Nonsense mutation", "Silent mutation"],
    correct: 1,
    explain: "Deletion of 3 base pairs (a multiple of 3) is an in-frame mutation — the reading frame is preserved, and only one amino acid is removed. This is the classic ΔF508 mutation in cystic fibrosis."
  },
  {
    q: "A genetics lab analyzes a patient's DNA and finds that 2 base pairs have been deleted from a gene. The lab predicts this will have devastating effects on the protein product. Their concern is based on the fact that this deletion will cause:",
    choices: [
      "An in-frame change affecting only nearby amino acids",
      "A frame-shift changing all downstream amino acids",
      "A silent mutation with no effect",
      "A splice site mutation"
    ],
    correct: 1,
    explain: "Deletion of 2 base pairs (not a multiple of 3) causes a frame-shift mutation. The reading frame shifts at the deletion point, making ALL subsequent amino acids incorrect. This typically produces a nonfunctional protein."
  },
  {
    q: "A researcher discovers that a patient has a single base mutation at the boundary between an intron and exon in a hemoglobin gene. The mature mRNA produced from this gene retains part of the intron sequence. This mutation is classified as a:",
    choices: ["Missense mutation", "Nonsense mutation", "Splice site mutation", "Promoter mutation"],
    correct: 2,
    explain: "A mutation at an intron-exon boundary is a splice site mutation. It disrupts normal mRNA processing, causing the intron to be retained in the mature mRNA, which alters the coding sequence and produces an abnormal protein."
  },
  {
    q: "A patient is found to have a mutation in the promoter region of the erythropoietin gene that decreases RNA polymerase binding affinity. The most likely consequence is:",
    choices: [
      "A truncated erythropoietin protein",
      "A missense change in erythropoietin",
      "Reduced mRNA production and decreased erythropoietin levels",
      "A frame-shift in the erythropoietin coding sequence"
    ],
    correct: 2,
    explain: "Promoter mutations that decrease RNA polymerase binding affinity reduce transcription, leading to decreased mRNA production and therefore decreased protein levels. The protein sequence itself is unchanged."
  },
  {
    q: "A molecular biologist sequences a patient's gene and finds a single base change in the third position of a codon. Further analysis shows the protein produced is identical to the normal protein. This mutation is best classified as:",
    choices: ["Missense", "Nonsense", "Silent", "Frame-shift"],
    correct: 2,
    explain: "A base change that does not alter the amino acid is a silent mutation. This is common at the third (wobble) position of codons, where multiple codons can encode the same amino acid."
  },
  {
    q: "A patient presents with a severe genetic disorder. Genetic testing reveals a single base insertion in the coding region of the responsible gene. The physician explains that this type of mutation is particularly devastating because it changes the reading frame. Compared to a deletion of 3 base pairs in the same gene, this single base insertion is expected to be:",
    choices: [
      "Less severe — single base changes have minimal effects",
      "More severe — the frame-shift affects all downstream amino acids, while a 3-bp deletion is in-frame",
      "Equally severe — both change the same number of amino acids",
      "Less severe — insertions are always silent"
    ],
    correct: 1,
    explain: "A single base insertion causes a frame-shift (not a multiple of 3), altering ALL downstream amino acids. A 3-bp deletion is in-frame (multiple of 3) and only affects one or a few amino acids. Frame-shift mutations are generally more devastating."
  },
  {
    q: "A genetics student is asked to rank base pair substitution types from least to most severe in their typical effect on protein function. The correct ranking is:",
    choices: [
      "Nonsense → missense → silent",
      "Silent → missense → nonsense",
      "Missense → silent → nonsense",
      "Silent → nonsense → missense"
    ],
    correct: 1,
    explain: "Silent mutations have no effect (amino acid unchanged). Missense mutations change one amino acid (may or may not affect function). Nonsense mutations create premature stop codons, truncating the entire protein — generally the most severe."
  }
]);
