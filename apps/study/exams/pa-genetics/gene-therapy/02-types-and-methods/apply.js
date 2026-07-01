addQuestions([
  {
    q: "A patient with sickle cell disease undergoes a procedure where her hematopoietic stem cells are removed from her body, genetically corrected in a laboratory using a viral vector, and then re-infused back into her bloodstream. This procedure is best classified as:",
    choices: [
      "In vivo, germline gene therapy",
      "Ex vivo, somatic gene therapy",
      "In vivo, somatic gene therapy",
      "Ex vivo, germline gene therapy"
    ],
    correct: 1,
    explain: "Cells taken outside the body, manipulated, and re-infused = ex vivo ('out of the living'). Since the target is her own blood-forming (somatic) cells rather than gametes/embryos, this is also somatic gene therapy — changes cannot be passed to her offspring."
  },
  {
    q: "A gene therapy for cystic fibrosis is designed to be delivered by direct injection into a patient's lung tissue, where a viral vector carrying a corrected CFTR gene enters lung cells without any cells being removed from the body. This approach is:",
    choices: [
      "Ex vivo",
      "In vivo",
      "Germline",
      "Non-viral"
    ],
    correct: 1,
    explain: "In vivo ('within the living') gene therapy means cells are not removed from the body — the genetically modified transporter (viral vector) is used to manipulate genes inside the body directly, as described here with direct lung tissue injection."
  },
  {
    q: "Regulators are evaluating two proposed gene therapies for a rare metabolic disorder. Therapy X targets liver cells and cannot be passed to a patient's children. Therapy Y targets early-stage embryos, and any genetic changes would be present in every cell of the resulting individual, including their reproductive cells. Which statement is most accurate?",
    choices: [
      "Both therapies carry identical regulatory hurdles",
      "Therapy X is somatic (highly regulated but established); Therapy Y is germline (new, with significant legal/societal considerations and inheritable risk)",
      "Therapy Y is somatic; Therapy X is germline",
      "Neither therapy requires any regulatory oversight"
    ],
    correct: 1,
    explain: "Therapy X (targets body/liver cells, not passed to offspring) is somatic gene therapy — researched for decades and highly regulated. Therapy Y (targets embryos, heritable) is germline gene therapy — new, with significant legal and societal considerations, since adverse effects would extend to offspring."
  },
  {
    q: "A gene-editing company wants to correct a single point mutation in the DMD gene responsible for Duchenne muscular dystrophy. They plan to use a guide RNA to locate the mutated sequence and a protein to cut the DNA at that precise location so a correction can be made. This technology is:",
    choices: [
      "SCNT",
      "CRISPR — using guide RNA to recognize the target sequence and Cas9 protein to cut the DNA",
      "Recombinant DNA technology",
      "TPMT-based gene therapy"
    ],
    correct: 1,
    explain: "CRISPR uses guide RNA to recognize the DNA sequence to be edited, and the Cas9 protein to cut the DNA at that location — essentially a molecular 'FIND' function followed by a cut, allowing scientists to make repairs."
  },
  {
    q: "A vector used in a gene therapy trial is modified so that its complete viral genome is not used. The researchers explain this modification is essential for patient safety. The best explanation for why this modification matters is:",
    choices: [
      "It makes the vector visible under a microscope",
      "It prevents the virus from being able to replicate itself inside the patient, while it retains its natural ability to shuttle genetic material into host cells",
      "It converts the viral vector into a non-viral chemical vector",
      "It has no safety implications"
    ],
    correct: 1,
    explain: "Because the complete viral genome is not used in a viral vector, the virus cannot replicate itself, even though it retains the natural ability of viruses to gain access to and shuttle genetic material inside host cells — this is what makes viral vectors usable safely in gene therapy."
  }
]);
