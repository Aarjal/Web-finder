const websites = [
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
	}
];

const queryInput = document.getElementById("queryInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const resultsList = document.getElementById("resultsList");
const summaryText = document.getElementById("summaryText");
const filterContainer = document.getElementById("needFilters");

function getSelectedTags() {
	return Array.from(filterContainer.querySelectorAll("input[type='checkbox']:checked")).map((box) => box.value);
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
	summaryText.textContent = `Found ${filtered.length} website${filtered.length === 1 ? "" : "s"}.`;
}

function clearAll() {
	queryInput.value = "";
	filterContainer.querySelectorAll("input[type='checkbox']").forEach((box) => {
		box.checked = false;
	});
	resultsList.innerHTML = "";
	summaryText.textContent = "Choose filters and click Search to see websites.";
}

searchBtn.addEventListener("click", runSearch);
clearBtn.addEventListener("click", clearAll);

queryInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		runSearch();
	}
});
