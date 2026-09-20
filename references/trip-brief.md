# Trip brief

Use this as a compact intake format. Ask only for missing information, in short conversational batches rather than presenting the whole form at once. End each batch with: `目前不知道的項目可以直接回覆「略過」`.

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
```

## Safe fallbacks for skipped core fields

- **Website name:** use a temporary neutral project title and mark it editable.
- **Destination:** planning cannot be geographically validated; provide only an intake summary or ask permission to recommend a destination.
- **Dates:** use `Day 1`, `Day 2` and relative timing. Do not claim opening hours, event dates, booking windows or live weather for unspecified dates.
- **Travellers / pace:** default to a moderate pace only if clearly labelled as an assumption.
- **Travel style:** balance major sights, local food and unhurried exploration as a neutral draft, label it as an assumption, and avoid claiming the traveller likes a specific activity.
- **Flights:** omit airport-day timing and mark arrival / departure transfers pending.
- **Accommodation:** recommend suitable areas or leave hotel-origin routes pending; never invent a hotel.

## Question style

- Ask one to three related questions at a time.
- Prefer plain choices when they reduce effort, while still allowing a free-form answer.
- State why a sensitive or high-impact question matters.
- Accept approximate answers such as `下午抵達`, `想住車站附近` or `步調不要太趕`; refine only when precision becomes necessary.
- After each answer, update the intake state instead of restarting the questionnaire.
- Before itinerary work, show a brief summary of confirmed facts, assumptions and skipped items.

For travel style, offer a short multi-select prompt such as: `文化歷史／美食／購物／自然景色／攝影／親子／主題樂園／夜生活／溫泉療癒／慢旅行`，並補一句 `可以複選、自由描述，或回覆「略過」`。Follow with one compact question about activities, crowds, early starts, long walks or other situations the traveller wants to avoid. Do not infer preferences from age, gender, nationality or relationship status.

Do not ask for payment-card details during the first intake unless the traveller brings them up. After the route and meal plan are broadly settled, ask whether payment recommendations are wanted. If yes, request product names only and explicitly say: `請勿提供卡號、有效期限、安全碼、銀行帳號或登入資料。`
