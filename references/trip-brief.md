# Trip brief

Use this as a compact intake format. Start every new-trip request by extracting what the traveller already gave, then ask only for missing essentials in short conversational batches rather than presenting the whole form at once. End each batch with: `目前不知道的項目可以直接回覆「略過」`. Do not ask the traveller to choose APIs, information websites, a web framework or a hosting stack.

Classify every response as:

- `已確認` — supplied by the traveller or verified from an authoritative source.
- `採用假設` — the traveller delegated the choice or accepted a proposed default.
- `暫時略過` — omitted for now; do not fabricate it and do not ask again without a new reason.

Required fields are inputs whose absence changes how the route can be represented, not a reason to trap the user in a questionnaire. If one is skipped, use the fallback below and state the limitation.

```text
Website name: **required**
Destination / countries: **required**
Travel dates: **required**
Travellers and pace: **required**
Preferred travel styles (multiple allowed): **required or explicitly skipped**
Activities / situations to avoid or minimize:
Inbound flight (number, departure, arrival): **required**
Outbound flight (number, departure, arrival): **required**
Accommodation by date and city, or permission to recommend areas: **required**
Fixed bookings / tickets:
Wishlist places and priority:
Restaurants, food preferences and exclusions:
Existing restaurant bookings / restaurants already used:
Shopping interests:
Payments / cards to track (optional; normally ask after the itinerary is settled):
Shared travellers / list owners (optional):
Shared data and image-upload needs (optional):
Website modules wanted (optional):
Visual direction (optional):
Deployment preference (optional):
Website visibility and sharing: private personal trip / public fictional demo / public personal trip (confirm before publishing):
```

## Safe fallbacks for skipped core fields

- **Website name:** use a temporary neutral project title and mark it editable.
- **Destination:** planning cannot be geographically validated; provide only an intake summary or ask permission to recommend a destination.
- **Dates:** use `Day 1`, `Day 2` and relative timing. Do not claim opening hours, event dates, booking windows or live weather for unspecified dates.
- **Travellers / pace:** default to a moderate pace only if clearly labelled as an assumption.
- **Travel style:** balance major sights, local food and unhurried exploration as a neutral draft, label it as an assumption, and avoid claiming the traveller likes a specific activity.
- **Flights:** omit airport-day timing and mark arrival / departure transfers pending.
- **Accommodation:** recommend suitable areas or leave hotel-origin routes pending; never invent a hotel.

## Readiness gate before building

Do not start website implementation while the initial brief is still ambiguous. The gate is met when:

1. The destination and at least the trip length are known. Exact travel dates are needed before presenting dated bookings, forecasts or a trip-ready live dashboard; without them, only a clearly labelled relative-day draft is possible.
2. The website name has been supplied, or the traveller has explicitly accepted a temporary neutral title after being asked.
3. Traveller count / pace and the places or travel styles to prioritize are known, delegated to TravelMaker, or explicitly skipped. Ask about dislikes / constraints once; do not infer them.
4. Arrival / departure timing, flights, accommodations and fixed reservations have each been supplied, delegated where appropriate, or explicitly marked unknown / skipped. Missing flights or hotels do not authorize invented ones; label affected routes and cards `待確認`.
5. You have summarized confirmed facts, assumptions and skipped fields. Ask for a decision only if a remaining ambiguity materially changes the route; otherwise proceed through itinerary planning and website delivery.

Visibility is a separate publication gate: before making a personal itinerary public, confirm whether this is a private trip site, a fictional public demo or an intentionally public personal trip. If unanswered, keep a preview / private project rather than publishing location and date details openly.

## Question style

- Ask one to three related questions at a time.
- Prefer plain choices when they reduce effort, while still allowing a free-form answer.
- State why a sensitive or high-impact question matters.
- Accept approximate answers such as `下午抵達`, `想住車站附近` or `步調不要太趕`; refine only when precision becomes necessary.
- After each answer, update the intake state instead of restarting the questionnaire.
- Before itinerary work, show a brief summary of confirmed facts, assumptions and skipped items.
- Do not turn the gate into an endless questionnaire. One concise follow-up is enough for a field; accept `不知道`, `略過` or `你幫我選` and record the appropriate limitation or assumption.

For travel style, offer a short multi-select prompt such as: `文化歷史／美食／購物／自然景色／攝影／親子／主題樂園／夜生活／溫泉療癒／慢旅行`，並補一句 `可以複選、自由描述，或回覆「略過」`。Follow with one compact question about activities, crowds, early starts, long walks or other situations the traveller wants to avoid. Do not infer preferences from age, gender, nationality or relationship status.

Do not ask for payment-card details during the first intake unless the traveller brings them up. After the route and meal plan are broadly settled, ask whether payment recommendations are wanted. If yes, request product names only and explicitly say: `請勿提供卡號、有效期限、安全碼、銀行帳號或登入資料。`
