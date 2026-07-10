addQuestions([
  {
    q: "What are examples of COX-2 inhibitors?",
    choices: ["Ibuprofen and naproxen", "Cilostazol and dipyridamole", "Aspirin and clopidogrel", "Celecoxib (Celebrex) and meloxicam (Mobic)"],
    correct: 3,
    explain: "Celecoxib (Celebrex) and meloxicam (Mobic) are COX-2 inhibitors; rofecoxib (Vioxx) was another, now removed from the market."
  },
  {
    q: "Why were COX-2 inhibitors initially thought to be 'platelet-neutral'?",
    choices: ["Because COX-2 inhibitors have no effect on any enzyme in the body", "Because COX-2 inhibitors were never tested on platelets", "Because platelets do not participate in hemostasis", "Because COX-2 is not found on mature platelets, unlike COX-1"],
    correct: 3,
    explain: "COX-2 inhibitors were initially thought to be platelet-neutral because COX-2 is not found on mature platelets, unlike COX-1, which mediates platelet aggregation via thromboxane A2."
  },
  {
    q: "Despite being platelet-neutral, what have post-marketing studies shown about COX-2 inhibitors?",
    choices: ["They decrease production of anti-thrombogenic prostacyclin and have been linked to arterial events: stroke, HTN, and MI", "They increase production of anti-thrombogenic prostacyclin, reducing vascular events", "They have no effect on any vascular outcome", "They directly cause thrombocytopenia"],
    correct: 0,
    explain: "Post-marketing studies showed that COX-2 inhibitors decrease production of anti-thrombogenic prostacyclin and have been linked to arterial events including stroke, HTN, and MI."
  },
  {
    q: "What is the mechanistic explanation for why platelet-neutral COX-2 inhibitors still shift the balance toward a pro-coagulant state?",
    choices: ["They increase both TXA2 and prostacyclin production equally, with no net effect", "They preserve platelets' TXA2 production (via COX-1, unaffected) while suppressing endothelial prostacyclin production (a COX-2 product), tipping the balance toward pro-coagulant", "They directly activate platelets via a novel receptor mechanism", "They directly inhibit antithrombin III"],
    correct: 1,
    explain: "By preserving platelets' TXA2 production (made via COX-1, which COX-2 inhibitors don't affect) while suppressing endothelial prostacyclin production (a COX-2-dependent, anti-thrombogenic product), COX-2 inhibitors shift the balance of power toward the pro-coagulant side — even without directly affecting platelets themselves."
  },
  {
    q: "What happens when an NSAID is given BEFORE or WITH aspirin, in a patient relying on aspirin's antiplatelet effect?",
    choices: ["The NSAID enhances aspirin's antiplatelet effect", "The NSAID has no interaction with aspirin's COX-1 binding", "The NSAID permanently destroys the platelet, identical to aspirin", "The NSAID competes for the same COX-1 binding site, limiting aspirin's effect"],
    correct: 3,
    explain: "NSAIDs given before or with ASA will compete for the same COX-1 binding site, thereby limiting aspirin's antiplatelet effect."
  },
  {
    q: "How long after aspirin should an NSAID be given to avoid limiting aspirin's antiplatelet effect?",
    choices: ["2 hours or more after ASA", "24 hours or more after ASA", "NSAIDs should always be given before ASA, never after", "Immediately, with no delay needed"],
    correct: 0,
    explain: "NSAIDs must be given 2 hours or more after ASA to avoid limiting aspirin's effect, if the patient is prescribed aspirin for its antiplatelet benefit."
  },
  {
    q: "Why does giving the NSAID after (rather than before/with) aspirin preserve aspirin's benefit?",
    choices: ["It prevents the NSAID from being absorbed at all", "It allows the NSAID to permanently bind COX-1 first instead", "It allows aspirin to permanently acetylate COX-1 first, before the reversibly-binding NSAID has a chance to competitively occupy the site", "It has no mechanistic basis and is simply an arbitrary clinical convention"],
    correct: 2,
    explain: "Giving the NSAID after aspirin allows aspirin's fast, permanent acetylation of COX-1 to occur first, before the NSAID (which binds reversibly and competitively) has a chance to occupy the binding site and block aspirin's irreversible effect."
  }
]);
