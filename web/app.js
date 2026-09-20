const projects = [
  {
    slug: "orbit-aid",
    title: "Orbit Aid",
    creator: "Maya Chen, 16",
    summary: "A wearable navigation system helping visually impaired students move independently.",
    category: "Assistive Tech",
    stage: "Prototype",
    looking: ["Technical Mentor", "School Pilot"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "rewild",
    title: "Rewild",
    creator: "Leo & Nikhil, 15",
    summary: "A game that turns neighborhood biodiversity into collaborative quests.",
    category: "Climate",
    stage: "Beta",
    looking: ["Marketing", "Partners"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "loop-lab",
    title: "Loop Lab",
    creator: "Sofia Ramirez, 17",
    summary: "Modular repair kits making electronics education more circular and hands-on.",
    category: "Product",
    stage: "Launched",
    looking: ["Manufacturing", "Sponsor"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "clear-space",
    title: "Clear Space",
    creator: "Ari Patel, 14",
    summary: "A calm, private check-in tool built with and for middle school students.",
    category: "Wellbeing",
    stage: "Research",
    looking: ["Mentor", "User Research"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "second-story",
    title: "Second Story",
    creator: "Jules Park, 16",
    summary: "A youth-run media studio recording the untold stories behind local businesses.",
    category: "Media",
    stage: "Growing",
    looking: ["Partners", "Equipment"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "mesa",
    title: "Mesa",
    creator: "Noah Williams, 17",
    summary: "Low-cost sensor kits that help school gardens use less water.",
    category: "Climate",
    stage: "Prototype",
    looking: ["Pilot", "Technical Mentor"],
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1100&q=85",
  },
];

const roles = [
  ["Creators", "Build something that is yours.", "Bring an idea, find teammates, meet mentors, and start building.", "/join/creators", "↗"],
  ["Mentors", "Share what took you years to learn.", "Give young creators practical guidance and real-world perspective.", "/join/mentors", "✦"],
  ["Partners", "Open your world to the next generation.", "Give access to tools, people, challenges, and opportunities.", "/join/partners", "⌁"],
  ["Backers", "See potential early.", "Help promising projects reach their next milestone.", "/join/backers", "＋"],
];

const labCards = () => `
  <div class="lab-grid">
    <a class="lab-card idea" href="/programs/idea-lab" data-link>
      <span class="lab-number">01 / IDEA LAB</span><div class="lab-art"><span class="orb"></span></div>
      <h3>Find something worth building.</h3><p>Explore problems, test ideas, and decide what to create.</p><span class="text-link">Explore Idea Lab →</span>
    </a>
    <a class="lab-card build" href="/programs/build-lab" data-link>
      <span class="lab-number">02 / BUILD LAB</span><div class="lab-art"><span class="orb"></span></div>
      <h3>Turn your idea into something real.</h3><p>Build a team, create your first prototype, test it, and improve.</p><span class="text-link">Explore Build Lab →</span>
    </a>
    <a class="lab-card launch" href="/programs/launch-lab" data-link>
      <span class="lab-number">03 / LAUNCH LAB</span><div class="lab-art"><span class="orb"></span></div>
      <h3>Bring it into the world.</h3><p>Tell your story, find support, reach users, launch, and grow.</p><span class="text-link">Explore Launch Lab →</span>
    </a>
  </div>`;

const projectCards = (items = projects) => items.map((project) => `
  <a class="project-card" href="/showcase/${project.slug}" data-link data-category="${project.category}" data-stage="${project.stage}">
    <div class="project-image"><img src="${project.image}" alt="${project.title} project"><span class="badge">${project.stage}</span></div>
    <h3>${project.title}</h3><span class="project-by">By ${project.creator}</span>
    <p>${project.summary}</p>
    <div class="tag-list">${project.looking.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  </a>`).join("");

const roleCards = () => roles.map(([title, tagline, description, href, icon]) => `
  <a class="role-card" href="${href}" data-link><span class="role-icon">${icon}</span>
    <h3>${title}</h3><strong>${tagline}</strong><p>${description}</p><span class="text-link">Explore ${title} →</span>
  </a>`).join("");

const finalCta = () => `
  <section class="final-cta"><p class="eyebrow">YOUR MOVE</p><h2>Every big thing starts as someone's idea.<br>What's yours?</h2>
    <div><a class="button button-light" href="/start" data-link>Start a Project ↗</a> <a class="button button-outline" href="/showcase" data-link>Explore Showcase</a></div>
  </section>`;

const homePage = () => `
  <section class="hero">
    <div class="hero-media"></div><div class="floating-card"><span>Now building</span><strong>28 live projects</strong><span>across 7 schools</span></div>
    <div class="hero-content"><p class="eyebrow">NextGen Creators</p><h1>Turn your idea into something real.</h1>
      <div class="hero-intro"><div><p>NGC is a youth-led creator ecosystem where young people build real projects and connect with people who can help them go further.</p>
        <div class="hero-buttons"><a class="button button-primary" href="/start" data-link>Start a Project ↗</a><a class="button button-outline" href="/showcase" data-link>Explore Showcase</a></div></div>
        <a class="text-link" href="#creator" data-scroll="creator">Watch NGC Stories →</a></div>
      <div class="hero-note"><span class="pulse"></span> Built by young creators. For the next generation of creators.</div>
    </div>
  </section>
  <div class="ticker"><div class="ticker-track"><span>Idea</span><span>→ Team</span><span>→ Build</span><span>→ Fund</span><span>→ Launch</span><span>→ Grow</span></div></div>
  <section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">How NGC works</p><h2>From idea to launch.</h2><p>You don't need a company. You don't need experience. You just need somewhere to start.</p></div>
    <div class="journey">${[
      ["01", "Idea", "Find something worth exploring."], ["02", "Team", "Meet people who want to build."], ["03", "Build", "Make a real prototype."],
      ["04", "Fund", "Find resources and support."], ["05", "Launch", "Put it into the real world."], ["06", "Grow", "Learn, improve, keep moving."]
    ].map(([n,t,p]) => `<div class="journey-step"><span>${n}</span><h3>${t}</h3><p>${p}</p></div>`).join("")}</div></div></section>
  <section class="section" style="padding-top:20px"><div class="container"><div class="section-heading"><p class="eyebrow">Programs</p><h2>Start wherever you are.</h2><p>Whether you have a rough idea or a working prototype, NGC helps you move to the next step.</p></div>${labCards()}</div></section>
  <section class="section" id="creator"><div class="container"><div class="section-heading"><p class="eyebrow">Creator Spotlight</p><h2>Meet the creators.</h2><p>Young people aren't waiting to become creators. They're already building.</p></div>
    <div class="creator-feature"><div class="creator-image"><button class="play" type="button" data-toast="Creator story preview">▶</button></div><div class="creator-copy"><p class="eyebrow">Maya / Orbit Aid</p>
      <blockquote>“I didn't start because I knew how to build it. I started because I couldn't stop thinking about the problem.”</blockquote>
      <a class="button button-light" href="/showcase/orbit-aid" data-link>View Maya's Project →</a><div class="creator-meta"><strong>Maya Chen</strong><span>Creator · Age 16</span></div></div></div>
  </div></section>
  <section class="section"><div class="container"><div class="section-heading-row"><div class="section-heading"><p class="eyebrow">Showcase</p><h2>Built by young creators.</h2><p>Real ideas. Real prototypes. Real next steps.</p></div><a class="text-link" href="/showcase" data-link>View all projects →</a></div><div class="project-grid">${projectCards(projects.slice(0,3))}</div></div></section>
  <section class="section dark-section"><div class="container"><div class="conversation-feature"><div class="conversation-copy"><p class="eyebrow">NGC Conversations</p><h2>Young creators ask. Builders answer.</h2><p>Honest conversations with founders, engineers, investors, designers, and people building the future.</p><a class="button button-light" href="/conversations" data-link>Explore Conversations →</a></div>
    <a class="conversation-image" href="/conversations/build-at-16" data-link><div class="conversation-title"><span>New conversation · 24 min</span><h3>What would you build if you were 16 today?</h3></div></a></div></div></section>
  <section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">Join NGC</p><h2>Find your place in NGC.</h2><p>Bring an idea, experience, resources, or simply the willingness to help something move forward.</p></div><div class="role-grid">${roleCards()}</div></div></section>
  <section class="section"><div class="container ecosystem"><div class="ecosystem-copy"><p class="eyebrow">Our ecosystem</p><h2>Connected to the real world.</h2><p>We don't just teach young people how the real world works. We help them meet it.</p></div>
    <div class="ecosystem-map"><div class="ecosystem-center">YOUNG<br>CREATOR</div>${["Founders","Engineers","Designers","Startups","Universities","Mentors","Partners"].map(n => `<span class="node">${n}</span>`).join("")}</div></div></section>
  ${finalCta()}`;

const programsPage = () => `
  <section class="page-hero"><div class="container"><p class="eyebrow">Programs</p><h1>From “What if?”<br>to “It's real.”</h1><p class="lead">NGC gives young creators the structure, tools, people, and resources to move from idea to launch.</p><a class="button button-primary" href="/start" data-link>Start Your Journey ↗</a></div></section>
  <section class="section"><div class="container"><div class="lab-journey">${[
    ["01","Idea Lab","Discover · Research · Validate","Find something worth building.","/programs/idea-lab"],
    ["02","Build Lab","Team · Prototype · Test","Turn your idea into something real.","/programs/build-lab"],
    ["03","Launch Lab","Pitch · Support · Launch","Bring it into the world.","/programs/launch-lab"]
  ].map(([n,t,k,p,h]) => `<div class="lab-row"><span class="number">${n}</span><div><h3>${t}</h3><small>${k}</small></div><p>${p}</p><a class="text-link" href="${h}" data-link>Explore →</a></div>`).join("")}</div></div></section>
  <section class="section" style="background:#e8eaff"><div class="container"><div class="section-heading"><p class="eyebrow">Find your starting point</p><h2>You don't have to start at the beginning.</h2></div><div class="starting-points">
    <a class="starting-card" href="/programs/idea-lab" data-link><strong>I don't have an idea yet.</strong><span class="text-link">Start with Idea Lab →</span></a>
    <a class="starting-card" href="/programs/build-lab" data-link><strong>I know what I want to build.</strong><span class="text-link">Go to Build Lab →</span></a>
    <a class="starting-card" href="/programs/launch-lab" data-link><strong>I already have a prototype.</strong><span class="text-link">Go to Launch Lab →</span></a>
  </div></div></section>${finalCta()}`;

const labPage = (type) => {
  const data = {
    "idea-lab": ["01 / IDEA LAB", "Find something worth building.", "Turn curiosity, problems, and rough thoughts into an idea worth exploring.", "Start with an Idea", "pink", ["Notice|Find problems and opportunities.", "Explore|Research users, technology, and possible solutions.", "Validate|Talk to real people.", "Define|Turn a thought into a project direction."], ["Problem Statement","Target User","Idea Statement","Research","Validation","First Project Plan"]],
    "build-lab": ["02 / BUILD LAB", "Turn your idea into something real.", "Build the smallest real version, put it in front of people, learn, and improve.", "Start Building", "", ["Define|Decide what matters most.", "Team|Find people who add momentum.", "Prototype|Make the smallest real version.", "Test|Put it in front of people.", "Improve|Learn and make it better."], ["Team Plan","Prototype","User Feedback","Test Results","Product Story","Next Milestone"]],
    "launch-lab": ["03 / LAUNCH LAB", "Bring it into the world.", "Learn how to explain your idea, reach people, find support, and move beyond the prototype.", "Get Ready to Launch", "orange", ["Story|Explain why your work matters.", "Pitch|Make the idea clear and memorable.", "Reach|Find the people who need it.", "Support|Build the right network.", "Launch|Put it into the real world."], ["First Customer","School Pilot","Partner","Sponsor","Demo Day","Product Launch"]],
  }[type];
  return `<section class="page-hero ${data[4]}"><div class="container"><p class="eyebrow">${data[0]}</p><h1>${data[1]}</h1><p class="lead">${data[2]}</p><a class="button button-primary" href="/start" data-link>${data[3]} ↗</a></div></section>
    <section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">The process</p><h2>Make progress, one real step at a time.</h2></div><div class="journey">${data[5].map((x,i) => { const [t,p]=x.split("|"); return `<div class="journey-step"><span>0${i+1}</span><h3>${t}</h3><p>${p}</p></div>`; }).join("")}</div></div></section>
    <section class="section dark-section"><div class="container"><div class="section-heading"><p class="eyebrow">What you'll make</p><h2>Your idea becomes a project.</h2></div><div class="values-grid">${data[6].map((x,i) => `<div class="value-card" style="color:var(--ink)"><span>0${i+1}</span><h3>${x}</h3></div>`).join("")}</div></div></section>${finalCta()}`;
};

const showcasePage = () => `
  <section class="page-hero dark"><div class="container"><p class="eyebrow">Showcase</p><h1>Ideas that<br>made it real.</h1><p class="lead">Discover projects, products, and ideas created by young people — and help them go further.</p></div></section>
  <section class="section"><div class="container"><div class="filter-bar">
    <input id="project-search" type="search" aria-label="Search projects" placeholder="Search projects or creators">
    <select id="category-filter" aria-label="Filter by category"><option value="">All categories</option>${[...new Set(projects.map(p => p.category))].map(c => `<option>${c}</option>`).join("")}</select>
    <select id="stage-filter" aria-label="Filter by stage"><option value="">All stages</option>${[...new Set(projects.map(p => p.stage))].map(s => `<option>${s}</option>`).join("")}</select>
    <select aria-label="Sort projects"><option>Most recent</option><option>Stage</option><option>Project name</option></select>
  </div><div class="project-grid" id="project-results">${projectCards()}</div></div></section>${finalCta()}`;

const projectDetailPage = (slug) => {
  const project = projects.find(p => p.slug === slug) || projects[0];
  return `<section class="project-detail-hero"><div class="container"><div class="project-detail-grid"><div class="project-detail-copy"><p class="eyebrow">${project.category}</p><h1>${project.title}</h1><p class="lead">${project.summary}</p><p><strong>${project.creator}</strong> · California</p>
      <div class="hero-buttons"><button class="button button-primary" data-toast="Connection request opened">Connect with the Team ↗</button><a class="button button-outline" href="/support" data-link>Support This Project</a></div></div>
      <div class="project-detail-media"><img src="${project.image}" alt="${project.title} project prototype"></div></div>
      <div class="status-bar"><div class="status-item"><span>Stage</span><strong>${project.stage}</strong></div><div class="status-item"><span>Team</span><strong>2 creators</strong></div><div class="status-item"><span>Looking for</span><strong>${project.looking[0]}</strong></div><div class="status-item"><span>Next milestone</span><strong>School pilot</strong></div></div>
    </div></section>
    <section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">The NGC way</p><h2>From a problem to a real prototype.</h2></div><div class="story-list">${[
      ["What did you notice?","Getting around an unfamiliar school can require constant assistance for students with low vision."],
      ["What did you imagine?","A discreet, affordable wearable that gives simple directional feedback without needing a phone in hand."],
      ["What did you build?","Three working prototypes using distance sensors, haptic motors, and an adaptable wristband enclosure."],
      ["What did you learn?","The simplest feedback patterns tested best. Listening early changed the entire shape of the product."],
      ["What do you need next?",`The team is looking for ${project.looking.join(" and ").toLowerCase()} to prepare for a real-world pilot.`]
    ].map(([q,a],i) => `<div class="story-row"><span>0${i+1}</span><div><h3>${q}</h3><p>${a}</p></div></div>`).join("")}</div></div></section>
    <section class="section"><div class="container"><div class="support-panel"><div><p class="eyebrow">Help it go further</p><h2>This project's next step needs you.</h2><div class="tag-list">${["Mentor","Pilot","Sponsor","Marketing","Manufacturing"].map(t => `<span class="tag" style="color:white">${t}</span>`).join("")}</div></div><div><p>A useful introduction, one hour of feedback, or access to a test environment can unlock a major milestone.</p><button class="button button-light" data-toast="Connection request opened">Connect with the Team →</button><div class="safety-note">For projects led by minors, NGC coordinates external introductions to protect creator privacy and safety.</div></div></div></div></section>${finalCta()}`;
};

const joinPage = () => `
  <section class="page-hero pink"><div class="container"><p class="eyebrow">Join NGC</p><h1>Find your place<br>in NGC.</h1><p class="lead">Whether you have an idea, experience to share, resources to offer, or a project you believe in — there's a place for you here.</p></div></section>
  <section class="section"><div class="container"><div class="role-grid">${roleCards()}</div></div></section>${finalCta()}`;

const rolePage = (role) => {
  const content = {
    creators: ["Build something that is yours.", "Bring an idea. Find teammates. Meet mentors. Build your first version. Show it to the world.", "Start a Project", "/start", ["Start Anywhere","Learn by Building","Meet Real People","Show Your Work","Find Opportunities","Join a Team"]],
    mentors: ["Share what took you years to learn.", "Give young creators real-world feedback, practical guidance, and the confidence to keep moving.", "Become a Mentor", "/apply/mentor", ["30-Minute Session","Project Mentor","Founder Conversation","Product Feedback","Workshop","Demo Day"]],
    partners: ["Open your world to the next generation.", "Give young creators access to real tools, people, problems, and opportunities.", "Partner with NGC", "/partner", ["Office Visits","Project Sponsorship","Software / Credits","Pilot Opportunities","Workshops","Demo Day"]],
    backers: ["See potential early. Help it go further.", "Support young creators with resources, sponsorship, introductions, and opportunities that unlock the next milestone.", "Explore Projects", "/showcase", ["Project Sponsorship","Materials","Prototype Costs","Equipment","Professional Services","Introductions"]],
  }[role] || null;
  if (!content) return joinPage();
  return `<section class="page-hero dark"><div class="container"><p class="eyebrow">Join as ${role}</p><h1>${content[0]}</h1><p class="lead">${content[1]}</p><a class="button button-primary" href="${content[3]}" data-link>${content[2]} ↗</a></div></section>
    <section class="section"><div class="container role-detail"><div><p class="eyebrow">Why NGC</p><h2>Small steps.<br>Real momentum.</h2></div><div class="feature-list">${content[4].map((x,i) => `<div class="feature-item"><span>0${i+1}</span><h3>${x}</h3></div>`).join("")}</div></div></section>${finalCta()}`;
};

const conversationsPage = () => `
  <section class="page-hero dark"><div class="container"><p class="eyebrow">NGC Conversations</p><h1>Young creators ask.<br>Builders answer.</h1><p class="lead">Honest conversations about ideas, technology, mistakes, and what it really takes to build something.</p></div></section>
  <section class="section"><div class="container"><div class="conversation-grid">${[
    ["What would you build if you were 16 today?","Aisha Morgan · Founder, Fieldwork","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"],
    ["How do you know an idea is worth pursuing?","Daniel Kim · Product Designer","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"],
    ["What does a first version really need?","Priya Shah · Engineer, Startup Advisor","https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1000&q=85"],
    ["Why your mistakes become your advantage","Marcus Reid · Founder, Relay","https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"]
  ].map(([t,m,img],i) => `<a class="conversation-card" href="/conversations/${i===0?"build-at-16":"conversation"}" data-link><img src="${img}" alt=""><div><small>CONVERSATION · ${18+i*3} MIN</small><h3>${t}</h3><span>${m}</span></div></a>`).join("")}</div></div></section>`;

const conversationDetailPage = () => `
  <section class="page-hero dark"><div class="container"><p class="eyebrow">NGC Conversation · 24 min</p><h1>What would you build if you were 16 today?</h1><p class="lead">Aisha Morgan, Founder of Fieldwork · Student host: Maya Chen</p></div></section>
  <section class="section"><div class="container"><div class="creator-feature"><div class="conversation-image"><button class="play" type="button" data-toast="Video preview">▶</button></div><div class="creator-copy"><p class="eyebrow">What we learned</p><blockquote>“Don't ask whether your first idea can become a company. Ask whether it can teach you something real.”</blockquote><a class="button button-light" href="/join/mentors" data-link>Become a Mentor →</a></div></div></div></section>
  <section class="section"><div class="container"><div class="about-statement"><h2>The questions young creators actually want answered.</h2><div><p>How do you choose between ideas? What should you build first? When should you ask for help? Aisha shares the decisions and mistakes that shaped her first company.</p><a class="text-link" href="/conversations" data-link>Explore more conversations →</a></div></div></div></section>`;

const aboutPage = () => `
  <section class="page-hero orange"><div class="container"><p class="eyebrow">About NGC</p><h1>Young people shouldn't have to wait to start creating.</h1><p class="lead">NGC exists to help young people turn curiosity and imagination into real-world projects.</p></div></section>
  <section class="section"><div class="container"><div class="about-statement"><h2>Ideas need more than encouragement.</h2><div><p>Young people often have imagination and energy, but lack structure, team, guidance, resources, and access. NGC exists to close that gap.</p><p><strong>Our vision:</strong> A world where young people don't wait until adulthood to start creating.</p><p><strong>Our mission:</strong> Turn curiosity and ideas into real-world projects through building, mentorship, collaboration, and community.</p></div></div></div></section>
  <section class="section dark-section"><div class="container"><div class="section-heading"><p class="eyebrow">What we believe</p><h2>Our values show up in the work.</h2></div><div class="values-grid">${["Create Before Credentials","Learn by Building","Stay Curious","Build Together","Share What You Know","Make It Real"].map((v,i) => `<div class="value-card" style="color:var(--ink)"><span>0${i+1}</span><h3>${v}</h3></div>`).join("")}</div></div></section>
  <section class="section"><div class="container"><div class="about-statement"><h2>Built in Silicon Valley. Connected to the real world.</h2><div><p>NGC uses its proximity to one of the world's most active innovation ecosystems to create access — not exclusivity.</p><h3>We are here to open doors.</h3><p>Youth-led. Creator-driven. Adult-accountable.</p></div></div></div></section>${finalCta()}`;

const formPage = (kind = "project") => {
  const isProject = kind === "project";
  const titles = isProject ? ["First, tell us who you are.", "Where is your idea right now?", "Tell us a little about it.", "What would help you move forward?"] : ["Tell us who you are.", "Share your experience.", "How would you like to help?", "One last thing."];
  const intro = isProject ? ["What do you want to build?", "You don't need to have everything figured out. Tell us where you are, and we'll help you find the next step."] : ["Share what you know.", "Small commitment. Real impact. Help a young creator move an idea forward."];
  return `<section class="page-hero ${isProject ? "" : "pink"}"><div class="container"><p class="eyebrow">${isProject ? "Start a project" : "Mentor application"}</p><h1>${intro[0]}</h1><p class="lead">${intro[1]}</p></div></section>
    <section class="section"><div class="container form-shell"><div class="progress"><span id="form-progress" style="width:25%"></span></div><form id="multi-step-form">
      <div class="form-step active" data-step="0"><h2>${titles[0]}</h2><p>We use this to understand how best to support you.</p><div class="field-grid"><div class="field"><label for="name">Name</label><input id="name" name="name" required autocomplete="name"></div><div class="field"><label for="email">Email</label><input id="email" type="email" name="email" required autocomplete="email"></div><div class="field"><label for="location">Location</label><input id="location" name="location" placeholder="City, State"></div><div class="field"><label for="school">${isProject ? "Age / Grade" : "Role / Company"}</label><input id="school" name="school"></div></div></div>
      <div class="form-step" data-step="1"><h2>${titles[1]}</h2><p>Choose the option that feels closest.</p><div class="choice-grid">${(isProject?["Just an idea","Researching","Building","Prototype","Launched","Not sure yet"]:["Engineering","Design","Business","Marketing","Research","Other"]).map((x,i) => `<div class="choice"><input type="radio" name="stage" id="stage-${i}" value="${x}" ${i===0?"required":""}><label for="stage-${i}">${x}</label></div>`).join("")}</div></div>
      <div class="form-step" data-step="2"><h2>${titles[2]}</h2><p>Rough thoughts are welcome. You can always refine this later.</p><div class="field"><label for="idea">${isProject ? "What problem or idea are you exploring?" : "What experience would you like to share?"}</label><textarea id="idea" name="idea" required></textarea></div></div>
      <div class="form-step" data-step="3"><h2>${titles[3]}</h2><p>Select all that apply.</p><div class="choice-grid">${(isProject?["Idea Help","Teammates","Mentor","Technical Help","Design","Funding / Sponsor"]:["30-Minute Session","Project Mentor","Product Feedback","Workshop","Office Visit","Demo Day"]).map((x,i) => `<div class="choice"><input type="checkbox" name="help" id="help-${i}" value="${x}"><label for="help-${i}">${x}</label></div>`).join("")}</div></div>
      <div class="form-step success-state" data-step="4"><div class="success-icon">✓</div><h2>${isProject ? "Your idea is officially moving." : "Thanks for sharing what you know."}</h2><p>${isProject ? "We'll review your submission and help you identify a good next step." : "Our team will review your application and be in touch with a next step."}</p><a class="button button-primary" href="${isProject?"/showcase":"/"}" data-link>${isProject?"Explore the Showcase":"Back to NGC"} →</a></div>
      <div class="form-actions"><button class="button button-outline" id="form-back" type="button" hidden>Back</button><button class="button button-primary" id="form-next" type="button">Continue →</button></div>
    </form></div></section>`;
};

const partnerPage = () => `
  <section class="page-hero pink"><div class="container"><p class="eyebrow">Partner with NGC</p><h1>Open your world to the next generation.</h1><p class="lead">Give young creators access to real tools, people, problems, and opportunities.</p></div></section>
  <section class="section"><div class="container form-shell"><form id="simple-form"><div class="field-grid">
    <div class="field"><label>Organization</label><input required></div><div class="field"><label>Contact name</label><input required></div>
    <div class="field"><label>Email</label><input type="email" required></div><div class="field"><label>Organization type</label><select><option>Company</option><option>School</option><option>Nonprofit</option><option>Community</option></select></div>
    <div class="field full"><label>How would you like to partner?</label><textarea required></textarea></div>
  </div><button class="button button-primary" type="submit">Explore Partnership →</button></form></div></section>`;

const supportPage = () => `
  <section class="page-hero orange"><div class="container"><p class="eyebrow">Support NGC</p><h1>Help young ideas<br>go further.</h1><p class="lead">Support the people, tools, and opportunities that help young creators turn ideas into reality.</p></div></section>
  <section class="section"><div class="container"><div class="feature-list">${["Sponsor a Project","Sponsor a Lab","Support Demo Day","Fund Materials","Support Operations","Partner with NGC"].map((x,i) => `<a class="feature-item" href="${i===5?"/partner":"/showcase"}" data-link><span>0${i+1}</span><h3>${x}</h3></a>`).join("")}</div></div></section>${finalCta()}`;

const routes = {
  "/": homePage,
  "/programs": programsPage,
  "/showcase": showcasePage,
  "/join": joinPage,
  "/conversations": conversationsPage,
  "/about": aboutPage,
  "/start": () => formPage("project"),
  "/apply/mentor": () => formPage("mentor"),
  "/partner": partnerPage,
  "/support": supportPage,
};

function prepareStaticLinks() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    const route = link.dataset.route || link.getAttribute("href");
    if (route?.startsWith("/")) {
      link.dataset.route = route;
      link.setAttribute("href", `#${route}`);
    }
  });
}

function render() {
  const path = window.location.hash.startsWith("#/")
    ? window.location.hash.slice(1).replace(/\/$/, "") || "/"
    : "/";
  let page;
  if (routes[path]) page = routes[path]();
  else if (path.startsWith("/programs/")) page = labPage(path.split("/").pop());
  else if (path.startsWith("/showcase/")) page = projectDetailPage(path.split("/").pop());
  else if (path.startsWith("/join/")) page = rolePage(path.split("/").pop());
  else if (path.startsWith("/conversations/")) page = conversationDetailPage();
  else page = homePage();
  document.querySelector("#main").innerHTML = page;
  document.title = `${path === "/" ? "NGC" : path.split("/").filter(Boolean).pop().replaceAll("-", " ")} — NextGen Creators`;
  document.body.classList.remove("menu-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#site-header").classList.toggle("light", path !== "/");
  window.scrollTo(0, 0);
  prepareStaticLinks();
  bindPageEvents();
}

function navigate(href) {
  const nextHash = `#${href}`;
  if (window.location.hash === nextHash) {
    render();
    return;
  }
  window.location.hash = nextHash;
}

function bindPageEvents() {
  const search = document.querySelector("#project-search");
  const category = document.querySelector("#category-filter");
  const stage = document.querySelector("#stage-filter");
  const filterProjects = () => {
    const query = search.value.toLowerCase();
    const filtered = projects.filter(project =>
      `${project.title} ${project.creator} ${project.summary}`.toLowerCase().includes(query)
      && (!category.value || project.category === category.value)
      && (!stage.value || project.stage === stage.value)
    );
    document.querySelector("#project-results").innerHTML = filtered.length ? projectCards(filtered) : '<div class="filter-empty"><h3>No projects found.</h3><p>Try changing or clearing your filters.</p></div>';
    prepareStaticLinks();
  };
  search?.addEventListener("input", filterProjects);
  category?.addEventListener("change", filterProjects);
  stage?.addEventListener("change", filterProjects);

  const form = document.querySelector("#multi-step-form");
  if (form) {
    let step = 0;
    const next = form.querySelector("#form-next");
    const back = form.querySelector("#form-back");
    const update = () => {
      form.querySelectorAll(".form-step").forEach(el => el.classList.toggle("active", Number(el.dataset.step) === step));
      document.querySelector("#form-progress").style.width = `${Math.min((step + 1) * 25, 100)}%`;
      back.hidden = step === 0 || step === 4;
      next.hidden = step === 4;
      next.textContent = step === 3 ? "Submit →" : "Continue →";
    };
    next.addEventListener("click", () => {
      const active = form.querySelector(".form-step.active");
      const required = [...active.querySelectorAll("[required]")];
      if (!required.every(input => input.checkValidity())) {
        required.find(input => !input.checkValidity())?.reportValidity();
        return;
      }
      step += 1;
      update();
    });
    back.addEventListener("click", () => { step -= 1; update(); });
  }

  document.querySelector("#simple-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Thanks — our partnerships team will be in touch.");
    event.target.reset();
  });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (link) {
    event.preventDefault();
    navigate(link.dataset.route);
  }
  const scrollTrigger = event.target.closest("[data-scroll]");
  if (scrollTrigger) {
    event.preventDefault();
    document.querySelector(`#${scrollTrigger.dataset.scroll}`)?.scrollIntoView({ behavior: "smooth" });
  }
  const toastTrigger = event.target.closest("[data-toast]");
  if (toastTrigger) showToast(toastTrigger.dataset.toast);
});
document.querySelector(".menu-toggle").addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(open));
});
window.addEventListener("hashchange", () => {
  if (window.location.hash.startsWith("#/")) render();
});
window.addEventListener("scroll", () => document.querySelector("#site-header").classList.toggle("scrolled", window.scrollY > 30));
render();
