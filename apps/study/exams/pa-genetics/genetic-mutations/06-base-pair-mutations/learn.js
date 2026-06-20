addCards([
  {
    title: "Types of Gene Mutations",
    html: `<p>Gene mutations involve <strong>alterations of DNA sequences</strong> and fall into categories:</p>
<ul>
  <li><strong>Single base pair alterations</strong> — mutations in coding DNA or regulatory sequences (not visible microscopically)</li>
  <li><strong>Chromosomal alterations</strong> — gain or loss of entire chromosomes (observable microscopically)</li>
</ul>
<p>Single base pair mutations include <strong>base pair substitutions</strong> and <strong>base pair deletions/insertions</strong>.</p>`
  },
  {
    title: "Base Pair Substitutions: Overview",
    hy: true,
    html: `<p>A <strong>base pair substitution</strong> is the change of a normal base pair to another. This can have several consequences:</p>
<table class="learn-table">
  <tr><th>Type</th><th>Result</th></tr>
  <tr><td><strong>Silent mutation</strong></td><td>No consequence — amino acid unchanged</td></tr>
  <tr><td><strong>Missense mutation</strong></td><td>Codon changed → different amino acid</td></tr>
  <tr><td><strong>Nonsense mutation</strong></td><td>Codon changed → premature <span class="hl">stop codon</span></td></tr>
  <tr><td><strong>Splice site mutation</strong></td><td>Abolishes or creates a splice site</td></tr>
  <tr><td><strong>Promoter (regulatory) mutation</strong></td><td>Increased or decreased gene expression</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>Silent = no change. Missense = wrong amino acid. Nonsense = premature stop. Splice site = abnormal mRNA processing. Promoter = altered expression.</div>`
  },
  {
    title: "Silent and Missense Mutations",
    html: `<p><strong>Silent mutation</strong>:</p>
<ul>
  <li>A single base substitution that does <strong>not change the amino acid</strong></li>
  <li>Tolerated within the protein — <strong>no consequence</strong></li>
</ul>
<p><strong>Missense mutation</strong>:</p>
<ul>
  <li>A single base pair substitution that <span class="hl">changes the codon to encode a different amino acid</span></li>
  <li>The changed amino acid may alter the protein enough to cause it to be <strong>structurally abnormal or unstable</strong></li>
</ul>`
  },
  {
    title: "Nonsense Mutations",
    hy: true,
    html: `<p>A <strong>nonsense mutation</strong> is a single base pair substitution that changes an amino acid codon into a <span class="hl">premature stop codon</span>.</p>
<p>Consequences:</p>
<ul>
  <li>Translation ends <strong>before the protein is finished</strong></li>
  <li>Produces either an <strong>abnormally shaped protein with altered function</strong></li>
  <li>Or a protein that is <strong>very unstable and quickly degraded</strong></li>
</ul>
<p>Nonsense mutations are generally more severe than missense mutations because the protein is truncated rather than just having one wrong amino acid.</p>`
  },
  {
    title: "Splice Site Mutations",
    hy: true,
    html: `<p><strong>Splice site mutations</strong> are single base mutations that occur at <span class="hl">intron-exon boundaries</span>.</p>
<p>Effects:</p>
<ul>
  <li><strong>Alter patterns of mRNA splicing</strong></li>
  <li>Interfere with splicing of introns during formation of mature mRNA from primary RNA</li>
  <li>Can result in <strong>partial deletion of an exon</strong> or <strong>excision within an exon</strong></li>
  <li>Alters the coding sequence → <strong>structurally unstable or abnormal proteins</strong></li>
</ul>`
  },
  {
    title: "Promoter (Regulatory) Mutations",
    html: `<p><strong>Promoter mutations</strong> alter the regulation of transcription or translation:</p>
<ul>
  <li>Can <strong>decrease the affinity of RNA polymerase</strong> for a promoter site → reduced mRNA production</li>
  <li>Can involve mutations of <strong>transcription factor genes</strong> or <strong>enhancer sequences</strong></li>
  <li>Result in net <span class="hl">increased or decreased gene expression</span></li>
  <li>Directly affects formation of proteins</li>
</ul>`
  },
  {
    title: "Base Pair Deletions and Insertions",
    hy: true,
    html: `<p>Genes can be mutated by the <strong>deletion or insertion</strong> of nucleotide bases, resulting in extra or missing amino acids.</p>
<p>Two types based on whether the reading frame is disrupted:</p>
<table class="learn-table">
  <tr><th>Type</th><th>Base pairs deleted/inserted</th><th>Effect</th></tr>
  <tr><td><strong>Frame-shift mutation</strong></td><td><span class="hl">NOT a multiple of 3</span></td><td>Reading frame shifts — ALL downstream amino acids are different. Abnormal protein or no protein at all.</td></tr>
  <tr><td><strong>In-frame mutation</strong></td><td><span class="hl">A multiple of 3</span></td><td>Only a few amino acids change. Protein may still function.</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>Frame-shift (not multiple of 3) = devastating — all downstream amino acids wrong. In-frame (multiple of 3) = only a few amino acids added/removed — protein may still work.</div>`
  },
  {
    title: "Frame-Shift vs. In-Frame Mutations",
    hy: true,
    html: `<p><strong>Frame-shift mutations</strong> are especially harmful:</p>
<ul>
  <li>Since codons are read in groups of <strong>3 bases</strong>, deleting or inserting 1 or 2 bases <strong>shifts the entire reading frame</strong></li>
  <li>After the mutation site, <strong>all subsequent amino acids are different</strong></li>
  <li>Result: <span class="hl">either an abnormal protein or no protein at all</span></li>
</ul>
<p><strong>In-frame mutations</strong> are less severe:</p>
<ul>
  <li>Deletions/insertions of 3, 6, 9, etc. bases keep the reading frame intact</li>
  <li>Only <strong>a few amino acids</strong> are changed, added, or removed</li>
  <li>The protein <strong>may still function</strong>, even with a slightly different sequence</li>
</ul>`
  }
]);
