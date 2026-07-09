addCards([
  {
    title: "Hemoglobin & Hematocrit — The \"H&H\"",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Test</th><th>What it measures</th></tr>
  <tr><td><strong>Hemoglobin (Hgb)</strong></td><td>Amount of hemoglobin per volume of blood (mg/dL)</td></tr>
  <tr><td><strong>Hematocrit (Hct)</strong></td><td>Volume of RBCs in the blood, expressed as a %</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>The Hct (and to a lesser extent the Hgb) should be interpreted <strong>cautiously</strong>, since these are <span class="hl">concentrations</span> affected by changes in <strong>plasma volume</strong> — e.g., dehydration can falsely elevate H&H, while volume overload/over-resuscitation can falsely lower it, independent of true RBC mass.</div>`
  },
  {
    title: "WBC & Platelet Count — Why They Matter in Anemia Workup",
    hy: true,
    html: `<p>Every CBC also reports the WBC count and platelet count alongside the RBC parameters.</p>
<div class="box-hy"><span class="lbl">High yield</span>If the WBC and platelet counts are <strong>also low</strong> along with the anemia (<span class="hl">pancytopenia</span>), a <strong>bone marrow process</strong> should be suspected as the underlying cause — covered in depth in a later objective.</div>`
  },
  {
    title: "RBC Indices — RBC Count, MCV, RDW",
    hy: true,
    html: `<p>Every CBC provides RBC indices that help narrow the differential:</p>
<table class="learn-table">
  <tr><th>Index</th><th>Meaning</th></tr>
  <tr><td><strong>RBC count</strong></td><td>Total number of RBCs per cubic mL — if RBCs are very small (microcytic), the count can be <em>high</em> despite anemia</td></tr>
  <tr><td><strong>MCV</strong></td><td>Average size of the RBC (mean corpuscular volume)</td></tr>
  <tr><td><strong>RDW</strong></td><td>Range of RBC sizes (red cell distribution width)</td></tr>
</table>
<p>Full classification logic (microcytic/normocytic/macrocytic, and using RDW to check if MCV is trustworthy) is covered in a dedicated objective.</p>`
  },
  {
    title: "Reticulocyte Count",
    hy: true,
    html: `<p>The reticulocyte count assesses whether the bone marrow is <strong>working appropriately</strong> in response to anemia — it must be <span class="hl">specifically ordered</span> (not part of a standard CBC) and must be <strong>corrected</strong> for the degree of anemia to be interpretable. Full interpretation is covered in a dedicated objective.</p>`
  },
  {
    title: "Iron Studies",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Test</th><th>What it measures</th></tr>
  <tr><td><strong>Serum iron</strong></td><td>Total amount of iron in the blood</td></tr>
  <tr><td><strong>Transferrin</strong></td><td>Main binding protein for iron; produced in proportion to the body's need for iron. In a healthy person, ~1/3 of transferrin's binding sites are used to transport iron.</td></tr>
  <tr><td><strong>TIBC</strong></td><td>Total iron binding capacity — measures all proteins available to bind iron (including transferrin); an <em>indirect</em> measurement of transferrin</td></tr>
  <tr><td><strong>% Saturation</strong></td><td>Percentage of transferrin saturated with iron; calculated from transferrin or TIBC when serum iron is known</td></tr>
  <tr><td><strong>Ferritin</strong></td><td>Main iron storage protein inside cells — the <span class="hl">most useful indicator of iron deficiency</span>, since ferritin stores fall significantly before serum iron drops</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>Ferritin is also an <strong>acute phase reactant</strong> — it may be falsely elevated if significant inflammation is present, potentially masking a true iron deficiency.</div>`
  },
  {
    title: "B12 & Folate Levels",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Test</th><th>Notes</th></tr>
  <tr><td><strong>B12 level</strong></td><td>A direct measure of the amount of B12 in the blood</td></tr>
  <tr><td><strong>Serum folate level</strong></td><td>Can be <span class="hl">misleading</span> — it highly reflects a patient's most recent diet, not true body stores</td></tr>
  <tr><td><strong>RBC folate level</strong></td><td>More valid for evaluating anemia, but rarely ordered</td></tr>
</table>
<p>In practice, if folate deficiency is suspected, patients are often simply <strong>supplemented empirically</strong> with folic acid — especially in situations where deficiency is expected, such as <strong>pregnancy</strong> or starting a patient on <strong>methotrexate</strong>.</p>`
  },
  {
    title: "LFTs, LDH, Bilirubin & Haptoglobin",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Test</th><th>Role</th></tr>
  <tr><td><strong>AST / ALT</strong></td><td>Liver enzymes — elevated with liver inflammation</td></tr>
  <tr><td><strong>LDH</strong></td><td>Elevated if hemolysis is occurring, but <span class="hl">nonspecific alone</span></td></tr>
  <tr><td><strong>Bilirubin</strong></td><td>Unconjugated fraction rises with hemolysis (see hemolysis objective)</td></tr>
  <tr><td><strong>Haptoglobin</strong></td><td>Carrier protein for hemoglobin in serum; this test measures the <em>free</em> haptoglobin available to bind hemoglobin — <span class="hl">low</span> if hemolysis is occurring, since more of it is bound up carrying released hemoglobin</td></tr>
</table>`
  },
  {
    title: "TSH, SPEP/UPEP & Hemoglobin Electrophoresis",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Test</th><th>What it's for</th></tr>
  <tr><td><strong>TSH</strong></td><td>Screening test for thyroid disease — hypothyroidism can cause anemia</td></tr>
  <tr><td><strong>SPEP/UPEP</strong></td><td>Serum and urine protein electrophoresis — used to look for <strong>multiple myeloma</strong> (a plasma cell malignancy, most common in adults 50s+)</td></tr>
  <tr><td><strong>Hemoglobin electrophoresis</strong></td><td>Looks for <strong>hemoglobinopathies</strong> (e.g., sickle cell disease, thalassemia)</td></tr>
</table>`
  },
  {
    title: "DAT, Bone Marrow Biopsy & Genetic Testing",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Test</th><th>Notes</th></tr>
  <tr><td><strong>Direct antiglobulin test (DAT/Coombs)</strong></td><td>Used in the workup of hemolytic anemias to determine if the patient is producing an antibody to their own RBCs</td></tr>
  <tr><td><strong>Bone marrow biopsy</strong></td><td>An <strong>invasive</strong> bedside test — obtains a core of marrow plus an aspirate for pathologist review</td></tr>
  <tr><td><strong>Genetic testing</strong></td><td>Looks for specific mutations; <span class="hl">expensive and slow</span> (days to weeks to result). Usually used to identify thalassemia, sickle cell disease, and other hemoglobinopathies.</td></tr>
</table>`
  }
]);
