# Travel operating modules

Use these modules as the functional behavior behind the [current-site parity checklist](current-site-parity.md). For a full-feature request, retain the workflow even if it must initially show an honest setup or unavailable state; never fill it with fabricated records.

## Lifecycle and display preference

- **Before travel** emphasize preparation, upcoming booking actions and the full itinerary; **during travel** emphasize today's next step, usable reservations and wayfinding; **after travel** retain the record.
- The reference site offers a device-persisted `自動顯示` / `精簡顯示` / `完整顯示` selector. Automatic mode follows the trip phase. Compact does not remove the complete booking archive or itinerary; it changes the default emphasis.

## Live dashboard

Put operational items before general reference links:

1. The single most actionable next booking, check-in or travel step.
2. Safety and current-weather summaries with honest freshness and a route into detail.
3. Today's route with the next stops and an action into the itinerary.
4. Today's editable reminders, including saved fixed notes and optional action links.
5. An action timeline for upcoming booking windows, check-ins, tickets, payment tasks or deadlines.
6. Route-conflict cards that identify time, transfer, opening-hour or reservation risks and present a practical adjustment.
7. Official flight status, airport and transit links; distinguish verified flight data from a link to check it.

## Itinerary

- Put pre-trip deadline reminders above the day selector when they exist.
- Keep a separate collapsible wishlist. Suggest candidate days using area and the current route, but never insert a wish into the committed plan automatically. Show uncertainty when exact detour time or opening conditions are unverified.
- Each stop must have time, title, transport guidance, a fallback option, a map link and a “navigate from current location” link.
- Add per-day editable notes. Persist them; the live dashboard should mirror the selected day's notes.
- Keep stop completion out of the main interaction when it adds visual noise; the primary job is immediate wayfinding.
- Navigation must start from the user's current location rather than assuming the previous itinerary stop.
- Show a verified travel-time range and recommended mode between consecutive stops. For fixed reservations, airport transfers and last-train-sensitive legs, include a conservative departure time and buffer.
- For a confirmed reservation or purchased ticket, show the actual arrival / boarding target and a conservative time to reach the venue or station. Mark it `已訂／已購` only after the traveller confirms it; carry that state into the itinerary, today's view and booking overview.
- Put a usable ticket or confirmation action beside the relevant stop when one exists. Prefer the provider's authenticated order or ticket-wallet page and its official usage guide. Explain whether the traveller presents a digital ticket, activates a QR code or exchanges a voucher; do not assume these are interchangeable.

## Bookings and dining

- Put an action timeline first, sorted by when the traveller needs to act—not by itinerary date. Each item needs status, timing, plain-language reason and an external action link.
- Include a dining overview only when restaurants are part of the trip. Each card shows date, cuisine, area, booking state and map link.
- Keep the detailed booking / transport checklist and pre-departure packing list beneath these summaries.
- Provide status filters for pending, booked / handled and all items. Show a compact departure-preparation checklist as a separate action set, not as proof a reservation was made.
- Distinguish confirmed opening rules from estimates. A selectable date whose time slots are unavailable is not an open reservation.
- During the trip, derive a “today” stack from confirmed restaurants, tickets, flights and required checks. Keep the complete archive accessible elsewhere instead of deleting or hiding it permanently.
- A booking link and a confirmation link serve different jobs. Keep the booking source for an unbooked item; once confirmed, show a map or official management / ticket-wallet action if available. Do not manufacture a Gmail search or message deep link from a restaurant name; tell the traveller to find their own confirmation email when no stable management URL exists.
- A booking or ticket with no safe external URL should still render as a complete item with its confirmed details. Omit the link button rather than using an empty or misleading destination.

## Shared packing and shopping lists

- Support distinct traveller identities and separate luggage / shopping subviews.
- Seed a practical baseline, deduplicate by stable identity, and keep personal-only gear on the correct traveller.
- Group luggage by category and show category completion. Categories stay collapsed by default on phones; shopping may open by default when the list is short.
- Provide `待整理` and `全部` filters. Checked items remain recoverable in the complete view.
- Allow add, edit, delete and completion changes. Confirm deletion and retain stable item IDs so synchronization does not duplicate or reassign items.
- Give weather-aware packing advice only when the forecast actually covers the travel dates. Otherwise say that the forecast window does not yet reach the trip and provide a clearly labelled seasonal baseline.
- Shopping-list images are reference aids for staff. Limit uploads to safe raster formats and a bounded size, keep them private to the trip, and support preview, replacement and deletion.

## Payments and spend records

- Place destination-wide shopping offers, “which card / cross-border payment is best,” and “what has already been spent” in distinct subviews under the offers destination when building the full reference-style site.
- Give the traveller a purchase calculator with purchase amount, currency conversion, net reward after overseas fees and cap-aware comparison. Distinguish theoretical maximum from currently eligible recommendation.
- Keep per-traveller eligibility-task checklists. A card held by one traveller does not imply the other traveller holds it or completed the same tasks.
- Keep physical-card and wallet / QR payment options as separate categories.
- Support add, edit and delete for spending records. Show spend against a real cap, or clearly write `無上限`; never show a fictional cap.
- Use official card or payment brand visuals only when a valid image / logo is available. Otherwise use a neutral, labelled fallback; never fabricate an official-looking logo.
- Start with an empty payment profile. Populate it only from card product names and payment methods voluntarily supplied during the payment-profile intake. Users must be able to add, edit and remove entries; recommendation rankings must immediately use the active list.
- Never collect or display card numbers, expiry dates, security codes, bank account numbers or login credentials. Membership tier and campaign-registration state may be recorded only when needed to judge eligibility.
- Separate verified campaign rules from live availability. Static card rewards, eligibility tasks, minimum spend and caps change only after deliberate verification; wallet quota, campaign status or source availability may use the snapshot-first smart refresh in [state and reliability](state-and-reliability.md).
- For each tracked payment tool, show the translated status, official source, last successful check time and freshness. Refresh stale sources in the background, retain an explicit manual update button, and preserve the last successful result when a provider fails.
- A provider's public campaign page usually cannot reveal a live remaining quota. Label a page recheck as a source-status check, never as a guaranteed quota balance.

## Safety and rescue

- Safety presents the latest saved official alert snapshot, translated status, timestamp and a deliberate refresh action.
- Add a separate rescue module only when the trip merits it: emergency numbers, embassy / consular contact, travel insurance instructions, lost-property paths and a short “what to do first” sequence. Design it for stressed users: large cards, minimal text, direct calls or official links.
- Treat safety as an integrated stream rather than a weather-only panel. Relevant sources may include weather warnings, earthquakes, tsunami notices, transit changes, itinerary-place closures, civil protection and fraud notices.
- Show multiple simultaneous alerts as separate compact cards in the same section. Each alert needs kind, scope, severity, status, official timestamp, translated summary and source.
- Track source coverage separately from alert count. If one source fails, keep its last known alerts marked as retained / unverified; never convert partial failure into an all-clear.

## Offline handbook

- Generate a downloadable static HTML snapshot containing every trip day, accommodation addresses, flights, booking states, reminders and emergency essentials.
- Stamp the generation time and state plainly that it will not update itself.
- Escape user content, allow only safe `https`, `http` or `tel` destinations as appropriate, reject credential-bearing or active URLs, and include no executable scripts, frames or remote styles.

## State language

Use consistent statuses across modules: `待處理`, `已訂`, `完成`, `已排入`, `尚未同步`, `待確認`, and `預估`. Do not label an inferred result as verified.
