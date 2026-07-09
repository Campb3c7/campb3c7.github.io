addCards([
  {
    title: "ABO/Rh Typing — The Basic Logic",
    hy: true,
    html: `<p>A person expresses either <strong>A, B, A&B, or no antigens (O)</strong> on the surface of their RBCs.</p>
<div class="box-hy"><span class="lbl">High yield</span>Anyone who <strong>lacks</strong> one or both antigens automatically has <strong>IgM isoantibodies (isoagglutinins)</strong> in their plasma <em>against the missing antigen(s)</em> — this happens naturally, without prior exposure.</div>
<p><strong>Rh status</strong>: tests for the <strong>D antigen</strong> of the Rh system (+ or −).</p>
<ul>
  <li>Those lacking the D antigen (<strong>Rh-</strong>) do <em>not</em> have natural anti-D antibodies.</li>
  <li>But exposure to the D antigen is <span class="hl">highly immunogenic</span> — an Rh- person will create antibodies if given Rh+ blood.</li>
</ul>`
  },
  {
    title: "ABO Classification for RBC Donation/Transfusion",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Blood type</th><th>Antigens on RBC surface</th><th>Antibodies in plasma</th></tr>
  <tr><td><strong>A</strong></td><td>A antigens</td><td>B antibodies</td></tr>
  <tr><td><strong>B</strong></td><td>B antigens</td><td>A antibodies</td></tr>
  <tr><td><strong>AB</strong></td><td>Both A and B antigens</td><td><span class="hl">No antibodies</span></td></tr>
  <tr><td><strong>O</strong></td><td><span class="hl">No antigens</span></td><td>Both A and B antibodies</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span><strong>Type AB = "Universal Receiver" of RBCs</strong> (no antibodies in plasma to react against any donor antigen) — but can only <em>donate</em> RBCs to type AB.<br><strong>Type O = "Universal Donor" of RBCs</strong> (no antigen on the surface to trigger a reaction) — but can only <em>receive</em> type O RBCs.</div>`
  },
  {
    title: "ABO Plasma Compatibility — The Reverse Logic",
    hy: true,
    html: `<p>Plasma contains <strong>IgM antibodies</strong> against the A and B RBC antigens, so ABO compatibility must still be determined for plasma — but the donor/recipient logic <span class="hl">flips relative to RBCs</span>.</p>
<div class="box-hy"><span class="lbl">High yield</span><strong>Type AB = Universal Donor for FFP</strong> (AB patients have no antibodies in their plasma to attack a recipient's RBCs).<br><strong>Type O = Universal Receiver for FFP</strong> (O recipients have no antigens on their RBCs for donor plasma antibodies to react against).</div>
<p><strong>Rh compatibility is NOT necessary for plasma</strong> — Rh only matters for cellular products (RBCs, platelets), not plasma, since plasma itself carries no Rh antigen.</p>`
  },
  {
    title: "PRBCs vs. Plasma — Universal Donor/Recipient Flip",
    hy: true,
    html: `<table class="learn-table">
  <tr><th></th><th>Universal donor</th><th>Universal recipient</th></tr>
  <tr><td><strong>PRBCs</strong></td><td>Type O (no antigens to react)</td><td>Type AB (no antibodies to react)</td></tr>
  <tr><td><strong>Plasma (FFP)</strong></td><td>Type AB (no antibodies to attack recipient RBCs)</td><td>Type O (no antigens for donor antibodies to attack)</td></tr>
</table>
<div class="box-mnemonic"><span class="lbl">Mnemonic</span>For RBCs, think about the <strong>antigen</strong> being given (O has none — safest to give). For plasma, think about the <strong>antibody</strong> being given (AB has none — safest to give). The donor/recipient roles for O and AB completely swap between RBCs and plasma.</div>`
  },
  {
    title: "Full ABO/Rh Compatibility Table",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Type</th><th>Antibodies</th><th>Population frequency</th><th>Can receive RBCs from</th><th>Can receive plasma from</th></tr>
  <tr><td><strong>O</strong></td><td>Anti-A, Anti-B</td><td>45%</td><td>O</td><td>O, A, B, AB</td></tr>
  <tr><td><strong>A</strong></td><td>Anti-B</td><td>40%</td><td>A, O</td><td>A, AB</td></tr>
  <tr><td><strong>B</strong></td><td>Anti-A</td><td>11%</td><td>B, O</td><td>B, AB</td></tr>
  <tr><td><strong>AB</strong></td><td>No antibodies</td><td>4%</td><td>AB, A, B, O</td><td>AB</td></tr>
</table>
<table class="learn-table">
  <tr><th>Rh status</th><th>Frequency</th><th>Can receive</th></tr>
  <tr><td><strong>Rh-positive</strong></td><td>85%</td><td>Rh-positive or Rh-negative</td></tr>
  <tr><td><strong>Rh-negative</strong></td><td>15%</td><td>Rh-negative only (will make antibodies if given Rh+)</td></tr>
</table>`
  }
]);
