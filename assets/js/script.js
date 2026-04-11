const websites = [
	{
		name: "Reelgood",
		url: "https://reelgood.com",
		description: "Find where movies and TV shows are streaming legally across platforms.",
		tags: ["streaming", "entertainment"] 		
	},
	{
		name: "JustWatch",
		url: "https://www.justwatch.com",
		description: "Find where movies and shows are legally streaming across platforms.",
		tags: ["streaming", "entertainment"]
	},
	{
		name: "Tubi",
		url: "https://tubitv.com",
		description: "Free ad-supported legal streaming service for movies and TV.",
		tags: ["streaming", "entertainment"]
	},
	{
		name: "Pluto TV",
		url: "https://pluto.tv",
		description: "Free live channels and on-demand legal entertainment streaming.",
		tags: ["streaming", "entertainment"]
	},
	{
		name: "Plex Watch Free",
		url: "https://www.plex.tv/watch-free/",
		description: "Watch free movies and shows legally with ads.",
		tags: ["streaming", "entertainment"]
	},
	{
		name: "Amazon Freevee",
		url: "https://www.amazon.com/freevee",
		description: "Ad-supported legal streaming service for movies and TV series.",
		tags: ["streaming", "entertainment"]
	},
	{
		name: "Crackle",
		url: "https://www.crackle.com",
		description: "Free legal streaming platform with movies and series.",
		tags: ["streaming", "entertainment"]
	},
	{
		name: "The Roku Channel",
		url: "https://therokuchannel.roku.com",
		description: "Watch free movies, live channels, and TV shows legally.",
		tags: ["streaming", "entertainment"]
	},
	{
		name: "Kanopy",
		url: "https://www.kanopy.com",
		description: "Library-supported legal movie streaming platform.",
		tags: ["streaming", "entertainment", "study"]
	},
	{
		name: "CapCut",
		url: "https://www.capcut.com",
		description: "Easy online video editor with templates, subtitles, and effects.",
		tags: ["video"]
	},
	{
		name: "Canva Video",
		url: "https://www.canva.com/video-editor/",
		description: "Beginner-friendly video creator for social and presentation content.",
		tags: ["video", "study", "ai-video"]
	},
	{
		name: "InVideo AI",
		url: "https://invideo.io/ai/",
		description: "Generate videos from prompts, scripts, and templates using AI.",
		tags: ["ai-video", "video", "content", "ai"]
	},
	{
		name: "Pika",
		url: "https://pika.art",
		description: "AI video generation platform for quick text-to-video creation.",
		tags: ["ai-video", "video", "ai", "content"]
	},
	{
		name: "Luma Dream Machine",
		url: "https://lumalabs.ai/dream-machine",
		description: "Create cinematic AI videos from text and image prompts.",
		tags: ["ai-video", "video", "ai", "content"]
	},
	{
		name: "HeyGen",
		url: "https://www.heygen.com",
		description: "AI avatar video maker for explainers and presentations.",
		tags: ["ai-video", "video", "ai", "content"]
	},
	{
		name: "freeCodeCamp",
		url: "https://www.freecodecamp.org",
		description: "Full coding curriculum with projects and free certifications.",
		tags: ["coding", "study"]
	},
	{
		name: "MDN Web Docs",
		url: "https://developer.mozilla.org",
		description: "Trusted reference for HTML, CSS, JavaScript, and web APIs.",
		tags: ["coding", "study"]
	},
	{
		name: "W3Schools",
		url: "https://www.w3schools.com",
		description: "Beginner-friendly tutorials and references for web development.",
		tags: ["coding", "study"]
	},
	{
		name: "LeetCode",
		url: "https://leetcode.com",
		description: "Coding interview prep with algorithm practice problems.",
		tags: ["coding", "study"]
	},
	{
		name: "Replit",
		url: "https://replit.com",
		description: "Cloud coding environment for building and running projects quickly.",
		tags: ["coding", "developer"]
	},
	{
		name: "GitLab",
		url: "https://gitlab.com",
		description: "DevOps platform for source control, CI/CD, and collaboration.",
		tags: ["coding", "developer"]
	},
	{
		name: "Khan Academy",
		url: "https://www.khanacademy.org",
		description: "Free learning platform for school and college-level topics.",
		tags: ["study"]
	},
	{
		name: "Coursera",
		url: "https://www.coursera.org",
		description: "Online courses and certificates from universities and companies.",
		tags: ["study", "coding", "jobs"]
	},
	{
		name: "edX",
		url: "https://www.edx.org",
		description: "University-level courses and professional programs online.",
		tags: ["study", "jobs"]
	},
	{
		name: "GeeksforGeeks",
		url: "https://www.geeksforgeeks.org",
		description: "Programming tutorials, interview prep, and CS fundamentals.",
		tags: ["coding", "study"]
	},
	{
		name: "Codecademy",
		url: "https://www.codecademy.com",
		description: "Interactive coding courses for beginners and career switchers.",
		tags: ["coding", "study", "jobs"]
	},
	{
		name: "Photopea",
		url: "https://www.photopea.com",
		description: "Photoshop-like editor in browser, no install required.",
		tags: ["photo", "drawing", "design"]
	},
	{
		name: "Pixlr",
		url: "https://pixlr.com",
		description: "Simple browser-based photo editing with AI tools.",
		tags: ["photo", "drawing", "design"]
	},
	{
		name: "Excalidraw",
		url: "https://excalidraw.com",
		description: "Hand-drawn style whiteboard for diagrams, wireframes, and ideas.",
		tags: ["drawing", "design", "productivity"]
	},
	{
		name: "AutoDraw",
		url: "https://www.autodraw.com",
		description: "Quick sketching tool that guesses drawings and suggests polished icons.",
		tags: ["drawing", "design", "ai"]
	},
	{
		name: "Sketchpad",
		url: "https://sketch.io/sketchpad/",
		description: "Online drawing app with layers, brushes, and export support.",
		tags: ["drawing", "design"]
	},
	{
		name: "Aggie.io",
		url: "https://aggie.io",
		description: "Collaborative online painting and sketching board.",
		tags: ["drawing", "design", "productivity"]
	},
	{
		name: "CloudConvert",
		url: "https://cloudconvert.com",
		description: "Convert documents, videos, images, and audio formats online.",
		tags: ["converter"]
	},
	{
		name: "Smallpdf",
		url: "https://smallpdf.com",
		description: "PDF converter and tools for merge, split, and compression.",
		tags: ["converter", "study"]
	},
	{
		name: "GitHub Pages",
		url: "https://pages.github.com",
		description: "Free static website hosting directly from your GitHub repository.",
		tags: ["hosting-static", "coding"]
	},
	{
		name: "Netlify",
		url: "https://www.netlify.com",
		description: "Deploy static frontend projects quickly with CI and previews.",
		tags: ["hosting-static", "coding"]
	},
	{
		name: "Render",
		url: "https://render.com",
		description: "Host full-stack apps, APIs, and databases with free tier options.",
		tags: ["hosting-backend", "coding"]
	},
	{
		name: "Railway",
		url: "https://railway.app",
		description: "Deploy backend services and databases with a developer-friendly flow.",
		tags: ["hosting-backend", "coding"]
	},
	{
		name: "LinkedIn Jobs",
		url: "https://www.linkedin.com/jobs",
		description: "Find jobs, internships, and career opportunities with network insights.",
		tags: ["jobs"]
	},
	{
		name: "Indeed",
		url: "https://www.indeed.com",
		description: "Search millions of job listings and company reviews in one place.",
		tags: ["jobs"]
	},
	{
		name: "ChatGPT",
		url: "https://chatgpt.com",
		description: "AI assistant for writing, coding, brainstorming, and problem solving.",
		tags: ["ai", "productivity", "content"]
	},
	{
		name: "Perplexity",
		url: "https://www.perplexity.ai",
		description: "AI search and answer engine for quick research and summaries.",
		tags: ["ai", "study"]
	},
	{
		name: "Claude",
		url: "https://claude.ai",
		description: "Conversational AI for writing, analysis, and code help.",
		tags: ["ai", "productivity"]
	},
	{
		name: "Gemini",
		url: "https://gemini.google.com",
		description: "Google’s AI assistant for research, writing, and creative tasks.",
		tags: ["ai", "study"]
	},
	{
		name: "Hugging Face",
		url: "https://huggingface.co",
		description: "Open AI models, datasets, and tools for building ML applications.",
		tags: ["ai", "developer", "coding"]
	},
	{
		name: "Poe",
		url: "https://poe.com",
		description: "Multi-model AI chat platform for quick comparison and usage.",
		tags: ["ai", "productivity"]
	},
	{
		name: "Runway",
		url: "https://runwayml.com",
		description: "AI video and creative generation tools for creators.",
		tags: ["ai", "video", "content", "ai-video"]
	},
	{
		name: "Mint",
		url: "https://mint.intuit.com",
		description: "Track spending, budgets, bills, and money goals in one dashboard.",
		tags: ["finance"]
	},
	{
		name: "NerdWallet",
		url: "https://www.nerdwallet.com",
		description: "Personal finance advice for credit cards, loans, saving, and investing.",
		tags: ["finance"]
	},
	{
		name: "MyFitnessPal",
		url: "https://www.myfitnesspal.com",
		description: "Track meals, calories, and nutrition goals with ease.",
		tags: ["health"]
	},
	{
		name: "Nike Training Club",
		url: "https://www.nike.com/ntc-app",
		description: "Workout plans and guided fitness sessions for different goals.",
		tags: ["health"]
	},
	{
		name: "Notion",
		url: "https://www.notion.so",
		description: "All-in-one workspace for notes, docs, tasks, and project planning.",
		tags: ["productivity", "freelancing"]
	},
	{
		name: "Todoist",
		url: "https://todoist.com",
		description: "Simple task manager for daily planning and focus.",
		tags: ["productivity"]
	},
	{
		name: "ClickUp",
		url: "https://clickup.com",
		description: "All-in-one project and task management workspace for teams.",
		tags: ["productivity", "freelancing"]
	},
	{
		name: "Obsidian",
		url: "https://obsidian.md",
		description: "Knowledge management and note-linking app for deep work.",
		tags: ["productivity", "study"]
	},
	{
		name: "Google Calendar",
		url: "https://calendar.google.com",
		description: "Plan schedules, reminders, and events with shared calendars.",
		tags: ["productivity", "communication"]
	},
	{
		name: "Slack",
		url: "https://slack.com",
		description: "Team messaging and collaboration for work and communities.",
		tags: ["communication", "freelancing"]
	},
	{
		name: "Zoom",
		url: "https://zoom.us",
		description: "Video meetings, webinars, and remote collaboration platform.",
		tags: ["communication"]
	},
	{
		name: "Calendly",
		url: "https://calendly.com",
		description: "Schedule meetings and appointments without back-and-forth emails.",
		tags: ["communication", "freelancing"]
	},
	{
		name: "Upwork",
		url: "https://www.upwork.com",
		description: "Find freelance projects and clients across many industries.",
		tags: ["freelancing"]
	},
	{
		name: "Fiverr",
		url: "https://www.fiverr.com",
		description: "Offer and buy creative and technical freelance services.",
		tags: ["freelancing", "content"]
	},
	{
		name: "Trello",
		url: "https://trello.com",
		description: "Visual boards for managing creative and business workflows.",
		tags: ["productivity", "freelancing"]
	},
	{
		name: "Canva",
		url: "https://www.canva.com",
		description: "Create graphics, presentations, and social content quickly.",
		tags: ["design", "content"]
	},
	{
		name: "Figma",
		url: "https://www.figma.com",
		description: "Design, prototype, and collaborate on UI/UX projects.",
		tags: ["design", "developer"]
	},
	{
		name: "Coolors",
		url: "https://coolors.co",
		description: "Generate and explore color palettes for design work.",
		tags: ["design"]
	},
	{
		name: "Adobe Express",
		url: "https://www.adobe.com/express/",
		description: "Fast design tool for social posts, flyers, and brand assets.",
		tags: ["design", "content"]
	},
	{
		name: "OBS Studio",
		url: "https://obsproject.com",
		description: "Free recording and live streaming software for creators.",
		tags: ["content"]
	},
	{
		name: "GitHub",
		url: "https://github.com",
		description: "Code hosting, collaboration, issues, and project management.",
		tags: ["developer", "coding"]
	},
	{
		name: "Stack Overflow",
		url: "https://stackoverflow.com",
		description: "Q&A platform for programming problems and technical answers.",
		tags: ["developer", "coding"]
	},
	{
		name: "CodePen",
		url: "https://codepen.io",
		description: "Frontend playground for HTML, CSS, and JavaScript experiments.",
		tags: ["developer", "coding"]
	},
	{
		name: "Vercel",
		url: "https://vercel.com",
		description: "Deploy frontend apps and serverless projects quickly.",
		tags: ["developer", "hosting-static", "hosting-backend"]
	},
	{
		name: "iLovePDF",
		url: "https://www.ilovepdf.com",
		description: "PDF tools for merge, split, compress, convert, and more.",
		tags: ["utilities", "converter"]
	},
	{
		name: "OnlineOCR",
		url: "https://www.onlineocr.net",
		description: "Convert scanned images and PDFs into editable text.",
		tags: ["utilities"]
	},
	{
		name: "Google Maps",
		url: "https://maps.google.com",
		description: "Directions, nearby places, reviews, and local discovery.",
		tags: ["travel", "mapping"]
	},
	{
		name: "Google Earth",
		url: "https://earth.google.com/web/",
		description: "Explore satellite imagery, 3D terrain, and world landmarks.",
		tags: ["mapping", "travel"]
	},
	{
		name: "OpenStreetMap",
		url: "https://www.openstreetmap.org",
		description: "Community-built open map data and location lookup.",
		tags: ["mapping", "travel", "developer"]
	},
	{
		name: "Mapbox",
		url: "https://www.mapbox.com",
		description: "Map APIs and tools for building interactive location apps.",
		tags: ["mapping", "developer", "coding"]
	},
	{
		name: "Bing Maps",
		url: "https://www.bing.com/maps",
		description: "Route planning, traffic layers, and map search.",
		tags: ["mapping", "travel"]
	},
	{
		name: "Skyscanner",
		url: "https://www.skyscanner.net",
		description: "Compare flights, hotels, and travel prices.",
		tags: ["travel"]
	},
	{
		name: "Rome2Rio",
		url: "https://www.rome2rio.com",
		description: "Find routes and transport options between locations.",
		tags: ["travel"]
	},
	{
		name: "Booking.com",
		url: "https://www.booking.com",
		description: "Book hotels, stays, and travel accommodations.",
		tags: ["travel"]
	},
	{
		name: "Amazon",
		url: "https://www.amazon.com",
		description: "Large marketplace for shopping, comparison, and quick delivery.",
		tags: ["shopping"]
	},
	{
		name: "Honey",
		url: "https://www.joinhoney.com",
		description: "Find coupon codes and savings while shopping online.",
		tags: ["shopping"]
	},
	{
		name: "Google Shopping",
		url: "https://shopping.google.com",
		description: "Compare product listings and prices from multiple stores.",
		tags: ["shopping"]
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com",
		description: "Watch tutorials, creators, music videos, and live content.",
		tags: ["entertainment", "content"]
	},
	{
		name: "Spotify",
		url: "https://www.spotify.com",
		description: "Stream music, podcasts, and playlists on demand.",
		tags: ["entertainment"]
	},
	{
		name: "IMDb",
		url: "https://www.imdb.com",
		description: "Movies, series, cast details, and entertainment discovery.",
		tags: ["entertainment"]
	},
	{
		name: "Letterboxd",
		url: "https://letterboxd.com",
		description: "Track films, read reviews, and build watchlists.",
		tags: ["entertainment"]
	},
	{
		name: "Steam",
		url: "https://store.steampowered.com",
		description: "Buy, download, and manage PC games and community content.",
		tags: ["gaming"]
	},
	{
		name: "itch.io",
		url: "https://itch.io",
		description: "Indie games, game jams, and experimental titles.",
		tags: ["gaming"]
	},
	{
		name: "Epic Games Store",
		url: "https://store.epicgames.com",
		description: "Game store with free giveaways and featured releases.",
		tags: ["gaming"]
	},
	{
		name: "IGN",
		url: "https://www.ign.com",
		description: "Gaming news, reviews, walkthroughs, and media coverage.",
		tags: ["gaming"]
	}
];
const queryInput = document.getElementById("queryInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const filterSearchBtn = document.getElementById("filterSearchBtn");
const scrollToResultsBtn = document.getElementById("scrollToResultsBtn");
const resultsList = document.getElementById("resultsList");
const summaryText = document.getElementById("summaryText");
const filterContainer = document.getElementById("needFilters");
const suggestedGroup = document.getElementById("suggestedGroup");
const activeFiltersBar = document.getElementById("activeFiltersBar");
const activeFilterChips = document.getElementById("activeFilterChips");
const resultBreakdown = document.getElementById("resultBreakdown");
const clearAllQuickBtn = document.getElementById("clearAllQuickBtn");
const dataLoadState = document.getElementById("dataLoadState");
const analyticsText = document.getElementById("analyticsText");
let scrollArrowMode = "down";
let activeWebsites = [...websites];

const DATASET_CACHE_KEY = "webFinder.cachedDataset.v1";
const ANALYTICS_CACHE_KEY = "webFinder.analytics.v1";
const DATASET_CACHE_TTL_MS = 1000 * 60 * 60 * 12;
const DATASET_FETCH_TIMEOUT_MS = 7000;
const API_URL_STORAGE_KEY = "webFinder.apiUrl";

const analyticsState = {
	searches: 0,
	topFilters: {}
};

const QUERY_SYNONYMS = {
	movie: ["movies", "films", "tv", "series", "streaming"],
	movies: ["movie", "films", "tv", "series", "streaming"],
	series: ["tv", "shows", "streaming"],
	tv: ["series", "shows", "streaming"],
	coding: ["programming", "developer", "dev", "tools"],
	programming: ["coding", "developer", "dev"],
	ai: ["assistant", "llm", "chatbot"],
	fitness: ["health", "workout"],
	job: ["jobs", "career"],
	jobs: ["job", "career"],
	travel: ["trip", "booking", "flights"]
	,
	map: ["maps", "mapping", "earth", "navigation"],
	maps: ["map", "mapping", "earth", "navigation"],
	draw: ["drawing", "sketch", "illustration"],
	drawing: ["draw", "sketch", "illustration"],
	sketch: ["drawing", "draw"],
	video: ["ai-video"],
	creator: ["content", "video", "ai-video"]
};

function setDataLoadState(message, mode = "loading") {
	if (!dataLoadState) {
		return;
	}

	dataLoadState.textContent = message;
	dataLoadState.classList.remove("is-hidden", "loading", "success", "error");
	dataLoadState.classList.add(mode);
}

function hideDataLoadState() {
	if (!dataLoadState) {
		return;
	}

	dataLoadState.classList.add("is-hidden");
	dataLoadState.classList.remove("loading", "success", "error");
}

function getConfiguredApiUrl() {
	const queryApi = new URLSearchParams(window.location.search).get("api");
	if (queryApi) {
		localStorage.setItem(API_URL_STORAGE_KEY, queryApi);
		return queryApi;
	}

	const storedApi = localStorage.getItem(API_URL_STORAGE_KEY);
	return storedApi || "";
}

function normalizeRemoteDataset(raw) {
	if (!Array.isArray(raw)) {
		return [];
	}

	return raw
		.map((item) => {
			if (!item || typeof item !== "object") {
				return null;
			}

			const name = String(item.name || "").trim();
			const url = String(item.url || "").trim();
			const description = String(item.description || "").trim();
			const tags = Array.isArray(item.tags)
				? item.tags.map((tag) => String(tag || "").trim().toLowerCase()).filter(Boolean)
				: [];

			if (!name || !url || !description || !tags.length) {
				return null;
			}

			return { name, url, description, tags };
		})
		.filter(Boolean);
}

function getCachedDataset() {
	try {
		const raw = localStorage.getItem(DATASET_CACHE_KEY);
		if (!raw) {
			return [];
		}

		const parsed = JSON.parse(raw);
		if (!parsed || !Array.isArray(parsed.data) || typeof parsed.cachedAt !== "number") {
			return [];
		}

		if (Date.now() - parsed.cachedAt > DATASET_CACHE_TTL_MS) {
			return [];
		}

		return normalizeRemoteDataset(parsed.data);
	} catch {
		return [];
	}
}

function cacheDataset(data) {
	try {
		localStorage.setItem(
			DATASET_CACHE_KEY,
			JSON.stringify({
				cachedAt: Date.now(),
				data
			})
		);
	} catch {
		// Ignore storage errors.
	}
}

async function fetchRemoteDataset(apiUrl) {
	const controller = new AbortController();
	const timeoutId = window.setTimeout(() => controller.abort(), DATASET_FETCH_TIMEOUT_MS);

	try {
		const response = await fetch(apiUrl, { signal: controller.signal, cache: "no-store" });
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}

		const payload = await response.json();
		const normalized = normalizeRemoteDataset(payload);
		if (!normalized.length) {
			throw new Error("Remote dataset is empty or invalid");
		}

		return normalized;
	} finally {
		window.clearTimeout(timeoutId);
	}
}

async function initializeDataset() {
	const apiUrl = getConfiguredApiUrl();

	if (!apiUrl) {
		activeWebsites = [...websites];
		setDataLoadState("Using local dataset", "success");
		window.setTimeout(hideDataLoadState, 2200);
		return;
	}

	setDataLoadState("Loading online dataset...", "loading");

	const cached = getCachedDataset();
	if (cached.length) {
		activeWebsites = cached;
		setDataLoadState("Loaded cached online dataset", "success");
	}

	try {
		const remote = await fetchRemoteDataset(apiUrl);
		activeWebsites = remote;
		cacheDataset(remote);
		setDataLoadState("Online dataset synced", "success");
	} catch {
		if (!cached.length) {
			activeWebsites = [...websites];
			setDataLoadState("Online fetch failed — using local dataset", "error");
		} else {
			setDataLoadState("Online fetch failed — using cached dataset", "error");
		}
	}

	window.setTimeout(hideDataLoadState, 2600);
}

function loadAnalytics() {
	try {
		const raw = localStorage.getItem(ANALYTICS_CACHE_KEY);
		if (!raw) {
			return;
		}

		const parsed = JSON.parse(raw);
		if (typeof parsed.searches === "number") {
			analyticsState.searches = parsed.searches;
		}
		if (parsed.topFilters && typeof parsed.topFilters === "object") {
			analyticsState.topFilters = parsed.topFilters;
		}
	} catch {
		// Ignore storage parsing errors.
	}
}

function saveAnalytics() {
	try {
		localStorage.setItem(ANALYTICS_CACHE_KEY, JSON.stringify(analyticsState));
	} catch {
		// Ignore storage errors.
	}
}

function renderAnalytics() {
	if (!analyticsText) {
		return;
	}

	const topFilters = Object.entries(analyticsState.topFilters)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3)
		.map(([tag, count]) => `${getFilterLabel(tag)} (${count})`)
		.join(" • ");

	analyticsText.textContent = `Searches: ${analyticsState.searches}${topFilters ? ` • Top filters: ${topFilters}` : ""}`;
}

function recordSearchAnalytics(selectedTags) {
	analyticsState.searches += 1;
	selectedTags.forEach((tag) => {
		analyticsState.topFilters[tag] = (analyticsState.topFilters[tag] || 0) + 1;
	});
	saveAnalytics();
	renderAnalytics();
}

function expandQueryTerms(query) {
	if (!query) {
		return [];
	}

	const terms = query
		.toLowerCase()
		.split(/[^a-z0-9]+/)
		.filter((term) => term.length >= 2)
		.filter(Boolean);
	const expanded = new Set(terms);

	terms.forEach((term) => {
		(QUERY_SYNONYMS[term] || []).forEach((mapped) => expanded.add(mapped));
	});

	return Array.from(expanded);
}

function tokenizeText(value) {
	return (value || "")
		.toLowerCase()
		.split(/[^a-z0-9-]+/)
		.filter(Boolean);
}

function termMatchesToken(term, token) {
	if (!term || !token) {
		return false;
	}

	if (term === token) {
		return true;
	}

	if (term.length >= 4 && token.startsWith(term)) {
		return true;
	}

	return false;
}

function scoreSite(site, query, terms) {
	if (!query) {
		return 1;
	}

	const name = site.name.toLowerCase();
	const nameTokens = tokenizeText(site.name);
	const descTokens = tokenizeText(site.description.replace(/<br\s*\/?>/gi, " "));
	const tags = site.tags.map((tag) => tag.toLowerCase());
	let score = 0;

	if (nameTokens.some((token) => termMatchesToken(query, token))) {
		score += 12;
	}

	terms.forEach((term) => {
		if (nameTokens.some((token) => termMatchesToken(term, token))) {
			score += 6;
		}
		if (tags.some((tag) => termMatchesToken(term, tag))) {
			score += 5;
		}
		if (descTokens.some((token) => termMatchesToken(term, token))) {
			score += 3;
		}
	});

	return score;
}

function setScrollArrowMode(mode) {
	if (!scrollToResultsBtn) {
		return;
	}

	scrollArrowMode = mode;
	if (mode === "up") {
		scrollToResultsBtn.textContent = "↑";
		scrollToResultsBtn.setAttribute("aria-label", "Scroll to top");
	} else {
		scrollToResultsBtn.textContent = "↓";
		scrollToResultsBtn.setAttribute("aria-label", "Scroll to suggested websites");
	}
}

function updateClearSearchVisibility() {
	if (!clearSearchBtn) {
		return;
	}

	clearSearchBtn.classList.toggle("is-hidden", queryInput.value.trim().length === 0);
}

function getSelectedTags() {
	return Array.from(filterContainer.querySelectorAll("input[type='checkbox']:checked")).map((box) => box.value);
}

function updateFilterSearchVisibility() {
	if (!filterSearchBtn) {
		return;
	}

	filterSearchBtn.classList.toggle("is-hidden", getSelectedTags().length === 0);
}

function updateFilterCounts() {
	if (!filterContainer) {
		return;
	}

	const tagCounts = activeWebsites.reduce((acc, site) => {
		site.tags.forEach((tag) => {
			acc[tag] = (acc[tag] || 0) + 1;
		});
		return acc;
	}, {});

	filterContainer.querySelectorAll("label.filter-item").forEach((label) => {
		const checkbox = label.querySelector("input[type='checkbox']");
		if (!checkbox) {
			return;
		}

		const count = tagCounts[checkbox.value] || 0;
		let badge = label.querySelector(".filter-count");

		if (!badge) {
			badge = document.createElement("span");
			badge.className = "filter-count";
			badge.setAttribute("aria-hidden", "true");
			label.appendChild(badge);
		}

		badge.textContent = `(${count})`;
	});
}

function getFilterLabel(tag) {
	const checkbox = filterContainer.querySelector(`input[type='checkbox'][value='${tag}']`);
	if (!checkbox) {
		return tag;
	}

	const label = checkbox.closest("label");
	if (!label) {
		return tag;
	}

	const clone = label.cloneNode(true);
	const input = clone.querySelector("input[type='checkbox']");
	if (input) {
		input.remove();
	}
	const badge = clone.querySelector(".filter-count");
	if (badge) {
		badge.remove();
	}

	return clone.textContent.replace(/\s+/g, " ").trim() || tag;
}

function renderActiveFilters(selectedTags, items) {
	if (!activeFiltersBar || !activeFilterChips || !resultBreakdown) {
		return;
	}

	if (!selectedTags.length) {
		activeFiltersBar.classList.add("is-hidden");
		activeFilterChips.innerHTML = "";
		resultBreakdown.textContent = "";
		return;
	}

	const details = selectedTags.map((tag) => {
		const label = getFilterLabel(tag);
		const count = items.filter((site) => site.tags.includes(tag)).length;
		return { tag, label, count };
	});

	activeFilterChips.innerHTML = details
		.map(
			({ tag, label, count }) =>
				`<button type="button" class="active-chip" data-tag="${tag}" aria-label="Remove ${label} filter">${label} <span>${count}</span> ×</button>`
		)
		.join("");

	resultBreakdown.textContent = `Result count by filter: ${details
		.map(({ label, count }) => `${label} (${count})`)
		.join(" • ")}`;
	activeFiltersBar.classList.remove("is-hidden");
}

function renderCards(items) {
	if (!items.length) {
		resultsList.innerHTML = '<p class="empty">No website found. Try another keyword or filter.</p>';
		return;
	}

	resultsList.innerHTML = items
		.map(
			(item) => `
			<article class="website-card">
				<h4>${item.name}</h4>
				<p>${item.description}</p>
				<div class="tag-row">
					${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
				</div>
				<a class="open-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
			</article>
		`
		)
		.join("");
}

function levenshteinDistance(a, b) {
	const s = (a || "").toLowerCase();
	const t = (b || "").toLowerCase();
	const rows = s.length + 1;
	const cols = t.length + 1;
	const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

	for (let i = 0; i < rows; i += 1) {
		dp[i][0] = i;
	}
	for (let j = 0; j < cols; j += 1) {
		dp[0][j] = j;
	}

	for (let i = 1; i < rows; i += 1) {
		for (let j = 1; j < cols; j += 1) {
			const cost = s[i - 1] === t[j - 1] ? 0 : 1;
			dp[i][j] = Math.min(
				dp[i - 1][j] + 1,
				dp[i][j - 1] + 1,
				dp[i - 1][j - 1] + cost
			);
		}
	}

	return dp[s.length][t.length];
}

function getNearestMatches(query, limit = 4) {
	if (!query) {
		return [];
	}

	const q = query.toLowerCase().trim();
	if (!q) {
		return [];
	}

	return activeWebsites
		.map((site) => {
			const candidates = [
				site.name.toLowerCase(),
				...site.name.toLowerCase().split(/\s+/),
				...site.tags.map((tag) => tag.toLowerCase())
			];

			let bestDistance = Infinity;
			candidates.forEach((candidate) => {
				if (!candidate) {
					return;
				}
				const dist = levenshteinDistance(q, candidate);
				if (dist < bestDistance) {
					bestDistance = dist;
				}
			});

			const maxLen = Math.max(q.length, 1);
			const similarity = 1 - bestDistance / maxLen;
			return { site, similarity };
		})
		.filter((item) => item.similarity >= 0.2)
		.sort((a, b) => b.similarity - a.similarity || a.site.name.localeCompare(b.site.name))
		.slice(0, limit)
		.map((item) => item.site);
}

function getAlternateFilterSuggestions(queryTerms, selectedTags, limit = 4) {
	if (!queryTerms.length) {
		return [];
	}

	const scores = {};
	activeWebsites.forEach((site) => {
		const name = site.name.toLowerCase();
		const desc = site.description.toLowerCase();
		const matchesQuery = queryTerms.some((term) => name.includes(term) || desc.includes(term) || site.tags.some((tag) => tag.includes(term)));

		if (!matchesQuery) {
			return;
		}

		site.tags.forEach((tag) => {
			if (!selectedTags.includes(tag)) {
				scores[tag] = (scores[tag] || 0) + 1;
			}
		});
	});

	return Object.entries(scores)
		.sort((a, b) => b[1] - a[1])
		.slice(0, limit)
		.map(([tag, count]) => ({ tag, count, label: getFilterLabel(tag) }));
}

function renderNoResults(query, selectedTags, queryTerms) {
	const causes = [
		selectedTags.length > 2 ? "Too many filters selected together can block matches." : "Selected filter may be too narrow for this keyword.",
		"Keyword may be misspelled or too specific.",
		"The dataset may not include that exact website yet."
	];

	const alternateFilters = getAlternateFilterSuggestions(queryTerms, selectedTags);
	const nearestMatches = getNearestMatches(query, 4);

	resultsList.innerHTML = `
		<section class="no-results-panel">
			<h4>No exact results found</h4>
			<p>Try these quick improvements:</p>
			<ul>
				${causes.map((cause) => `<li>${cause}</li>`).join("")}
			</ul>
			<div class="no-results-actions">
				${selectedTags.length ? '<button type="button" class="secondary" data-quick-action="clear-filters">Try without filters</button>' : ""}
				${query ? '<button type="button" class="secondary" data-quick-action="clear-query">Clear keyword</button>' : ""}
			</div>
			${alternateFilters.length ? `
				<div class="suggested-filters-wrap">
					<h5>Suggested alternate filters</h5>
					<div class="suggested-filter-list">
						${alternateFilters
							.map((item) => `<button type="button" class="suggested-filter-chip" data-suggest-tag="${item.tag}">${item.label} (${item.count})</button>`)
							.join("")}
					</div>
				</div>
			` : ""}
			${nearestMatches.length ? `
				<div class="nearest-matches-wrap">
					<h5>Nearest matches (typo tolerant)</h5>
					<div class="cards-grid">
						${nearestMatches
							.map(
								(item) => `
								<article class="website-card">
									<h4>${item.name}</h4>
									<p>${item.description}</p>
									<div class="tag-row">
										${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
									</div>
									<a class="open-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
								</article>
							`
							)
							.join("")}
					</div>
				</div>
			` : ""}
		</section>
	`;
}

function runSearch() {
	const query = queryInput.value.trim().toLowerCase();
	const queryTerms = expandQueryTerms(query);
	const selectedTags = getSelectedTags();
	const noQuery = query.length === 0;
	const noFilters = selectedTags.length === 0;

	if (noQuery && noFilters) {
		if (suggestedGroup) {
			suggestedGroup.classList.add("is-hidden");
			suggestedGroup.setAttribute("aria-hidden", "true");
		}
		if (scrollToResultsBtn) {
			scrollToResultsBtn.classList.add("is-hidden");
			setScrollArrowMode("down");
		}
		if (resultsList) {
			resultsList.innerHTML = "";
		}
		if (summaryText) {
			summaryText.textContent = "Select your needs first.";
			summaryText.classList.add("notice");
		}
		renderActiveFilters([], []);
		return;
	}

	if (summaryText) {
		summaryText.classList.remove("notice");
	}

	recordSearchAnalytics(selectedTags);

	let filtered = activeWebsites
		.map((site) => {
			const tagMatch = !selectedTags.length || selectedTags.some((tag) => site.tags.includes(tag));
			const score = scoreSite(site, query, queryTerms);
			return { site, score, tagMatch };
		})
		.filter((item) => item.tagMatch && (noQuery || item.score > 0))
		.sort((a, b) => b.score - a.score || a.site.name.localeCompare(b.site.name))
		.map((item) => item.site);

	let usedFilterFallback = false;
	if (!filtered.length && selectedTags.length > 0) {
		filtered = activeWebsites.filter((site) => selectedTags.some((tag) => site.tags.includes(tag)));
		usedFilterFallback = filtered.length > 0;
	}

	if (!filtered.length) {
		renderNoResults(query, selectedTags, queryTerms);
	} else {
		renderCards(filtered);
	}
	renderActiveFilters(selectedTags, filtered);
	if (suggestedGroup) {
		suggestedGroup.classList.remove("is-hidden");
		suggestedGroup.setAttribute("aria-hidden", "false");
	}
	if (scrollToResultsBtn) {
		scrollToResultsBtn.classList.remove("is-hidden");
		setScrollArrowMode("down");
	}
	if (summaryText) {
		summaryText.textContent = usedFilterFallback
			? `No exact match for "${query}". Showing ${filtered.length} website${filtered.length === 1 ? "" : "s"} from selected filter${selectedTags.length === 1 ? "" : "s"}.`
			: filtered.length
				? `Found ${filtered.length} website${filtered.length === 1 ? "" : "s"}.`
				: `No exact result for "${query}". Showing suggestions below.`;
	}
}

function clearAll() {
	queryInput.value = "";
	filterContainer.querySelectorAll("input[type='checkbox']").forEach((box) => {
		box.checked = false;
	});
	resultsList.innerHTML = "";
	if (suggestedGroup) {
		suggestedGroup.classList.add("is-hidden");
		suggestedGroup.setAttribute("aria-hidden", "true");
	}
	if (summaryText) {
		summaryText.textContent = "Choose filters and click Search to see websites.";
		summaryText.classList.remove("notice");
	}
	if (scrollToResultsBtn) {
		scrollToResultsBtn.classList.add("is-hidden");
		setScrollArrowMode("down");
	}
	renderActiveFilters([], []);
	updateFilterSearchVisibility();
}

searchBtn.addEventListener("click", runSearch);
clearBtn.addEventListener("click", clearAll);

if (filterSearchBtn) {
	filterSearchBtn.addEventListener("click", runSearch);
}

if (clearAllQuickBtn) {
	clearAllQuickBtn.addEventListener("click", clearAll);
}

if (activeFilterChips) {
	activeFilterChips.addEventListener("click", (event) => {
		const button = event.target.closest(".active-chip");
		if (!button) {
			return;
		}

		const tag = button.getAttribute("data-tag");
		if (!tag) {
			return;
		}

		const checkbox = filterContainer.querySelector(`input[type='checkbox'][value='${tag}']`);
		if (checkbox) {
			checkbox.checked = false;
		}

		updateFilterSearchVisibility();
		runSearch();
	});
}

if (resultsList) {
	resultsList.addEventListener("click", (event) => {
		const actionButton = event.target.closest("[data-quick-action]");
		if (actionButton) {
			const action = actionButton.getAttribute("data-quick-action");
			if (action === "clear-filters") {
				filterContainer.querySelectorAll("input[type='checkbox']").forEach((box) => {
					box.checked = false;
				});
				updateFilterSearchVisibility();
				runSearch();
				return;
			}
			if (action === "clear-query") {
				queryInput.value = "";
				updateClearSearchVisibility();
				runSearch();
				return;
			}
		}

		const suggestTagButton = event.target.closest("[data-suggest-tag]");
		if (!suggestTagButton) {
			return;
		}

		const tag = suggestTagButton.getAttribute("data-suggest-tag");
		if (!tag) {
			return;
		}

		const checkbox = filterContainer.querySelector(`input[type='checkbox'][value='${tag}']`);
		if (checkbox) {
			checkbox.checked = true;
		}

		updateFilterSearchVisibility();
		runSearch();
	});
}

if (scrollToResultsBtn) {
	scrollToResultsBtn.addEventListener("click", () => {
		if (scrollArrowMode === "down") {
			suggestedGroup.scrollIntoView({ behavior: "smooth", block: "start" });
			setScrollArrowMode("up");
			return;
		}

		window.scrollTo({ top: 0, behavior: "smooth" });
		setScrollArrowMode("down");
	});
}

if (clearSearchBtn) {
	clearSearchBtn.addEventListener("click", () => {
		queryInput.value = "";
		updateClearSearchVisibility();
		queryInput.focus();
	});
}

queryInput.addEventListener("input", updateClearSearchVisibility);
filterContainer.addEventListener("change", updateFilterSearchVisibility);

queryInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		runSearch();
	}
});

async function initializeApp() {
	loadAnalytics();
	renderAnalytics();
	updateClearSearchVisibility();
	updateFilterSearchVisibility();
	setScrollArrowMode("down");
	await initializeDataset();
	updateFilterCounts();
}

initializeApp();
