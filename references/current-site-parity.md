# Current travel-site functional parity

Use this checklist when the user asks TravelMaker to reproduce the functionality of the reference travel site for another trip. It describes the observed product as of 2026-11-13, not its private trip content. Recreate workflows and information hierarchy; replace names, destinations, sources and rules with the new trip's verified data. A visible button alone is not parity: the workflow behind it must work, or the UI must honestly state what is unavailable.

## Global shell and lifecycle

- Mobile-first dark command center with a compact top identity row, site name, contextual utility action and fixed six-destination bottom navigation: `即時`, `行程`, `訂位` (becomes `今天` during travel), `清單`, `優惠`, `更多`.
- A device-persisted `自動顯示` / `精簡顯示` / `完整顯示` preference. Automatic mode follows the trip phase; compact mode emphasizes today's actions and can always reach the complete record. Dates and day boundaries use the destination's timezone, not the device timezone.
- Before departure, show countdown and confirmed-item count; during travel, show trip day and next operational step; after travel, retain historical records without automatic deletion.
- Every dynamic view renders its last saved state immediately, a last-checked or last-success timestamp, and a deliberate update control where useful. Loading or partial failure must not blank the prior record.

## Six primary destinations

### 即時

- Prioritized next action with deadline / booking status and direct action, then safety and current-weather summaries with freshness and detail navigation.
- Today's itinerary preview with times and full-itinerary action; editable day reminders mirrored from the itinerary.
- Upcoming action timeline for reservation windows, check-in, tickets and other deadlines; route risks / conflict checks; official transit and flight-status links. Verified terminal, counter and boarding details only; otherwise show `當日確認`.
- During travel, lead with the next stop and a one-tap map / navigation path. A manual current-stop override must not rewrite the master itinerary.

### 行程

- Pre-trip deadline reminders, a collapsible `想去的地點` list, a day selector and detailed per-stop cards. Wishlist entries support add, edit, remove, map/source links and a cautious candidate-day suggestion based on area and current route; the suggestion never silently inserts a stop.
- Each stop shows time, place, relevant ticket / confirmation action, transport and fallback disclosure, map and navigation from current location. A day has editable, persistent small reminders.
- Add, edit, move across days or within a day, and delete stops with stable identity and shared persistence. The editor exposes date, time, insertion position, map query and note. Warn when displayed order and times disagree. Editing a stop never silently changes a restaurant reservation or recomputes a route as though verified.
- Keep original-route advice visibly labelled when the plan has changed. Reconcile booked stops with the booking queue; surface removed or time-shifted booked items as conflicts, not as cancelled reservations.

### 訂位 / 今天

- Before travel, default to a queue ordered by the date/time action is needed. Provide `待處理`, `已訂／已處理`, `全部安排` filters; each card contains target visit date, action date, confirmed-vs-estimated rule, status selector, useful booking / map / ticket link and expandable detail.
- Include restaurant and transport bookings, airport check-in and a compact departure-preparation checklist. A selectable reservation date with all slots unavailable is **not** proof that bookings opened.
- During travel, use a focused `今天` stack of confirmed meals, tickets, flights and required checks, with venue arrival / boarding target and usable ticket or management link. Keep the complete archive reachable.
- Booking status and time remain separate from itinerary edits, with a visible mismatch warning. Never invent a confirmed booking, ticket code or email deep link.

### 清單

- Traveller-owned `行李清單` and `購物清單`, with identity switcher when there are multiple travellers. Each view shows completion counts, `待整理` / `全部` filtering, grouped categories and add / edit / delete / complete actions; list changes synchronize when sharing is promised.
- Luggage categories default collapsed on phones. Packing advice uses actual forecast dates when available, otherwise a labelled seasonal fallback.
- Shopping items may have one optional private reference image for showing staff, including preview, replace and remove. Image upload is validated and bounded.

### 優惠

- Three subviews: `購物`, `刷卡優惠`, `刷卡&支付紀錄`.
- 購物: checkout quick check, destination-appropriate multi-store / department-store offers, chain-store and departure-airport offers where relevant. Show eligibility, exclusions, validity / last verification and official source. Separate store coupon from tax refund; do not transplant Japan's rules to another country.
- 刷卡優惠: separate physical-card and cross-border-wallet categories; traveller-specific eligible products, prerequisite tasks, a purchase calculator with amount / currency conversion / net reward after fees, ranked options, minimum spend, per-purchase and period caps, amount already used (`已刷 X / Y` or `無上限`), effective period and source. Unconfirmed eligibility must not be presented as usable. A tracked campaign-page refresh is not a real-time remaining-quota API.
- 刷卡&支付紀錄: traveller-specific ledger with add / edit / delete, payment channel, local-currency amount, estimated or actual home-currency amount and note. Estimates count provisionally until the actual posting is entered. Updated usage changes recommendation and cap messaging.
- A new trip starts without a personal card profile. Offer a clear setup state and request only product names and eligibility facts if the traveller opts in; never copy the reference traveller's products or ask for card numbers / credentials.

### 更多

- `天氣`: destination-authoritative multi-day forecast, destination / city switcher, high / low temperature, rain probability, confidence only when issued, source publication time, last saved retrieval time, and manual update.
- `安全`: integrated official weather, earthquake, tsunami, transit, closure and local advisory sources as applicable. Show per-source coverage and timestamp, independent translated alert cards, partial-failure warning, manual update and the scope of monitoring. Official live-operation links must be labelled as external checks, not auto-synced alerts. Include emergency phone actions.
- `離線小抄`: downloadable, self-contained, script-free trip snapshot with all days, hotels and original-language addresses, booking / ticket states, reminders, flights and emergency essentials. Show generation time, privacy / staleness warning and instructions to test offline access.
- `救援`: screenshot-friendly accommodation, flight, emergency / consular contacts and a short sequence for accident, transit disruption or lost documents.
- A contextual tax / refund guide may be reached from the top utility action or the shopping view when the destination warrants it. Show practical steps, fees, official sources and a downloadable reference graphic only if verified for the actual trip dates.

## Acceptance checks

Walk all six primary destinations and every nested view on the deployed site at a phone viewport. Verify that day changes, filters, disclosures, calculator inputs, profile switching, editing flows and navigation targets behave as described. Test cross-page effects: itinerary edits in the home preview and offline export; booking changes in today's view and conflict check; reminder changes on home; spending changes in reward caps; per-traveller lists and ledgers stay isolated. Test empty, stale, partial-failure and offline states without making a failed source look like an all-clear. Do not copy reference-site incident data, stale promotions or unverified business rules just to make screens look populated.
