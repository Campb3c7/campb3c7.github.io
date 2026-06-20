addCards([
  {
    title: "Basic Individual Symbols",
    hy: true,
    html: `<p>Standard pedigree symbols for <strong>individuals</strong>:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td><strong>Square (□)</strong></td><td>Male</td></tr>
  <tr><td><strong>Circle (○)</strong></td><td>Female</td></tr>
  <tr><td><strong>Diamond (◇)</strong></td><td>Sex unknown</td></tr>
</table>
<p>Additional details can be placed inside or near the symbol:</p>
<ul>
  <li>Birth year (e.g., <strong>b. 1945</strong>)</li>
  <li>Age (e.g., <strong>34 y</strong>)</li>
</ul>`
  },
  {
    title: "Affected Individuals",
    hy: true,
    html: `<p>Affection status is shown by <strong>filling in</strong> the symbol:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td><strong>Open (empty) symbol</strong></td><td><span class="hl">Unaffected</span></td></tr>
  <tr><td><strong>Filled (solid) symbol</strong></td><td><span class="hl">Affected</span> — single disorder</td></tr>
  <tr><td><strong>Symbol divided into sections, some filled</strong></td><td>Affected with <strong>multiple disorders</strong> (each section = different condition)</td></tr>
</table>`
  },
  {
    title: "Proband and Consultand Symbols",
    hy: true,
    html: `<p>Special indicators for key individuals:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td>Arrow pointing to individual + <strong>P</strong></td><td><strong>Proband</strong> (propositus/proposita) — the affected index case</td></tr>
  <tr><td>Arrow pointing to individual <strong>(no P)</strong></td><td><strong>Consultand</strong> — person seeking counseling/testing</td></tr>
</table>`
  },
  {
    title: "Multiple Individuals",
    html: `<p>When representing multiple people of the same type:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td>Symbol with a <strong>number inside</strong> (e.g., 5)</td><td>Multiple individuals — <strong>number known</strong></td></tr>
  <tr><td>Symbol with <strong>"n" inside</strong></td><td>Multiple individuals — <strong>number unknown</strong></td></tr>
</table>
<p>This can apply to males (square), females (circle), or unknown sex (diamond).</p>`
  },
  {
    title: "Deceased Individuals",
    hy: true,
    html: `<p>Death is indicated by a <strong>diagonal line (slash)</strong> through the symbol:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td>Open symbol with <strong>slash through it</strong></td><td>Deceased, <strong>unaffected</strong></td></tr>
  <tr><td>Filled symbol with <strong>slash through it</strong></td><td>Deceased, <strong>affected</strong></td></tr>
</table>
<p>Additional details may include: <strong>d. 60 y</strong> (died at 60 years), <strong>d. 1945</strong> (died in 1945), <strong>d. 6 m</strong> (died at 6 months).</p>`
  },
  {
    title: "Stillbirths",
    hy: true,
    html: `<p><strong>Stillbirths (SB)</strong> are represented by <strong>smaller symbols</strong> with "SB" written above:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td>Small open symbol + <strong>SB</strong> + gestational age</td><td>Stillbirth, <strong>unaffected</strong></td></tr>
  <tr><td>Small filled symbol + <strong>SB</strong> + gestational age</td><td>Stillbirth, <strong>affected</strong></td></tr>
</table>
<p>Gestational age is noted (e.g., <strong>34 wk</strong>, <strong>26 wk</strong>).</p>`
  },
  {
    title: "Pregnancies",
    html: `<p><strong>Pregnancies (P)</strong> are shown using the standard shape with a <strong>P inside</strong>:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td>Symbol with <strong>P</strong> inside (open)</td><td>Pregnancy, <strong>unaffected</strong></td></tr>
  <tr><td>Symbol with <strong>P</strong> inside (filled)</td><td>Pregnancy, <strong>affected</strong></td></tr>
</table>
<p>Additional details: <strong>LMP</strong> (last menstrual period date) or gestational age (e.g., <strong>24 wk</strong>). Diamond with P if sex is unknown.</p>`
  },
  {
    title: "Spontaneous Abortions (SAB)",
    hy: true,
    html: `<p><strong>Spontaneous abortions (SAB)</strong> — miscarriages — are represented by <strong>small triangles</strong>:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td>Small <strong>open triangle</strong></td><td>SAB, <strong>unaffected</strong></td></tr>
  <tr><td>Small <strong>filled triangle</strong></td><td>SAB, <strong>affected</strong></td></tr>
</table>
<p>Sex may be indicated if known (male or female notation near the triangle).</p>`
  },
  {
    title: "Terminations of Pregnancy (TOP)",
    hy: true,
    html: `<p><strong>Terminations of pregnancy (TOP)</strong> — elective abortions — are represented by <strong>small triangles with a horizontal line through them</strong>:</p>
<table class="learn-table">
  <tr><th>Symbol</th><th>Meaning</th></tr>
  <tr><td>Triangle with <strong>line through it</strong> (open)</td><td>TOP, <strong>unaffected</strong></td></tr>
  <tr><td>Triangle with <strong>line through it</strong> (filled)</td><td>TOP, <strong>affected</strong></td></tr>
</table>
<p>Sex may be indicated if known. The horizontal line through the triangle <strong>distinguishes TOP from SAB</strong>.</p>
<div class="box-hy"><span class="lbl">High yield</span>SAB = plain triangle. TOP = triangle with a line through it. Both: open = unaffected, filled = affected.</div>`
  }
]);
