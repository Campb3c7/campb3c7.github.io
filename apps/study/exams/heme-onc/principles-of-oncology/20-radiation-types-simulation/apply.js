addQuestions([
  {
    q: "A patient beginning external-beam radiation for a lung tumor undergoes a planning CT scan, during which the treatment team carefully documents her exact body position using immobilization devices. She asks why this positioning is so critical. What is the best explanation?",
    choices: [
      "Simulation requires the patient to be in the exact same position for every treatment session, since detailed imaging is used to precisely map the tumor and surrounding normal tissue relative to the treatment machine",
      "The positioning is only for the patient's comfort and has no bearing on treatment accuracy",
      "Precise positioning is only required for brachytherapy, not external-beam radiation",
      "This step is used only to calculate her chemotherapy dosing"
    ],
    correct: 0,
    explain: "Simulation uses detailed imaging (usually CT) to define the tumor and surrounding normal tissue, and requires the patient to be positioned identically at every treatment session relative to the delivery machine, ensuring the planned radiation field accurately targets the tumor each time."
  },
  {
    q: "A radiation oncologist explains that the treatment field for a patient's external-beam radiation will include the visible tumor plus a small margin of surrounding lung tissue. The patient asks why healthy tissue is being intentionally included in the treatment field. What is the best explanation?",
    choices: [
      "The margin accounts for tumor movement between treatments (e.g., from breathing) and reduces the risk of recurrence from microscopic cancer cells that may have spread into the adjacent normal tissue",
      "This is a technical error, and only the visible tumor should ever be targeted",
      "The margin is included purely to increase the total radiation dose for no clinical reason",
      "This practice is unique to brachytherapy and would not apply to external-beam radiation"
    ],
    correct: 0,
    explain: "The normal tissue margin in external-beam radiation fields serves two purposes: accounting for body/organ movement (such as breathing) that can shift tumor location between treatments, and reducing the risk of recurrence from microscopic local spread of cancer cells into tissue immediately adjacent to the visible tumor."
  },
  {
    q: "A patient with early-stage prostate cancer is offered a choice between external-beam radiation therapy and brachytherapy with permanently implanted radioactive seeds. Which statement about brachytherapy is most accurate for counseling this patient?",
    choices: [
      "Brachytherapy may deliver higher radiation doses to the prostate than external-beam therapy while causing less damage to surrounding normal tissue, and the implanted seeds will decay completely over a period of weeks to months",
      "Brachytherapy always delivers a lower total dose than external-beam therapy and causes more normal tissue damage",
      "The implanted radioactive seeds will continue emitting radiation indefinitely and must eventually be surgically removed",
      "Brachytherapy requires daily treatment sessions over several weeks, identical to external-beam therapy"
    ],
    correct: 0,
    explain: "Brachytherapy can deliver higher doses to the target tissue than external-beam radiation while sparing more normal tissue. With permanent seed implantation, the isotopes decay naturally over a period of weeks to months and eventually no longer emit radiation — they are not surgically removed."
  },
  {
    q: "A patient with metastatic thyroid cancer is treated with an oral dose of radioactive iodine (131-I), which travels through the bloodstream and concentrates in thyroid tissue throughout the body, including metastatic deposits. Which category of radiation therapy does this represent?",
    choices: [
      "Systemic radiation therapy",
      "External-beam radiation therapy",
      "Brachytherapy",
      "Simulation-based radiation planning"
    ],
    correct: 0,
    explain: "This describes systemic radiation therapy, in which a radioactive substance (here, radioactive iodine, which is taken up by thyroid tissue) travels through the blood after oral or IV administration and causes damage at sites of uptake, including distant metastatic deposits."
  }
]);
