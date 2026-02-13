# KodNest Premium Build System

**Design System Specification**  
A calm, intentional, coherent design system for B2C product experiences. One mind. No visual drift.

---

## 1. Design Philosophy

- **Calm** — No visual noise. Restraint in color, motion, and decoration.
- **Intentional** — Every element has a purpose. No filler, no decoration for its own sake.
- **Coherent** — Same patterns everywhere. Predictable structure and behavior.
- **Confident** — Clear hierarchy, generous space, decisive typography.

**Out of scope:** Flashy, loud, playful, or hackathon-style. No gradients, glassmorphism, neon colors, or animation noise.

---

## 2. Color System

**Maximum 4 colors across the entire system.**

| Role | Value | Usage |
|------|--------|--------|
| **Background** | `#F7F6F3` | Page and surface background (off-white). |
| **Primary text** | `#111111` | Headings, body copy, primary UI text. |
| **Accent** | `#8B0000` | Primary actions, key links, progress, status emphasis. |
| **Success** | Muted green | Success states, completed items, positive feedback. |
| **Warning** | Muted amber | Warnings, in-progress, attention needed. |

Success and Warning are **muted** (desaturated, not bright). Use only these four color roles; no extra accent or decorative colors.

---

## 3. Typography

### Headings
- **Font:** Serif. Large, confident, generous letter-spacing and spacing.
- **Sizes:** One clear scale (e.g. 2rem, 1.5rem for subheads). No random sizes.
- **Use:** Context headers, section titles. One primary headline per context.

### Body
- **Font:** Clean sans-serif. No decorative or display fonts.
- **Size:** 16–18px.
- **Line height:** 1.6–1.8.
- **Measure:** Max width 720px for text blocks. Do not exceed for readability.

### Rules
- No decorative fonts. No random font sizes. One serif family for headings, one sans for body.

---

## 4. Spacing System

**Only these values.** No 13px, 27px, or arbitrary spacing.

| Token | Value | Use |
|-------|--------|-----|
| `space-1` | 8px | Tight in-component spacing. |
| `space-2` | 16px | Default gap between related elements. |
| `space-3` | 24px | Section spacing, card padding. |
| `space-4` | 40px | Between major blocks. |
| `space-5` | 64px | Large vertical rhythm, page sections. |

Whitespace is part of the design. Use the scale consistently.

---

## 5. Global Layout Structure

Every page follows this order. No exceptions.

1. **Top Bar**
2. **Context Header**
3. **Primary Workspace + Secondary Panel**
4. **Proof Footer**

### 5.1 Top Bar
- **Left:** Project name (plain text or minimal lockup).
- **Center:** Progress indicator — “Step X / Y” (e.g. Step 2 / 5).
- **Right:** Status badge: **Not Started** | **In Progress** | **Shipped**.

Single row. No extra nav or decorative elements.

### 5.2 Context Header
- **Headline:** Large serif, one line when possible.
- **Subtext:** One line. Clear purpose. No hype or marketing language.
- **Role:** Set context for the page. No long paragraphs.

### 5.3 Primary Workspace (≈70% width)
- Where the main product interaction happens.
- Clean cards, predictable components. No crowding.
- Use spacing scale. No dense clusters.

### 5.4 Secondary Panel (≈30% width)
- **Step explanation:** Short. One small block.
- **Copyable prompt box:** Monospace or clear font, easy to select/copy.
- **Actions:** Copy, Build in Lovable, It Worked, Error, Add Screenshot. Calm styling.
- Visually secondary; not competing with the workspace.

### 5.5 Proof Footer (persistent bottom section)
- **Pattern:** Checklist. User must provide proof for each.
- **Items:** □ UI Built | □ Logic Working | □ Test Passed | □ Deployed
- Each checkbox requires user proof input. Persistent across relevant steps.

---

## 6. Component Rules

### Buttons
- **Primary:** Solid deep red (`#8B0000`). One primary per context when possible.
- **Secondary:** Outlined. Same border radius and hover behavior as primary.
- **Hover/focus:** Same treatment everywhere (e.g. slight darken or opacity). No bounce, no flash.

### Inputs
- Clean borders. No heavy shadows.
- Clear focus state (e.g. border color change). Consistent across all inputs.

### Cards
- Subtle border. No drop shadows.
- Padding from spacing scale (e.g. 24px). Balanced and consistent.

### General
- **Border radius:** One value for buttons, inputs, cards (e.g. 6px or 8px). No mix of rounded-full and sharp.
- **Borders:** One weight (e.g. 1px). One neutral color (e.g. #E5E4E0 or similar).

---

## 7. Interaction Rules

- **Transitions:** 150–200ms, ease-in-out. Use for hover, focus, and state changes.
- **No bounce.** No parallax. No decorative motion.
- **Feedback:** Clear and immediate (e.g. button state, focus ring). No delayed or flashy effects.

---

## 8. Error & Empty States

### Errors
- **Explain** what went wrong and **how to fix it**. No blame. No “Something went wrong” without next steps.
- Use muted warning color if needed. Keep tone calm and solution-oriented.

### Empty states
- Provide a **next action** (e.g. “Add your first item”, “Start by…”). Never leave a dead, unexplained blank area.

---

## 9. Consistency Checklist

- [ ] Only 4 colors used.
- [ ] Only 5 spacing values used.
- [ ] One serif for headings, one sans for body.
- [ ] Text blocks max 720px.
- [ ] Every page: Top Bar → Context Header → Workspace + Panel → Proof Footer.
- [ ] Same button style, radius, and hover everywhere.
- [ ] Transitions 150–200ms, ease-in-out only.
- [ ] Errors and empty states have clear copy and next actions.

Everything must feel like one mind designed it. No visual drift.
