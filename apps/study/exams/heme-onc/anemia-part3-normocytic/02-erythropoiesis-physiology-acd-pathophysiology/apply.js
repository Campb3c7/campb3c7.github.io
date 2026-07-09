addQuestions([
  {
    q: "A 58-year-old woman with a 12-year history of rheumatoid arthritis is found to have a mild normocytic anemia with an MCV of 84 fL. Her rheumatologist notes her RA has been poorly controlled with persistently elevated inflammatory markers. What is the most likely mechanism driving her anemia?",
    choices: [
      "Chronic inflammation is driving elevated IL-6, which increases hepatic hepcidin production; hepcidin degrades ferroportin, trapping iron in macrophages and creating a functional iron deficiency that impairs erythropoiesis",
      "She has developed an absolute iron deficiency from dietary insufficiency unrelated to her RA",
      "Her bone marrow has become fibrotic due to her RA",
      "Her RA has caused a folate deficiency, which is the sole driver of her anemia"
    ],
    correct: 0,
    explain: "This is the classic pathophysiology of ACD: chronic inflammatory disease (poorly controlled RA) drives elevated IL-6, which increases hepatic hepcidin secretion. Hepcidin binds and degrades ferroportin, trapping iron inside macrophages and enterocytes and creating a functional iron deficiency that limits iron delivery to erythroid precursors, on top of shortened RBC survival and impaired EPO response."
  },
  {
    q: "A patient with metastatic cancer has an MCV of 78 fL that has been slowly declining from a normal baseline over the past year, in parallel with worsening disease. A colleague argues this must be iron deficiency anemia because the MCV is below 80. Why might this reasoning be flawed in this context?",
    choices: [
      "ACD typically trends mildly microcytic over time but usually does not dip much below ~80 fL — while not impossible, a value this low should prompt evaluation for a concurrent absolute iron deficiency rather than assuming ACD alone explains it",
      "ACD never causes any decline in MCV, so this must be iron deficiency",
      "MCV is irrelevant to distinguishing ACD from iron deficiency",
      "An MCV below 80 always definitively excludes ACD as a contributing factor"
    ],
    correct: 0,
    explain: "ACD classically trends mildly microcytic but the MCV usually stays close to or just under the lower limit of normal, generally not dropping much below ~80 fL. An MCV this low in a patient with a chronic inflammatory/malignant condition raises the possibility of a coexisting absolute iron deficiency (e.g., from GI blood loss or poor intake) layered on top of the ACD, rather than ACD being the sole explanation — this is why iron studies and further workup remain important even when ACD is suspected."
  },
  {
    q: "A researcher explains that in ACD, macrophages contain abundant stored iron, yet erythroid precursors in the bone marrow are iron-starved. How can both of these things be true simultaneously?",
    choices: [
      "Hepcidin degrades ferroportin, the transporter needed to export iron out of macrophages into the plasma — so iron accumulates and is trapped inside macrophages even though total body iron stores are adequate or even elevated",
      "The macrophages and erythroid precursors are actually experiencing identical iron levels, and the premise is false",
      "Erythroid precursors have lost their transferrin receptor 1 in ACD, independent of iron availability",
      "This occurs because dietary iron intake has stopped completely"
    ],
    correct: 0,
    explain: "This is the hallmark paradox of ACD: hepcidin (elevated by inflammatory cytokines like IL-6) degrades ferroportin, blocking iron export from macrophages (and enterocytes) into plasma. Iron stores remain adequate or even elevated (reflected by normal/high ferritin) but are functionally locked away from erythroid precursors, which depend on transferrin-bound iron delivered via the now-blocked ferroportin pathway — hence a 'functional' iron deficiency despite normal or excess total body iron."
  }
]);
