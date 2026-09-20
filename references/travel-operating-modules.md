# Travel operating modules

Use these modules as the current functional baseline for a TravelMaker command center. Include only the modules that fit the traveller's brief; do not fill the site with empty sections.

## Two contexts: planning and travel mode

- **Planning mode** is the full dashboard: hero, all tabs, research, booking preparation and route review.
- **Travel mode** is a persisted user toggle that hides the hero and opens the live dashboard. It should surface only today's actionable information and leave the normal dashboard one tap away.

## Live dashboard

Put operational items before general reference links:

1. Current destination weather.
2. Today's route with the next stops and an action into the itinerary.
3. Today's editable reminders, including saved fixed notes and optional action links.
4. An action timeline for upcoming booking windows, check-ins, tickets, payment tasks or deadlines.
5. Data freshness cards: each changing source must show a human-readable timestamp or a clear `尚未同步` state.
6. Route-conflict cards that identify time, transfer, opening-hour or reservation risks and present a practical adjustment.
7. Official flight status, airport and transit links.

## Itinerary

- Put pre-trip deadline reminders above the day selector when they exist.
- Each stop must have time, title, transport guidance, a fallback option, a map link and a “navigate from current location” link.
- Add per-day editable notes. Persist them; the live dashboard should mirror the selected day's notes.
- Keep stop completion out of the main interaction when it adds visual noise; the primary job is immediate wayfinding.
- Navigation must start from the user's current location rather than assuming the previous itinerary stop.
- Show a verified travel-time range and recommended mode between consecutive stops. For fixed reservations, airport transfers and last-train-sensitive legs, include a conservative departure time and buffer.

## Bookings and dining

- Put an action timeline first, sorted by when the traveller needs to act—not by itinerary date. Each item needs status, timing, plain-language reason and an external action link.
- Include a dining overview only when restaurants are part of the trip. Each card shows date, cuisine, area, booking state and map link.
- Keep the detailed booking / transport checklist and pre-departure packing list beneath these summaries.
- Distinguish confirmed opening rules from estimates. A selectable date whose time slots are unavailable is not an open reservation.
- During the trip, derive a “today” stack from confirmed restaurants, tickets, flights and required checks. Keep the complete archive accessible elsewhere instead of deleting or hiding it permanently.

## Shared packing and shopping lists

- Support distinct traveller identities and separate luggage / shopping subviews.
- Seed a practical baseline, deduplicate by stable identity, and keep personal-only gear on the correct traveller.
- Group luggage by category and show category completion. Categories stay collapsed by default on phones; shopping may open by default when the list is short.
- Provide `待整理` and `全部` filters. Checked items remain recoverable in the complete view.
- Allow add, edit, delete and completion changes. Confirm deletion and retain stable item IDs so synchronization does not duplicate or reassign items.
- Give weather-aware packing advice only when the forecast actually covers the travel dates. Otherwise say that the forecast window does not yet reach the trip and provide a clearly labelled seasonal baseline.
- Shopping-list images are reference aids for staff. Limit uploads to safe raster formats and a bounded size, keep them private to the trip, and support preview, replacement and deletion.

## Payments and spend records

- Separate “which card / cross-border payment is best” from “what has already been spent.” Use distinct tabs or views.
- Keep physical-card and wallet / QR payment options as separate categories.
- Support add, edit and delete for spending records. Show spend against a real cap, or clearly write `無上限`; never show a fictional cap.
- Use official card or payment brand visuals only when a valid image / logo is available. Otherwise use a neutral, labelled fallback; never fabricate an official-looking logo.
- Start with an empty payment profile. Populate it only from card product names and payment methods voluntarily supplied during the payment-profile intake. Users must be able to add, edit and remove entries; recommendation rankings must immediately use the active list.
- Never collect or display card numbers, expiry dates, security codes, bank account numbers or login credentials. Membership tier and campaign-registration state may be recorded only when needed to judge eligibility.
- Separate verified campaign rules from live availability. Static card rewards, eligibility tasks, minimum spend and caps change only after deliberate verification; wallet quota, campaign status or source availability may use the snapshot-first smart refresh in [state and reliability](state-and-reliability.md).
- For each tracked payment tool, show the translated status, official source, last successful check time and freshness. Refresh stale sources in the background, retain an explicit manual update button, and preserve the last successful result when a provider fails.

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
