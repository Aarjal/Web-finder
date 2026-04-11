# Smart Web Finder

Smart Web Finder is a static web app that helps users quickly discover legitimate websites based on intent (learning, media, productivity, coding, travel, etc.).

It is designed for fast exploration: select filters, type a need, and get useful links without account walls or heavy setup.

## Problem statement

Users often know what they want to do (“edit a video”, “learn coding”, “find legal streaming”), but not which websites are reliable. Generic search engines can be noisy, repetitive, and inconsistent for this workflow.

Smart Web Finder solves this by combining:

- curated website data,
- intent-focused filters,
- typo-tolerant fallback suggestions,
- quick result navigation.

## Key features

- Keyword + filter search over `name`, `description`, and `tags`
- Grouped, collapsible filter sections for easier scanning
- Active filter chips with remove-on-click behavior
- Result breakdown by selected filter
- Fast “clear all quickly” action
- Improved no-result UX:
  - likely causes
  - alternate filter suggestions
  - typo-tolerant nearest matches
- Floating scroll helper (`↓` to results / `↑` to top)
- Optional API dataset mode with local fallback
- Caching for online dataset (localStorage, TTL)
- Local analytics counters (search count + top filters)

## Design decisions

1. Static-first architecture
	- Chosen for portability, low hosting cost, and easy judging/demo.
2. Local dataset as default
	- Guarantees app availability even without backend/network.
3. Optional online dataset
	- Allows extension when API is available, without breaking offline mode.
4. Defensive UX for no-results
	- Instead of empty dead-end screens, users are guided to recover quickly.
5. Legal-source focus
	- Streaming and content discovery sources are kept legitimate.

## Architecture

- [index.html](index.html): page structure and UI containers
- [assets/css/styles.css](assets/css/styles.css): full visual system and responsive behavior
- [assets/js/script.js](assets/js/script.js): dataset, search logic, fuzzy fallback, API/caching/analytics

## Optional API mode

By default, app uses bundled local dataset.

To enable remote dataset mode, open with query param:

`?api=https://your-endpoint/websites.json`

Expected payload format:

```json
[
  {
	 "name": "Example Site",
	 "url": "https://example.com",
	 "description": "What it does",
	 "tags": ["coding", "study"]
  }
]
```

If remote fetch fails, app falls back to cached or local dataset.

## Run locally

No build step required.

1. Clone the repository
2. Open [index.html](index.html) in browser

Or host with any static server (GitHub Pages/Netlify/Vercel static mode).

## Limitations

- Dataset is curated manually, so coverage depth can vary by category.
- Fuzzy matching is lightweight and may not always rank nearest intent perfectly.
- Analytics are local only (stored in browser), not cross-device.
- Optional API mode expects clean JSON schema and no auth flow.

## Roadmap

- Better ranking model for intent + quality scoring
- Import/export dataset editor
- More multilingual synonyms and typo handling
- Accessibility pass (keyboard patterns + contrast validation)
- Lightweight test suite for search quality regression

## Safety and content policy

This project intentionally avoids pirated/illegal sources.

- Only legitimate websites should be added.
- If a source is legally unclear, it should be excluded.

## Devlog

See [DEVLOG.md](DEVLOG.md) for before/after iteration notes and measurable UX improvements.




