# KodNest Premium Build System

A calm, intentional design system for B2C product experiences. One mind. No visual drift.

**This folder also contains the Job Notification Tracker app.** For app overview, routes, and deploy instructions, see the [project README](../README.md) in the repo root.

## Quick start

Link the single entry file in your app:

```html
<link rel="stylesheet" href="path/to/design-system/design-system.css" />
```

Or in your main CSS:

```css
@import "path/to/design-system/design-system.css";
```

For modular use, always load `tokens.css` first, then any of `base.css`, `layout.css`, or `components.css`.

## Contents

| File | Purpose |
|------|--------|
| `SPECIFICATION.md` | Full design philosophy, colors, typography, spacing, layout, components, and rules. |
| `tokens.css` | Design tokens (colors, type scale, spacing, radius, transition). |
| `base.css` | Typography and base styles. |
| `layout.css` | Top bar, context header, workspace, panel, proof footer. |
| `components.css` | Buttons, badges, cards, inputs, prompt box, checklist, error/empty states. |
| `design-system.css` | Imports all of the above. Use this as the single entry. |

## Global layout

Every page must follow this structure:

1. **Top bar** — Project name (left), Step X / Y (center), Status badge (right).
2. **Context header** — Large serif headline, one-line subtext.
3. **Main** — Primary workspace (≈70%) + Secondary panel (≈30%).
4. **Proof footer** — Checklist: UI Built, Logic Working, Test Passed, Deployed.

Use the classes in `layout.css`: `.kn-top-bar`, `.kn-context-header`, `.kn-main`, `.kn-workspace`, `.kn-panel`, `.kn-proof-footer`.

## Rules

- **Colors:** Use only the 4 defined (background, text, accent, success/warning).
- **Spacing:** Use only 8, 16, 24, 40, 64px (tokens: `--kn-space-1` … `--kn-space-5`).
- **Transitions:** 150–200ms ease-in-out only.
- **No** gradients, glassmorphism, neon, or animation noise.

See `SPECIFICATION.md` for the complete specification.
