# Public demo and sharing

Use these rules when the traveller wants to demonstrate or distribute a TravelMaker site without revealing the private trip behind it.

## Preserve the product, replace the trip

- Treat the maintained private site as the product reference for layout, navigation, modules and interaction behavior—not as a data source for the demo.
- Keep feature parity unless the user explicitly asks for a smaller showcase. Compare navigation, views, forms, upload flows, offline output and mobile behavior against the reference site.
- Replace the itinerary with an explicitly fictional trip. Real public places, hotels and restaurants may be used so maps and route examples remain credible, but do not imply that the traveller visited, booked or endorsed them.
- Mark historical or invented flight schedules, booking states, payment offers and alerts as demo data. Never present them as live operational advice.

## Remove identifying data

Before packaging or publishing, scan source, seeded data, public assets, generated exports and build-time configuration for:

- names, initials tied to a person, email addresses, phone numbers and social handles;
- booking references, ticket numbers, loyalty IDs, passport or identity data;
- home or work addresses, private notes and precise personal movement history;
- payment-card products belonging to the traveller, spend history, bank tiers and wallet enrollment;
- uploaded shopping photos, receipts, screenshots and private media;
- API keys, tokens, cookies, private storage identifiers and internal-only URLs.

Use neutral roles such as `旅客 A` and `旅客 B`. Do not preserve a combination of dates, flights, accommodation and restaurant bookings that could reconstruct the original trip even if names were removed.

## Isolate state and access

- Give the demo fresh storage. Never point it at the private site's database or object bucket.
- For an open public demo, scope mutable state to an anonymous per-browser or per-session identifier so unrelated visitors do not edit one another's lists or records.
- Seed only generic example content. Do not clone production rows, deletion history or uploaded objects.
- Keep write APIs bounded and validate the same ownership, input length, category and file rules as the private product.
- Do not embed the skill package or repository in the demo unless the user explicitly asks for a download link.

## Release gate

Before publishing:

1. Build and test the demo independently from the private site.
2. Check the primary phone viewport and all permanent navigation destinations.
3. Exercise at least one create, edit and delete flow for each mutable module, plus image upload when present.
4. Verify that safety, weather and payment modules use the demo destination or are unmistakably labelled samples.
5. Run a case-insensitive privacy scan over tracked source and public assets using known private names, destinations, card products, booking references and contact patterns.
6. Confirm that the deployment uses the demo project and fresh storage bindings, then return only the public demo URL.
