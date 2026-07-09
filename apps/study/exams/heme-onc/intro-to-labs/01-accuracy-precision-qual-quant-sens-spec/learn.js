addCards([
  {
    title: "Reference Ranges & Reading Lab Results",
    hy: true,
    html: `<p>A <strong>reference range</strong> is based on data collected from <strong>healthy individuals</strong>. It provides a standard for identifying results that indicate the presence of disease.</p>
<ul>
  <li>Reference ranges <span class="hl">vary with age, gender, and race</span> — always check the range used by the reporting lab, not a memorized number.</li>
</ul>
<p>Lab results are reported in a variety of units of measure. Recognize these when reading a result:</p>
<ul>
  <li><strong>Cell counts:</strong> cells/mm<sup>3</sup></li>
  <li><strong>Concentrations:</strong> g/dL, mg/dL, μg/dL, ng/dL, pg/dL</li>
  <li><strong>Proportions:</strong> % , fL (femtoliters, used for cell volume)</li>
  <li><strong>Time:</strong> seconds (coagulation studies)</li>
</ul>`
  },
  {
    title: "Accuracy vs. Precision",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Term</th><th>Definition</th></tr>
  <tr><td><strong>Accuracy</strong></td><td>The <span class="hl">nearness of a measurement to the standard or true value</span>. A highly accurate device gives measurements very close to the known/true value.</td></tr>
  <tr><td><strong>Precision</strong></td><td>The degree to which <span class="hl">several measurements agree with each other</span> — repeatability, regardless of whether they're close to the true value.</td></tr>
</table>
<div class="box-hy"><span class="lbl">High yield</span>A test can be precise without being accurate (consistently wrong in the same direction) and accurate without being precise (results scattered around the true value but averaging correctly).</div>`
  },
  {
    title: "Qualitative vs. Quantitative",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Term</th><th>Evaluates</th><th>Example</th></tr>
  <tr><td><strong>Qualitative</strong></td><td>The <span class="hl">quality</span> of what is being tested — i.e., is it functioning properly?</td><td>von Willebrand's disease (platelet <em>function</em> is abnormal)</td></tr>
  <tr><td><strong>Quantitative</strong></td><td>The <span class="hl">amount</span> of what is being tested</td><td>Thrombocytopenia (platelet <em>count</em> is low)</td></tr>
</table>`
  },
  {
    title: "Sensitivity vs. Specificity",
    hy: true,
    html: `<table class="learn-table">
  <tr><th>Term</th><th>Question it answers</th><th>Formula</th></tr>
  <tr><td><strong>Sensitivity</strong></td><td>How likely is a test to catch <span class="hl">all</span> individuals with the disease (not have false negatives)?</td><td>TP / (TP + FN)</td></tr>
  <tr><td><strong>Specificity</strong></td><td>How likely is a test to catch <span class="hl">only</span> individuals with the disease (not have false positives)?</td><td>TN / (TN + FP)</td></tr>
</table>
<ul>
  <li>A test with <strong>high sensitivity</strong> has a high true-positive rate (few false negatives).</li>
  <li>A test with <strong>high specificity</strong> has a high true-negative rate (few false positives).</li>
</ul>`
  },
  {
    title: "Choosing a Test: Screening vs. Confirmatory",
    hy: true,
    html: `<ul>
  <li><strong>Screening test</strong> → wants <span class="hl">higher sensitivity</span>, so you don't miss possible cases (minimize false negatives).</li>
  <li><strong>Confirmatory test</strong> → wants <span class="hl">higher specificity</span>, so you don't falsely label someone as having a disease (minimize false positives).</li>
</ul>
<div class="box-hy"><span class="lbl">Example</span>Susie buys a home pregnancy test. Its <strong>specificity</strong> tells her how often to expect a negative result when she truly is <em>not</em> pregnant. Its <strong>sensitivity</strong> tells her how often it will turn up positive when she truly <em>is</em> pregnant.</div>
<div class="box-mnemonic"><span class="lbl">Mnemonic</span><strong>SnNOut</strong>: a highly SeNsitive test, when Negative, rules OUT disease. <strong>SpPIn</strong>: a highly SPecific test, when Positive, rules IN disease.</div>`
  }
]);
