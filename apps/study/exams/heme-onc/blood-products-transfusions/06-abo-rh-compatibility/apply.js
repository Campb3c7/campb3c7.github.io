addQuestions([
  {
    q: "A trauma patient in extremis needs emergency PRBCs before his blood type is known. Which type should be given, and why is this choice safe regardless of his actual ABO/Rh status?",
    choices: [
      "Type AB positive, because AB is the universal receiver",
      "Type O negative, because O has no RBC surface antigens (safe from any recipient's antibodies) and negative Rh avoids sensitizing an Rh-negative recipient",
      "Type A positive, because it is the most common type",
      "Any type is equally safe in an emergency"
    ],
    correct: 1,
    explain: "Type O negative PRBCs are the universal donor for red cells — no A or B antigens to react with the recipient's antibodies, and no D antigen to sensitize an Rh-negative recipient, making it the safest choice when blood type is unknown."
  },
  {
    q: "A patient with Type AB blood requires emergency plasma transfusion before a full crossmatch can be completed, but only Type AB plasma is available on short notice, and time is critical. A resident suggests giving Type A plasma instead since 'A is close enough.' Why is this reasoning flawed, and what should actually be prioritized?",
    choices: [
      "Type A plasma is always safe for any recipient",
      "Type A plasma contains anti-B antibodies which could react with any B antigens the recipient might encounter; ABO compatibility must still be verified for plasma, though AB recipients can technically accept plasma from AB donors specifically since they have no antigens to react with any plasma antibody type — in the most urgent scenario, Type AB or Type O plasma (compatible with all recipients) would be preferred over assuming 'close enough'",
      "Rh compatibility is the only thing that matters for plasma, not ABO",
      "Plasma transfusion never requires ABO matching"
    ],
    correct: 1,
    explain: "ABO compatibility must still be verified for plasma since it contains antibodies that can react with recipient RBC antigens. While AB recipients have no antigens to react with any plasma type, the safest practice is not to assume compatibility casually — proper crossmatching or established universal-compatible plasma should be used rather than assuming 'close enough' matches."
  },
  {
    q: "A first-year student asks why Type O is the universal PRBC donor but can only receive Type O plasma (not universal for plasma). What is the best explanation for this apparent contradiction?",
    choices: [
      "It's not actually true — Type O can receive any plasma type",
      "The logic flips between RBCs and plasma: Type O RBCs have no antigens (safe to give to anyone), but Type O recipients have anti-A and anti-B antibodies in their own plasma and no antigens on their RBCs, so they can only safely receive plasma from a donor without antibodies that could attack red cells they don't even have — meaning O is actually the universal PLASMA RECIPIENT, not a restricted recipient",
      "Type O blood is simply incompatible with all other types",
      "This has nothing to do with antigens or antibodies"
    ],
    correct: 1,
    explain: "This is a common point of confusion: Type O is the universal RBC donor (no antigens to trigger reactions) AND the universal plasma RECIPIENT (no RBC antigens for donor plasma antibodies to attack) — not a restricted plasma recipient. The donor/recipient roles for O and AB completely swap between RBC and plasma transfusion, which is the key teaching point."
  },
  {
    q: "A 30-year-old Rh-negative woman received Rh-positive blood by clerical error during a prior hospitalization and is now pregnant with an Rh-positive fetus. What is the clinical concern based on Rh immunogenicity, and why does this differ from ABO incompatibility risk?",
    choices: [
      "There is no concern, since Rh antibodies are naturally present and cause no harm",
      "She likely developed anti-D antibodies from her prior Rh-positive exposure (since D antigen exposure is highly immunogenic, unlike natural ABO antibodies), placing this and future Rh-positive pregnancies at risk for hemolytic disease of the newborn",
      "This scenario is impossible since Rh-negative individuals cannot receive Rh-positive blood under any circumstance",
      "ABO incompatibility poses a greater risk to the fetus than Rh sensitization"
    ],
    correct: 1,
    explain: "Unlike ABO antibodies (which are naturally present from birth), Rh antibodies only develop after exposure to the D antigen, which is highly immunogenic. Her prior exposure to Rh-positive blood likely sensitized her, creating anti-D antibodies that could cross the placenta and cause hemolytic disease of the newborn in this and future Rh-positive pregnancies."
  }
]);
