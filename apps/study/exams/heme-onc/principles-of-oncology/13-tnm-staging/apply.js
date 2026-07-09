addQuestions([
  {
    q: "A patient with bladder cancer is found to have a T3 N0 M0 tumor, and a patient with colon cancer is separately found to also have a T3 N0 M0 tumor. Are these two patients at the same overall stage?",
    choices: [
      "No — the bladder cancer patient is stage III, while the colon cancer patient is stage II, because staging criteria differ between cancer types even for identical TNM combinations",
      "Yes — the same TNM combination always corresponds to the same overall stage regardless of cancer type",
      "No — both are actually stage IV, since T3 always indicates the worst stage",
      "This cannot be determined without knowing the patients' ages"
    ],
    correct: 0,
    explain: "Criteria for assigning overall stage differ between cancer types. An identical TNM combination (T3 N0 M0) corresponds to stage III in bladder cancer but only stage II in colon cancer — the same TNM values do not universally map to the same stage."
  },
  {
    q: "A patient is diagnosed with a primary brain tumor (glioblastoma). The oncologist explains that this tumor will not be staged using the standard TNM system used for most other cancers. What is used instead?",
    choices: [
      "Cell type and grade",
      "The summary staging system exclusively (in situ, localized, regional, distant)",
      "A modified TNM system unique to only brain tumors but still called TNM",
      "Brain tumors are never staged"
    ],
    correct: 0,
    explain: "Cancers of the brain and spinal cord are staged according to their cell type and grade, rather than the standard TNM system used for most solid tumors."
  },
  {
    q: "A patient newly diagnosed with a solid tumor undergoes biopsy of a lymph node draining the primary tumor site, which returns positive for metastatic disease, but no distant organ involvement is found on imaging. How should the N and M categories be classified?",
    choices: [
      "N1 (or higher, reflecting regional lymph node involvement) and M0 (no distant metastasis)",
      "N0 and M1",
      "NX and MX, since lymph node biopsy does not count as evaluation",
      "N0 and M0, since regional lymph node involvement does not count toward staging"
    ],
    correct: 0,
    explain: "Regional lymph node involvement (found on biopsy) is reflected in the N category as N1 or higher (degree of involvement), while the absence of distant organ involvement on imaging is reflected as M0 (no distant metastasis) — distant metastasis (M1) is reserved for spread beyond regional nodes."
  }
]);
