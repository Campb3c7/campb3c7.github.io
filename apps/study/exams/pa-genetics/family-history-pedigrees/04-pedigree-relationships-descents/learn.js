addCards([
  {
    title: "Pedigree Line Types",
    hy: true,
    html: `<p>Four types of lines are used to connect individuals in a pedigree:</p>
<table class="learn-table">
  <tr><th>Line</th><th>Purpose</th></tr>
  <tr><td><strong>1. Relationship line</strong></td><td>Horizontal line connecting a mating pair</td></tr>
  <tr><td><strong>2. Line of descent</strong></td><td>Vertical line from the relationship line down to offspring</td></tr>
  <tr><td><strong>3. Sibship line</strong></td><td>Horizontal line connecting siblings</td></tr>
  <tr><td><strong>4. Individual's lines</strong></td><td>Vertical lines dropping from the sibship line to each individual</td></tr>
</table>`
  },
  {
    title: "Relationship Types",
    hy: true,
    html: `<p>Different relationship statuses are drawn differently:</p>
<table class="learn-table">
  <tr><th>Type</th><th>Symbol</th></tr>
  <tr><td><strong>Intact relationship (mating)</strong></td><td>Single horizontal line connecting partners</td></tr>
  <tr><td><strong>Relationship no longer exists</strong></td><td>Horizontal line with a <span class="hl">diagonal slash through it</span></td></tr>
  <tr><td><strong>Consanguineous mating</strong></td><td><span class="hl">Double horizontal line</span> connecting partners</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>Consanguinity (related parents) = double line. Separated/divorced = slashed line.</div>`
  },
  {
    title: "Sibships and Twins",
    hy: true,
    html: `<p>Children in a family are listed in <strong>birth order</strong> from left (oldest) to right (youngest), connected by a sibship line.</p>
<p><strong>Twins</strong> are drawn with lines that converge to a single point on the sibship line:</p>
<table class="learn-table">
  <tr><th>Type</th><th>Symbol</th></tr>
  <tr><td><strong>Monozygotic (identical) twins</strong></td><td>Converging lines connected by a <span class="hl">horizontal bar</span> between them</td></tr>
  <tr><td><strong>Dizygotic (fraternal) twins</strong></td><td>Converging lines <strong>without</strong> a connecting bar</td></tr>
  <tr><td><strong>Zygosity unknown</strong></td><td>Converging lines with a <strong>?</strong> between them</td></tr>
</table>`
  },
  {
    title: "No Children and Infertility",
    html: `<p>Symbols for reproductive status:</p>
<table class="learn-table">
  <tr><th>Situation</th><th>Symbol</th></tr>
  <tr><td><strong>No children by choice or unknown reason</strong></td><td>Relationship line with a vertical descent line crossed by a <strong>short horizontal bar</strong> at the bottom</td></tr>
  <tr><td><strong>Vasectomy</strong></td><td>Specific notation on the male symbol</td></tr>
  <tr><td><strong>Tubal ligation</strong></td><td>Specific notation on the female symbol</td></tr>
  <tr><td><strong>Infertility (unknown reason)</strong></td><td>Relationship line with a <strong>double horizontal bar</strong> crossing the descent line</td></tr>
  <tr><td><strong>Infertility (known reason)</strong></td><td>Same double bar with the cause noted (e.g., azoospermia, endometriosis)</td></tr>
</table>`
  },
  {
    title: "Assisted Reproduction Symbols",
    hy: true,
    html: `<p>Pedigrees can document assisted reproduction:</p>
<table class="learn-table">
  <tr><th>Situation</th><th>Symbol</th></tr>
  <tr><td><strong>Sperm donation</strong></td><td><strong>D</strong> placed near the male partner, with connecting line to offspring</td></tr>
  <tr><td><strong>Ovum donation</strong></td><td><strong>D</strong> placed near the female donor, with connecting line</td></tr>
  <tr><td><strong>Surrogate mother</strong></td><td><strong>S</strong> placed near the surrogate female</td></tr>
  <tr><td><strong>Surrogate ovum donation</strong></td><td><strong>D</strong> placed near surrogate who donates both ovum and carries pregnancy</td></tr>
</table>
<p>These notations clarify the <strong>biological</strong> versus <strong>social/rearing</strong> parentage, which is critical for accurate genetic risk assessment.</p>`
  },
  {
    title: "Adoption Symbols",
    html: `<p><strong>Adoption</strong> is shown using <strong>brackets</strong> around the individual:</p>
<table class="learn-table">
  <tr><th>Type</th><th>Symbol</th></tr>
  <tr><td><strong>Adopted into family</strong></td><td>Brackets opening <strong>inward</strong> (toward family)</td></tr>
  <tr><td><strong>Adopted out of family</strong></td><td>Brackets opening <strong>outward</strong> (away from family)</td></tr>
  <tr><td><strong>Adopted by a relative</strong></td><td>Dashed line to biological parents, solid line to adoptive parents</td></tr>
  <tr><td><strong>Planned adoption</strong></td><td>Specific notation for planned placement</td></tr>
</table>
<p>Distinguishing adopted individuals is essential because they do <strong>not</strong> share the biological family's genetic risks.</p>`
  },
  {
    title: "No Family History Available",
    html: `<p>When no family history can be obtained for a side of the family, a <strong>question mark (?)</strong> is placed where that branch would be.</p>
<p>This commonly occurs with:</p>
<ul>
  <li>Adopted individuals with unknown biological families</li>
  <li>Estranged family members</li>
  <li>Unknown paternity</li>
</ul>`
  },
  {
    title: "Carrier Symbols",
    hy: true,
    html: `<p>Carriers are unaffected individuals who carry one copy of a mutant allele:</p>
<table class="learn-table">
  <tr><th>Type</th><th>Symbol</th></tr>
  <tr><td><strong>X-linked carrier</strong></td><td>Circle (female) with a <span class="hl">dot in the center</span></td></tr>
  <tr><td><strong>Autosomal recessive carrier</strong></td><td>Symbol (square or circle) that is <span class="hl">half-filled</span></td></tr>
</table>
<p>X-linked carrier notation is used for females who carry one copy of an X-linked recessive mutation. Autosomal recessive carriers are heterozygous for a recessive condition.</p>
<div class="box-hy"><span class="lbl">High yield</span>X-linked carrier = dot in center of circle. Recessive carrier = half-filled symbol.</div>`
  }
]);
