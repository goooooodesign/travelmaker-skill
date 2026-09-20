# Routing and restaurant research

Use this standard whenever TravelMaker creates or materially changes an itinerary or recommends places to eat. Travel times, business status, booking rules and ratings are time-sensitive and require live research.

## Validate every route leg

For each pair of consecutive stops:

1. Search the exact venues, not only their neighbourhood names. Confirm that similarly named branches are not confused.
2. Check the intended travel date and approximate departure time in a live map or transit planner.
3. Record the realistic door-to-door range: walking to the station, waiting, transfers, exit-to-venue walking and a modest buffer. Add luggage or crowd buffer when relevant.
4. For airport transfers, reserved transport, sparse rural buses, ropeways, boats, last trains or opening-time-sensitive legs, cross-check the operator's official timetable or access page.
5. If services for the future date are not published, label the result as an estimate based on the currently published timetable and schedule a recheck.

Reject or revise a route when transit consumes the experience, requires a fragile connection, arrives after last entry, or creates avoidable backtracking. Tell the user when a desired place is better omitted.

## Build meal opportunities from the route

- Identify breakfast, lunch, café and dinner windows that do not yet have a specific restaurant.
- Choose the search area from the previous stop, next stop, hotel or transfer corridor. State only the useful area in the user-facing shortlist unless detailed logistics are requested.
- Consider cuisine variety across the whole trip. Avoid repeating already scheduled restaurants, rejected restaurants, excluded ingredients or formats the traveller does not want.
- Offer roughly 3–5 strong candidates per decision point, then let the traveller choose before mutating the itinerary or external services.

## Restaurant evidence standard

A recommendation must pass all of these checks:

- **Existence and current operation:** confirm the exact branch, current address and recent operating status. Prefer the official site or official social account for hours, holidays, booking method and temporary closure.
- **Independent quality evidence:** compare at least two credible discovery / review sources when available. For Japan, useful sources include Tabelog plus Google Maps, Michelin, a respected local publication or a reservation platform with verified diner feedback. Do not treat social-media popularity as sufficient evidence.
- **Review quality, not score alone:** consider review count, recency, repeated comments about food quality, service consistency, queues and value. A high score with very few or old reviews is weak evidence.
- **Trip fit:** verify meal service hours, last order, expected queue / booking need, price range, dietary constraints and travel time from the surrounding itinerary.
- **Booking reality:** a future date appearing in a calendar does not prove booking is open. Confirm that a valid time slot can actually be selected; `×`, disabled or missing times mean unavailable / not yet open.

Present why each candidate is credible, the cuisine, approximate price, booking need and source links. If evidence conflicts or is too thin, label it uncertain or omit it. Never invent a rating, booking window, opening hour or restaurant attribute.

## Preferred sources by claim

- Official restaurant / operator: hours, closure, menu, access and booking rules.
- Mapping / transit planner: route and door-to-door time.
- Local review platform: food quality, value, queue pattern and consistency.
- Reservation platform: currently selectable dates / times and cancellation terms.
- Editorial guide: specialist context only; verify operational facts elsewhere.
