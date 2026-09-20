# Product contract

Build only the modules useful to the traveller. Prefer a small permanent bottom navigation and route secondary tools through a “more” hub so the phone interface does not become a row of tiny tabs. The usual baseline is:

1. **Home / now** — current trip state, today's plan, editable daily reminders, urgent action timeline, data freshness and route-risk check.
2. **Itinerary** — daily selector with collapsed detailed blocks; each block carries time, place, transport, fallback, notes, map and current-location navigation.
3. **Bookings / today** — before the trip, show the action timeline and restaurant / transport queue. During the trip, let the same primary destination become a focused “today” view; keep the full archive reachable from the more hub.
4. **Weather** — destination-appropriate official forecast with source, refreshed timestamp and confidence if published.
5. **Preparation lists** — separate traveller profiles and luggage / shopping subviews, editable categories, completion filters and optional shopping-reference photos.
6. **More** — weather, integrated safety alerts, rescue and an offline handbook. Keep these available without occupying the permanent navigation.

Add only on request or when materially useful:

- Shopping / tax-free / department-store offers.
- Payment-card and local-wallet comparison with spend tracking.
- A dedicated editable spend-record view, separate from payment recommendations.
- Shared expenses.
- Transport passes, airport transfer and flight tracking.

For every dynamic module, display one of: `已更新`, `待確認`, `預估`, or `尚未同步`, plus a human-readable timestamp when applicable. Prefer first-party sources, show the source link, and ensure the result remains useful if a request fails.

## Lifecycle contract

- **Planning:** bookings and deadlines are prominent; itinerary detail is available but collapsed.
- **Departure preparation:** surface check-in, transport, eSIM, packing, shopping and offline-download tasks.
- **During the trip:** prioritize today's route, reminders, weather, active alerts, current-location navigation and items that must be presented to staff. Replace the primary booking entry with “today” when useful, but retain the historical booking archive.
- **After the trip:** do not delete user data automatically. A future archival mode may reduce navigation prominence, but destructive cleanup requires explicit authorization.

## Shared checklist contract

- Keep ownership explicit when travellers have different lists; never merge similarly named personal items merely because their titles match.
- Seed common items without duplicates. Personal equipment, medicine or hygiene items must be assigned only to the intended traveller.
- Packing categories should be collapsed by default on phones. Provide `待整理` and `全部` filters, category progress, weather-aware advice, and a compact add flow.
- Shopping items may store one reference image for showing staff. Validate type and size, keep access scoped to the trip, and allow replacement and removal.
- Add, edit and delete must be available; destructive actions need confirmation. Synchronize shared state when the site supports multiple users.

## Payment profile intake

Do not ship a personal or default card list. After the route and meal plan are broadly settled, ask about cards only if the traveller wants a payment-benefit module. This keeps financial questions out of the initial itinerary intake.

Suggested sequence:

1. Ask whether the traveller wants card / cross-border-payment recommendations. Allow `略過`.
2. If yes, ask for card product names and payment methods in one compact question.
3. Ask only for eligibility facts that materially change rewards, such as existing / new customer, bank membership tier, required campaign registration or mobile-payment eligibility. Allow unknown items to remain `待確認`.
4. Research current benefits from official issuers before ranking. The supplied card name is not proof that any promotion applies.

Never request or store a card number, expiry date, security code, bank account number, online-banking username, password or one-time verification code.

The card screen must support add, rename / edit and delete. A removed card must not reappear on the next load. Keep current offers, qualification tasks, minimum spend, single-purchase limits, monthly caps and validity separate from card identity. Exclude new-customer promotions unless the traveller explicitly says they qualify.
