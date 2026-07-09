addQuestions([
  {
    q: "A 22-week fetal ultrasound reveals severe generalized edema, ascites, and cardiomegaly. Both parents are of Southeast Asian descent and each carries a 2-gene alpha-thalassemia deletion on the same chromosome (cis configuration). What is the most likely diagnosis, and what is the underlying mechanism?",
    choices: [
      "Alpha Thalassemia Major (Hb Bart's/hydrops fetalis) — each parent can pass a chromosome with both alpha genes deleted, resulting in a fetus with all 4 alpha genes deleted and no functional alpha-chain production",
      "Beta Thalassemia Major — the parents' genotypes are irrelevant to alpha-globin genes",
      "Isolated iron deficiency anemia unrelated to genetics",
      "Hemoglobin H disease, which does not cause hydrops"
    ],
    correct: 0,
    explain: "When both parents carry a cis-deletion (both affected alpha genes on the same chromosome, common in Southeast Asian populations), each can pass a chromosome carrying zero functional alpha genes. If the fetus inherits one such chromosome from each parent, all 4 alpha genes are deleted, causing Alpha Thalassemia Major with the classic hydrops fetalis presentation — driven by Hb Bart's inability to release oxygen to tissues, causing severe hypoxia and high-output heart failure."
  },
  {
    q: "A hematology fellow explains that in a fetus with all 4 alpha genes deleted, hemoglobin electrophoresis would show a hemoglobin that binds oxygen normally in the placenta but fails to deliver it to fetal tissues. Which hemoglobin variant is this, and why does it behave this way?",
    choices: [
      "Hemoglobin Bart's (γ4) — it has an abnormally high oxygen affinity, so it picks up oxygen but does not release it effectively to peripheral tissues",
      "HbA (α2β2), which is unaffected by alpha gene deletions",
      "HbH (β4), which only forms after birth and is irrelevant to fetal physiology",
      "HbS, a sickle variant unrelated to thalassemia"
    ],
    correct: 0,
    explain: "With all 4 alpha genes deleted, unpaired gamma chains (which predominate in fetal life) form Hb Bart's (γ4). This tetramer has an extremely high oxygen affinity, so it loads oxygen well in the placenta but fails to unload it at the tissue level — producing severe fetal hypoxia despite hemoglobin being present, which is the core pathophysiology behind hydrops fetalis in Alpha Thalassemia Major."
  },
  {
    q: "A couple undergoing genetic counseling learns that alpha-thalassemia trait (2-gene deletion) can occur in either a 'cis' (both deletions on the same chromosome) or 'trans' (one deletion on each chromosome) configuration, and that cis deletions are more common in certain Southeast Asian populations. Why does this distinction matter for reproductive risk counseling?",
    choices: [
      "It doesn't matter; both configurations carry identical risk of Alpha Thalassemia Major in offspring",
      "A parent with a cis deletion can pass an entire chromosome with zero functional alpha genes to a child, raising the risk of Alpha Thalassemia Major if the partner also carries a cis deletion — a risk that trans-configuration carriers do not pass on in the same way",
      "Trans-configuration carriers are at higher risk of passing Alpha Thalassemia Major",
      "This distinction only matters for beta-thalassemia risk"
    ],
    correct: 1,
    explain: "In cis-configuration trait, both deleted genes sit on the same chromosome, so that parent can pass a chromosome carrying zero functional alpha genes. If both partners carry cis deletions, their offspring is at risk of inheriting two zero-alpha-gene chromosomes — i.e., Alpha Thalassemia Major. Trans-configuration carriers have one deleted gene on each chromosome, so each chromosome they pass on still carries at least one functional alpha gene, making Alpha Thalassemia Major in offspring far less likely. This is why ethnicity-informed genetic counseling (cis deletions are more common in Southeast Asian populations) is clinically important."
  }
]);
