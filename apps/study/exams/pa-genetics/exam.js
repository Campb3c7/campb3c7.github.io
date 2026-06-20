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
    },
    {
      folder: "genetic-mutations",
      name: "Genetic Mutations",
      icon: "🔬",
      objectives: [
        { folder: "01-advantageous-disadvantageous-mutations", name: "1. Advantageous & Disadvantageous Mutations",       hy: true },
        { folder: "02-spontaneous-induced-mutations",         name: "2. Spontaneous & Induced Mutations",                hy: true },
        { folder: "03-mutagens",                              name: "3. Radiation & Chemical Mutagens",                  hy: true },
        { folder: "04-dna-repair",                            name: "4. DNA Repair Mechanisms",                          hy: true },
        { folder: "05-mutation-cell-lines-mosaicism",         name: "5. Mutation Cell Lines & Mosaicism",                hy: true },
        { folder: "06-base-pair-mutations",                   name: "6. Base Pair Substitutions, Deletions & Insertions", hy: true }
      ]
    }
  ]
});
