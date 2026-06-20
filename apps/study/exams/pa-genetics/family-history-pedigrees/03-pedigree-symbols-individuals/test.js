addQuestions([
  {
    q: "In pedigree notation, a square represents:",
    choices: ["Female", "Male", "Sex unknown", "Affected individual"],
    correct: 1,
    explain: "A square represents a male. A circle represents a female. A diamond represents sex unknown."
  },
  {
    q: "In pedigree notation, a circle represents:",
    choices: ["Male", "Sex unknown", "Female", "Deceased"],
    correct: 2,
    explain: "A circle represents a female. A square represents a male. A diamond represents sex unknown."
  },
  {
    q: "A diamond symbol in a pedigree indicates:",
    choices: ["Male", "Female", "Sex unknown", "Affected"],
    correct: 2,
    explain: "A diamond indicates an individual of unknown sex. It is used when the sex has not been determined (e.g., during early pregnancy)."
  },
  {
    q: "An unaffected individual is represented by:",
    choices: ["A filled (solid) symbol", "An open (empty) symbol", "A symbol with a slash through it", "A triangle"],
    correct: 1,
    explain: "An open (empty) symbol = unaffected. A filled (solid) symbol = affected. A slash through the symbol = deceased."
  },
  {
    q: "An affected individual is represented by:",
    choices: ["An open (empty) symbol", "A symbol with a slash", "A filled (solid) symbol", "A triangle with a line"],
    correct: 2,
    explain: "A filled (solid) symbol indicates an affected individual. Open = unaffected. Slash = deceased."
  },
  {
    q: "An individual affected with multiple disorders is represented by:",
    choices: [
      "Multiple separate symbols",
      "A symbol divided into sections with some sections filled",
      "A double circle or square",
      "A symbol with the number of disorders inside"
    ],
    correct: 1,
    explain: "A symbol divided into sections (like a pie) with different sections filled represents multiple disorders — each section corresponds to a different condition."
  },
  {
    q: "The proband is indicated on a pedigree by:",
    choices: ["A filled symbol only", "An arrow with the letter P", "A diamond shape", "A slash through the symbol"],
    correct: 1,
    explain: "The proband is indicated by an arrow pointing to the individual with the letter P. The consultand gets an arrow without the P."
  },
  {
    q: "A consultand is indicated on a pedigree by:",
    choices: ["An arrow with P", "An arrow without P", "A filled symbol", "A diamond"],
    correct: 1,
    explain: "The consultand is indicated by an arrow pointing to the individual WITHOUT the letter P. The proband has the arrow WITH P."
  },
  {
    q: "The number '5' inside a pedigree symbol indicates:",
    choices: ["Five disorders", "Five years old", "Five known individuals of that type", "Fifth generation"],
    correct: 2,
    explain: "A number inside a pedigree symbol indicates multiple individuals of that type where the number is known. The letter 'n' is used when the number is unknown."
  },
  {
    q: "The letter 'n' inside a pedigree symbol indicates:",
    choices: ["Normal individual", "Number of individuals unknown", "Non-affected", "New mutation"],
    correct: 1,
    explain: "The letter 'n' inside a symbol indicates multiple individuals where the exact number is unknown. A specific number (e.g., 5) is used when the count is known."
  },
  {
    q: "A deceased individual is indicated on a pedigree by:",
    choices: ["A filled symbol", "A dashed outline", "A diagonal line (slash) through the symbol", "An X through the symbol"],
    correct: 2,
    explain: "A diagonal line (slash) through the symbol indicates the person is deceased. The symbol may be open (unaffected deceased) or filled (affected deceased)."
  },
  {
    q: "A stillbirth is indicated by:",
    choices: ["A triangle", "A smaller symbol with SB and gestational age", "A symbol with a slash", "A diamond"],
    correct: 1,
    explain: "Stillbirths are indicated by smaller versions of the standard symbols with 'SB' written above and gestational age noted. Open = unaffected; filled = affected."
  },
  {
    q: "In a pedigree, a pregnancy is denoted by:",
    choices: [
      "A triangle",
      "The standard shape with a P inside",
      "A dotted outline",
      "A diamond with SB"
    ],
    correct: 1,
    explain: "A current pregnancy is shown using the standard symbol (square, circle, or diamond based on known/unknown sex) with a P placed inside."
  },
  {
    q: "A spontaneous abortion (SAB) is represented by:",
    choices: ["A small triangle", "A symbol with SB", "A symbol with a slash", "A diamond with P"],
    correct: 0,
    explain: "Spontaneous abortions (miscarriages) are represented by small triangles. Open = unaffected; filled = affected. Sex may be indicated if known."
  },
  {
    q: "How is a termination of pregnancy (TOP) distinguished from a spontaneous abortion (SAB) in a pedigree?",
    choices: [
      "TOP uses a circle; SAB uses a triangle",
      "TOP triangle has a horizontal line through it; SAB is a plain triangle",
      "TOP uses a diamond; SAB uses a square",
      "There is no distinction between the two"
    ],
    correct: 1,
    explain: "Both use triangles, but TOP has a horizontal line through the triangle, while SAB is a plain triangle. Both can be open (unaffected) or filled (affected)."
  }
]);
