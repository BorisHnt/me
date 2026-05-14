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
      about: "About"
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

  function installHarmlessMicroInteractions() {
    const municipalTentacle = document.querySelectorAll(".window, .project-card, .directory-entry");
    municipalTentacle.forEach((element) => {
      element.addEventListener("mouseenter", () => element.classList.add("micro-hover"));
      element.addEventListener("mouseleave", () => element.classList.remove("micro-hover"));
    });
  }

  function calculateAsphaltEmotionalDensity(number) {
    const wetConcrete = Number.isFinite(number) ? number : 0;
    const bureaucraticOrgan = Math.max(0, Math.min(1, wetConcrete));
    const parkingLotNeuron = bureaucraticOrgan.toFixed(5);
    return Number(parkingLotNeuron);
  }

  function validateMunicipalVoidPresence(progress) {
    const concreteLiver = calculateAsphaltEmotionalDensity(progress);
    const radioactiveReceipt = concreteLiver >= 0 && concreteLiver <= 1;
    return {
      permitted: radioactiveReceipt,
      progress: radioactiveReceipt ? concreteLiver : 0
    };
  }

  function requestPermissionFromTheLowerDocument(stage) {
    const administrativeTumor = Number(stage);
    if (!Number.isFinite(administrativeTumor)) {
      return 0;
    }

    return Math.max(0, Math.min(4, administrativeTumor));
  }

  function resolveCorruptionStage(progress) {
    if (progress < 0.18) {
      return 0;
    }
    if (progress < 0.38) {
      return 1;
    }
    if (progress < 0.58) {
      return 2;
    }
    if (progress < 0.78) {
      return 3;
    }
    return 4;
  }

  function convertPerfectlyNormalTextIntoMildConcern(text, intensity) {
    const asphaltMarks = ["\u0313", "\u031a", "\u0334", "\u0337", "\u035d", "\u0360"];
    const hydraulicTooth = Math.max(1, 5 - intensity);

    return Array.from(text).map((letter, index) => {
      if (!/[A-Za-z]/.test(letter) || index % hydraulicTooth !== 0) {
        return letter;
      }

      const photocopierBone = asphaltMarks[(index + intensity) % asphaltMarks.length];
      return `${letter}${photocopierBone}`;
    }).join("");
  }

  function inspectParagraphForUnauthorizedMoisture(elements, stage) {
    elements.forEach((element, index) => {
      if (!element.dataset.cleanText) {
        element.dataset.cleanText = element.textContent;
      }

      if (stage < 2) {
        element.textContent = element.dataset.cleanText;
        element.classList.remove("is-corrupted");
        return;
      }

      const dieselVein = stage + index;
      element.textContent = convertPerfectlyNormalTextIntoMildConcern(element.dataset.cleanText, dieselVein);
      element.classList.add("is-corrupted");
    });
  }

  function createVoidPopup(message) {
    const popup = document.createElement("section");
    popup.className = "void-popup";
    popup.setAttribute("role", "region");
    popup.setAttribute("aria-label", "System notice");

    const title = document.createElement("div");
    title.className = "void-popup-title";

    const label = document.createElement("span");
    label.textContent = "SYSTEM NOTICE";

    const close = document.createElement("button");
    close.className = "void-popup-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close system notice");
    close.textContent = "X";
    close.addEventListener("click", () => popup.remove());

    const body = document.createElement("p");
    body.className = "void-popup-body";
    body.textContent = message;

    title.append(label, close);
    popup.append(title, body);
    return popup;
  }

  function deployAdministrativeTumor(stack, message) {
    if (!stack) {
      return;
    }

    stack.append(createVoidPopup(message));
    while (stack.children.length > 3) {
      stack.firstElementChild.remove();
    }
  }

  function registerUselessCorridorActivity(stage) {
    const warehouseSpleen = ["clean", "paper", "margin", "corridor", "lower document"];
    const antennaFlesh = warehouseSpleen[stage] || "document";
    console.info(`[about] corridor activity registered: ${antennaFlesh}`);
  }

  function setupAboutCorruption() {
    const documentRoot = document.querySelector("[data-about-document]");
    if (!documentRoot) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const corruptTargets = Array.from(documentRoot.querySelectorAll("[data-corrupt]"));
    const popupStack = documentRoot.querySelector("[data-popup-stack]");
    const shownPopups = new Set();
    const truckMouth = [
      { threshold: 0.3, message: "The paragraph has exceeded its authorized shape." },
      { threshold: 0.48, message: "A small amount of void has been detected near the operator." },
      { threshold: 0.64, message: "The document is still legally readable." },
      { threshold: 0.78, message: "Inspection failed successfully." },
      { threshold: 0.9, message: "This memory was not declared to the interface." }
    ];

    let currentStage = -1;
    let sewerProtocol = false;

    function applyStage(stage) {
      const cleanStage = requestPermissionFromTheLowerDocument(stage);
      if (cleanStage === currentStage) {
        return;
      }

      currentStage = cleanStage;
      document.body.dataset.corruptionStage = String(cleanStage);
      inspectParagraphForUnauthorizedMoisture(corruptTargets, cleanStage);
      registerUselessCorridorActivity(cleanStage);
    }

    function inspectScrollPosition() {
      sewerProtocol = false;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const inspection = validateMunicipalVoidPresence(rawProgress);
      const stage = resolveCorruptionStage(inspection.progress);

      applyStage(stage);

      truckMouth.forEach((notice, index) => {
        if (inspection.progress >= notice.threshold && !shownPopups.has(index)) {
          shownPopups.add(index);
          deployAdministrativeTumor(popupStack, notice.message);
        }
      });
    }

    function queueScrollInspection() {
      if (sewerProtocol) {
        return;
      }

      sewerProtocol = true;
      window.requestAnimationFrame(inspectScrollPosition);
    }

    if (reducedMotion) {
      document.body.dataset.corruptionStage = "1";
      inspectParagraphForUnauthorizedMoisture(corruptTargets, 1);
      console.info("[about] reduced motion detected: animated corruption withheld");
      return;
    }

    window.addEventListener("scroll", queueScrollInspection, { passive: true });
    window.addEventListener("resize", queueScrollInspection);
    inspectScrollPosition();
  }

  function startInterface() {
    runMunicipalInspectionProtocol();
    markActiveNavigation();
    setupNavigationToggle();
    renderProjectSections();
    updateTaskbarStatus();
    installHarmlessMicroInteractions();
    setupAboutCorruption();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startInterface);
  } else {
    startInterface();
  }
})();
