addCards([
  {
    title: "Autosomal Dominant (AD)",
    hy: true,
    html: `<p><strong>Autosomal dominant</strong> inheritance characteristics:</p>
<ul>
  <li>Affects <strong>both sexes equally</strong></li>
  <li>Affected individuals have <span class="hl">at least one affected parent</span> (unless incomplete penetrance)</li>
  <li>Child of an affected and an unaffected parent has <span class="hl">50% risk</span> of disease</li>
</ul>
<p>Key pattern: the trait appears in <strong>every generation</strong> (vertical transmission). Both males and females transmit to both sons and daughters.</p>
<div class="box-hy"><span class="lbl">High yield</span>AD = both sexes, every generation, 50% risk to offspring, at least one affected parent.</div>`
  },
  {
    title: "Autosomal Recessive (AR)",
    hy: true,
    html: `<p><strong>Autosomal recessive</strong> inheritance characteristics:</p>
<ul>
  <li>Affects <strong>both sexes equally</strong></li>
  <li>Child of <strong>unaffected carrier parents</strong> has <span class="hl">25% risk</span> of disease</li>
  <li><strong>Few affected</strong>, usually only in <strong>one generation</strong> (horizontal pattern)</li>
  <li><strong>Increased probability with parental consanguinity</strong> (related parents)</li>
</ul>
<p>Key pattern: affected individuals often appear "out of nowhere" — both parents are carriers but unaffected.</p>
<div class="box-hy"><span class="lbl">High yield</span>AR = both sexes, 25% risk from carrier parents, often one generation, consanguinity increases risk.</div>`
  },
  {
    title: "X-Linked Dominant (XD)",
    hy: true,
    html: `<p><strong>X-linked dominant</strong> inheritance characteristics:</p>
<ul>
  <li>Affects <span class="hl">more females than males</span> (females have two X chromosomes)</li>
  <li><strong>All daughters</strong> of an affected male are affected, but <strong>no sons</strong> (father passes X to daughters, Y to sons)</li>
  <li>Child of an <strong>affected female</strong> has <span class="hl">50% risk</span> of disease (regardless of sex)</li>
</ul>
<div class="box-hy"><span class="lbl">High yield</span>XD = more females affected. Affected father → ALL daughters affected, NO sons affected.</div>`
  },
  {
    title: "X-Linked Recessive (XR)",
    hy: true,
    html: `<p><strong>X-linked recessive</strong> inheritance characteristics:</p>
<ul>
  <li>Affects <span class="hl">almost exclusively males</span></li>
  <li>Affected males born from <strong>carrier mothers</strong> with <strong>50% risk</strong> of disease</li>
  <li><span class="hl">No male-to-male transmission</span> (fathers pass Y, not X, to sons)</li>
</ul>
<p>Females are usually carriers — they have one normal X to compensate. Males with the mutant X are affected because they have no second X to compensate.</p>
<div class="box-hy"><span class="lbl">High yield</span>XR = almost exclusively males. No male-to-male transmission. Carrier mothers pass to 50% of sons.</div>`
  },
  {
    title: "Y-Linked Inheritance",
    hy: true,
    html: `<p><strong>Y-linked</strong> inheritance characteristics:</p>
<ul>
  <li>Affects <span class="hl">only males</span></li>
  <li>Affected males <strong>always have affected fathers</strong></li>
  <li><strong>All sons</strong> of an affected male are affected</li>
</ul>
<p>Since only males have Y chromosomes, and every son inherits his father's Y, the trait passes strictly from father to all sons — no females are ever affected or carriers.</p>
<div class="box-hy"><span class="lbl">High yield</span>Y-linked = only males, always father-to-son, ALL sons affected.</div>`
  },
  {
    title: "Pedigree Pattern Comparison",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Pattern</th><th>Sex affected</th><th>Risk to offspring</th><th>Key distinguishing feature</th></tr>
  <tr><td><strong>AD</strong></td><td>Both equally</td><td>50%</td><td>Every generation (vertical)</td></tr>
  <tr><td><strong>AR</strong></td><td>Both equally</td><td>25%</td><td>Usually one generation; consanguinity</td></tr>
  <tr><td><strong>XD</strong></td><td>More females</td><td>50%</td><td>Affected father → all daughters, no sons</td></tr>
  <tr><td><strong>XR</strong></td><td>Almost exclusively males</td><td>50% of sons</td><td>No male-to-male transmission</td></tr>
  <tr><td><strong>Y-linked</strong></td><td>Only males</td><td>100% of sons</td><td>All sons of affected father are affected</td></tr>
</table>`
  }
]);
