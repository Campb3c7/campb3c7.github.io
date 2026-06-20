// ═══════════════════════════════════════════════════════════════
// PA GENETICS — exam definition
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Clinical Genetics",
  description: "Foundations in Clinical Genetics: cell biology, mitosis, meiosis, DNA structure, replication, transcription, translation, and polymorphisms.",
  lectures: [
    {
      folder: "foundations",
      name: "Foundations in Clinical Genetics",
      icon: "🧬",
      objectives: [
        { folder: "01-basic-cell-biology",                        name: "1. Basic Cell Biology",                          hy: true },
        { folder: "02-mitosis",                                   name: "2. Mitosis",                                     hy: true },
        { folder: "03-meiosis",                                   name: "3. Meiosis I & II",                              hy: true },
        { folder: "04-crossing-over",                             name: "4. Crossing Over & Genetic Variation",           hy: true },
        { folder: "05-gametogenesis",                             name: "5. Gametogenesis",                               hy: true },
        { folder: "06-dna-structure",                             name: "6. DNA Structure & Packaging",                   hy: true },
        { folder: "07-dna-replication-transcription-translation", name: "7. Replication, Transcription & Translation",    hy: true },
        { folder: "08-gene-expression-polymorphisms",             name: "8. Gene Expression & Polymorphisms",             hy: true }
      ]
    }
  ]
});
