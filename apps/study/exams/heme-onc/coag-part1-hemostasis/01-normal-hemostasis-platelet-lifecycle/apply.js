addQuestions([
  {
    q: "A patient with advanced cirrhosis and massive splenomegaly is found to have a platelet count of 85,000/µL on routine labs, with no evidence of bleeding and normal platelet morphology on smear. What is the most likely explanation for this finding?",
    choices: [
      "Increased splenic sequestration of platelets — up to 1/3 of total platelets are normally sequestered in the spleen, and splenomegaly (here from chronic liver disease) increases this sequestration, lowering the peripheral count without indicating a true production or destruction problem",
      "This must indicate a bone marrow production failure requiring biopsy",
      "This must indicate immune-mediated platelet destruction requiring steroids",
      "Splenomegaly has no relationship to platelet counts and another cause must be sought"
    ],
    correct: 0,
    explain: "Splenomegaly (here from chronic liver disease/cirrhosis) increases splenic sequestration of platelets beyond the normal ~1/3 that reside there, redistributing platelets out of the peripheral circulating pool and lowering the measured platelet count — without necessarily indicating a production or destructive problem. This is a distinct mechanism from bone marrow failure or immune destruction."
  },
  {
    q: "A researcher is explaining why a patient's arterial thrombosis (an MI) was treated with aspirin and clopidogrel, while her separate venous DVT was treated with a DOAC (an oral Xa inhibitor) rather than antiplatelet therapy. What underlying physiologic principle explains this differential drug selection?",
    choices: [
      "In the arterial system (high shear, high flow velocity), platelets and vWF are the dominant mechanism of clot formation, making antiplatelet drugs most effective; in the venous system (low shear, low flow), the coagulation cascade/thrombin generation dominates, making anticoagulants most effective",
      "Arterial and venous clots are mechanistically identical, and the drug choice is arbitrary",
      "Anticoagulants are always superior to antiplatelet agents regardless of vessel type, and the MI treatment was an error",
      "Antiplatelet agents are always superior to anticoagulants regardless of vessel type, and the DVT treatment was an error"
    ],
    correct: 0,
    explain: "This reflects the fundamental location-dependent principle of hemostasis: platelets (and vWF) dominate clot formation in the high-shear, high-flow arterial system, making antiplatelet therapy (aspirin, clopidogrel) the appropriate choice for arterial events like MI; the coagulation cascade (thrombin generation) dominates in the low-shear, low-flow venous system, making anticoagulant therapy (like a DOAC) the appropriate choice for venous events like DVT."
  },
  {
    q: "A medical student asks why damaged endothelial cells 'flip a switch' from anti-coagulant to pro-coagulant behavior almost instantly after injury. What is the best physiologic explanation?",
    choices: [
      "Uninjured endothelial cells constantly secrete nitric oxide, ADPase, and prostacyclin (promoting platelet inhibition and vasorelaxation); upon damage, they rapidly cease this secretion and instead begin producing pro-coagulant molecules and tissue factor, exposing the underlying collagen/tissue factor matrix that triggers platelet capture and cascade activation",
      "Endothelial cells have no baseline secretory function and only become active after injury",
      "The switch occurs because platelets directly damage the endothelium, not the reverse",
      "This 'switch' does not actually occur; endothelial behavior is unchanged by injury"
    ],
    correct: 0,
    explain: "This near-instantaneous shift reflects the dual, opposing baseline and injury-response functions of endothelial cells: at baseline they actively suppress clotting (NO, ADPase, prostacyclin → platelet inhibition and vasorelaxation), but upon damage they stop this suppression and simultaneously begin producing pro-coagulant molecules and tissue factor while exposing the underlying collagen/tissue factor-rich subendothelial matrix — together rapidly converting a locally anti-thrombotic environment into a pro-thrombotic one."
  },
  {
    q: "A patient with a genetic defect affecting the platelet's GPIb receptor complex presents with a bleeding tendency. Based on the normal mechanism of platelet adhesion, what step in hemostasis is most directly impaired?",
    choices: [
      "The initial rolling and sticking of platelets to vWF at the site of vascular injury, since GPIb is the platelet receptor that binds vWF to initiate adhesion",
      "The conversion of fibrinogen to fibrin by thrombin",
      "The production of tissue factor by damaged endothelial cells",
      "The conversion of plasminogen to plasmin by t-PA"
    ],
    correct: 0,
    explain: "GPIb is the platelet surface receptor that binds to vWF, allowing platelets to roll and stick at the site of vascular injury — the initial adhesion step in hemostasis. A defect in this receptor would impair this crucial first step, preventing platelets from properly localizing to injury sites and predisposing to a bleeding tendency (this describes the pathophysiology of Bernard-Soulier syndrome, though the vignette doesn't need to name it explicitly)."
  }
]);
