addQuestions([
  {
    q: "What does TNM stand for?",
    choices: ["Tumor, Node, Metastases", "Tissue, Node, Margin", "Tumor, Necrosis, Mitosis", "Type, Number, Malignancy"],
    correct: 0,
    explain: "TNM refers to Tumor, Node, and Metastases — evaluating these three components allows clinicians to assign a stage."
  },
  {
    q: "Which cancers are NOT staged using the standard TNM system?",
    choices: ["Only pediatric cancers lack TNM staging", "Brain/spinal cord cancers (staged by cell type and grade) and many hematologic cancers like lymphomas (different staging systems)", "All cancers use the TNM system without exception", "Only skin cancers lack TNM staging"],
    correct: 1,
    explain: "Cancers of the brain and spinal cord are staged according to cell type and grade rather than TNM, and many hematologic cancers such as lymphomas use different staging systems."
  },
  {
    q: "What does 'Tis' mean in TNM staging?",
    choices: ["Distant metastasis is present", "Carcinoma in situ — abnormal cells present but have not spread to neighboring tissue", "No evidence of primary tumor", "Primary tumor cannot be evaluated"],
    correct: 1,
    explain: "Tis denotes carcinoma in situ — abnormal cells are present but have not spread to neighboring tissue."
  },
  {
    q: "What does 'TX' mean in TNM staging?",
    choices: ["The tumor is at its maximum size", "Primary tumor cannot be evaluated", "No evidence of primary tumor", "Carcinoma in situ"],
    correct: 1,
    explain: "TX means the primary tumor cannot be evaluated."
  },
  {
    q: "What do T1 through T4 designations indicate?",
    choices: ["The tumor's histologic grade", "The size and/or extent of the primary tumor", "The number of lymph nodes involved", "The presence or absence of distant metastasis"],
    correct: 1,
    explain: "T1, T2, T3, and T4 indicate increasing size and/or extent of the primary tumor."
  },
  {
    q: "What does 'N0' mean in TNM staging?",
    choices: ["No regional lymph node involvement", "No evidence of primary tumor", "Maximum regional lymph node involvement", "Regional lymph nodes cannot be evaluated"],
    correct: 0,
    explain: "N0 means there is no regional lymph node involvement."
  },
  {
    q: "What do N1, N2, and N3 designations indicate?",
    choices: ["The degree of regional lymph node involvement", "The size of the primary tumor", "The tumor grade", "The presence of distant metastasis"],
    correct: 0,
    explain: "N1, N2, and N3 indicate increasing degree of regional lymph node involvement."
  },
  {
    q: "What does 'M1' mean in TNM staging?",
    choices: ["Distant metastasis is present", "Distant metastasis cannot be evaluated", "No distant metastasis", "Regional lymph node involvement is present"],
    correct: 0,
    explain: "M1 means distant metastasis is present. M0 means no distant metastasis, and MX means distant metastasis cannot be evaluated."
  },
  {
    q: "How many overall stages do TNM combinations correspond to, and what is the general relationship between them?",
    choices: ["Two stages only: early and late", "Six stages, with stage VI being the worst", "Stage number has no relationship to disease severity", "Four stages (I–IV); in general, stage IV is worse than stage I"],
    correct: 3,
    explain: "TNM combinations correspond to one of four stages (I–IV), and in general, stage IV is worse than stage I."
  },
  {
    q: "Do the criteria mapping a given TNM combination to a specific stage number differ between cancer types?",
    choices: ["No — the same TNM combination always corresponds to the same stage regardless of cancer type", "Yes — for example, bladder cancer T3 N0 M0 is stage III, while colon cancer T3 N0 M0 is stage II", "Only the N category differs between cancer types", "Only the M category differs between cancer types"],
    correct: 1,
    explain: "Criteria for stage differ between cancer types — the same TNM combination can map to different stages depending on the cancer. For example, bladder cancer T3 N0 M0 is stage III, while colon cancer T3 N0 M0 is stage II."
  },
  {
    q: "In the alternative 'summary staging' system, what does 'Regional' mean?",
    choices: ["Abnormal cells are present only in the layer in which they developed", "Cancer has spread to distant organs", "Cancer has spread beyond the primary site to nearby lymph nodes or tissues and organs", "Cancer is limited to the organ in which it began"],
    correct: 2,
    explain: "In summary staging, 'Regional' means the cancer has spread beyond the primary site to nearby lymph nodes or tissues and organs."
  },
  {
    q: "In the alternative 'summary staging' system, what does 'Localized' mean?",
    choices: ["There is not enough information to determine the stage", "Cancer has spread to nearby lymph nodes", "Cancer has spread to distant organs", "Cancer is limited to the organ in which it began, without evidence of spread"],
    correct: 3,
    explain: "In summary staging, 'Localized' means the cancer is limited to the organ in which it began, without evidence of spread."
  }
]);
