addCards([
  {
    title: "X-Linked Recessive: Offspring Probabilities",
    hy: true,
    html: `<p><strong>Carrier mother (X<sup>A</sup>X<sup>a</sup>) × Normal father (X<sup>A</sup>Y)</strong> — the most common scenario:</p>
<table class="learn-table">
  <tr><th>Offspring</th><th>Probability</th><th>Status</th></tr>
  <tr><td>Daughters</td><td>50%</td><td>Carrier (X<sup>A</sup>X<sup>a</sup>)</td></tr>
  <tr><td>Daughters</td><td>50%</td><td>Normal (X<sup>A</sup>X<sup>A</sup>)</td></tr>
  <tr><td>Sons</td><td><span class="hl">50%</span></td><td><span class="hl">Affected (X<sup>a</sup>Y)</span></td></tr>
  <tr><td>Sons</td><td>50%</td><td>Normal (X<sup>A</sup>Y)</td></tr>
</table>
<p><strong>Affected father (X<sup>a</sup>Y) × Normal mother (X<sup>A</sup>X<sup>A</sup>):</strong></p>
<ul>
  <li><strong>All daughters</strong> = carriers (X<sup>A</sup>X<sup>a</sup>)</li>
  <li><strong>All sons</strong> = normal (X<sup>A</sup>Y) — they get father's Y, not his X</li>
</ul>`
  },
  {
    title: "X-Linked Dominant: Offspring Probabilities",
    hy: true,
    html: `<p><strong>Affected father (X<sup>A</sup>Y) × Normal mother (X<sup>a</sup>X<sup>a</sup>):</strong></p>
<table class="learn-table">
  <tr><th>Offspring</th><th>Probability</th><th>Status</th></tr>
  <tr><td>Daughters</td><td><span class="hl">100%</span></td><td><span class="hl">Affected</span> (X<sup>A</sup>X<sup>a</sup>)</td></tr>
  <tr><td>Sons</td><td><strong>0%</strong></td><td>Normal (X<sup>a</sup>Y)</td></tr>
</table>
<p><strong>Affected mother (X<sup>A</sup>X<sup>a</sup>) × Normal father (X<sup>a</sup>Y):</strong></p>
<table class="learn-table">
  <tr><th>Offspring</th><th>Probability</th><th>Status</th></tr>
  <tr><td>Daughters</td><td>50%</td><td>Affected (X<sup>A</sup>X<sup>a</sup>)</td></tr>
  <tr><td>Daughters</td><td>50%</td><td>Normal (X<sup>a</sup>X<sup>a</sup>)</td></tr>
  <tr><td>Sons</td><td><span class="hl">50%</span></td><td><span class="hl">Affected</span> (X<sup>A</sup>Y)</td></tr>
  <tr><td>Sons</td><td>50%</td><td>Normal (X<sup>a</sup>Y)</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>XLD affected father → ALL daughters affected, NO sons affected. XLD affected mother → 50% of each sex affected.</div>`
  },
  {
    title: "Y-Linked and Mitochondrial: Offspring Probabilities",
    hy: true,
    html: `<p><strong>Y-Linked (affected father):</strong></p>
<table class="learn-table">
  <tr><th>Offspring</th><th>Probability</th><th>Status</th></tr>
  <tr><td><strong>Sons</strong></td><td><span class="hl">100%</span></td><td><span class="hl">Affected</span> (inherit father's Y)</td></tr>
  <tr><td><strong>Daughters</strong></td><td>0%</td><td>Unaffected (inherit father's X, not Y)</td></tr>
</table>
<p><strong>Mitochondrial (affected mother):</strong></p>
<table class="learn-table">
  <tr><th>Offspring</th><th>Probability</th><th>Status</th></tr>
  <tr><td><strong>All children</strong> (sons and daughters)</td><td><span class="hl">100%</span></td><td><span class="hl">Inherit mutation</span></td></tr>
</table>
<p><strong>Mitochondrial (affected father):</strong></p>
<table class="learn-table">
  <tr><th>Offspring</th><th>Probability</th><th>Status</th></tr>
  <tr><td><strong>All children</strong></td><td><strong>0%</strong></td><td>Unaffected (no paternal mitochondria transmitted)</td></tr>
</table>
<p><em>Note: For mitochondrial disorders, inheriting the mutation does not guarantee clinical disease — severity depends on heteroplasmy and threshold effects.</em></p>`
  }
]);
