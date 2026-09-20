# State and reliability

Use these rules when a travel site stores shared data, fetches changing information, accepts images, or generates offline artifacts.

## Shared mutable state

- Scope records to the authenticated trip or explicitly shared workspace. Do not infer that two visitors should share data merely because they opened the same public page.
- Give mutable records stable IDs and server timestamps. For seeded lists, merge saved overrides onto defaults; use tombstones for deletion so removed presets do not reappear.
- Reject forged owners, unknown traveller IDs, invalid categories, overlong text and malformed IDs at the server boundary.
- If initial loading fails, keep the interface readable but disable writes that could overwrite unseen shared data. Offer a clear retry action.
- Use local storage only for device preferences such as compact / travel mode. Cross-device itinerary notes, status, spending and lists belong in shared storage when collaboration is promised.

## Refreshable external data

- Show the last successful snapshot immediately on entry, with a human-readable timestamp and freshness state. `更新` fetches new data; it must not be the only way to make existing information appear.
- For frequently changing operational data, use a snapshot-first smart refresh. A practical default is a one-hour freshness window for safety notices and cross-border-payment availability, but choose a different interval when the source or use case warrants it.
- Make the server authoritative for staleness. After initial snapshot loading, request a non-forced refresh only when stale; while the page remains open, recheck at the freshness interval and recheck when the tab returns to the foreground. Keep manual refresh as an explicit forced request.
- Prevent refresh storms across devices with a short server-side lease keyed to the shared trip and refresh domain. If another request holds the lease, return the saved snapshot with an `更新中` signal rather than starting a duplicate crawl.
- Record coverage per source. A successful empty result means “no matching notices from this source”; a parse, network or schema failure means “source unavailable.” Never conflate them.
- On partial failure, retain the previous alerts from failed sources, preserve their original timestamps, and mark them as old / unverified. Merge successful sources normally.
- Apply the same partial-merge rule to payment availability: update successful wallets or campaigns independently and keep the last successful snapshot for failed sources. Do not clear the whole panel because one provider is unavailable.
- Translate or summarize operational meaning for the traveller. The source link is evidence and escalation, not a substitute for the on-page explanation.
- Treat dates carefully: publication date, effective period and trip-overlap date are different fields. Do not infer an open-ended restriction from a publication date.
- Keep slowly changing editorial facts, such as card reward rules already verified for a campaign period, separate from hourly availability checks. Do not repeatedly rewrite static recommendations from loosely parsed pages; update them only after the effective dates and eligibility rules are validated.

## Images and attachments

- Accept only declared, signature-verified JPG, PNG or WebP files with a conservative size limit.
- Store files outside the relational record, keep only a scoped object key and metadata in the database, and delete old objects after successful replacement.
- Serve private attachments with `X-Content-Type-Options: nosniff` and appropriately private caching.
- Do not permit arbitrary file URLs, SVG uploads, HTML, scripts or credential-bearing links.

## Offline export

- Offline output is a snapshot, not a second live application. Prefer a self-contained, script-free HTML document.
- Escape all user text, validate every outbound link, omit internal API routes, add a restrictive content-security policy, and label the generated time.
- Verify that the export includes all trip days and current booking / reminder status, and that it contains no active code.

## Validation

Test behavior rather than copy. High-value cases include preset merge / deletion, personal ownership, malformed input, forecast-window boundaries, freshness boundaries, missing snapshots, cross-device refresh locks, partial source failure and merge retention, stale-alert retention, safe image detection, safe-link rejection and offline export completeness.
