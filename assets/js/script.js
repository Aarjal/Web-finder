const websites = [
	{
		name: "Netmirror",
		url: "https://netmirror.gg/2/en",
		description: "Search engine for streaming movies and TV shows across platforms. <br><br>P.S Keeps changing domain so just type '''netmirror''' in your search engine for better results",
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
		name: "CapCut",
		url: "https://www.capcut.com",
		description: "Easy online video editor with templates, subtitles, and effects.",
		tags: ["video"]
	},
	{
		name: "Canva Video",
		url: "https://www.canva.com/video-editor/",
		description: "Beginner-friendly video creator for social and presentation content.",
		tags: ["video", "study"]
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
		name: "Khan Academy",
		url: "https://www.khanacademy.org",
		description: "Free learning platform for school and college-level topics.",
		tags: ["study"]
	},
	{
		name: "Photopea",
		url: "https://www.photopea.com",
		description: "Photoshop-like editor in browser, no install required.",
		tags: ["photo"]
	},
	{
		name: "Pixlr",
		url: "https://pixlr.com",
		description: "Simple browser-based photo editing with AI tools.",
		tags: ["photo"]
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
		tags: ["developer"]
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
		tags: ["travel"]
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
let scrollArrowMode = "down";

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

function runSearch() {
	const query = queryInput.value.trim().toLowerCase();
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
		return;
	}

	if (summaryText) {
		summaryText.classList.remove("notice");
	}

	const filtered = websites.filter((site) => {
		const textMatch =
			!query ||
			site.name.toLowerCase().includes(query) ||
			site.description.toLowerCase().includes(query) ||
			site.tags.some((tag) => tag.includes(query));

		const tagMatch = !selectedTags.length || selectedTags.some((tag) => site.tags.includes(tag));

		return textMatch && tagMatch;
	});

	renderCards(filtered);
	if (suggestedGroup) {
		suggestedGroup.classList.remove("is-hidden");
		suggestedGroup.setAttribute("aria-hidden", "false");
	}
	if (scrollToResultsBtn) {
		scrollToResultsBtn.classList.remove("is-hidden");
		setScrollArrowMode("down");
	}
	if (summaryText) {
		summaryText.textContent = `Found ${filtered.length} website${filtered.length === 1 ? "" : "s"}.`;
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
	updateFilterSearchVisibility();
}

searchBtn.addEventListener("click", runSearch);
clearBtn.addEventListener("click", clearAll);

if (filterSearchBtn) {
	filterSearchBtn.addEventListener("click", runSearch);
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

updateClearSearchVisibility();
updateFilterSearchVisibility();
setScrollArrowMode("down");
