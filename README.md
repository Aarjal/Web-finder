# Smart Web Finder

Smart Web Finder is a static website discovery tool that helps users find legitimate websites by intent, such as learning, media, coding, productivity, travel, and more.

It is built for quick exploration: select what you need, search a keyword, and get curated results with minimal friction.

## Problem statement

Users often know what task they want to do, but not which websites are best for it. Generic search engines can be noisy and inconsistent, especially when users want a fast shortlist of useful sites.

Smart Web Finder solves this by combining curated website data with clear filters, relevance scoring, and recoverable no-result handling.

## Key features

- Keyword search across website name, description, and tags
- Grouped, collapsible filter sections for easier scanning
- Filter count badges showing how many sites exist per category
- Active filter chips with one-click removal
- Result breakdown by selected filter
- Clear search button inside the search field
- Clear all quickly action in the results area
- Typo-tolerant nearest-match suggestions when exact results are missing
- Helpful no-result panel with likely causes and alternate filters
- Floating scroll helper (`↓` to results, `↑` back to top)
- Optional remote dataset mode with local fallback and caching
- Local analytics counters for searches and top filters

## Filter coverage

Current categories include:

- Movies & Series
- Video Editing
- AI Video Makers
- Learning Coding
- Study Materials
- Jobs & Career
- AI Tools
- Money & Finance
- Health & Fitness
- Productivity
- Communication
- Freelancing & Business
- Content Creation
- Developer Tools
- Design
- Drawing Tools
- File Utilities
- Travel & Local
- Mapping
- Shopping & Deals
- Entertainment
- Gaming
- Photo Editing
- Document/File Converter
- Free Web Hosting (HTML/CSS/JS)
- Free Web Hosting (with backend)

## Design decisions

- Static-first architecture for portability and easy deployment.
- Curated dataset for quality control and legal compliance.
- Optional API mode to support future expansion without breaking offline use.
- No-result recovery UI instead of a dead-end message.
- Grouped filters so the interface is easier to scan and less overwhelming.

## Project structure

- [index.html](index.html) — app layout, filter groups, active chips, and result containers
- [assets/css/styles.css](assets/css/styles.css) — full visual system and responsive behavior
- [assets/js/script.js](assets/js/script.js) — search logic, typo tolerance, API/cache mode, analytics, and dataset
- [DEVLOG.md](DEVLOG.md) — before/after iteration notes and improvements

## Running locally

No install or build step is required.

1. Clone or download the repository
2. Open [index.html](index.html) in a browser

Or deploy the folder as a static site on GitHub Pages, Netlify, or similar.

## Optional API mode

The app supports an optional remote dataset.

Use a query parameter like:

`?api=https://your-endpoint/websites.json`

Expected JSON shape:

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

If the remote request fails, the app falls back to cached or local data.

## Limitations

- The dataset is curated manually, so category depth can vary.
- Fuzzy matching is lightweight, not a full semantic search engine.
- Analytics are stored locally in the browser only.
- Remote API mode expects clean JSON and no auth flow.

## Safety and policy

This project intentionally avoids pirated or illegal sources.

- Only legitimate websites should be added.
- If a source is legally unclear, it should not be included.

## Roadmap

- Better ranking for intent and relevance
- More typo-tolerant matching
- Dataset import/export tools
- Accessibility refinement
- Automated search-quality regression tests

## Devlog

See [DEVLOG.md](DEVLOG.md) for detailed iteration notes and measurable improvements.




