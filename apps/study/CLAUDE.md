# PA Study App — structure guide (READ BEFORE EDITING)

The study app is a multi-exam shell. **Content and engine are fully
separated** — adding study material never requires touching HTML or
engine code.

The hierarchy is: **exam → lectures → objectives → learn/test/apply**.
Lectures appear as tabs across the top of the app; objectives are the
study units inside each lecture.

```
apps/study/
  index.html        ← exam picker. Builds itself from exams/manifest.js. Don't edit.
  app.html          ← the shared engine (renders any exam). Don't edit for content work.
  exams/
    manifest.js     ← the list of exams shown on the picker.
    patho-exam-2/   ← LEGACY frozen app (own index.html, 600KB). NEVER open or edit.
    behavioral-health/
      exam.js       ← exam title + lectures, each with its ordered objectives.
      bipolar/      ← one folder per LECTURE (a tab in the app)
        01-overview-and-pathogenesis/   ← one folder per OBJECTIVE
          learn.js  ← flashcard-style concept cards
          test.js   ← recall multiple-choice questions
          apply.js  ← clinical-vignette multiple-choice questions
        02-mood-episodes/
          ...
      anxiety/      ← another lecture
        01-anxiety-disorders/
          ...
```

The engine loads `exam.js`, then each objective's `learn.js`, `test.js`,
`apply.js` from `exams/<exam>/<lecture>/<objective>/`. **All three files
are optional per objective.** Malformed entries are skipped and reported
in a red banner inside the app — if you add content, load the exam in a
browser and check no banner appears.

## Study modes

The app has four modes (subtabs): **Learn** (read cards), **Test** (recall
questions), **Apply** (vignettes), and **Recall**.

**Recall** is a spaced-repetition mode that runs a whole lecture: it teaches
a learn card, then immediately quizzes you with the questions tied to that
card. Get a question right and it retires; miss it and the linked card is
re-shown and the question comes back a few steps later. It walks objectives
1→N in order and **saves progress to `localStorage`** (per device/browser),
so closing the tab and reopening resumes where you left off.

### How questions link to learn cards

Recall needs to know which card each question tests. By default the engine
**auto-links** a question to its best-matching card by keyword overlap
(card title weighted heavily, then body). This works with no extra effort —
existing content needs no changes.

To pin a link explicitly (overrides auto-linking), add a 0-based `card`
index to the question — it points at the card's position in that
objective's `learn.js` (first `addCards` entry = 0):

```js
addQuestions([
  { q: "…", choices: ["…","…"], correct: 0, explain: "…", card: 2 }
]);
```

Only add `card` when the auto-link picks the wrong card. Persisted progress
lives under `localStorage` keys `study:<exam>:recall:<lecture>` and
`study:<exam>:last`.

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

## Task: add a new objective to an existing lecture

1. Create `exams/<exam>/<lecture>/<nn-short-name>/` (number it to keep
   order readable, e.g. `06-lithium-monitoring`).
2. Add `learn.js` / `test.js` / `apply.js` inside it (any subset is fine).
3. Add one entry to that lecture's `objectives` list in the exam's `exam.js`:
   ```js
   { folder: "06-lithium-monitoring", name: "6. Lithium Monitoring", hy: true }
   ```

## Task: add a new lecture to an existing exam

This is the most common task — each new lecture in the course gets its
own folder and tab.

1. Create `exams/<exam>/<lecture-folder>/` (short lowercase name, e.g.
   `depression`).
2. Create its objective folders + content files inside it (formats below).
   Split the lecture into objectives following its learning objectives —
   do NOT dump a whole lecture into one objective.
3. Add one entry to the `lectures` list in the exam's `exam.js`:
   ```js
   {
     folder: "depression",
     name: "Depression",
     icon: "🌧️",
     objectives: [
       { folder: "01-mdd-criteria", name: "1. MDD Diagnostic Criteria", hy: true }
     ]
   }
   ```

## Task: add a whole new exam

1. Create `exams/<exam-folder>/exam.js`:
   ```js
   defineExam({
     title: "Exam Name",
     description: "One-liner shown on the home screen.",
     lectures: [
       {
         folder: "first-lecture",
         name: "First Lecture",
         icon: "📚",
         objectives: [
           { folder: "01-first-objective", name: "1. First Objective", hy: true }
         ]
       }
     ]
   });
   ```
2. Create the lecture/objective folders + content files (formats below).
3. Add one entry to `exams/manifest.js`:
   ```js
   { folder: "<exam-folder>", title: "Exam Name", description: "...", icon: "🧠" }
   ```

---

## Content writing standards

These are non-negotiable. Read this before generating any content.

### Learn cards

Each card covers **exactly one concept**. No fluff, no intro filler, no
"in this card we'll discuss…" — just the information, explained efficiently.
Together, the cards for an objective must cover **everything needed to fully
understand that objective**. Use as many cards as the material requires. A
lean objective might be 2–3 cards; a dense one might be 10+. Don't pad,
don't truncate.

Writing style:
- Lead with the fact or mechanism, not background.
- Use `<strong>` for terms and key values. Use `<span class="hl">` to
  accent the single most important takeaway per paragraph.
- Tables work well for comparing options, listing criteria, or drug
  classes. Use them when the information is genuinely tabular.
- `box-hy` callouts are for high-yield facts worth isolating (e.g.,
  first-line drug, classic presentation, key threshold). Use sparingly —
  one per card at most.
- `box-mnemonic` callouts are for memory aids. Only add one if it's
  actually useful, not just because there's a list.

### Test questions (`test.js`)

Direct recall. No clinical scenarios. These ask and answer
"do you know the fact?" — names, classes, criteria, mechanisms, thresholds,
first-line treatments, contraindications. They test whether the student
has retained what the learn cards taught.

- There must be **enough questions to cover every testable fact the learn
  cards introduce**. If learn covered 5 drug classes, test should have a
  question on each. Don't under-generate.
- Questions should be unambiguous. One clearly correct answer; distractors
  should be plausible but distinctly wrong.
- Keep questions precise. "What is the first-line treatment for X?" is
  good. "Tell me about X" is not.
- Explanations must state *why* the correct answer is right and, where
  useful, why the most tempting wrong answer is wrong.

### Apply questions (`apply.js`)

PANCE-style clinical vignettes. These test whether the student can
**use** what they learned in a clinical context — not just recall it.
These are the most important questions. The real exam is mostly this format.

- Write a brief but complete clinical scenario: age, sex, presenting
  complaint, key history, relevant exam findings or labs. Then ask a
  focused question (diagnosis, next step, treatment, mechanism).
- **Do not make these easy.** The straightforward presentations are fine
  to include, but the majority should push on edge cases, look-alikes,
  complications, and things that go wrong when the wrong choice is made.
  If the correct answer can be spotted without reading the vignette,
  rewrite the question.
- Distractors must be clinically plausible. A student who didn't study
  should be genuinely unsure. A student who did study should be able to
  reason to the correct answer — but it should take actual reasoning.
- Explanations must teach: explain the reasoning path, not just name the
  answer. If there's a classic gotcha or a high-yield distinction at play,
  name it explicitly.

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
