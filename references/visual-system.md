# Default visual system — Lexiloop-aligned travel command center

Use this visual direction as the default for sites created with TravelMaker. It captures the current travel site's appearance, but it is a design system rather than destination-specific copy or data.

## Character

- Dark editorial dashboard: focused, premium, slightly technical, never game-like.
- Calm hierarchy: oversized route title, quiet utility text, large breathing room, bright accents only for state and action.
- Use `Noto Sans TC` or an equivalent local-language sans for content, `DM Mono` for utility labels and flight codes, and `Bebas Neue` for prominent calendar dates, times, counts and route numbers that benefit from fast scanning.
- Avoid decorative illustrations, gradients, glossy effects and dense dashboard chrome. A very subtle monochrome grain layer is acceptable on the overall background only.

## Tokens

```css
--paper: #0b0b0b;
--panel: #141412;
--ink: #f3f0e8;
--muted: #999891;
--line: #2a2927;
--acid: #d8ff4f;   /* active state / key number / primary action */
--orange: #ff6835; /* caution / deadline / disruption */
--violet: #9c7cff; /* optional secondary distinction */
--radius: 24px;
```

Use the acid colour sparingly. It should identify the selected tab, an important value, a primary update action, or a verified positive state—not fill whole panels.

## Page frame

- Constrain desktop content to roughly `1480px` and use 24px side padding; mobile uses 16px.
- Keep the top bar thin and practical: round two-letter brand mark, strong site name, quiet signed-in identity.
- Place a horizontally scrollable, sticky tab bar below the hero. The active tab is a text treatment with a thin acid underline, not a filled pill.
- Use a large route title in two lines, with the second line in acid. Pair it with a short operational sentence aligned to the right on desktop and below on mobile.
- Keep the hero to one decisive message and a compact row of key trip stats.

## Components

- Primary containers: matte dark panels, 1px muted border, 24px radius.
- Secondary action cards: 18px radius, same dark panel, 1px border. Do not use elevated shadows.
- Use 16px gaps between cards instead of hairline grid separators.
- Operational sub-cards such as reminders, actions, freshness and risk checks can form a quiet grid within one rounded panel, separated only by the muted line.
- Buttons should be restrained. The main action may use acid background with near-black text; secondary controls remain transparent with an underline or outline.
- Forms are near-black with muted borders; focus uses a restrained acid outline.
- Use orange only for warnings, expiry and potentially blocking actions. Never pair it with optimistic success text.

## Information hierarchy

- Utility labels: mono, uppercase where appropriate, 11px, muted.
- Major section headings: bold, tightly tracked, responsive `32–60px` range.
- Card headings: strong but compact; descriptions use muted 12–14px text with generous line-height.
- Dates, counters and amounts may use mono to improve scanning.
- Every live datum must identify its status and last update time without competing with the primary itinerary.

## Responsive rules

- Design for a 320px minimum viewport.
- At tablet width, stack the hero's side note beneath the title.
- On phones, retain the large title at about 54px, reduce the top bar, preserve 16px side padding, and keep tabs horizontally scrollable.
- Do not collapse dense details into tiny text. Preserve legibility first, then allow horizontal scrolling only for selectors and tab rows.
- Daily itinerary detail stays collapsed by default; opening one day should reveal distinct stop blocks with clear time, title and status.
- The travel-mode toggle is a compact rounded control in the top bar. When enabled, suppress the decorative hero and show the live operational view immediately.
- Keep the permanent bottom navigation to roughly five primary destinations. Route weather, safety, rescue and offline tools through a secondary hub instead of shrinking every feature into the bar.
- Dense checklists should not render every item as a separate rounded card. Use one category container, single-row items, thin horizontal dividers and compact trailing actions.
- On phones, a checklist row should keep checkbox, one-line ellipsized title, edit and delete on the same line. Only optional media controls may occupy a second row.
- Category headers may be rounded and bordered, but the items inside should be visually quiet. Make the view filter sticky when it materially reduces scrolling.

## Guardrails

- Do not reuse the original trip name, initials, cities, dates, colours as user content, or current data in a new trip.
- If the traveller provides a different visual brief, follow it instead; retain the information hierarchy and mobile usability principles.
