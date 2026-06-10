# PA Study App — structure guide (READ BEFORE EDITING)

The study app is a multi-exam shell. **Content and engine are fully
separated** — adding study material never requires touching HTML or
engine code.

```
apps/study/
  index.html        ← exam picker. Builds itself from exams/manifest.js. Don't edit.
  app.html          ← the shared engine (renders any exam). Don't edit for content work.
  exams/
    manifest.js     ← the list of exams shown on the picker.
    patho-exam-2/   ← LEGACY frozen app (own index.html, 600KB). NEVER open or edit.
    behavioral-health/
      exam.js       ← exam title + ordered list of objectives.
      objectives/
        01-intro-foundations/
          learn.js  ← flashcard-style concept cards
          test.js   ← recall multiple-choice questions
          apply.js  ← clinical-vignette multiple-choice questions
        02-anxiety-disorders/
          ...
```

The engine loads `exam.js`, then each objective's `learn.js`, `test.js`,
`apply.js`. **All three files are optional per objective.** Malformed
entries are skipped and reported in a red banner inside the app — if you
add content, load the exam in a browser and check no banner appears.

---

## Task: add more questions to an existing objective

Open that objective's `test.js` (or `apply.js`) and append a new block at
the bottom. Do not modify existing blocks. No manifest changes needed.

```js
// ── Added <date>: <topic of the new batch> ──
addQuestions([
  {
    q: "Question text?",
    choices: ["First", "Second", "Third", "Fourth"],   // 2–6 choices
    correct: 2,            // INDEX of the right choice. 0 = first. Here: "Third".
    explain: "Why that answer is right (shown after answering)."
  }
]);
```

Same idea for learn cards — append an `addCards([...])` block to `learn.js`.

## Task: add a new objective to an existing exam

1. Create `exams/<exam>/objectives/<nn-short-name>/` (number it to keep order
   readable, e.g. `03-mood-disorders`).
2. Add `learn.js` / `test.js` / `apply.js` inside it (any subset is fine).
3. Add one entry to the `objectives` list in that exam's `exam.js`:
   ```js
   { folder: "03-mood-disorders", name: "3. Mood Disorders", hy: true }
   ```

## Task: add a whole new exam

1. Create `exams/<exam-folder>/exam.js`:
   ```js
   defineExam({
     title: "Exam Name",
     description: "One-liner shown on the Learn home screen.",
     objectives: [
       { folder: "01-first-objective", name: "1. First Objective", hy: true }
     ]
   });
   ```
2. Create the objective folders + content files (formats above).
3. Add one entry to `exams/manifest.js`:
   ```js
   { folder: "<exam-folder>", title: "Exam Name", description: "...", icon: "🧠" }
   ```

---

## Content format reference

### Learn cards — `learn.js` → `addCards([...])`

```js
addCards([
  {
    title: "Card title",        // required, plain text
    hy: true,                   // optional, marks card "high yield"
    html: `<p>Body HTML.</p>`   // required. Allowed markup below.
  }
]);
```

HTML allowed in `html` (styled by the engine):
- `<p>`, `<strong>`, `<ul>`/`<li>`
- `<span class="hl">accent-colored highlight</span>`
- `<table class="learn-table"><tr><th>…</th></tr><tr><td>…</td></tr></table>`
- `<div class="box-hy"><span class="lbl">High yield</span>…</div>`
- `<div class="box-mnemonic"><span class="lbl">Mnemonic</span>…</div>`

### Questions — `test.js` / `apply.js` → `addQuestions([...])`

```js
addQuestions([
  {
    q: "Plain-text question (apply.js: write it as a clinical vignette).",
    choices: ["A", "B", "C", "D"],  // 2–6 plain-text choices
    correct: 0,                     // index of the right choice (0-based!)
    explain: "Plain-text explanation."
  }
]);
```

`q`, `choices`, and `explain` are **plain text** (no HTML — it gets escaped).

## Rules

- `exams/patho-exam-2/` is a frozen archive with its own legacy engine.
  Never open it; never edit it. It is not the pattern to copy.
- Folder names: lowercase letters, numbers, and dashes only.
- `correct` is a 0-based index — double-check it points at the intended choice.
- Don't renumber/reorder existing objective folders; add new ones after.
- Engine changes go in `app.html`; content changes never require them.
