---
name: travelmaker
description: Build or maintain a reusable, deployable travel command-center website from trip plans and evolving travel needs. Use for itinerary sites, live trip dashboards, booking workflows, shared checklists, safety snapshots, offline guides, and lifecycle-aware travel tools.
metadata:
  short-description: Build and maintain a deployable travel command-center site
---

# TravelMaker

Turn a traveller's planning inputs into a clear, mobile-first travel website that remains useful from early planning through the trip itself. The output is not merely an itinerary: it is a practical command center with the plan, booking actions, live travel information, shared preparation tools, and offline fallbacks in one coherent system.

When maintaining an existing TravelMaker site, inspect the current project and preserve its data model, visual language, deployment target, sharing model, and already-confirmed trip facts. The intake gate below applies to a new trip, not to a focused update of an existing site.

## Required intake gate

Read [the input schema](references/trip-brief.md) and identify what is confirmed, missing, delegated or intentionally skipped. When information is incomplete, collect it conversationally in small groups of concise questions. Every question must make it easy to answer and include a natural escape such as `如果目前不知道，可以回覆「略過」`.

Ask about travel style near the beginning, together with travellers and pace, because it shapes the route before individual attractions are ranked. Let the traveller select several styles, describe their own, or say `略過`. Also ask what they actively dislike or want to minimize; absence of a preference is not permission to stereotype the traveller.

Respect `略過` as a valid answer. Do not repeatedly ask for the same skipped field unless it later becomes necessary for a material decision; if it does, explain why and offer a safe default. Optional skipped fields simply disable or defer the related feature. For destination, trip length, travel dates, flights or accommodation, never invent facts: use a clearly labelled assumption, a relative `Day 1 / Day 2` draft, a recommended area, or a `待確認` placeholder and state the impact.

Before planning, summarize the intake as `已確認`, `採用假設`, and `暫時略過` so the traveller can correct misunderstandings. Begin once the route can be planned responsibly; do not hold the entire project hostage to optional details.

An explicit delegation (for example, “please choose accommodation areas for me”) is enough to proceed for that one field; record the choice as an assumption for the user to review. `略過` is different from delegation: it authorizes omission or deferral, not an invented answer.

- Treat dates, flights, accommodation and fixed reservations as constraints.
- Use stated travel styles to balance the itinerary—for example culture / history, food, shopping, nature, photography, family activities, theme parks, nightlife, wellness or slow travel—without forcing every day into a single theme.
- Build a geographically sensible route; do not force every wishlist item into the schedule.
- Validate travel time between consecutive itinerary stops before presenting the route. Use a live map / transit planner and, for time-sensitive legs, confirm the relevant operator timetable or official access guidance. Include station walking, transfers and realistic buffers; do not estimate from straight-line distance.
- Flag omissions, tight transfers and closed-day risks plainly.
- Use live research for unstable facts such as opening hours, transport timetables, booking windows, weather, border rules, payment offers and public alerts.
- Never assume a restaurant reservation, paid ticket or account authorization. Present links and reminders unless the user explicitly authorizes an external action.

## Produce the itinerary before the website

Create a day-by-day draft with bounded time blocks, transport buffers, meals, check-in/out and an unhurried fallback. Group each day by area or route rather than simply ranking attractions.

After the route is coherent, identify unfilled meal windows and proactively offer a compact restaurant shortlist near the previous stop, next stop or transfer corridor. Follow [the routing and restaurant research standard](references/routing-and-food-research.md); do not recommend a restaurant from memory or a single rating alone.

Once the required brief is complete, ask for confirmation only when an unresolved choice would materially change the route. Otherwise make sensible, visible assumptions and continue.

## Build the command center

Use the available web-design and Sites workflows when a website is requested. Preserve an existing project when one exists; otherwise create a Sites-compatible project and deploy it after a successful build.

Follow [the product contract](references/product-contract.md) for the baseline structure, [the travel operating modules](references/travel-operating-modules.md) for the current command-center functions, [the state and reliability rules](references/state-and-reliability.md) for shared and changing data, and [the visual system](references/visual-system.md) for the default presentation. Adapt modules to the destination instead of copying Japan-specific content. Keep the experience mobile-first, readable offline from a saved page where practical, and useful during a real trip.

When the traveller wants to share the product without exposing their trip, build a separate public demo rather than publishing a lightly edited copy of the private site. Preserve the product structure and interaction model, but follow [the public demo and sharing rules](references/demo-and-sharing.md) to replace trip content, isolate storage, remove private assets and verify both feature parity and de-identification before publishing.

Apply the default visual system unless the traveller explicitly asks for a different direction. Make individual itinerary stops scan as small blocks. Default dense daily detail to collapsed on the itinerary page.

## Live and tracked information

Where the user asks for changing information, save the last successful snapshot locally or in the app's shared storage, show a timestamp, and expose a deliberate **更新** action. Do not make the interface appear empty until a manual refresh occurs.

For operational sources such as safety notices or cross-border-payment availability, default to a snapshot-first smart refresh: render the saved result immediately, refresh in the background only when its server-validated freshness window has expired, recheck when an open page returns to the foreground, and retain manual refresh. Use a shared server lease so multiple travellers or devices do not start the same refresh concurrently. Read [the state and reliability rules](references/state-and-reliability.md) before implementing this mechanism.

- Weather and safety: use the destination's authoritative meteorological or civil-protection source when available; translate essential status into the user's language.
- Flights: link to the airline or airport's official live-status page and show terminal / counter only when verified. Use a travel-mode view to prioritize immediate flight and transfer actions during the trip.
- Shopping, payment, and booking benefits: show effective dates, limits, requirements, source links and whether a result is confirmed or pending.
- Payment cards: keep card payments and local-wallet / QR payment methods separate. Omit new-customer promotions unless the traveller explicitly qualifies.
- Payment profile: do not preload or infer the traveller's cards. After the itinerary and meal plan are broadly settled—and only when payment recommendations are wanted—ask which card products and payment methods the traveller holds. Explain that product names and relevant membership tier are enough; never request or store card numbers, expiry dates, security codes, bank account numbers or login credentials.
- Safety: combine relevant weather, earthquake, tsunami, transit, closure, fraud and civil alerts into one traveller-facing stream. Multiple simultaneous alerts must remain independently scannable; partial source failure is not the same as “no alerts.”
- Shared preparation: when requested, provide separate traveller-owned packing and shopping lists with add, edit, delete, completion and safe synchronization. Shopping photos are optional attachments, not a requirement for every item.
- Offline: export a static trip handbook containing itinerary, accommodation, reminders, booking status and emergency essentials. Make it clear when the export was generated and that it does not update itself.

## Completion standard

Before handoff, verify the route for obvious backtracking and conflicts, build the site, run the relevant behavioral tests, and check the primary mobile viewport when browser QA is requested or needed for a layout-sensitive change. When deployment is in scope, publish only after successful validation and return the live URL.

Do not claim live data is current if it is only a link, an estimate, or a prior snapshot.
