# Destination-aware adaptation

After the traveller provides a destination, choose and implement sources for that trip without making them research source websites. This is a per-trip build workflow, not one universal Japan-specific feed and not a guarantee that every country publishes a machine-readable endpoint.

## Resolve the destination

- Map each overnight city and travel leg to country, region, local timezone, language and currency. A multi-city / multi-country trip may need different sources on different dates.
- Use the traveller's origin only when it changes flights, entry requirements, emergency assistance or payment eligibility. Do not infer nationality, card ownership or visa status from residence.
- Dates determine whether a source's forecast window, promotion, timetable, tax rule or alert actually applies. Do not present out-of-range information as current for the trip.

## Select sources by function

Build a per-trip source manifest for the functions actually requested. Prefer first-party national or local agencies and the responsible operator; use a reputable secondary source only when it adds necessary coverage and label it accordingly.

| Function | Choose for the destination |
| --- | --- |
| Weather | National / regional meteorological agency covering each city; forecast horizon, confidence and warning feeds only if published. |
| Safety | Relevant civil-protection, weather, seismic, flood, wildfire or other local hazards; city / region transit and attraction closures where obtainable. Do not add hazards irrelevant to the geography. |
| Flights and airport | Airline and actual departure / arrival airport status, terminal, counter and baggage guidance. A flight link is not proof of live flight data. |
| Ground transport | Responsible rail, bus, ferry, road or metro operators for the itinerary's real legs; official access and disruption pages. |
| Entry, tax and shopping | Government entry / customs / refund rules plus destination retailer or airport offers. A Japan tax-free flow is not a generic global rule. |
| Payments | The traveller's home-country card issuers and payment methods **only after opt-in**, checked against destination acceptance, foreign fees, eligibility and promotion dates. PayPay or any other local wallet must not appear merely because it exists in the reference site. |
| Emergency | Local emergency numbers, relevant consular / travel-assistance contacts and location-specific rescue steps. |

For each selected source, record its owner, official URL, geographic coverage, data access method (API / feed / permitted page / manual official link), language, update frequency, publication time, last successful retrieval, supported fields, known exclusions and fallback. Keep source configuration separate from display components and trip content. Do not copy Japan endpoints, offers, private names or account-specific state into another destination's configuration.

## Validate before claiming automation

- Open or fetch a real example from each proposed source. Confirm that it covers the relevant city / region, returns parseable current data, and distinguishes an empty result from a fetch or parse failure. Respect access restrictions; do not bypass blocked pages or invent an endpoint.
- For a source that cannot be fetched reliably, keep the prior successful snapshot if one exists and show a clear unavailable / manual-check state with the official link. Never label a links-only panel as `即時追蹤`.
- Translate the operational meaning into the traveller's language; retain the original title, source, publication / effective time and link when useful. An AI summary or keyword match must not silently turn an ambiguous notice into an all-clear.
- Apply the snapshot, freshness, partial-failure and refresh rules in [state and reliability](state-and-reliability.md). Use a sensible cadence per source; hourly is not mandatory for every kind of data.
- If a local equivalent does not exist—for example no tourist tax refund, no relevant wallet offer or no public live quota—adapt the page to explain `不適用` or `無可靠自動來源`. Keep the function's navigation / setup path when full feature parity was requested, and ask before dropping an entire category.

## Delivery check

Before publication, verify one real destination-specific result or a clearly labelled unsupported state in each enabled dynamic module; check timezone, currency, date validity and links. Summarize the chosen official sources and any manual-only gaps for the traveller. If the traveller later changes destination, rerun this adaptation; changing the city label alone is not a valid migration.
