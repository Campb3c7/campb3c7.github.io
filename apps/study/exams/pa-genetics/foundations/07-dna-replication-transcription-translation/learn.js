addCards([
  {
    title: "DNA Replication",
    hy: true,
    html: `<p><strong>DNA replication</strong> occurs during the <strong>interphase synthesis (S) stage</strong> of the cell cycle. The entire DNA molecule must be copied before cell division.</p>
<p>How it works:</p>
<ul>
  <li>The DNA molecule <strong>"unzips"</strong> — strands separate</li>
  <li>Free nucleotides in the nucleus fill in the complementary bases on each strand</li>
  <li>Each original strand serves as a <strong>template</strong> for a new strand</li>
  <li>Nucleotides can only be added to the <strong>3′ end</strong></li>
</ul>
<p>Replication does <strong>not</strong> proceed linearly end-to-end. Instead, it begins at <span class="hl">multiple points simultaneously</span> via <strong>replication bubbles</strong>, allowing the process to proceed much more quickly.</p>`
  },
  {
    title: "DNA Function: Replication vs. Expression",
    html: `<p>DNA has two fundamental functions:</p>
<table class="learn-table">
  <tr><th>Function</th><th>What happens</th><th>When</th></tr>
  <tr><td><strong>Replication</strong></td><td>DNA is copied before cell division</td><td>Interphase (S phase)</td></tr>
  <tr><td><strong>Expression</strong></td><td>Genes control characteristics via protein synthesis</td><td>Ongoing in active cells</td></tr>
</table>
<p>Gene expression is split into two parts:</p>
<ul>
  <li><strong>Transcription</strong>: making RNA (occurs in the nucleus)</li>
  <li><strong>Translation</strong>: making protein (occurs in the cytoplasm)</li>
</ul>`
  },
  {
    title: "The Genetic Code and Codons",
    hy: true,
    html: `<p>The genetic code translates the <strong>nucleotide language of DNA</strong> into the <strong>amino acid language of proteins</strong>.</p>
<ul>
  <li>A <strong>codon</strong> is a sequence of <span class="hl">3 nucleotides</span> that codes for a specific amino acid</li>
  <li>A "sentence" of codons codes for a <strong>polypeptide chain</strong></li>
  <li>There are <strong>20 different amino acids</strong></li>
</ul>
<p>Special codons:</p>
<table class="learn-table">
  <tr><th>Codon</th><th>Function</th></tr>
  <tr><td><strong>AUG</strong></td><td><span class="hl">Start codon</span> — initiates translation</td></tr>
  <tr><td><strong>UAA</strong></td><td><span class="hl">Stop codon</span> — terminates translation</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>A codon = 3 nucleotides = 1 amino acid. Start codon: AUG. Stop codon: UAA (also UAG, UGA).</div>`
  },
  {
    title: "RNA vs. DNA",
    hy: true,
    html: `<p><strong>RNA (ribonucleic acid)</strong> differs from DNA in key ways:</p>
<table class="learn-table">
  <tr><th>Feature</th><th>DNA</th><th>RNA</th></tr>
  <tr><td><strong>Sugar</strong></td><td>Deoxyribose</td><td>Ribose</td></tr>
  <tr><td><strong>Strands</strong></td><td>Double-stranded</td><td><span class="hl">Single-stranded</span></td></tr>
  <tr><td><strong>Bases</strong></td><td>A, T, G, C</td><td>A, <span class="hl">U (uracil)</span>, G, C</td></tr>
  <tr><td><strong>Location</strong></td><td>Mainly nucleus</td><td>Mainly cytoplasm</td></tr>
</table>
<p><strong>Uracil</strong> replaces thymine in RNA and can form hydrogen bonds with adenine just like thymine.</p>`
  },
  {
    title: "Transcription (DNA → mRNA)",
    hy: true,
    html: `<p><strong>Transcription</strong> occurs in the <strong>nucleus</strong> — the DNA code is transcribed into a complementary <strong>mRNA molecule</strong>.</p>
<p>Process:</p>
<ul>
  <li>DNA molecule is <strong>unzipped</strong></li>
  <li>mRNA is built using <strong>uracil instead of thymine</strong></li>
  <li>The resulting mRNA is <strong>single-stranded</strong></li>
  <li><strong>RNA polymerase II</strong> binds to the <strong>promoter site</strong> and pulls DNA strands apart</li>
</ul>
<p>The primary mRNA undergoes <strong>RNA processing</strong> before leaving the nucleus:</p>
<ul>
  <li><strong>Introns</strong> (non-coding) are <strong>excised</strong></li>
  <li><strong>Exons</strong> (coding) are <strong>spliced together</strong></li>
  <li>5′ end is <strong>capped</strong></li>
  <li>3′ end gets a <strong>poly(A) tail</strong></li>
</ul>
<div class="box-mnemonic"><span class="lbl">Mnemonic</span><strong>Ex</strong>ons are <strong>Ex</strong>pressed; <strong>In</strong>trons are <strong>In</strong>tervening (removed).</div>`
  },
  {
    title: "Translation (mRNA → Protein)",
    hy: true,
    html: `<p><strong>Translation</strong> occurs in the <strong>cytoplasm</strong> — mRNA is read by ribosomes to build a protein.</p>
<p>Key players:</p>
<table class="learn-table">
  <tr><th>Component</th><th>Role</th></tr>
  <tr><td><strong>mRNA</strong></td><td>Carries the genetic code from nucleus to cytoplasm</td></tr>
  <tr><td><strong>Ribosome</strong></td><td>Binds to mRNA cap and reads codons</td></tr>
  <tr><td><strong>tRNA</strong></td><td>Carries specific amino acids; has an <strong>anticodon</strong> that pairs with mRNA codons</td></tr>
</table>
<p>Process:</p>
<ul>
  <li><strong>AUG</strong> (start codon) signals the start</li>
  <li>tRNA brings amino acids one by one as the ribosome moves along mRNA</li>
  <li>Amino acids are linked into a <strong>polypeptide chain</strong></li>
  <li><strong>UAA</strong> (stop codon) signals the end — ribosome disassembles, polypeptide is released</li>
</ul>
<p>There is a specific tRNA for each of the <strong>20 amino acids</strong>.</p>`
  },
  {
    title: "tRNA Structure and Function",
    html: `<p><strong>tRNA (transfer RNA)</strong> carries amino acids to the ribosome for protein synthesis.</p>
<ul>
  <li>Characteristic <strong>cloverleaf shape</strong></li>
  <li>Has a 3-nucleotide <strong>anticodon</strong> on one "leaf" that base pairs with a specific mRNA codon</li>
  <li>The amino acid binds to the <strong>tRNA stem</strong>, activating the tRNA</li>
  <li>As the ribosome moves along mRNA, each tRNA delivers the amino acid encoded by the current codon</li>
</ul>`
  }
]);
