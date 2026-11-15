const tools = [
  {
    name: "Copy.ai",
    link: "https://www.copy.ai",
    icon: "https://logo.clearbit.com/copy.ai",
    keywords: "content writing, marketing, AI, video generator, video editing, commertial ad, video, writing",
    description: "AI tool for generating marketing copy and content ideas."
  },
  {
    name: "Grammarly",
    link: "https://www.grammarly.com",
    icon: "https://avatars.githubusercontent.com/u/352781?s=200&v=4",
    keywords: "grammar, proofreading, clarity, writing assistant, text corrector, paragraph writer, assignment",
    description: "Grammarly improves your writing by checking grammar, tone, and clarity in real-time."
  },
  {
    name: "Notion AI",
    link: "https://www.notion.so/product/ai",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    keywords: "notes, productivity, writing, task automation, note-taking, project management, knowledge management, task tracking, and team collaboration",
    description: "Notion AI helps you draft documents, summarize notes, and manage tasks with AI."
  },
  {
    name: "Leonardo AI",
    link: "https://leonardo.ai",
    icon: "https://avatars.githubusercontent.com/u/115455698?s=200&v=4",
    keywords: "AI art, gaming assets, illustrations, realtime canvas, motion video, ai image generator, video image upscalar, model creator, design, logo, image, photo",
    description: "Leonardo AI generates detailed game assets and concept art from descriptions."
  },
  {
    name: "Suno Al",
    link: "https://suno.com",
    icon: "https://avatars.githubusercontent.com/u/99442120?s=200&v=4",
    keywords: "Al Music Generator, Text-to-Music, Song Creation, Generative Al, Vocal Synthesis, Instrumental Generation, Music Production, Creative Tools, song",
    description: "Suno Al is a tool that lets you create full songs with vocals and music just by typing what you want.",
  },
  {
    name: "Craiyon (formerly DALL·E Mini)",
    link: "https://www.craiyon.com",
    icon: "https://www.craiyon.com/favicon.ico",
    keywords: "image generation, cartoon, simple prompts, ai art, text prompt, image, photo",
    description: "Craiyon is a free image generator for fun and fast prompt-based artwork."
  },
  {
    name: "Speechma Al",
    link: "https://speechma.com",
    icon: "https://speechma.com/assets/images/speechmalogo.svg",
    keywords: "Text-to-Speech, Al Voice Generator, Free TTS, Natural-Sounding Voices, Voiceover Tool, Multilingual Al Voices, Speech Synthesis, Commercial Use, voice",
    description: "Speechma AI is a free tool that turns text into natural-sounding speech in many languages."
  },
  {
    name: "Descript",
    link: "https://www.descript.com",
    icon: "https://avatars.githubusercontent.com/u/31518792?s=200&v=4",
    keywords: "podcast editing, video, voice AI, editing, audio to video, generating video, text to speech, pricing, audio",
    description: "Descript offers AI tools for editing podcasts and videos, including voice cloning."
  },
  {
    name: "Pictory",
    link: "https://pictory.ai",
    icon: "https://pictory.ai/wp-content/uploads/2022/08/logo-new-font-TM.png",
    keywords: "video editing, AI script to video, social content, text to video generator, branded video, pricing, video, reels",
    description: "Pictory transforms scripts or blog posts into professional-looking videos."
  },
  {
    name: "Runway ML",
    link: "https://runwayml.com",
    icon: "https://avatars.githubusercontent.com/u/37351293?s=200&v=4",
    keywords: "video generation, green screen, creative tools, video create, video, editing",
    description: "Runway offers advanced AI video tools like object removal and motion tracking."
  },
  {
    name: "GitHub Copilot",
    link: "https://github.com/features/copilot",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryYL3fqwuwksu3vK_HCjyof0KXxYtJZhtJZbVRgynjAC8i_94n_D5-Dk&s",
    keywords: "code assistant, autocomplete, programming, coding",
    description: "Copilot suggests code and functions in real-time as you type in your IDE."
  },
  {
    name: "ChatGPT",
    link: "https://chat.openai.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    keywords: "chatbot, language, AI, assistant, image generator, multipurpose",
    description: "A powerful AI chatbot developed by OpenAI."
  },
  {
    name: "Google Gemini",
    link: "https://gemini.google.com",
    icon: "https://camo.githubusercontent.com/77ba4ba362fc39151379e4e7691125c8bb130eb2ade811ce9f76d4d5236c6847/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f662f66302f476f6f676c655f426172645f6c6f676f2e7376672f3132303070782d476f6f676c655f426172645f6c6f676f2e7376672e706e67",
    keywords: "research, summarizing, chat, coding, assistant, ai, multipurpose",
    description: "Gemini helps with searching, coding, and answering questions using Google's AI."
  },
  {
    name: "Character AI",
    link: "https://character.ai",
    icon: "https://avatars.githubusercontent.com/u/163601952?s=200&v=4",
    keywords: "name generator, ai promt maker, ai charactor creation, video editing, chatbot creating, generator, marketing ad, video",
    description: "Character Ai is an AI-powered platform that lets users chat with customizable virtual characters for entertainment, education, or companionship."
  },
  {
    name: "KREA AI",
    link: "https://www.krea.ai",
    icon: "https://avatars.githubusercontent.com/u/108735617?s=200&v=4",
    keywords: "image generator, image, logo, design, ai, text to image, video enhancer, upscalar, video",
    description: "Krea makes generative AI intuitive. Generate, edit, and enhance images and videos using powerful AI for free."
  },
  {
    name: "Perplexity AI",
    link: "https://www.perplexity.ai",
    icon: "https://avatars.githubusercontent.com/ml/19346?s=400&v=4",
    keywords: "chatbot, assistant, chat, natural language processing, search engine, ai",
    description: "Perplexity AI is an AI-powered search engine that delivers accurate, real-time answers with cited sources.",
  },
  {
    name: "Gamma Al",
    link: "https://gamma.app",
    icon: "https://avatars.githubusercontent.com/u/74479688?s=200&v=4",
    keywords: "Al Presentation Tool, Al Document Creator, Al Website Builder, No-Code Design, Generative Al, Business Communication, Productivity, Visual Storytelling, ppt, video",
    description: "Gamma Al is an Al-powered platform that enables users to create visually engaging presentations, documents, and websites in seconds-no design or coding skills required.",
  },
  {
    name: "Microsoft Designer",
    link: "https://designer.microsoft.com",
    icon: "https://designer.microsoft.com/static/media/designer-app-logo.c270ec3147032a913024e7fa63cff2aa.svg",
    keywords: "Al Graphic Design, Generative Al, Text-to-Image, Photo Editing, Visual Storytelling, Microsoft 365 Integration, No-Code Design, Templates, image",
    description: "Microsoft Designer is an Al-powered graphic design tool that enables users to create stunning visuals, social media posts, invitations, and more by simply describing their ideas in text.",
  },
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const searchBtn = document.getElementById('searchBtn');
const toolsGrid = document.getElementById('toolsGrid');
const resultsGrid = document.getElementById('resultsGrid');
const searchView = document.getElementById('searchView');
const resultsView = document.getElementById('resultsView');
const detailView = document.getElementById('detailView');
const backBtnResults = document.getElementById('backBtnResults');
const backBtnDetail = document.getElementById('backBtnDetail');

// Tool detail elements
const toolName = document.getElementById('toolName');
const toolIcon = document.getElementById('toolIcon');
const toolDescription = document.getElementById('toolDescription');
const toolKeywords = document.getElementById('toolKeywords');
const toolLink = document.getElementById('toolLink');

let previousView = null;

// Initialize the app
function init() {
  renderTools(toolsGrid, tools);
  setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
  searchInput.addEventListener('input', handleSearchInput);
  clearBtn.addEventListener('click', handleClearSearch);
  searchBtn.addEventListener('click', handleSearch);
  backBtnResults.addEventListener('click', goBackToSearch);
  backBtnDetail.addEventListener('click', goBackToPreviousView);
  
  // Also allow Enter key to trigger search
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
}

// Create tool card element
function createToolCard(tool) {
  const card = document.createElement('div');
  card.className = 'tool-card fade-in';
  card.onclick = () => showToolDetail(tool);

  const icon = document.createElement('img');
  icon.src = tool.icon;
  icon.alt = `${tool.name} icon`;
  icon.className = 'tool-icon';
  icon.onerror = () => {
    icon.src = 'https://via.placeholder.com/70';
    icon.alt = 'Placeholder icon';
  };

  const info = document.createElement('div');
  info.className = 'tool-info';
  info.innerHTML = `
    <h3>${tool.name}</h3>
    <p>${tool.description}</p>
  `;

  const container = document.createElement('div');
  container.className = 'tool-icon-container';
  container.appendChild(icon);

  card.appendChild(container);
  card.appendChild(info);

  return card;
}

// Show tool details
function showToolDetail(tool) {
  toolName.textContent = tool.name;
  toolDescription.textContent = tool.description;
  toolKeywords.textContent = `Keywords: ${tool.keywords}`;
  toolLink.href = tool.link;
  
  // Set icon with error handling
  toolIcon.src = tool.icon;
  toolIcon.alt = `${tool.name} icon`;
  toolIcon.onerror = () => {
    toolIcon.src = 'https://via.placeholder.com/100';
    toolIcon.alt = 'Placeholder icon';
  };

  previousView = document.querySelector('.view.active');
  toggleView(detailView);
}

// Toggle between views
function toggleView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  view.classList.add('active');
}

// Go back to search view
function goBackToSearch() {
  toggleView(searchView);
}

// Go back to previous view
function goBackToPreviousView() {
  if (previousView) {
    toggleView(previousView);
  } else {
    toggleView(searchView);
  }
}

// Handle search input changes
function handleSearchInput() {
  clearBtn.style.display = searchInput.value ? 'flex' : 'none';
  
  // If search is empty, show all tools
  if (!searchInput.value.trim()) {
    renderTools(toolsGrid, tools);
  }
}

// Clear search input
function handleClearSearch() {
  searchInput.value = '';
  clearBtn.style.display = 'none';
  renderTools(toolsGrid, tools);
}

// Handle search
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (!query) {
    renderTools(toolsGrid, tools);
    return;
  }

  const queryWords = query.split(' ').filter(Boolean);

  const results = tools.filter(tool => {
    const toolText = `${tool.name} ${tool.keywords} ${tool.description}`.toLowerCase();
    return queryWords.every(word => toolText.includes(word));
  });

  resultsGrid.innerHTML = '';
  renderTools(resultsGrid, results);
  toggleView(resultsView);
}

// Render tools to a container
function renderTools(container, toolsArray) {
  container.innerHTML = '';
  
  if (toolsArray.length === 0) {
    container.innerHTML = '<p>No tools found. Try a different search term.</p>';
    return;
  }

  toolsArray.forEach(tool => {
    container.appendChild(createToolCard(tool));
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);