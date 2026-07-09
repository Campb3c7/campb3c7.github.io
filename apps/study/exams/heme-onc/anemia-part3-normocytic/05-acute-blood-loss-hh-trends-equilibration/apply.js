addQuestions([
  {
    q: "A 45-year-old man arrives in the ED 1 hour after a high-speed MVC with obvious hemodynamic instability (BP 78/45, HR 135). His initial H&H is 13.5 g/dL / 40% — essentially normal. A junior resident concludes he has not lost significant blood volume because his H&H is normal. Why is this conclusion potentially dangerous?",
    choices: [
      "Immediately after acute hemorrhage, H&H may not yet reflect the true magnitude of blood loss because whole blood (plasma and RBCs together) was lost, and equilibration (dilution to a true, lower value) has not yet occurred — a normal early H&H does not rule out substantial blood loss in a hemodynamically unstable patient",
      "A normal H&H immediately after trauma definitively rules out significant hemorrhage",
      "H&H only changes 2 weeks after trauma, so this measurement is far too early to be meaningful in either direction",
      "The H&H would have already reflected the full extent of blood loss and can be trusted completely at this point"
    ],
    correct: 0,
    explain: "This is the critical clinical pitfall of acute blood loss: because whole blood (both plasma and RBCs) is lost together initially, the H&H concentration doesn't drop right away — it takes about 24 hours of equilibration for the H&H to fall to a value that truly reflects the RBC mass lost. A hemodynamically unstable trauma patient with a 'normal' early H&H may still have suffered massive blood loss; the clinical picture (vital signs, mechanism, exam) should guide management, not a falsely reassuring early H&H."
  },
  {
    q: "A patient with a slow GI bleed has serial H&H checks every 6 hours after admission. The bleeding is controlled endoscopically at hour 2, but the H&H continues to fall over the next 18 hours before stabilizing. The care team is concerned about rebleeding. What alternative, non-alarming explanation should be considered?",
    choices: [
      "The falling H&H over the ~24 hours after bleeding stops may simply represent expected equilibration as plasma volume is restored and the true RBC deficit is revealed, rather than necessarily indicating rebleeding",
      "A falling H&H after endoscopic control always definitively proves rebleeding has occurred",
      "H&H should never change after bleeding has been controlled, so this must be a lab error",
      "The falling H&H indicates the patient has developed aplastic anemia"
    ],
    correct: 0,
    explain: "Since equilibration takes roughly 24 hours after bleeding stops, a continued fall in H&H during that window does not necessarily mean rebleeding — it can represent the expected dilutional process as plasma volume is restored, revealing the true magnitude of the original blood loss. This should be interpreted alongside clinical signs of ongoing bleeding (vital sign instability, melena, hematochezia) rather than treated as diagnostic of rebleeding on its own."
  },
  {
    q: "A patient acutely loses approximately 1 unit of blood volume from a surgical complication. Their H&H is checked immediately post-op and again 24 hours later. Which pattern of values is most consistent with the expected equilibration process (assuming no further bleeding and no transfusion)?",
    choices: [
      "A relatively preserved/near-baseline H&H immediately post-op that trends downward to a lower, stable value by 24 hours",
      "An immediately and maximally low H&H post-op that then rises back toward baseline by 24 hours without any transfusion",
      "No change in H&H at any time point",
      "An immediately low H&H that continues falling indefinitely without ever stabilizing"
    ],
    correct: 0,
    explain: "Consistent with the physiology of equilibration, the H&H checked immediately after acute blood loss tends to be relatively preserved (since whole blood was lost proportionally, not yet diluted), then trends downward over roughly 24 hours as plasma volume is restored (via compensatory fluid shifts and any fluids given), settling at a lower, stable value that accurately reflects the true RBC mass lost — assuming no ongoing bleeding or transfusion in the interim."
  }
]);
