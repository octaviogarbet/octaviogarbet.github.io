---
name: Octavio Garbarino
description: A personal profile drawn as a Vignelli-school transit map; three lines, one interchange.
colors:
  signal-ink: "#121314"
  enamel-white: "#f5f6f4"
  platform-grey: "#53585b"
  hairline: "#d3d8d6"
  tile: "#e8ebe9"
  sign-black: "#0b0c0d"
  sign-white: "#ffffff"
  bullet-white: "#ffffff"
  line-people-red: "#cf2a1b"
  line-product-blue: "#1d4ed8"
  line-architecture-green: "#00805a"
  night-ground: "#0f1112"
  night-ink: "#eef0ef"
  night-grey: "#a4abad"
  night-hairline: "#2a2f31"
  night-tile: "#181c1d"
  night-sign: "#23282b"
  line-product-blue-night: "#2f5fe8"
typography:
  display:
    fontFamily: "Overpass Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  sign-name:
    fontFamily: "Overpass Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Overpass Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title-lead:
    fontFamily: "Overpass Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Overpass Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  stop-name:
    fontFamily: "Overpass Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.375
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  lede:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Overpass Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    fontFeature: "\"tnum\" 1"
  meta:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    fontFeature: "\"tnum\" 1"
rounded:
  plate: "4px"
  round: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "24px"
  rail-axis: "1.375rem"
  rail-indent: "3.25rem"
  stop-indent: "3.5rem"
  section-y: "80px"
  container: "72rem"
  container-legacy: "48rem"
  story-measure: "68ch"
components:
  plate-primary:
    backgroundColor: "{colors.signal-ink}"
    textColor: "{colors.enamel-white}"
    rounded: "{rounded.plate}"
    padding: "0 20px"
    height: "44px"
    typography: "{typography.label}"
  plate-outline:
    backgroundColor: "transparent"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.plate}"
    padding: "0 20px"
    height: "44px"
  plate-outline-hover:
    backgroundColor: "{colors.signal-ink}"
    textColor: "{colors.enamel-white}"
  plate-on-sign:
    backgroundColor: "{colors.sign-white}"
    textColor: "{colors.sign-black}"
    rounded: "{rounded.plate}"
    padding: "0 20px"
    height: "44px"
  route-bullet-sm:
    backgroundColor: "{colors.line-people-red}"
    textColor: "{colors.bullet-white}"
    rounded: "{rounded.round}"
    size: "24px"
  route-bullet-md:
    backgroundColor: "{colors.line-people-red}"
    textColor: "{colors.bullet-white}"
    rounded: "{rounded.round}"
    size: "44px"
  route-bullet-lg:
    backgroundColor: "{colors.line-people-red}"
    textColor: "{colors.bullet-white}"
    rounded: "{rounded.round}"
    size: "56px"
  sign-band:
    backgroundColor: "{colors.sign-black}"
    textColor: "{colors.sign-white}"
    typography: "{typography.sign-name}"
  stop-ring:
    backgroundColor: "{colors.enamel-white}"
    rounded: "{rounded.round}"
    size: "22px"
  station-chip:
    backgroundColor: "transparent"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.round}"
    padding: "0.2rem 0.6rem 0.2rem 0.45rem"
  code-inline:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.plate}"
    padding: "0.1em 0.35em"
---

# Design System: Octavio Garbarino

## Overview

**Creative North Star: "The Interchange Map"**

The site is a Vignelli-school transit map of one career. Three lines (People, Product, Architecture & AI) run through it, and every role, talk and skill is a stop that wears the bullets of the lines it served. Octavio is the interchange where they meet. Each page opens under a black station sign and ends at a closing station ("Let's talk."); the 404 is the one stop without a closing station. The ground is cool enamel white, the type is near-black signal ink, and the only colour anywhere is the three flat line inks.

Density is calm and signage-like: big bold Overpass names, generous section padding, hairline rules between rows, and body copy in Inter at a readable measure. Geometry is 90° and 45° only: straight rails, square terminus bars, round bullets and rings, and one capsule for the interchange. Nothing has shadows, gradients or tints. Hierarchy comes from type weight, rail weight and the ink-on-enamel contrast.

People leads. It gets the heavier rail, the larger type, the full-width row and the trunk that carries every featured stop. This order comes from the product positioning (people leadership is the line the other two run on), and it is visible in the layout, not just in the copy.

**Key Characteristics:**
- Black sign band with a thin white rule on every transit page; line bullets on its right select a line for the whole page.
- Three flat line inks (red L, blue P, green A) that only ever mean a line.
- Overpass Variable for all signage and headings, Inter Variable for reading text.
- Coloured rails ending in a terminus bar; stops as ringed circles on a trunk.
- Flat, rectangular sign plates (4px) as the only button shape.
- Tabular figures for years, counts and periods.
- Case-study architectures drawn as ink-only system maps that light up as the story is read.

## Colors

Enamel and ink, plus three transit inks used at full strength and never tinted.

### Primary
- **Signal Ink** (signal-ink): text, headings, the 2px rule under resume section heads, stop-ring borders, the interchange capsule stroke, every system-map stroke and station, filled primary plates, and every UI state (focus ring, pressed ring, hover underline, active nav). The CSS `--accent` is an alias of ink and is not a separate hue.

### Secondary (the line inks)
- **People Red** (line-people-red): the People/Leadership line, code L. The lead line.
- **Product Blue** (line-product-blue): the Product line, code P.
- **Architecture Green** (line-architecture-green): the Architecture & AI line, code A.

They fill route bullets, rails, terminus bars, diagram strokes and the filled stop ring of a selected line. Letters on them are always Bullet White (bullet-white).

### Neutral
- **Enamel White** (enamel-white): page ground, stop-ring fill, interchange capsule fill.
- **Platform Grey** (platform-grey): secondary copy, meta lines, non-lead pillar paragraphs, inactive nav, chevrons.
- **Hairline** (hairline): 1px row rules, section dividers, header and footer borders, and the "/" separators in signage lists.
- **Tile** (tile): background of the skip link when it is visible, and the ground of code blocks and inline code. Used rarely.
- **Sign Black / Sign White** (sign-black, sign-white): the station sign band and the closing station. The thin rule and the text are white. Secondary text inside the band uses white at 85%, 80%, 75% or 70% opacity.

### Night (dark theme, `[data-theme="dark"]`)
- **Night Ground / Night Ink / Night Grey / Night Hairline / Night Tile** replace their day counterparts one for one.
- **Night Sign** (night-sign): at night the sign is lit. The band sits one step *above* the ground so it still reads as a sign and does not disappear into it.
- **Line inks at night:** red and green keep full strength. Only blue lifts, to Product Blue Night (line-product-blue-night), so it clears 3:1 against the night ground.
- The theme follows `prefers-color-scheme` until the user picks one with the toggle (stored in localStorage).

### Named Rules
**The Colour Means a Line Rule.** Line inks appear only where a line is meant: a bullet, a rail, a terminus, a diagram stroke, a lit stop. Hover, focus, pressed, active, links and selection all use ink. Do not borrow a line ink for a UI state, decoration or emphasis.

**The Full-Strength Ink Rule.** Line inks are flat and full-strength. No tints, gradients or opacity washes. The only dimming is the line-selection recede state (see Components). If a line ink lacks contrast on a ground, lift that ink as a theme value, the way night blue does.

## Typography

**Display / Signage Font:** Overpass Variable (with ui-sans-serif, system-ui)
**Body Font:** Inter Variable (with ui-sans-serif, system-ui)
**Legacy Serif:** Newsreader Variable is still loaded in the base layout and drives `.prose` h1–h3, but only for legacy pages (see Do's and Don'ts). No transit surface uses it: the case-study story overrides `.prose` headings back to Overpass 800.

**Character:** Overpass is a highway-signage grotesk: tight, bold and heavy at large sizes, and it does the work of station names and line labels. Inter carries the reading.

### Hierarchy
- **Display** (display): page headline ("Engineering leader who still builds.", "Hi, I'm Octavio.", "Case studies", "Let's talk."), with text-wrap balance. A case-study H1 runs one step smaller (clamp(2.25rem, 5vw, 4rem), line-height 0.98, -0.03em) because study titles are long; it is capped at 22ch.
- **Sign Name** (sign-name): the station name in the sign band. It is the h1 on the resume and a plain label on home and about.
- **Headline** (headline; 1.875rem below sm): section heads such as "What I bring to the table". Resume section heads are one step smaller (1.5rem rising to 1.875rem, 1.125rem in print) and sit on a 2px ink rule.
- **Title Lead / Title** (title-lead, title): line heads next to a route bullet. People takes title-lead (1.5rem rising to 1.875rem, 800). Other lines take title (700).
- **Stop Name** (stop-name): the stop and resume row titles. Secondary lists use 600 at 1rem.
- **Body / Lede** (body, lede): Inter paragraphs at line-height 1.625. Ledes are 1.125rem rising to 1.25rem. Measure is capped at 56–72ch (pillars 60–66ch, resume rows 72ch).
- **Label** (label): nav, footer, plates, the trunk's group labels, year gutters. Overpass 600–700, sentence case, tabular figures.
- **Meta** (meta): company and period lines, venue lines. Inter, Platform Grey, tabular.

### Named Rules
**The Signage Separator Rule.** Overpass's middle dot sits badly, so signage text (anything set in Overpass) separates items with " / " in Hairline or with list gaps, never " · ". The middle dot appears only inside Inter meta lines ("Endava · 3 years").

**The Tabular Figures Rule.** Years, counts and periods are always tabular so the timetable columns line up.

## Layout

- **Containers:** transit pages are full-bleed bands, each with its own centred container (container, 72rem) and side gutters of gutter-mobile (20px) rising to gutter (24px) at sm. Legacy pages use the narrow container (container-legacy, 48rem) inside the base layout's main.
- **Section rhythm:** content sections are separated by a 1px Hairline top border, with 64px of vertical padding rising to section-y (80px). Hero bands are 40 / 56 / 80px. The closing station is taller (64px rising to 112px).
- **Asymmetric grids:** two-part rows split by sevenths and elevenths: 5/7 (diagram / headline), 4/7 (portrait / text), 7/4 (stops trunk / other stops), 3/2 (talks / education). Column gaps are 40–64px.
- **People leads the grid:** in the pillar and About grids, the People item spans both columns and the other two lines sit side by side under it. Below md everything stacks in line order.
- **Rail module:** a rail's axis sits at rail-axis (1.375rem) from the item's left edge. Body copy indents to rail-indent (3.25rem) and trunk stops to stop-indent (3.5rem), so bullet centre, rail centre and ring centre line up on one vertical.
- **Timetable:** resume rows use a fixed year gutter (8.5rem on screen, 5.5rem in print) followed by a flexible column.
- **Story column:** a case study reads in a story column of story-measure (68ch). At lg+ the column sits in a two-part grid (68ch / remaining width, 64px gap) whose right gutter holds the sticky compact map; below lg the gutter is dropped.
- **Breakpoints:** Tailwind defaults (sm 640, md 768, lg 1024). The interchange diagram switches from horizontal (md+) to vertical (mobile), and on mobile People runs down the middle.

## Elevation & Depth

The system is flat. There are no box-shadows, blurs or gradients. Depth is signage depth: the black sign band against the enamel ground, hairline rules between rows, and opacity in only two places (white secondary text on the sign, and the dimmed state when a line is selected). The interchange capsule is drawn on top of the line strokes with a ground fill, which is the only layering. At night the sign band gets lighter, not darker, so it stays a lit sign.

### Named Rules
**The Flat Sign Rule.** A surface separates from the ground through the sign band, a rule or ink weight, never a shadow.

## Shapes

- **Plates and photos:** almost-square corners (plate, 4px) on buttons, the portrait, the theme toggle, code blocks, inline code and case-study screenshots (screenshots and code blocks also carry a 1px Hairline border).
- **Round:** route bullets, stop rings, system-map stations, station chips and the interchange capsule (pill, rx 28) are full circles or pills. Nothing in the system uses a medium radius.
- **Rails:** square-ended vertical bars. The width comes from `--w` (8px default, 12px for People) and the colour from `--c`. Each rail ends in a **terminus bar** that is 28px wide and `--w` tall, centred on the rail axis.
- **Angles:** diagram lines run only horizontal, vertical or at 45°, with round joins.
- **Rules:** 1px Hairline between rows, 2px ink under resume section heads, 2px ink above case-study story h2s (6px on the targeted one) and above the system map and the case-study route list, and a 1px white rule at 70% opacity inside the sign band.

## Components

### Station Sign Band
The opening of every transit page. Full-bleed Sign Black. A 1px white rule (70%) sits 8px below the top edge, inside the container. Below it are the station name (sign-name) on the left and the three interactive route bullets (lg) on the right, in a "Lines" group. Off home, the name links back to `/` with an underline on hover. The selectors are on by default (`selectors`, default true); a page with nothing to highlight sets it false and the band carries only the name, as on the 404. The resume stacks the bullets under the name on phones, and its band also carries the title line ("Engineering Manager / Tech Lead / Product-minded architect", 85% white) and the contact list (75% white). Inside the band the focus ring and pressed ring turn white.

### Route Bullet
The line's code letter (Overpass 800, Bullet White, nudged down 0.06em to centre it optically) in a circle of its line ink.
- **Sizes:** sm 24px with 0.75rem type (stops, rows, inline proof). md 44px with 1.125rem type (line heads). lg 44px rising to 56px at sm, with type from 1.125rem to 1.5rem (sign band).
- **Static bullets** are decorative (`aria-hidden`), and the group that holds them carries a `role="img"` label listing the lines.
- **Interactive bullets** are buttons. They toggle the page-wide line, set `aria-pressed`, and are titled "Highlight the {Line} line". **Pressed:** 3px ink outline at 3px offset (white on the sign). A selecting bullet never dims.

### Line Rail (pillar line)
A line head (md interactive bullet plus a title) followed by a paragraph indented to the rail, with the line's rail running beside it and ending in a terminus bar. People uses a 12px rail, Ink body text, 1.125rem type and up to 64–66ch. The other lines use 8px rails, Platform Grey text and up to 60ch.

### Stops Trunk
"Stops along the way": the People line keeps running as an 8px red trunk that starts at the first ring and ends in a terminus bar. Each featured stop is a `<details>` disclosure, with only one open at a time.
- **Stop ring:** a 22px circle with a 4px ink border and an enamel fill, on the trunk axis.
- **Row:** ring, stop name with Inter meta below it, the sm bullets of every line it served, and a chevron that rotates 180° when open. Hovering underlines the name (2px, offset 4px).
- **Group labels** ("Roles", "Talks") are sentence-case Overpass label text in Platform Grey, indented to the stops. They divide the list and are not heading kickers.
- **Lit state:** when a line is selected, the rings of the stops it serves fill with that line's ink and scale to 1.2.
- **Other stops** (side column) are a plain hairline-ruled disclosure list with no rings.

### Sign Plate Buttons
The only button shape. Height at least 44px, horizontal padding 20px, 4px corners, Overpass 700, colour transition on hover.
- **Primary on ground:** filled ink with enamel text. On hover the fill drops to 80%.
- **Outline on ground:** 2px ink border. On hover it fills with ink and the text inverts.
- **On sign:** a filled white plate with sign-black text (LinkedIn, hover at 85%), or a 2px white outline that fills white on hover (Copy, minimum width 96px).
- **Focus:** a 2px ink outline at 3px offset, unlayered so no utility can override it, turning white inside the sign band.

### Let's Talk Station
The closing station on every transit page, screen only. Full-bleed Sign Black with the same white rule, and a 4/7 grid: portrait (4px corners, natural colour, left out on About, which opens with it) and the text column. That column has "Let's talk." at display size, a short Inter invitation (80% white, 48ch), the email as large bold underlined text (decoration 2px, 4px on hover) next to a Copy plate that confirms with "Copied" and a polite live region, a LinkedIn plate, and the location in 70% white.

### Not-on-the-Map Stop (404)
The 404 is a transit page with the sign band (name links home, `selectors={false}`) and no Let's Talk station; both omissions are the owner's decision. Its hero is a 5/7 grid: on the left an SVG drawing set with `overflow: visible`, so a 16-stroke ink rail runs in from off the map and stops at a square terminus bar (16 × 56), then an empty gap, then a lone hollow stop ring (r30, 8 stroke, ground fill) that settles last (delay 1.5s). On the right is the display h1 ("This stop isn't on the map.") and one lede sentence in Platform Grey. The drawing is ink only: no line is meant, so no line ink appears.

**Where to next** (headline-weight Overpass, 1.5rem) is a destinations trunk: the Stops Trunk rail with `--c` set to ink and `--w` 8px, at most 24rem wide. Each destination is a full-row link at least 56px tall: a 22px ring with a 4px ink border, the label in stop-name type, and a stroke arrow in Platform Grey that nudges right and turns ink on hover. Home comes first and its ring is filled ink, as the primary exit. The other rings are hollow and fill with ink on hover and focus-visible (300ms). The list is built from `NAV`, so feature-flagged sections join it automatically when switched on.

### System Map
A case study's architecture drawn as a transit map, **ink only**: no pillar line is meant, so no line ink appears (colour still means a pillar line). Stations sit on a grid read from the study's frontmatter `map` (each station `at` [col, row]). A link runs straight when the stations share a row or column; otherwise it runs along the longer axis first and finishes at 45°, with round joins. A station where three or more links meet (degree ≥ 3) is an **interchange** and draws as a larger ring (r17, 7 stroke vs r12, 6 stroke on the full map). Rings are ground-filled with an ink stroke; links are 12-stroke ink.
- **Labels:** each station sets a label `side` (below, above, left, right, below-right), chosen so the name (Overpass 700, 15) and its subtitle (Inter 12.5, Platform Grey) land in clear space. The 3px ground halo (`paint-order: stroke`) is hairline safety only, never a substitute for placement.
- **Legend:** below the full map, in Platform Grey 0.875rem: a small ring for Component, a heavier ring for Interchange, and "Select a station to read about it."
- **Full** (in a `#system-map` section under a 2px ink rule): every station is a link to the story section that covers it, and the stroke draws and the rings pop with the shared load motion. On phones it is replaced by a trunk-and-spurs strip derived from the links: the longest chain becomes the Stops Trunk (ink `--c`, 8px), each other station hangs off the trunk stop it links to as a spur (a 6px ink stub to an 18px ring), and interchanges take a 28px ring with a 6px border.
- **Compact:** the sticky "You are here" map in the lg+ right gutter (Overpass label "You are here", the compact map linking back to the full map, and a station list). It fades out (300ms) while the full map is in view, so the two never show together.
- **Mini:** the bare network (6-stroke links, r6 / r9 rings, `aria-hidden`) at 64px tall (h-16) on the index rows.

### Riding the Map (signature interaction)
The section in view (its h2 above 35% of the viewport) or the one just jumped to lights its stations everywhere they appear: the full map's rings and phone dots, the compact map's dots, the station list (ink, 700, filled dot) and the station chips (filled dot). **Station chips** sit under each story h2 naming the stations it covers: pills with a 2px ink border, Overpass 700 0.875rem, a hollow 2px dot that fills when lit, each linking back to `#system-map`. The targeted h2's ink rule thickens from 2px to 6px. Map stations take a 2px ink focus ring at 4px offset. Everything is ink; nothing lit uses a line ink.

### Case Study Page
Sign band (name links home) then the H1 directly, with no eyebrow, and the summary as a Platform Grey lede (60ch). A **fact strip** follows as a `dl` on a Hairline top rule: Overpass bold terms (Role, Years, Lines, Stack, Scope) against Platform Grey Inter values. Lines shows sm bullets with names only for the pillars the study served; Years is tabular; Stack and Scope separate with the Inter middle dot. "Visit live site" (primary plate) and "View code" (outline plate) appear only when `url` / `repo` are set. Then the full System Map, the story column (Overpass 800 headings, 2px ink rule above each h2) with the compact map beside it, an optional screenshot gallery between the Original build and AI evolution sections (desktop 16:10, mobile about 9:19.5, flex-weighted by ratio so a row comes out equal height; no study ships images yet), a **next study** link (the next title in Overpass 800 with a stroke arrow that nudges right; no "Next" label) on a Hairline rule, and the Let's Talk station.

### Case Study Index (Route List)
Display H1 "Case studies", a lede, then an ordered route list under a 2px ink rule with Hairline row rules. The whole row is one link: sm bullets of the lines served, the name (Overpass 800, 1.5rem rising to 1.875rem, underlined 3px on hover) and the subtitle (Overpass 600, Platform Grey) split from the title on " — ", the summary (64ch), role · years (Inter, tabular), then the mini map and a stroke arrow on the right (md+) or below. Rows carry `data-lines`, so line selection dims the studies that do not serve the line.

### Code
Code blocks use shiki's `css-variables` theme mapped to the site's inks: foreground, keywords, functions and constants in ink; strings, comments and punctuation in Platform Grey; on the Tile ground with a Hairline border and 4px corners. There is no syntax colour, because colour means a line. Inline code drops the backticks and sits on Tile with 4px corners at weight 600.

### Navigation
The header is an Overpass bar with a hairline bottom border. Links are 0.875rem 600 in Platform Grey, turning ink on hover. The current page is ink with a 2px underline at 8px offset. Tap targets are at least 44px tall, and the theme toggle is a 44px square with a stroke icon. Transit pages hide the header brand because the sign band carries the name. NAV is Home, About, Resume, Case studies (`/case-studies`), plus Blog and Services when their feature flags are on; the old `/portfolio` and `/portfolio/[...id]` URLs redirect to the case studies. The footer is a quiet Platform Grey Overpass row with a hairline top border.

### Line Selection (signature interaction)
Selecting a bullet sets `html[data-active-line]`. Everything tagged `data-lines` that the line does not serve recedes to **opacity 0.6 and saturate(0)** (0.6 keeps receding text close to 3:1). Stops it serves light up, and its diagram path thickens to a 22 stroke. Pressing the same bullet again or pressing Escape clears the selection, and a polite live region announces "Showing the {Line} line" or "Showing all lines". Transitions take 0.4s on `cubic-bezier(0.16, 1, 0.3, 1)` and are removed under `prefers-reduced-motion: reduce`.

### Interchange Diagram and Load Motion
On the home page, an SVG diagram shows People (24 stroke, r28 bullet, 800 label) running straight through the capsule while Product and Architecture (14 stroke, r22 bullets) branch into it at 45°.

The load motion is shared, defined once in the global stylesheet for any surface that draws: `pop` scales an element in from 0.4 (0.5s, `cubic-bezier(0.16, 1, 0.3, 1)`, delayed `--i` × 0.12s), `draw` strokes a `pathLength="1"` path in (1.1s, `cubic-bezier(0.65, 0, 0.35, 1)`, delayed 0.25s + `--i` × 0.14s), and `settle` scales in from 0.85 (0.6s, default delay 1.2s). Each surface sequences its own drawing with `--i` or an inline `animation-delay`: on home the bullets pop, the lines draw and the capsule settles at 1.2s; on the 404 the rail draws, the terminus pops at `--i` 11 and the lone ring settles at 1.5s. It runs once and only under `prefers-reduced-motion: no-preference`. Otherwise the drawing renders complete.

### Print (resume CV)
The resume prints as a 1–2 page CV on a 9pt base with 14mm × 16mm margins. Grounds go white and text black. Header, footer, the Let's Talk station and anything marked no-print are hidden. The sign band becomes a letterhead: black type over a 2px black rule, with no ink flood. Rows and h2s never split, line-selection dimming is cancelled, clamped rows print in full, and route bullets keep their line inks (`print-color-adjust: exact`). LinkedIn prints as its URL.

## Do's and Don'ts

### Do:
- **Do** open every transit page with the Station Sign Band and end it with the Let's Talk Station (the 404 alone omits the station and the line selectors).
- **Do** tag every element that belongs to a line with `data-lines` so line selection reaches it, and give any new stop or row the bullets of every line it served.
- **Do** let People lead: the heavier rail (12px vs 8px), the larger type, the full-width row, the trunk.
- **Do** use ink for every UI state: focus (2px, 3px offset), pressed (3px), hover underline, current nav.
- **Do** keep geometry on 90° and 45°, and line up bullet, rail and ring centres on the rail axis.
- **Do** keep motion one-time and opt-in under `prefers-reduced-motion: no-preference`, and remove state transitions under reduce.
- **Do** separate items in Overpass signage text with " / " or list gaps, and use tabular figures for years and counts.
- **Do** draw any architecture or system diagram as an ink-only System Map: grid stations, straight or 45° links, larger rings for interchanges, labels placed in clear space.

### Don't:
- **Don't** use a line ink for anything that is not a line: no coloured links, accents, highlights or decorative fills.
- **Don't** tint, gradient or wash a line ink. Lift it as a theme value when contrast requires, as night blue does.
- **Don't** put eyebrows or kickers (small uppercase labels) above headings. Headings stand on their own.
- **Don't** use the middle dot " · " as a separator in Overpass text.
- **Don't** add shadows, blurs or medium radii. Plates are 4px, bullets and rings are round, everything else is square.
- **Don't** build new surfaces with Newsreader, the serif PageHeader/Section components or `.prose` serif headings. They belong to the legacy pages that have not been migrated: only the feature-flagged blog and services pages.
- **Don't** let a sign plate be anything but rectangular with 4px corners, at least 44px tall, and set in Overpass bold.
