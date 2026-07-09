// ───────────────────────────────────────────────────────────────
// EXAM MANIFEST — the list of exams shown on the study app's
// exam picker. To add an exam, add ONE entry here and create its
// folder under exams/. See apps/study/CLAUDE.md for the full guide.
//
// Fields:
//   folder       (required) folder name under exams/  (lowercase, dashes)
//   title        (required) name shown on the picker
//   description  (optional) one-liner under the title
//   icon         (optional) emoji
//   badge        (optional) small label shown next to the title
//   legacy       (optional) true = folder has its own index.html
//                instead of using the shared engine. Only the old
//                Patho Exam 2 app should ever use this.
// ───────────────────────────────────────────────────────────────
window.EXAMS = [
  {
    folder: "behavioral-health",
    title: "Behavioral Health",
    description: "Bipolar Disorders, Anxiety Disorders, and Behavioral Health Foundations.",
    icon: "🧠",
    badge: "bipolar"
  },
  {
    folder: "dermatology",
    title: "Dermatology",
    description: "Foundations of Dermatology: skin anatomy, lesion types, dermatomal distribution, and clinical exam.",
    icon: "🩺"
  },
  {
    folder: "pa-genetics",
    title: "Clinical Genetics",
    description: "Clinical Genetics: cell biology, DNA, mutations, inheritance, pedigrees, chromosomal disorders, AD/AR, sex-linked/mitochondrial disorders, hemoglobinopathies, and inborn errors of metabolism.",
    icon: "🧬"
  },
  {
    folder: "heme-onc",
    title: "Hematology & Oncology",
    description: "Lab fundamentals, hematopoiesis, WBC/RBC morphology, coagulation, electrolytes, and lab test selection.",
    icon: "🩸"
  },
  {
    folder: "patho-exam-2",
    title: "Patho Exam 2",
    description: "Pharm, Renal, Neuro, Endo, and ID. The original app, kept as-is.",
    icon: "🦠",
    badge: "archive",
    legacy: true
  }
];
