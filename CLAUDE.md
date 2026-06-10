# Site architecture — READ THIS FIRST

This is a GitHub Pages site that hosts multiple independent mini-apps.
Each app lives in its own folder and is completely self-contained.

```
index.html          ← homepage hub. Renders a card per app from the manifest. Rarely needs edits.
apps/
  manifest.js       ← single source of truth: the list of apps shown on the homepage.
  study/index.html  ← the PA Study App (large, self-contained file).
  sample/index.html ← minimal example app showing the pattern.
  <new-app>/        ← every new app gets its own folder here.
```

## How to add a new app (the ONLY steps needed)

1. Create `apps/<app-name>/` and put an `index.html` in it. Any extra
   files the app needs (css, js, images, data) also go inside that same
   folder, referenced with relative paths.
2. Add one entry to the array in `apps/manifest.js`:
   ```js
   { folder: "<app-name>", title: "My App", description: "...", icon: "🛠️", tags: ["fun"] }
   ```

That's it. Do NOT edit the root `index.html` to add an app — the homepage
builds itself from the manifest.

## Rules

- **Apps must be self-contained.** No shared css/js between apps, no
  cross-app imports. CDN links (fonts, libraries) are fine.
- **Never touch other apps' folders** when working on one app. In
  particular, `apps/study/index.html` is a large single-file app — do not
  open or modify it unless the task is specifically about the study app.
- Optional but nice: give the app a "← Home" link pointing to `../../`
  (see `apps/sample/index.html` for the pattern).
- There is no build step. Plain HTML/CSS/JS, served as-is by GitHub Pages.

## Removing or renaming an app

- Remove: delete its folder and its entry in `apps/manifest.js`.
- Rename: rename the folder and update `folder` in its manifest entry.
