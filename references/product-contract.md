# Product contract

For a new TravelMaker site, use [the current-site parity checklist](current-site-parity.md) by default unless the traveller asks for a simpler site. Keep the navigation stable while replacing destination-specific content. The reference has six fixed bottom destinations; route secondary tools through a “more” hub so the phone interface does not become a row of tiny tabs:

1. **即時 / now** — current trip state, prioritized action, today's plan, editable daily reminders, urgent action timeline, safety / weather freshness and route-risk check.
2. **行程 / itinerary** — pre-trip reminders, a collapsible wishlist, day selector and per-stop blocks with time, place, transport, fallback, notes, map and current-location navigation; shared editing when requested.
3. **訂位 / 今天** — before the trip, an action-date-sorted restaurant / transport queue with status filters and departure checklist; during the trip, a focused “today” view with the full archive reachable.
4. **清單 / lists** — separate traveller profiles and luggage / shopping subviews, categories, completion filters and optional shopping-reference photos.
5. **優惠 / offers** — shopping offers, eligible-card / cross-border-payment comparison and a distinct spend ledger. On a new trip, show setup states until relevant traveller products and local offers are known.
6. **更多 / more** — official forecast, integrated safety, rescue and an offline handbook. Keep these available without occupying the permanent navigation.

Add or adapt when relevant to the destination and traveller:

- A contextual tax-refund guide, with an in-site explanation and official sources.
- Shared expenses.
- Transport passes, airport transfer and flight tracking.

For every dynamic module, display one of: `已更新`, `待確認`, `預估`, or `尚未同步`, plus a human-readable timestamp when applicable. Prefer first-party sources, show the source link, and ensure the result remains useful if a request fails.

## Lifecycle contract

- **Planning:** bookings and deadlines are prominent; itinerary detail is available but collapsed.
- **Display preference:** offer `自動顯示`, `精簡顯示` and `完整顯示` when the product has enough content to justify them. Automatic mode follows the trip lifecycle; compact and full modes are explicit user choices and should persist on that device. Never hide the full record permanently when compact mode is selected.
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
