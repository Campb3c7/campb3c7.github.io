// ═══════════════════════════════════════════════════════════════
// PA GENETICS — exam definition
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Clinical Genetics",
  description: "Clinical Genetics: cell biology, DNA, mutations, inheritance, pedigrees, chromosomal disorders, AD/AR, sex-linked/mitochondrial disorders, and hemoglobinopathies.",
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
    },
    {
      folder: "inheritance-patterns",
      name: "Basic Inheritance Patterns",
      icon: "🧩",
      objectives: [
        { folder: "01-mendelian-traits",            name: "1. Classical Mendelian Traits",                hy: true },
        { folder: "02-pedigree-patterns",           name: "2. Mendelian Pedigree Patterns",              hy: true },
        { folder: "03-non-traditional-inheritance", name: "3. Non-Traditional Inheritance",              hy: true },
        { folder: "04-imprinting-syndromes",        name: "4. Imprinting Syndromes",                    hy: true },
        { folder: "05-complex-inheritance",         name: "5. Complex Inheritance & Environment",        hy: true }
      ]
    },
    {
      folder: "family-history-pedigrees",
      name: "Family History & Pedigrees",
      icon: "👪",
      objectives: [
        { folder: "01-family-history-importance",       name: "1. Importance of Family History",              hy: true },
        { folder: "02-pedigree-information-relatives",  name: "2. Pedigree Information & Degrees of Relatives", hy: true },
        { folder: "03-pedigree-symbols-individuals",    name: "3. Pedigree Symbols: Individuals",            hy: true },
        { folder: "04-pedigree-relationships-descents", name: "4. Pedigree Symbols: Relationships & Descents", hy: true }
      ]
    },
    {
      folder: "chromosomal-disorders",
      name: "Chromosomal Disorders",
      icon: "🔢",
      objectives: [
        { folder: "01-chromosome-anatomy",                          name: "1. Chromosome Anatomy",                              hy: true },
        { folder: "02-autosomes-sex-chromosomes",                   name: "2. Autosomes & Sex Chromosomes",                     hy: true },
        { folder: "03-karyotype-banding",                           name: "3. Karyotype & Chromosomal Banding",                 hy: true },
        { folder: "04-karyotype-nomenclature",                      name: "4. Karyotype Nomenclature",                          hy: true },
        { folder: "05-chromosomal-disorders-pregnancy-loss",        name: "5. Chromosomal Disorders & Pregnancy Loss",          hy: true },
        { folder: "06-euploid-diploid-haploid-polyploidy-aneuploidy", name: "6. Euploidy, Polyploidy & Aneuploidy",             hy: true },
        { folder: "07-triploidy-tetraploidy",                       name: "7. Triploidy & Tetraploidy",                         hy: true },
        { folder: "08-nondisjunction-monosomy-trisomy",             name: "8. Nondisjunction, Monosomy & Trisomy",              hy: true },
        { folder: "09-trisomy-syndrome-names-karyotypes",           name: "9. Trisomy Syndrome Names & Karyotypes",             hy: true },
        { folder: "10-trisomy-21-down-syndrome",                    name: "10. Trisomy 21 (Down Syndrome)",                     hy: true },
        { folder: "11-mosaicism",                                   name: "11. Mosaicism",                                      hy: true },
        { folder: "12-trisomy-18-edwards-syndrome",                 name: "12. Trisomy 18 (Edwards Syndrome)",                  hy: true },
        { folder: "13-trisomy-13-patau-syndrome",                   name: "13. Trisomy 13 (Patau Syndrome)",                    hy: true },
        { folder: "14-turner-syndrome",                             name: "14. Turner Syndrome",                                hy: true },
        { folder: "15-klinefelter-syndrome",                        name: "15. Klinefelter Syndrome",                           hy: true },
        { folder: "16-structural-abnormalities-overview",           name: "16. Structural Abnormalities Overview",              hy: true },
        { folder: "17-translocations",                              name: "17. Translocations",                                 hy: true },
        { folder: "18-terminal-interstitial-deletions",             name: "18. Terminal & Interstitial Deletions",              hy: true },
        { folder: "19-cri-du-chat-syndrome",                        name: "19. Cri-du-Chat Syndrome",                          hy: true },
        { folder: "20-wolf-hirschhorn-syndrome",                    name: "20. Wolf-Hirschhorn Syndrome",                       hy: true },
        { folder: "21-microdeletion-syndromes",                     name: "21. Microdeletion Syndromes",                        hy: true },
        { folder: "22-duplications-pallister-killian",              name: "22. Duplications & Pallister-Killian Syndrome",      hy: true },
        { folder: "23-inversions",                                  name: "23. Inversions",                                     hy: true }
      ]
    },
    {
      folder: "autosomal-dominant",
      name: "Autosomal Dominant Disorders",
      icon: "👤",
      objectives: [
        { folder: "01-dominant-recessive-principles",       name: "1. Dominant & Recessive Principles",               hy: true },
        { folder: "02-ad-key-principles",                   name: "2. AD Key Principles",                             hy: true },
        { folder: "03-de-novo-germline-mosaicism",          name: "3. De Novo Mutations & Germline Mosaicism",        hy: true },
        { folder: "04-penetrance-expression-pleiotropy",    name: "4. Penetrance, Expression & Pleiotropy",           hy: true },
        { folder: "05-myotonic-dystrophy",                  name: "5. Myotonic Dystrophy",                            hy: true },
        { folder: "06-marfan-syndrome",                     name: "6. Marfan Syndrome",                               hy: true },
        { folder: "07-retinoblastoma",                      name: "7. Retinoblastoma",                                hy: true },
        { folder: "08-factor-v-leiden",                     name: "8. Factor V Leiden",                               hy: true },
        { folder: "09-achondroplasia",                      name: "9. Achondroplasia",                                hy: true },
        { folder: "10-huntington-disease",                  name: "10. Huntington Disease",                           hy: true },
        { folder: "11-neurofibromatosis",                   name: "11. Neurofibromatosis Type 1",                     hy: true }
      ]
    },
    {
      folder: "autosomal-recessive",
      name: "Autosomal Recessive Disorders",
      icon: "👥",
      objectives: [
        { folder: "01-ar-key-principles",  name: "1. AR Key Principles & Carrier Risk",  hy: true },
        { folder: "02-consanguinity",      name: "2. Consanguinity & AR Disorders",       hy: true }
      ]
    },
    {
      folder: "sex-linked-mito",
      name: "Sex-Linked & Mitochondrial Disorders",
      icon: "🔗",
      objectives: [
        { folder: "01-x-inactivation",       name: "1. X-Inactivation",                                  hy: true },
        { folder: "02-inheritance-patterns",  name: "2. Inheritance Patterns (XLR, XLD, Y, Mito)",        hy: true },
        { folder: "03-sry-gene",             name: "3. SRY Gene & Y-Linked Inheritance",                 hy: true },
        { folder: "04-heteroplasmy",         name: "4. Heteroplasmy & Mitochondrial Inheritance",        hy: true },
        { folder: "05-offspring-risk",       name: "5. Offspring Risk Probabilities",                    hy: true },
        { folder: "06-specific-disorders",   name: "6. Specific Disorders",                              hy: true }
      ]
    },
    {
      folder: "hemoglobinopathies",
      name: "Hemoglobinopathies",
      icon: "🩸",
      objectives: [
        { folder: "01-hemoglobin-types",             name: "1. Types of Hemoglobin",                    hy: true },
        { folder: "02-globin-gene-regulation",       name: "2. Globin Gene Regulation",                 hy: true },
        { folder: "03-hemoglobinopathies-genetics",  name: "3. Hemoglobinopathies: Genetics",           hy: true },
        { folder: "04-clinical-differentiation",     name: "4. Clinical Differentiation & Treatment",   hy: true }
      ]
    },
    {
      folder: "inborn-errors",
      name: "Inborn Errors of Metabolism",
      icon: "⚗️",
      objectives: [
        { folder: "01-iem-general-principles",  name: "1. IEM General Principles",                   hy: true },
        { folder: "02-carbohydrate-metabolism",  name: "2. Carbohydrate Metabolism Disorders",         hy: true },
        { folder: "03-pku",                      name: "3. Phenylketonuria (PKU)",                    hy: true },
        { folder: "04-msud",                     name: "4. Maple Syrup Urine Disease (MSUD)",         hy: true },
        { folder: "05-mcad-deficiency",          name: "5. MCAD Deficiency",                          hy: true },
        { folder: "06-otc-deficiency",           name: "6. OTC Deficiency",                           hy: true },
        { folder: "07-lsd-acrodermatitis",       name: "7. LSDs & Acrodermatitis Enteropathica",      hy: true },
        { folder: "08-mineral-metabolism",        name: "8. Mineral Metabolism (Menkes, Wilson, HH)",  hy: true }
      ]
    }
  ]
});
