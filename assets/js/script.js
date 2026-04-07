const websites = [
  {
    name: "Canva",
    category: "design",
    pricing: "freemium",
    difficulty: "beginner",
    description: "Create graphics, posters, and presentations easily.",
    keywords: ["design", "poster", "graphics", "presentation"],
    link: "https://www.canva.com"
  },
  {
    name: "Photopea",
    category: "design",
    pricing: "free",
    difficulty: "intermediate",
    description: "Advanced online photo editor similar to Photoshop.",
    keywords: ["photo", "editing", "design", "photoshop"],
    link: "https://www.photopea.com"
  },
  {
    name: "DaVinci Resolve",
    category: "video",
    pricing: "free",
    difficulty: "advanced",
    description: "Professional video editing software.",
    keywords: ["video", "editing", "film", "color"],
    link: "https://www.blackmagicdesign.com"
  },
  {
    name: "CapCut",
    category: "video",
    pricing: "freemium",
    difficulty: "beginner",
    description: "Simple and powerful video editing tool.",
    keywords: ["video", "editing", "shorts", "tiktok"],
    link: "https://www.capcut.com"
  },
  {
    name: "Visual Studio Code",
    category: "coding",
    pricing: "free",
    difficulty: "intermediate",
    description: "Lightweight but powerful code editor.",
    keywords: ["coding", "programming", "editor", "code"],
    link: "https://code.visualstudio.com"
  },
  {
    name: "Replit",
    category: "coding",
    pricing: "freemium",
    difficulty: "beginner",
    description: "Code and run programs directly in your browser.",
    keywords: ["coding", "online", "programming", "compiler"],
    link: "https://replit.com"
  },
  {
    name: "Khan Academy",
    category: "learning",
    pricing: "free",
    difficulty: "beginner",
    description: "Free courses on math, science, and more.",
    keywords: ["learning", "study", "math", "science"],
    link: "https://www.khanacademy.org"
  },
  {
    name: "Coursera",
    category: "learning",
    pricing: "freemium",
    difficulty: "intermediate",
    description: "Online courses from top universities.",
    keywords: ["course", "learning", "university", "skills"],
    link: "https://www.coursera.org"
  },
  {
    name: "Notion",
    category: "productivity",
    pricing: "freemium",
    difficulty: "beginner",
    description: "All-in-one workspace for notes and planning.",
    keywords: ["notes", "productivity", "organize", "tasks"],
    link: "https://www.notion.so"
  },
  {
    name: "Trello",
    category: "productivity",
    pricing: "freemium",
    difficulty: "beginner",
    description: "Visual task management with boards.",
    keywords: ["tasks", "productivity", "planning", "kanban"],
    link: "https://trello.com"
  },
  {
    name: "Figma",
    category: "design",
    pricing: "freemium",
    difficulty: "intermediate",
    description: "Collaborative UI/UX design tool.",
    keywords: ["ui", "design", "ux", "prototype"],
    link: "https://www.figma.com"
  },
  {
    name: "Udemy",
    category: "learning",
    pricing: "paid",
    difficulty: "beginner",
    description: "Affordable courses on many topics.",
    keywords: ["course", "learning", "skills", "training"],
    link: "https://www.udemy.com"
  },
  {
    name: "Adobe Premiere Pro",
    category: "video",
    pricing: "paid",
    difficulty: "advanced",
    description: "Industry-standard video editing software.",
    keywords: ["video", "editing", "professional", "film"],
    link: "https://www.adobe.com"
  }
];

const elements = {
  searchInput: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  clearBtn: document.getElementById("clearBtn"),
  categoryFilter: document.getElementById("categoryFilter"),
  pricingFilter: document.getElementById("pricingFilter"),
  difficultyFilter: document.getElementById("difficultyFilter"),
  summaryText: document.getElementById("summaryText"),
  freeResults: document.getElementById("freeResults"),
  freemiumResults: document.getElementById("freemiumResults"),
  paidResults: document.getElementById("paidResults")
};

/**
 * calculateScore(): scoring logic
 * +2 keyword match, +1 category match, +1 pricing match, +1 difficulty match
 */
function calculateScore({ keywordHit, categoryHit, pricingHit, difficultyHit }) {
  let score = 0;
  if (keywordHit) score += 2;
  if (categoryHit) score += 1;
  if (pricingHit) score += 1;
  if (difficultyHit) score += 1;
  return score;
}

/**
 * generateMatchReason(): builds short reason text
 */
function generateMatchReason(reasonFlags, maxReasons = 3) {
  const reasons = [];
  if (reasonFlags.keywordHit && reasonFlags.queryText) {
    reasons.push(`Matches search: "${reasonFlags.queryText}"`);
  }
  if (reasonFlags.categoryHit) {
    reasons.push(`Category: ${toTitle(reasonFlags.category)}`);
  }
  if (reasonFlags.pricingHit) {
    reasons.push(`Pricing: ${toTitle(reasonFlags.pricing)}`);
  }
  if (reasonFlags.difficultyHit) {
    reasons.push(`Difficulty: ${toTitle(reasonFlags.difficulty)}`);
  }

  if (!reasons.length) {
    return "General match based on your selected filters.";
  }
  return reasons.slice(0, maxReasons).join(" • ");
}

/**
 * filterWebsites(): filters + scores + sorts
 */
function filterWebsites() {
  const query = elements.searchInput.value.trim();
  const queryLower = query.toLowerCase();
  const selectedCategory = elements.categoryFilter.value;
  const selectedPricing = elements.pricingFilter.value;
  const selectedDifficulty = elements.difficultyFilter.value;

  const results = [];

  // Single pass: check matches, score, collect
  for (const site of websites) {
    const keywordHit = !queryLower
      ? true
      : site.keywords.some((k) => k.toLowerCase().includes(queryLower)) ||
        site.description.toLowerCase().includes(queryLower) ||
        site.name.toLowerCase().includes(queryLower);

    const categoryHit = selectedCategory !== "all" && site.category === selectedCategory;
    const pricingHit = selectedPricing !== "all" && site.pricing === selectedPricing;
    const difficultyHit = selectedDifficulty !== "all" && site.difficulty === selectedDifficulty;

    const passesCategory = selectedCategory === "all" || categoryHit;
    const passesPricing = selectedPricing === "all" || pricingHit;
    const passesDifficulty = selectedDifficulty === "all" || difficultyHit;

    if (!(keywordHit && passesCategory && passesPricing && passesDifficulty)) continue;

    const score = calculateScore({ keywordHit: queryLower ? keywordHit : false, categoryHit, pricingHit, difficultyHit });

    const reason = generateMatchReason({
      keywordHit: queryLower ? keywordHit : false,
      categoryHit,
      pricingHit,
      difficultyHit,
      queryText: query,
      category: selectedCategory,
      pricing: selectedPricing,
      difficulty: selectedDifficulty
    });

    results.push({ ...site, score, reason, queryLower });
  }

  results.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  savePreferences();

  renderResults(results);
}

/**
 * renderResults(): render cards grouped by pricing
 */
function renderResults(results) {
  elements.freeResults.innerHTML = "";
  elements.freemiumResults.innerHTML = "";
  elements.paidResults.innerHTML = "";

  const grouped = {
    free: results.filter((r) => r.pricing === "free"),
    freemium: results.filter((r) => r.pricing === "freemium"),
    paid: results.filter((r) => r.pricing === "paid")
  };

  renderGroup(grouped.free, elements.freeResults);
  renderGroup(grouped.freemium, elements.freemiumResults);
  renderGroup(grouped.paid, elements.paidResults);

  elements.summaryText.textContent = `Found ${results.length} website${results.length === 1 ? "" : "s"}`;
}

function renderGroup(list, target) {
  if (!list.length) {
    target.innerHTML = `<p class="empty">No matching websites in this section.</p>`;
    return;
  }

  list.forEach((site) => {
    const card = document.createElement("article");
    card.className = "website-card";
    const highlightedName = highlightText(site.name, site.queryLower);
    const highlightedDescription = highlightText(site.description, site.queryLower);
    card.innerHTML = `
      <h4>${highlightedName}</h4>
      <p>${highlightedDescription}</p>
      <div class="tag-row">
        <span class="tag">${toTitle(site.category)}</span>
        <span class="tag">${toTitle(site.pricing)}</span>
        <span class="tag">${toTitle(site.difficulty)}</span>
      </div>
      <p class="meta">${toTitle(site.category)} • ${toTitle(site.difficulty)} • Score: ${site.score}</p>
      <p class="why"><strong>Why this matches you:</strong> ${site.reason}</p>
      <a class="open-link" href="${site.link}" target="_blank" rel="noopener noreferrer">Open Website</a>
    `;
    target.appendChild(card);
  });
}

function highlightText(text, queryLower) {
  if (!queryLower) return text;
  const escaped = escapeRegExp(queryLower);
  const regex = new RegExp(`(${escaped})`, "ig");
  return text.replace(regex, "<mark>$1</mark>");
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toTitle(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function clearFilters() {
  elements.searchInput.value = "";
  elements.categoryFilter.value = "all";
  elements.pricingFilter.value = "all";
  elements.difficultyFilter.value = "all";
  savePreferences();
  filterWebsites();
}

function savePreferences() {
  const prefs = {
    query: elements.searchInput.value,
    category: elements.categoryFilter.value,
    pricing: elements.pricingFilter.value,
    difficulty: elements.difficultyFilter.value
  };
  localStorage.setItem("smartWebFinderPrefs", JSON.stringify(prefs));
}

function loadPreferences() {
  const raw = localStorage.getItem("smartWebFinderPrefs");
  if (!raw) return;
  try {
    const prefs = JSON.parse(raw);
    elements.searchInput.value = prefs.query || "";
    elements.categoryFilter.value = prefs.category || "all";
    elements.pricingFilter.value = prefs.pricing || "all";
    elements.difficultyFilter.value = prefs.difficulty || "all";
  } catch (_err) {
    // Ignore invalid saved data
  }
}

elements.searchBtn.addEventListener("click", filterWebsites);
elements.clearBtn.addEventListener("click", clearFilters);
elements.searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") filterWebsites();
});

// Live search while typing
elements.searchInput.addEventListener("input", filterWebsites);

[elements.categoryFilter, elements.pricingFilter, elements.difficultyFilter].forEach((el) => {
  el.addEventListener("change", filterWebsites);
});

// Initial render
loadPreferences();
filterWebsites();