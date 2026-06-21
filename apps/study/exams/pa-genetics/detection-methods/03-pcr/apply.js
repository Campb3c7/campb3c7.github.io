addQuestions([
  {
    q: "A forensic scientist has a tiny blood sample from a crime scene — far too little for most analysis methods. She needs to amplify the DNA to produce enough for detection. The technique she should use is:",
    choices: [
      "Protein electrophoresis",
      "FISH",
      "PCR — amplifies small amounts of DNA to produce millions of copies",
      "Microarray"
    ],
    correct: 2,
    explain: "PCR can be used with a very small quantity of DNA. It replicates a short specific DNA sequence quickly, producing millions of copies — enough for detection and analysis. PCR is used in forensic medicine."
  },
  {
    q: "A physician wants to test a patient for cystic fibrosis caused by the ΔF508 mutation. However, over 600 different CF mutations exist. She considers PCR but is concerned about a limitation. The most relevant concern is:",
    choices: [
      "PCR requires too much DNA",
      "PCR is impractical for disorders with a large number of different mutations — it targets specific predefined sequences",
      "PCR cannot detect DNA-level changes",
      "PCR takes several weeks to complete"
    ],
    correct: 1,
    explain: "PCR is impractical for disorders with a large number of different mutations because it targets specific predefined sequences. With over 600 CF mutations, PCR for a single mutation (like ΔF508) would miss the other variants."
  },
  {
    q: "A lab technician runs PCR on a patient sample and obtains a positive result. However, a repeat test on a fresh sample is negative. The supervisor suspects the first result was due to a well-known limitation of PCR. The most likely explanation is:",
    choices: [
      "The DNA quantity was too large",
      "Contamination — PCR is very susceptible to contamination",
      "The probe was not fluorescently labeled",
      "The patient's mutation resolved spontaneously"
    ],
    correct: 1,
    explain: "PCR is very susceptible to contamination. Because it amplifies tiny amounts of DNA to millions of copies, even trace contaminant DNA can produce a false positive result."
  }
]);
