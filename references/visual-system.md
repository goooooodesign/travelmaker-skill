# Default visual system — dark travel command center

Use this visual direction as the default for sites created with TravelMaker. The canonical implementation is [the visual kit CSS](../assets/visual-kit.css), with a [day selector component](../assets/DaySelector.tsx) and [neutral visual fixture](../assets/visual-fixture.html). Copy or faithfully port those assets into the new site before styling other components. The site may change trip content, not its default visual language.

## Character

- Dark editorial dashboard: focused, premium, slightly technical, never game-like.
- Calm hierarchy: oversized route title, quiet utility text, large breathing room, bright accents only for state and action.
- Load the reference font trio: `Noto Sans TC` for Chinese content, `DM Mono` for utility labels and flight codes, and `Bebas Neue` for calendar dates and key counts. For a different writing system, substitute only the content font with a readable script-appropriate sans; keep the mono / condensed numeric treatment. Do not let a framework's default font replace the date face.
- Avoid decorative illustrations, gradients, glossy effects, patterned backgrounds and dense dashboard chrome. Keep the page background a flat deep charcoal / near-black.

## Tokens

```css
--tm-paper: #0b0b0b;
--tm-panel: #141412;
--tm-ink: #f3f0e8;
--tm-muted: #999891;
--tm-line: #2a2927;
--tm-acid: #d8ff4f;   /* active state / key number / primary action */
--tm-orange: #ff6835; /* caution / deadline / disruption */
--tm-radius: 24px;
```

Use the acid colour sparingly. It should identify the selected tab, an important value, a primary update action, or a verified positive state—not fill whole panels.
The active day card uses the exact acid fill and near-black text. A blue, purple or default framework accent is a visual regression, not an acceptable interpretation of this style.

## Page frame

- Constrain desktop content to roughly `1480px` and use 24px side padding; mobile uses 16px.
- Keep the top bar thin and practical: round two-letter brand mark, strong site name, quiet signed-in identity.
- Use a fixed, icon-and-label bottom navigation with six destinations on phones. Keep secondary functions inside `優惠` or `更多`; the selected destination can use an acid-filled state while inactive destinations stay quiet. Do not add a second full-width primary tab row below the hero.
- Use a large route title in two lines, with the second line in acid. Pair it with a short operational sentence aligned to the right on desktop and below on mobile.
- Keep the hero to one decisive message and a compact trip-state line. On secondary pages, replace the oversized hero with a concise section title.

## Components

- Primary containers: matte dark panels, 1px muted border, 24px radius.
- Secondary action cards: 18px radius, same dark panel, 1px border. Do not use elevated shadows.
- Use 16px gaps between cards instead of hairline grid separators.
- The day selector uses equal-width cards on wider screens and horizontal scrolling on narrow screens. Each card is left-aligned with three lines: `DAY N` in DM Mono, a large date in Bebas Neue, and an area title in the content font. Use the bundled component and CSS rather than a generic compact calendar pill.
- Operational sub-cards such as reminders, actions, freshness and risk checks can form a quiet grid within one rounded panel, separated only by the muted line.
- Give immediate trip reminders stronger contrast than passive reference cards: a subtly tinted dark surface, clear left accent, legible body text and distinct edit / delete controls. Long notes and links must wrap inside the card without horizontal overflow.
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
- On phones, retain a strong route title scaled to the viewport, reduce the top bar, preserve 16px side padding, and reserve bottom space so the fixed navigation never covers content. Horizontal scrolling belongs only to day selectors or relevant subselectors.
- Do not collapse dense details into tiny text. Preserve legibility first, then allow horizontal scrolling only for selectors and tab rows.
- Show one selected itinerary day at a time, with distinct stop blocks and clear time, title and status. Keep each stop's longer transport / fallback guidance collapsed by default.
- On phones, let long reminder text take its own row and keep its actions reachable below it. Provide comfortable tap targets rather than shrinking the note text.
- The display-mode selector is a compact control in the top bar with `自動顯示`, `精簡顯示` and `完整顯示`; it is not a binary switch. Compact mode suppresses nonessential hero material and foregrounds operational actions.
- Keep the permanent bottom navigation compact; the current reference uses six destinations. Route weather, safety, rescue and offline tools through `更多` instead of shrinking every feature into the bar.
- Dense checklists should not render every item as a separate rounded card. Use one category container, single-row items, thin horizontal dividers and compact trailing actions.
- On phones, a checklist row should keep checkbox, one-line ellipsized title, edit and delete on the same line. Only optional media controls may occupy a second row.
- Category headers may be rounded and bordered, but the items inside should be visually quiet. Make the view filter sticky when it materially reduces scrolling.

## Guardrails

- Do not reuse the original trip name, initials, cities, dates, colours as user content, or current data in a new trip.
- If the traveller provides a different visual brief, follow it instead; retain the information hierarchy and mobile usability principles.

## Visual acceptance

- Render the bundled fixture and the new site's corresponding itinerary view at one wide viewport and one phone viewport. Compare card count / width, three-line order, font family, date size, panel radius, neutral background and acid selected state. Do not approve based on source CSS alone.
- Verify the bottom navigation and top bar use the same tokens across every primary tab, not just the itinerary page. Check at least one booking, list, offer and more subview for unintended framework defaults.
- Keep the fixture data fictional. Do not copy it into the traveller's real itinerary.
