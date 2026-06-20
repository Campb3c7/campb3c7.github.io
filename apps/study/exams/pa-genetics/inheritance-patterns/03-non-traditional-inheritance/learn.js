addCards([
  {
    title: "Non-Traditional Inheritance Overview",
    html: `<p>Several phenomena complicate basic mendelian patterns. These <strong>non-traditional (non-mendelian)</strong> patterns include:</p>
<ul>
  <li><strong>New (de novo) mutations</strong></li>
  <li><strong>Penetrance</strong> (fully, incomplete, age-dependent)</li>
  <li><strong>Variable expressivity</strong></li>
  <li><strong>Anticipation</strong></li>
  <li><strong>Codominance</strong></li>
  <li><strong>Mitochondrial disorders</strong></li>
  <li><strong>Genomic imprinting</strong></li>
  <li><strong>Uniparental disomy</strong></li>
</ul>`
  },
  {
    title: "New (De Novo) Mutations",
    hy: true,
    html: `<p><strong>De novo mutations</strong> are <span class="hl">sporadic in the affected individual — not transmitted from parents</span>.</p>
<ul>
  <li>Result from a variant in a <strong>germ cell of one parent</strong> or in the <strong>embryo itself during development</strong></li>
  <li>Only passed to future generations if it affects <strong>germ cells</strong> (not somatic cells)</li>
</ul>
<p>Example: <strong>Trisomy 21 (Down syndrome)</strong></p>
<ul>
  <li>The first familial case is sporadic</li>
  <li>But the affected individual can pass the mutation to future generations</li>
</ul>`
  },
  {
    title: "Penetrance",
    hy: true,
    html: `<p><strong>Penetrance</strong> is the <span class="hl">percentage of individuals with a particular genotype who express the expected phenotype</span>.</p>
<table class="learn-table">
  <tr><th>Type</th><th>Definition</th><th>Example</th></tr>
  <tr><td><strong>Fully penetrant</strong></td><td>100% of individuals with the genotype express the disease</td><td><span class="hl">Neurofibromatosis type 1</span> — all affected individuals show symptoms</td></tr>
  <tr><td><strong>Incompletely penetrant</strong></td><td>Some individuals with the genotype do NOT have the disease</td><td><span class="hl">BRCA1 mutation</span> — 20-30% of women with this mutation do NOT develop breast/ovarian cancer</td></tr>
  <tr><td><strong>Age-dependent</strong></td><td>Delay in age of onset</td><td><span class="hl">Huntington's disease</span> — symptoms usually not seen until age 30+</td></tr>
</table>`
  },
  {
    title: "Variable Expressivity",
    hy: true,
    html: `<p><strong>Expressivity</strong> is the degree to which a phenotypic characteristic is exhibited.</p>
<p><strong>Variable expressivity</strong> means individuals may experience <span class="hl">differing signs, symptoms, and severity</span> of the same disease.</p>
<p>Causes (usually unknown):</p>
<ul>
  <li><strong>Environmental effects</strong></li>
  <li><strong>Modifier genes</strong> that interact with the disease gene and influence expressivity</li>
</ul>
<p>Example: <strong>Cystic fibrosis (CF)</strong> — a modifier gene influences whether <strong>meconium ileus</strong> develops in an individual with CF.</p>
<div class="box-hy"><span class="lbl">High yield</span>Penetrance = do you have the disease or not (yes/no). Expressivity = how severe is the disease (degree).</div>`
  },
  {
    title: "Anticipation",
    hy: true,
    html: `<p><strong>Anticipation</strong>: as genetic disorders are passed to the next generation, symptoms become apparent at an <span class="hl">earlier age</span> and with <span class="hl">increased severity</span> with each successive generation.</p>
<p>Mechanism: caused by unusual mutations called <strong>trinucleotide repeat expansions</strong> — the repeated sequence grows longer with each generation.</p>
<p>Example: <strong>Myotonic dystrophy</strong> — affects muscle function, leading to worsening muscle loss and weakness in successive generations.</p>`
  },
  {
    title: "Codominance",
    hy: true,
    html: `<p><strong>Codominance</strong>: two different alleles are both expressed and <span class="hl">neither allele can mask the expression of the other</span>. Both alleles influence the trait.</p>
<p>Example: <strong>ABO blood type locus</strong></p>
<table class="learn-table">
  <tr><th>Genotype</th><th>Phenotype</th><th>Relationship</th></tr>
  <tr><td>AA or AO</td><td>Type A</td><td>A dominant over O</td></tr>
  <tr><td>BB or BO</td><td>Type B</td><td>B dominant over O</td></tr>
  <tr><td>OO</td><td>Type O</td><td>O is recessive</td></tr>
  <tr><td><strong>AB</strong></td><td><strong>Type AB</strong></td><td><span class="hl">A and B are codominant</span></td></tr>
</table>
<p>Individuals with AB blood type express phenotypes of <strong>both A and B</strong> — neither masks the other. Allele O is recessive to both.</p>`
  },
  {
    title: "Mitochondrial Disorders",
    hy: true,
    html: `<p><strong>Mitochondrial disorders</strong> result from mutations that alter functions of proteins or RNA molecules that reside in mitochondria.</p>
<p>Key characteristics:</p>
<ul>
  <li>Transmitted <span class="hl">only from mother</span> — mutant DNA is in mitochondria of egg cells</li>
  <li>Fathers do <strong>not</strong> transmit mitochondrial DNA to offspring</li>
  <li>Still unknown why these diseases only affect certain tissues</li>
</ul>
<p>Example: <strong>Leigh syndrome</strong> — severe neurological disorder with progressive loss of mental and movement abilities, often leading to death before age three.</p>`
  },
  {
    title: "Genomic Imprinting",
    hy: true,
    html: `<p><strong>Genomic imprinting</strong>: the <span class="hl">differential activation of genes depending on which parent they were inherited from</span>.</p>
<p>This violates Mendel's principle that phenotype is the same regardless of parental origin.</p>
<p>Within imprinted regions:</p>
<ul>
  <li>Some genes are active <strong>only on the paternal chromosome</strong> (silent on maternal)</li>
  <li>Other genes are active <strong>only on the maternal chromosome</strong> (silent on paternal)</li>
  <li>If the single active copy is lost (deleted), <strong>no gene product is made → disease results</strong></li>
</ul>
<p>Examples: <strong>Prader-Willi syndrome</strong> (paternal deletion) and <strong>Angelman syndrome</strong> (maternal deletion) — both involve deletion of the same critical region on chromosome 15.</p>`
  },
  {
    title: "Uniparental Disomy",
    hy: true,
    html: `<p><strong>Uniparental disomy</strong>: an individual inherits <span class="hl">two copies of a chromosome from one parent and none from the other</span>.</p>
<p>This can produce the same diseases as genomic imprinting by effectively removing the contribution of one parent's genes:</p>
<table class="learn-table">
  <tr><th>Type</th><th>Effect</th><th>Disease</th></tr>
  <tr><td><strong>Maternal disomy</strong> (2 maternal copies, 0 paternal)</td><td>Loss of paternally active genes</td><td><span class="hl">Prader-Willi syndrome</span></td></tr>
  <tr><td><strong>Paternal disomy</strong> (2 paternal copies, 0 maternal)</td><td>Loss of maternally active genes</td><td><span class="hl">Angelman syndrome</span></td></tr>
</table>`
  }
]);
