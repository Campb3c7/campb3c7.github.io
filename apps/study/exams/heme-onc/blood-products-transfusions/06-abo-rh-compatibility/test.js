addQuestions([
  {
    q: "A person who lacks the A antigen, B antigen, or both automatically has which antibodies in their plasma?",
    choices: ["IgA antibodies against Rh antigens", "IgM isoantibodies (isoagglutinins) against the missing antigen(s)", "IgG antibodies against the antigens they possess", "No antibodies at all"],
    correct: 1,
    explain: "Anyone lacking one or both ABO antigens automatically has IgM isoantibodies (isoagglutinins) against the missing antigen(s), without requiring prior exposure."
  },
  {
    q: "Do Rh-negative individuals have natural anti-D antibodies before any exposure to Rh-positive blood?",
    choices: ["No, and exposure never triggers antibody formation", "No — but exposure to the D antigen is highly immunogenic and will trigger antibody formation", "Yes, but only in females", "Yes, naturally, like ABO antibodies"],
    correct: 1,
    explain: "Unlike ABO antibodies, Rh-negative individuals do NOT have natural anti-D antibodies, but exposure to the D antigen (e.g., transfusion with Rh+ blood) is highly immunogenic and will trigger antibody formation."
  },
  {
    q: "Type AB blood has which antigens on the RBC surface and which antibodies in the plasma?",
    choices: ["Both A and B antigens; no antibodies", "B antigens; A antibodies", "A antigens; B antibodies", "No antigens; both A and B antibodies"],
    correct: 0,
    explain: "Type AB has both A and B antigens on the RBC surface and no antibodies in the plasma."
  },
  {
    q: "Type O blood has which antigens on the RBC surface and which antibodies in the plasma?",
    choices: ["No antigens; both A and B antibodies", "No antigens; no antibodies", "Both A and B antigens; no antibodies", "A antigens; B antibodies"],
    correct: 0,
    explain: "Type O has no antigens on the RBC surface and both A and B antibodies in the plasma."
  },
  {
    q: "Type AB is known as the 'Universal Receiver' for which blood product, and why?",
    choices: ["Platelets, because they lack HLA antigens", "Cryoprecipitate, because they lack fibrinogen", "Plasma/FFP, because they have no RBC antigens", "PRBCs, because they have no antibodies in plasma to react against any donor RBC antigen"],
    correct: 3,
    explain: "Type AB is the universal receiver for PRBCs because they have no antibodies in their plasma, so no donor RBC antigen (A, B, or O) will trigger a reaction."
  },
  {
    q: "Type O is known as the 'Universal Donor' for which blood product, and why?",
    choices: ["Plasma/FFP, because they have no antibodies", "Cryoprecipitate, because it contains fibrinogen", "PRBCs, because they have no antigens on the RBC surface to trigger a reaction in any recipient", "Platelets, because they lack ABO antigens"],
    correct: 2,
    explain: "Type O is the universal donor for PRBCs because there are no antigens on the RBC surface to trigger a reaction, regardless of the recipient's antibodies."
  },
  {
    q: "For plasma (FFP) transfusion, which blood type is the universal DONOR, and why?",
    choices: ["Type O, because it lacks antigens", "Type A, because it has only anti-B antibodies", "Type AB, because AB patients have no antibodies in their plasma to attack a recipient's RBCs", "Type B, because it has only anti-A antibodies"],
    correct: 2,
    explain: "For plasma, Type AB is the universal donor because AB plasma contains no antibodies that could attack a recipient's RBC antigens."
  },
  {
    q: "For plasma (FFP) transfusion, which blood type is the universal RECIPIENT, and why?",
    choices: ["Type AB, because it has no antibodies", "Type B, because it has anti-A antibodies only", "Type A, because it has anti-B antibodies only", "Type O, because O recipients have no antigens on their RBCs for donor plasma antibodies to react against"],
    correct: 3,
    explain: "For plasma, Type O is the universal recipient because O patients have no RBC antigens for the donor plasma's antibodies to attack."
  },
  {
    q: "Is Rh compatibility necessary when transfusing plasma (FFP)?",
    choices: ["Only for Rh-negative recipients", "No — Rh compatibility is not necessary for plasma", "Only for Rh-positive donors", "Yes, always, just like PRBCs"],
    correct: 1,
    explain: "Rh compatibility is not necessary for plasma transfusion, unlike PRBC transfusion where Rh matching is important."
  },
  {
    q: "Which ABO blood type is the most common in the population, at approximately what frequency?",
    choices: ["AB, 40%", "B, 45%", "A, 40%", "O, 45%"],
    correct: 3,
    explain: "Type O is the most common blood type at approximately 45% population frequency, followed by A (40%), B (11%), and AB (4%)."
  },
  {
    q: "What percentage of the population is Rh-negative?",
    choices: ["85%", "15%", "5%", "50%"],
    correct: 1,
    explain: "Approximately 15% of the population is Rh-negative; 85% is Rh-positive."
  },
  {
    q: "A Type A recipient can receive RBCs from which donor blood type(s)?",
    choices: ["A, B, and O", "A and O only", "All types", "A and AB only"],
    correct: 1,
    explain: "A Type A recipient can receive RBCs from Type A or Type O donors (per the compatibility table)."
  },
  {
    q: "A Type A recipient can receive plasma from which donor blood type(s)?",
    choices: ["A and O only", "O only", "A and AB only", "All types"],
    correct: 2,
    explain: "A Type A recipient can receive plasma from Type A or Type AB donors."
  },
  {
    q: "An Rh-negative recipient given Rh-positive blood will:",
    choices: ["Have no immune response, since Rh is not immunogenic", "Immediately develop anaphylaxis", "Create anti-D antibodies, since exposure to the D antigen is highly immunogenic", "Automatically become Rh-positive permanently"],
    correct: 2,
    explain: "An Rh-negative person exposed to Rh-positive blood will create anti-D antibodies, since D antigen exposure is highly immunogenic — important for future transfusions and pregnancy."
  }
]);
