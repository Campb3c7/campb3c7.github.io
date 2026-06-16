// ═══════════════════════════════════════════════════════════════
// DERMATOLOGY — exam definition
// ═══════════════════════════════════════════════════════════════
defineExam({
  title: "Dermatology",
  description: "Foundations of Dermatology: skin anatomy, lesion identification, dermatomal distribution, and clinical exam approach.",
  lectures: [
    {
      folder: "foundations",
      name: "Foundations of Dermatology",
      icon: "🩺",
      objectives: [
        { folder: "01-skin-layers",               name: "1. Epidermis, Dermis & Hypodermis",         hy: true },
        { folder: "02-melanin-sweat-glands",       name: "2. Melanin & Sweat Glands",                 hy: true },
        { folder: "03-dermatomal-distribution",    name: "3. Dermatomal Distribution",                hy: true },
        { folder: "04-langers-lines",              name: "4. Langer's Lines",                         hy: true },
        { folder: "05-dermatologic-exam",          name: "5. Comprehensive Dermatologic Exam",        hy: true },
        { folder: "06-lesion-descriptors",         name: "6. Dermatologic Descriptors",               hy: true },
        { folder: "07-primary-secondary-lesions",  name: "7. Primary & Secondary Skin Lesions",       hy: true },
        { folder: "08-lesion-location",            name: "8. Lesion Location Descriptors",            hy: true },
        { folder: "09-documenting-lesions",        name: "9. Describing & Documenting Lesions",       hy: true }
      ]
    }
  ]
});
