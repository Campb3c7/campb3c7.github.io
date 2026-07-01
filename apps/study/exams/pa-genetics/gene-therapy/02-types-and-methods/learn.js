addCards([
  {
    title: "Types of Gene Therapy: Somatic vs. Germline",
    hy: true,
    html: `<table class="learn-table">
  <tr><th></th><th>Somatic Gene Therapy</th><th>Germline Gene Therapy</th></tr>
  <tr><td><strong>Target</strong></td><td>Body cells (e.g., myocytes)</td><td>Gametes (ova/sperm) or early embryos</td></tr>
  <tr><td><strong>Passed to offspring?</strong></td><td><strong>Cannot</strong> be passed to offspring</td><td><span class="hl">Can</span> be passed to offspring</td></tr>
  <tr><td><strong>Replication</strong></td><td>Alterations contained in that target cell type</td><td>Alterations copied into every cell of the individual</td></tr>
  <tr><td><strong>Hazards</strong></td><td>Adverse effects limited to the treated individual; future generations unaffected</td><td>Adverse effects extend beyond the treated individual — affects offspring</td></tr>
  <tr><td><strong>Consensus</strong></td><td>Researched/tested for decades; highly regulated</td><td>New; significant legal and societal considerations</td></tr>
</table>`
  },
  {
    title: "Methods of Gene Therapy: Ex Vivo vs. In Vivo",
    hy: true,
    html: `<table class="learn-table">
  <tr><th></th><th>Ex Vivo ("out of the living")</th><th>In Vivo ("within the living")</th></tr>
  <tr><td><strong>Approach</strong></td><td>Cells taken outside the body and manipulated, then re-infused into the patient [external modification]</td><td>Cells not removed from the body; genes manipulated inside the body via a genetically modified transporter [internal modification]</td></tr>
</table>`
  },
  {
    title: "Ex Vivo Gene Therapy: Steps",
    html: `<ol>
  <li>Therapeutic gene is incorporated into transporters (e.g., viral DNA)</li>
  <li>Cells containing the defect are removed from the patient and cultured</li>
  <li>The cultured cells are infected with genetically altered viral DNA in the lab</li>
  <li>Cells that took on the genetic transformation are replicated and <strong>re-introduced into the patient</strong></li>
</ol>`
  },
  {
    title: "In Vivo Gene Therapy: Steps",
    html: `<ol>
  <li>Therapeutic gene is incorporated into transporters (e.g., viral DNA)</li>
  <li>The genetically modified DNA is <strong>directly inserted into the target tissue</strong> (e.g., lungs)</li>
  <li>Transformation of DNA occurs <strong>inside the body</strong></li>
</ol>`
  },
  {
    title: "Transporters: Vectors or Vehicles",
    hy: true,
    html: `<p>Alterations of DNA must be incorporated inside the <strong>nucleus</strong> of host cells — accomplished using <span class="hl">transporters</span>.</p>
<p>Two general categories:</p>
<ul>
  <li><strong>Viral</strong></li>
  <li><strong>Non-viral</strong>:
    <ul>
      <li><strong>Physical</strong> (e.g., electroporation)</li>
      <li><strong>Chemical</strong> (e.g., lipid nanoparticles)</li>
    </ul>
  </li>
</ul>`
  },
  {
    title: "Viral Vectors",
    hy: true,
    html: `<p>Viruses have a natural ability to <strong>gain access and shuttle genetic material</strong> inside host cells. The <span class="hl">complete viral genome is not used</span>, so the virus cannot replicate itself.</p>
<p><strong>Most gene therapy trials utilize viral vectors.</strong> Five main classes (each with unique properties, beyond the scope of this lecture):</p>
<ul>
  <li><strong>Adeno-associated viruses (AAV)</strong> — most widely used</li>
  <li><strong>Adenoviruses (AV)</strong></li>
  <li><strong>Lentiviruses (LV)</strong></li>
  <li><strong>Herpes Simplex Viruses (HSV)</strong></li>
  <li><strong>Standard Retroviruses (RV)</strong></li>
</ul>`
  },
  {
    title: "CRISPR: Human Genome Editing Technology",
    hy: true,
    html: `<p>The most widely known human genome editing technology is <strong>CRISPR</strong>: <span class="hl">Clustered Regularly Interspaced Short Palindromic Repeats</span>.</p>
<ul>
  <li>Essentially using the <strong>"FIND" function</strong> in a document</li>
  <li>A specific error code is run through the genome and then <strong>cut</strong>; scientists can then make repairs</li>
  <li><strong>Guide RNA</strong>: recognizes the sequence of DNA to be edited</li>
  <li><strong>Cas9 protein</strong>: cuts the DNA</li>
</ul>
<div class="box-hy"><span class="lbl">High yield</span>CRISPR = Guide RNA (finds the target sequence) + Cas9 protein (cuts the DNA).</div>`
  }
]);
