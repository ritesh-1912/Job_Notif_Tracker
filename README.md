# Job Notification Tracker

A premium SaaS web app for precision-matched job discovery with daily digest, status tracking, and a proof & submission workflow. Built with the KodNest Premium Build System (calm, intentional design).

## Features

- **Settings** — Role keywords, preferred locations, mode, experience level, skills, minimum match score. Preferences persist in localStorage.
- **Dashboard** — Browse jobs with intelligent match scoring; filter by keyword, location, mode, experience, source, status; sort; “show only above threshold” toggle. View, Save, and Apply (new tab).
- **Saved** — Saved jobs with status (Not Applied, Applied, Rejected, Selected); View, Remove, Apply.
- **Digest** — Generate a daily digest (top 10 by match score); copy to clipboard or create email draft; recent status updates.
- **Proof** — Project 1 summary with step completion (8 steps), artifact collection (Lovable, GitHub, Deployed URL), URL validation, and **Copy Final Submission**.
- **Test checklist** (`/jt/07-test`) — 10 test items with hints; must pass all before ship.
- **Ship** (`/jt/08-ship`) — Status badge: Not Started | In Progress | Shipped. **Shipped** only when all 10 tests passed and all 3 proof links provided. Calm “Project 1 Shipped Successfully.” message when shipped.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing — headline, “Start Tracking” → Settings |
| `/dashboard` | Job list with match scores and filters |
| `/saved` | Saved jobs with status |
| `/digest` | Daily digest and status updates |
| `/settings` | Preferences form |
| `/proof` | Proof & submission (step summary + 3 artifact links + Copy Final Submission) |
| `/jt/07-test` | Test checklist (10 items) |
| `/jt/08-ship` | Ship status and unlock |
| `/jt/proof` | Same proof content as `/proof` (alternate path) |

## Tech

- Static HTML/CSS/JS in `design-system/`.
- Data: `jobs-data.js`, `preferences.js`, `job-status.js`.
- localStorage: preferences, saved IDs, status map, digest by date, test checklist, proof artifacts.
- Deploy: Vercel with root directory `design-system` and rewrites for clean URLs.

## Run locally

Serve the `design-system` folder (e.g. `npx serve design-system` or open `design-system/index.html`). For clean routes like `/dashboard`, use a dev server that respects `vercel.json` rewrites or run `vercel dev`.

## Deploy (Vercel)

- **Root Directory:** `design-system`
- **Build Command:** (none)
- **Output Directory:** (same)
- Rewrites are in repo `vercel.json` (root); ensure Root Directory is set so rewrites point to the right files.

## Repository structure

```
JobNotifTracker/
├── README.md                 ← This file
├── vercel.json               ← Rewrites and headers
└── design-system/            ← App + KodNest design system
    ├── README.md             ← Design system quick start
    ├── SPECIFICATION.md      ← Full design spec
    ├── index.html            ← Landing
    ├── dashboard.html, saved.html, digest.html, settings.html, proof.html
    ├── jt/
    │   ├── 07-test.html      ← Test checklist
    │   ├── 08-ship.html      ← Ship
    │   └── proof.html        ← Proof (alternate path)
    ├── app.css, design-system.css, tokens.css, base.css, layout.css, components.css
    ├── jobs-data.js, preferences.js, job-status.js
    └── …
```

## License

Use according to your project terms.
