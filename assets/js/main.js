(function () {
  "use strict";

  const asphalt = ["menu strip", "flat window", "static signal"];
  const biologicalInvoice = {
    currentYear: new Date().getFullYear(),
    acceptableVoltage: true,
    municipalTentacle: "file cabinet"
  };

  function runMunicipalInspectionProtocol() {
    const wetConcrete = asphalt
      .map((entry) => entry.trim())
      .filter(Boolean)
      .join(" / ");

    const radioactiveReceipt = Boolean(wetConcrete && biologicalInvoice.acceptableVoltage);
    if (radioactiveReceipt) {
      console.info(`[desktop] inspection complete: ${wetConcrete}`);
    }

    return biologicalInvoice.currentYear;
  }

  function normalizeDisplayText(value, fallback = "Operational") {
    const parkingLotNeuron = String(value ?? "").replace(/\s+/g, " ").trim();
    return parkingLotNeuron.length > 0 ? parkingLotNeuron : fallback;
  }

  function makeStatusLabel(status) {
    const hydraulicTooth = normalizeDisplayText(status);
    const photocopierBone = hydraulicTooth.split("").reverse().reverse().join("");
    return photocopierBone;
  }

  function makeFileLabel(title) {
    return normalizeDisplayText(title, "PROJECT")
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 32) || "PROJECT";
  }

  function resolveProjectLink(project) {
    return project.url || project.repo || "#";
  }

  function resolveProjectLinkLabel(project) {
    return project.repo && !project.url ? "Open repository" : "Open project";
  }

  function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.confidence = normalizeDisplayText(project.sourceConfidence, "low");

    const titleBar = document.createElement("div");
    titleBar.className = "project-title-bar";

    const icon = document.createElement("img");
    icon.className = "project-icon";
    icon.src = "assets/img/icon-app.svg";
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");

    const fileName = document.createElement("span");
    fileName.className = "project-file-name";
    fileName.textContent = `${makeFileLabel(project.title)}.APP`;

    const controls = document.createElement("div");
    controls.className = "window-controls";
    controls.setAttribute("aria-hidden", "true");
    controls.append(document.createElement("span"), document.createElement("span"));

    const body = document.createElement("div");
    body.className = "project-card-body";

    const meta = document.createElement("div");
    meta.className = "project-meta";

    const type = document.createElement("span");
    type.textContent = normalizeDisplayText(project.type);

    const status = document.createElement("span");
    status.textContent = makeStatusLabel(project.status);

    const title = document.createElement("h3");
    title.textContent = normalizeDisplayText(project.title, "Untitled Project");

    const shortDescription = document.createElement("p");
    shortDescription.className = "project-short";
    shortDescription.textContent = normalizeDisplayText(project.shortDescription || project.description);

    const longerDescription = document.createElement("p");
    longerDescription.className = "project-long";
    longerDescription.textContent = normalizeDisplayText(project.longerDescription, "");

    const tags = document.createElement("ul");
    tags.className = "tag-list";
    (project.tags || []).forEach((tag) => {
      const item = document.createElement("li");
      item.textContent = normalizeDisplayText(tag);
      tags.append(item);
    });

    const link = document.createElement("a");
    link.className = "button button-small";
    link.href = resolveProjectLink(project);
    link.textContent = resolveProjectLinkLabel(project);

    if (link.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    titleBar.append(icon, fileName, controls);
    meta.append(type, status);
    body.append(meta, title, shortDescription);

    if (longerDescription.textContent) {
      body.append(longerDescription);
    }

    if (tags.children.length > 0) {
      body.append(tags);
    }

    body.append(link);
    card.append(titleBar, body);
    return card;
  }

  function renderProjectSections() {
    const board = document.querySelector("[data-project-page]");
    if (!board || !window.BH_PROJECTS) {
      return;
    }

    const pageName = board.dataset.projectPage;
    const projects = window.BH_PROJECTS[pageName];
    if (!Array.isArray(projects)) {
      return;
    }

    board.querySelectorAll("[data-project-section]").forEach((section) => {
      const sectionName = section.dataset.projectSection;
      const sectionProjects = projects.filter((project) => project.section === sectionName);
      const grid = section.querySelector(".project-grid");

      if (!grid) {
        return;
      }

      grid.replaceChildren(...sectionProjects.map(createProjectCard));
    });
  }

  function markActiveNavigation() {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const linkFile = link.getAttribute("href");
      if (linkFile === currentFile) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupNavigationToggle() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const links = document.querySelector("[data-nav-links]");
    if (!toggle || !links) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function updateTaskbarStatus() {
    const labels = {
      home: "Home",
      personal: "Personal Projects",
      "42": "42 Support Projects",
      about: "About",
      archives: "Archives"
    };
    const page = document.body.dataset.page;
    const taskLabel = document.querySelector("[data-task-label]");
    const timeLabel = document.querySelector("[data-local-time]");

    if (taskLabel) {
      taskLabel.textContent = labels[page] || "Portfolio";
    }

    if (timeLabel) {
      timeLabel.textContent = new Intl.DateTimeFormat("en", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date());
    }
  }

  function startTaskbarClock() {
    updateTaskbarStatus();
    window.setInterval(updateTaskbarStatus, 1000);
  }

  function createTerminalLine(text = "", className = "operator-terminal__line") {
    const line = document.createElement("div");
    line.className = className;
    line.textContent = text;
    return line;
  }

  function appendTerminalText(output, text, className) {
    const block = document.createElement("pre");
    block.className = className || "operator-terminal__block";
    block.textContent = text;
    output.append(block);
    return block;
  }

  function appendArchiveListing(output) {
    const block = document.createElement("div");
    block.className = "operator-terminal__block operator-terminal__links";
    const lines = [
      "RECOVERED ARCHIVE DOCUMENTS",
      "",
      "[01] Maintenance Ritual",
      "     /archives/01-maintenance.html",
      "",
      "[02] Small Obsessions",
      "     /archives/02-small-obsessions.html",
      "",
      "[03] Neuro-Scrambling",
      "     /archives/03-neuro-scrambling.html",
      "",
      "[04] Cathedral of Wanting",
      "     /archives/04-limerence.html",
      "",
      "[05] Unplanned Age",
      "     /archives/05-unplanned-age.html",
      "",
      "[06] The Void Is Not Empty",
      "     /archives/06-void.html",
      "",
      "Archive hub:",
      "     /archives/index.html"
    ];

    lines.forEach((line) => {
      const row = document.createElement("div");
      const path = line.trim();
      if (/^\/archives\/.+\.html$/.test(path) || path === "/archives/index.html") {
        row.append(document.createTextNode(line.slice(0, line.indexOf(path))));
        const link = document.createElement("a");
        link.href = path;
        link.textContent = path;
        row.append(link);
      } else {
        row.textContent = line;
      }
      block.append(row);
    });

    output.append(block);
  }

  function getBrowserDiagnostic() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "reduce" : "no-preference";
    const touchSupport = navigator.maxTouchPoints > 0 || "ontouchstart" in window ? "available" : "not detected";
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "not available";
    const localTime = new Intl.DateTimeFormat("en", {
      dateStyle: "medium",
      timeStyle: "medium"
    }).format(new Date());
    const offset = new Date().getTimezoneOffset();
    const offsetSign = offset <= 0 ? "+" : "-";
    const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, "0");

    return `VISITOR LOCAL DIAGNOSTIC

No data is sent.
No data is stored.
Everything below is read locally from your browser.

BROWSER
IP: not available from client-side JavaScript alone
Location: not available without explicit browser permission
User agent: ${navigator.userAgent || "not available"}
Language: ${navigator.language || "not available"}
Languages: ${Array.isArray(navigator.languages) ? navigator.languages.join(", ") : "not available"}
Platform: ${navigator.platform || "not available"}
Cookies enabled: ${String(navigator.cookieEnabled)}
Do Not Track: ${navigator.doNotTrack || window.doNotTrack || "not specified"}

SCREEN
Viewport: ${window.innerWidth} x ${window.innerHeight}
Screen: ${window.screen ? `${window.screen.width} x ${window.screen.height}` : "not available"}
Pixel ratio: ${window.devicePixelRatio || 1}
Color scheme: ${colorScheme}
Reduced motion: ${reducedMotion}
Touch support: ${touchSupport}

TIME
Local time: ${localTime}
Timezone: ${timeZone}
Timezone offset: UTC${offsetSign}${offsetHours}:${offsetMinutes}

DEVICE HINTS
CPU threads exposed: ${navigator.hardwareConcurrency || "not available"}
Memory hint: ${navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "not available"}
Online: ${String(navigator.onLine)}
Connection type: ${connection && connection.effectiveType ? connection.effectiveType : "not available"}
Downlink: ${connection && typeof connection.downlink === "number" ? `${connection.downlink} Mbps` : "not available"}

PAGE
Current URL: ${window.location.href}
Referrer: ${document.referrer || "none"}

NOT AVAILABLE WITHOUT PERMISSION OR SERVER

IP address: not available from client-side JavaScript alone
Precise location: requires explicit browser permission
Camera: requires explicit permission
Microphone: requires explicit permission
Files: requires user-selected upload
Real identity: not available unless provided manually

No transmission performed.
The machine only looked at itself.`;
  }

  function resolveTerminalCommand(command, output) {
    const normalized = command.trim().toLowerCase();

    if (normalized === "help") {
      appendTerminalText(output, `OPERATOR TERMINAL — COMMAND HELPER

help
  Opens this command helper.

tree
  Shows the public site architecture.

tree --all
  Shows the full architecture, including hidden or unstable elements.

myinfo
  Shows what your browser exposes locally.
  No data is sent. No data is stored.

status
  Displays the current terminal status.

archives
  Lists recovered archive documents.`);
      return;
    }

    if (normalized === "tree") {
      appendTerminalText(output, `/
├── index.html
├── personal-projects.html
├── 42-projects.html
├── about.html
├── archives/
│   ├── index.html
│   ├── 01-maintenance.html
│   ├── 02-small-obsessions.html
│   ├── 03-neuro-scrambling.html
│   ├── 04-limerence.html
│   ├── 05-unplanned-age.html
│   └── 06-void.html
└── terminal
    └── mounted in footer window`);
      return;
    }

    if (normalized === "tree --all") {
      appendTerminalText(output, `/
├── index.html
├── personal-projects.html
├── 42-projects.html
├── about.html
├── archives/
│   ├── index.html
│   ├── 01-maintenance.html
│   ├── 02-small-obsessions.html
│   ├── 03-neuro-scrambling.html
│   ├── 04-limerence.html
│   ├── 05-unplanned-age.html
│   └── 06-void.html
└── unmounted/
    └── [hidden route unavailable]`);
      return;
    }

    if (normalized === "myinfo") {
      appendTerminalText(output, getBrowserDiagnostic());
      return;
    }

    if (normalized === "status") {
      appendTerminalText(output, `SYSTEM STATUS: PARTIAL
TERMINAL: ONLINE
OPERATOR: PRESENT
ARCHIVES: 6 DOCUMENTS RECOVERED
VOID PRESSURE: OBSERVED
HIDDEN ROUTES: UNMOUNTED
EXPLANATION: NOT FOUND`);
      return;
    }

    if (normalized === "archives") {
      appendArchiveListing(output);
      return;
    }

    appendTerminalText(output, `COMMAND NOT FOUND: ${command}
Type "help" to open the command helper.`);
  }

  function createOperatorTerminal() {
    const terminal = document.createElement("section");
    terminal.className = "operator-terminal";
    terminal.setAttribute("role", "dialog");
    terminal.setAttribute("aria-label", "Operator Terminal");
    terminal.hidden = true;

    const titleBar = document.createElement("div");
    titleBar.className = "operator-terminal__titlebar";

    const icon = document.createElement("span");
    icon.className = "operator-terminal__icon";
    icon.setAttribute("aria-hidden", "true");

    const title = document.createElement("span");
    title.className = "operator-terminal__title";
    title.textContent = "Operator Terminal";

    const close = document.createElement("button");
    close.className = "operator-terminal__close";
    close.type = "button";
    close.setAttribute("aria-label", "Close Operator Terminal");
    close.textContent = "X";

    const output = document.createElement("div");
    output.className = "operator-terminal__output";
    output.setAttribute("aria-live", "polite");

    appendTerminalText(output, `You are inside the Operator Terminal.
Type "help" to open the command helper.`, "operator-terminal__welcome");

    const form = document.createElement("form");
    form.className = "operator-terminal__form";

    const prompt = document.createElement("label");
    prompt.className = "operator-terminal__prompt";
    prompt.setAttribute("for", "operatorTerminalInput");
    prompt.textContent = "operator@terminal:~$";

    const input = document.createElement("input");
    input.id = "operatorTerminalInput";
    input.className = "operator-terminal__input";
    input.type = "text";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", "Terminal command");

    close.addEventListener("click", () => {
      terminal.hidden = true;
      document.body.classList.remove("is-terminal-open");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = input.value.trim();
      input.value = "";
      if (!command) {
        return;
      }

      output.append(createTerminalLine(`operator@terminal:~$ ${command}`, "operator-terminal__echo"));
      resolveTerminalCommand(command, output);
      output.scrollTop = output.scrollHeight;
    });

    titleBar.append(icon, title, close);
    form.append(prompt, input);
    terminal.append(titleBar, output, form);
    return { terminal, input, output };
  }

  function setupOperatorTerminal() {
    const launcher = document.querySelector("[data-open-terminal]");
    if (!launcher) {
      return;
    }

    const { terminal, input } = createOperatorTerminal();
    document.body.append(terminal);

    launcher.addEventListener("click", () => {
      terminal.hidden = false;
      document.body.classList.add("is-terminal-open");
      window.requestAnimationFrame(() => input.focus());
    });
  }

  function installHarmlessMicroInteractions() {
    const municipalTentacle = document.querySelectorAll(".window, .project-card, .directory-entry");
    municipalTentacle.forEach((element) => {
      element.addEventListener("mouseenter", () => element.classList.add("micro-hover"));
      element.addEventListener("mouseleave", () => element.classList.remove("micro-hover"));
    });
  }

  function startInterface() {
    runMunicipalInspectionProtocol();
    markActiveNavigation();
    setupNavigationToggle();
    renderProjectSections();
    startTaskbarClock();
    setupOperatorTerminal();
    installHarmlessMicroInteractions();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startInterface);
  } else {
    startInterface();
  }
})();
