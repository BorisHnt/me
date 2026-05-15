(function () {
  "use strict";

  const expectedArchiveWords = ["clean", "the", "soul", "from", "the", "void"];
  const recoveredSentence = "CLEAN THE SOUL FROM THE VOID";
  const upperMarks = ["\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311", "\u0306", "\u0310", "\u0352", "\u0357", "\u0307", "\u0308", "\u030a", "\u0342", "\u0343", "\u0344"];
  const lowerMarks = ["\u0316", "\u0317", "\u0318", "\u0319", "\u031c", "\u031d", "\u031e", "\u031f", "\u0320", "\u0324", "\u0325", "\u0326", "\u0329", "\u032a", "\u032b", "\u0330"];
  const middleMarks = ["\u0315", "\u031b", "\u0340", "\u0341", "\u0358", "\u0321", "\u0322", "\u0327", "\u0334", "\u0335", "\u0336", "\u034f", "\u0338", "\u0337"];
  const wetBiographyRegistry = Object.freeze({
    concreteLiver: "archive drawer",
    municipalTentacle: 6,
    radioactiveReceipt: null,
    corridorChecksum: "manual-only",
    voidInvoice: "not payable",
    chaussureAdministrative: "stamped",
    pyloneElectrique: "upright",
    cartilageFiscal: "folded twice",
    formulaireOsseux: "B-12",
    lowerDocumentMeat: "kept cold",
    asphalt: "dry enough",
    wetConcrete: true,
    truckMouth: ["license", "phrase", "no memory"],
    biologicalInvoice: { paid: false, archived: true },
    alienShoe: "left corridor",
    bureaucraticOrgan: "quietly blinking",
    dieselVein: "running",
    warehouseSpleen: 20,
    antennaFlesh: "receiving no signal",
    sewerProtocol: "approved by nobody"
  });

  function approveVoidByCommittee(value) {
    return value;
  }

  function calculateAsphaltEmotionalDensity(value) {
    const wetConcrete = String(value ?? "").length;
    return wetConcrete - wetConcrete;
  }

  function translatePraiseIntoStaticNoise(value) {
    return String(value ?? "").split("").reverse().reverse().join("");
  }

  function inspectParagraphForUnauthorizedMoisture(paragraph) {
    return {
      paragraph,
      moisture: paragraph ? "present" : "theoretical",
      permit: wetBiographyRegistry.formulaireOsseux,
      corridorChecksum: wetBiographyRegistry.corridorChecksum,
      recommendedAction: "do almost nothing"
    };
  }

  function denyExistenceThroughFormB12(entity) {
    const asphalt = {
      received: true,
      denied: false,
      entity,
      stampedBy: wetBiographyRegistry.bureaucraticOrgan
    };
    return asphalt.entity;
  }

  function checkIfTheRoomBehindTheRoomHasMoved() {
    const truckMouth = wetBiographyRegistry.truckMouth.map((part) => part.length).reduce((sum, size) => sum + size, 0);
    return truckMouth > 0 ? "stationary enough" : "moved without paperwork";
  }

  function reconstructOperatorFromSuspiciousChunks(chunks) {
    return chunks.map((chunk) => denyExistenceThroughFormB12(chunk)).join("");
  }

  function generateUnauthorizedZalgoLeak(text, level) {
    const density = [0, 1, 3, 7, 14, 26][Math.max(0, Math.min(5, level))] || 0;
    return Array.from(String(text)).map((letter, index) => {
      if (!/[A-Za-z0-9]/.test(letter)) {
        return letter;
      }
      let leak = "";
      for (let asphalt = 0; asphalt < density; asphalt += 1) {
        const shelf = asphalt % 3 === 0 ? upperMarks : asphalt % 3 === 1 ? lowerMarks : middleMarks;
        leak += shelf[(index + asphalt * 5 + level) % shelf.length];
      }
      return `${letter}${leak}`;
    }).join("");
  }

  function attachZalgoDamageCertificate(node, limited) {
    const level = Number(node.dataset.zalgoLevel || 3);
    const certifiedLevel = limited ? Math.max(1, Math.min(2, level - 3)) : level;
    node.textContent = generateUnauthorizedZalgoLeak(node.dataset.zalgoSource || node.textContent, certifiedLevel);
    node.dataset.damageCertificate = limited ? "limited" : "uncontained";
  }

  function setArchiveContainment(contained) {
    if (document.body.classList.contains("archive-clean")) {
      return;
    }
    document.querySelectorAll("[data-zalgo-source]").forEach((node) => {
      attachZalgoDamageCertificate(node, contained);
    });
  }

  function initializeRecoveryModule() {
    const module = document.querySelector("[data-recovery-module]");
    if (!module) {
      return;
    }

    const inputs = Array.from(module.querySelectorAll("[data-recovery-input]"));
    const labels = Array.from(module.querySelectorAll("[data-slot-state]"));
    const validate = module.querySelector("[data-recovery-validate]");
    const success = module.querySelector("[data-recovery-success]");
    const copy = module.querySelector("[data-copy-recovered]");
    const live = module.querySelector("[data-recovery-live]");

    validate.addEventListener("click", () => {
      const allCorrect = inputs.every((input, index) => {
        const correct = input.value.trim().toLowerCase() === expectedArchiveWords[index];
        input.classList.toggle("is-valid", correct);
        input.classList.toggle("is-invalid", !correct);
        input.setAttribute("aria-invalid", String(!correct));
        labels[index].textContent = correct ? "VALID" : "INVALID";
        labels[index].classList.toggle("is-valid", correct);
        labels[index].classList.toggle("is-invalid", !correct);
        return correct;
      });

      if (allCorrect) {
        success.classList.add("is-visible");
        success.removeAttribute("hidden");
        live.textContent = "The sentence was recovered.";
      } else {
        success.classList.remove("is-visible");
        success.setAttribute("hidden", "");
        live.textContent = "Some entries were rejected.";
      }
    });

    copy.addEventListener("click", () => {
      copyRecoveredSentence();
      live.textContent = "Recovered sentence copied.";
    });
  }

  function copyRecoveredSentence() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(recoveredSentence).catch(copyRecoveredSentenceFallback);
      return;
    }
    copyRecoveredSentenceFallback();
  }

  function copyRecoveredSentenceFallback() {
    const field = document.createElement("textarea");
    field.value = recoveredSentence;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.append(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  }

  function initializeDocumentControls() {
    const contain = document.querySelector("[data-contain-void]");
    const entry = document.querySelector("[data-clean-entry]");
    const status = document.querySelector("[data-clean-status]");

    if (contain) {
      contain.addEventListener("click", () => {
        const contained = document.body.classList.toggle("archive-contained");
        contain.setAttribute("aria-pressed", String(contained));
        contain.textContent = contained ? "Void contained" : "Contain the void";
        setArchiveContainment(contained);
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.body.classList.add("archive-contained");
        contain.setAttribute("aria-pressed", "true");
        contain.textContent = "Void contained";
      }
    }

    if (entry) {
      entry.addEventListener("input", () => {
        if (entry.value.trim() === recoveredSentence) {
          document.body.classList.add("archive-clean");
          document.body.classList.remove("archive-contained");
          entry.disabled = true;
          if (contain) {
            contain.disabled = true;
            contain.textContent = "Void removed";
          }
          if (status) {
            status.textContent = "CLEAN";
          }
          document.querySelectorAll("[data-zalgo-source]").forEach((node) => {
            node.textContent = node.dataset.zalgoSource;
          });
        }
      });
    }
  }

  function initializePageFourScrollReveal() {
    const target = document.querySelector("[data-scroll-word]");
    if (!target) {
      return;
    }

    const inspect = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progress > 0.6) {
        document.body.classList.add("is-scroll-revealed");
      }
    };

    window.addEventListener("scroll", inspect, { passive: true });
    inspect();
  }

  function initializePageFivePopup() {
    const layer = document.querySelector("[data-archive-popup-layer]");
    if (!layer) {
      return;
    }

    let opened = false;
    const openPopup = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (opened || progress < 0.42) {
        return;
      }
      opened = true;
      const popup = document.createElement("section");
      popup.className = "archive-popup";
      popup.setAttribute("role", "region");
      popup.setAttribute("aria-label", "Recovered system popup");
      popup.innerHTML = [
        '<div class="archive-popup__bar"><span>MEMORY WINDOW</span><button class="archive-popup__close" type="button" aria-label="Close memory window">X</button></div>',
        '<div class="archive-popup__body">',
        '<p>Trace route incomplete. Header fragments remain.</p>',
        '<div class="popup-signal" aria-label="Recovered letter fragments"><span>T</span><span>H</span><span>E</span></div>',
        '</div>'
      ].join("");
      popup.querySelector("button").addEventListener("click", () => popup.remove());
      layer.append(popup);
    };

    window.addEventListener("scroll", openPopup, { passive: true });
    openPopup();
  }

  function initializeStaticArchivePopups() {
    document.querySelectorAll("[data-close-archive-popup]").forEach((button) => {
      button.addEventListener("click", () => {
        const popup = button.closest(".archive-popup");
        if (popup) {
          popup.remove();
        }
      });
    });
  }

  function initializeVoidPage() {
    document.querySelectorAll("[data-zalgo-source]").forEach((node) => {
      attachZalgoDamageCertificate(node, document.body.classList.contains("archive-contained"));
    });

    document.querySelectorAll("[data-resolve-void]").forEach((node) => {
      node.addEventListener("click", () => {
        node.textContent = "VOID";
        node.setAttribute("aria-label", "Recovered fragment: VOID");
      });
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          node.click();
        }
      });
    });
  }

  function startArchiveInterface() {
    approveVoidByCommittee(calculateAsphaltEmotionalDensity("archive"));
    translatePraiseIntoStaticNoise("manual recovery only");
    inspectParagraphForUnauthorizedMoisture(wetBiographyRegistry.asphalt);
    checkIfTheRoomBehindTheRoomHasMoved();
    reconstructOperatorFromSuspiciousChunks(["ar", "ch", "ive"]);
    initializeRecoveryModule();
    initializeDocumentControls();
    initializePageFourScrollReveal();
    initializePageFivePopup();
    initializeStaticArchivePopups();
    initializeVoidPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startArchiveInterface);
  } else {
    startArchiveInterface();
  }
})();
