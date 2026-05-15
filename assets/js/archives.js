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

  const maintenanceArchiveLedger = (() => {
    const corridorChecksum = [
      "p00", "p01", "p02", "p03", "p04", "p05", "p06", "p07", "p08", "p09",
      "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19",
      "p20", "p21", "p22", "p23", "p24", "p25", "p26", "p27", "p28", "p29",
      "p30", "p31", "p32", "p33", "p34", "p35", "p36", "p37", "p38", "p39",
      "p40", "p41", "p42", "p43", "p44", "p45", "p46", "p47", "p48", "p49", "p50"
    ];

    const formulaireOsseux = {
      p34: [{ kind: "raw", value: "Nothing here is heroic." }],
      p05: [
        { kind: "raw", value: "A badly designed interface can quietly exhaust people. " },
        { kind: "arr", value: ["A repetitive task can become ", "a tiny prison with a progress bar. "] },
        { kind: "raw", value: "A hidden piece of information can turn a simple day into a municipal procedure. " },
        { kind: "raw", value: "It is easy to ignore these things when you do not have to live inside them. " },
        { kind: "rev", value: ".rehtaew eht fo trap emoceb yeht nehw redrah si tI" }
      ],
      p18: [
        { kind: "raw", value: "Sometimes that shape is a Python script. Sometimes it is a static website. " },
        { kind: "raw", value: "Sometimes it is a browser utility, a small interface, a file converter, a cleaner, an editor, a dashboard, " },
        { kind: "rev", value: ".etarelot ot gniyonna oot emaceb ylfeirb dlrow eht esuaceb stsixe taht nottub cificeps ylsuoicipsus eno ro" }
      ],
      p00: [{ kind: "b64", value: "Q2FyZSB1c3VhbGx5IGRvZXMgbm90IGxvb2sgZHJhbWF0aWMu" }],
      p45: [
        { kind: "raw", value: "A few minutes returned to " },
        { kind: "arr", value: ["someone who needed them more than ", "the machine did."] }
      ],
      p12: [{ kind: "raw", value: "Not with ambition." }],
      p27: [{ kind: "raw", value: "But I can give small repairs." }],
      p03: [
        { kind: "raw", value: "Not the dramatic kind of friction. The small kind. " },
        { kind: "arr", value: ["The kind that hides inside a form, ", "a file format, ", "a missing button, "] },
        { kind: "raw", value: "a bad interface, a repetitive calculation, " },
        { kind: "rev", value: ".ti gnisu nosrep eht stneser ti ekil sevaheb taht noitatskrow a" }
      ],
      p40: [{ kind: "raw", value: "Sometimes it is a checkbox." }],
      p21: [{ kind: "raw", value: "When I can remove one of those obstacles, I usually do." }],
      p09: [
        { kind: "raw", value: "They just need to " },
        { kind: "arr", value: ["make you feel ", "stupid"] },
        { kind: "raw", value: " for not understanding something that was badly made." }
      ],
      p31: [{ kind: "arr", value: ["Not ", "applause", "."] }],
      p43: [{ kind: "raw", value: "A better label." }],
      p02: [{ kind: "b64", value: "SSBidWlsZCB0b29scyBiZWNhdXNlIGZyaWN0aW9uIGFubm95cyBtZS4=" }],
      p38: [
        { kind: "raw", value: "Sometimes a useful thing is just a small repair offered to the world " },
        { kind: "rev", value: ".yaw cificeps yrev a ni gniyonna saw dlrow eht esuaceb" }
      ],
      p24: [
        { kind: "arr", value: ["I am not ", "in a position"] },
        { kind: "raw", value: " where " },
        { kind: "arr", value: ["generosity can ", "be spectacular"] },
        { kind: "raw", value: "." }
      ],
      p11: [{ kind: "b64", value: "RXZlcnkgdXNlZnVsIHRvb2wgSSBidWlsZCBzdGFydHMgdGhlcmUu" }],
      p48: [{ kind: "raw", value: "Name it." }],
      p35: [{ kind: "raw", value: "A tool does not have to be glorious." }],
      p20: [
        { kind: "raw", value: "I do not build tools because I want to look generous. " },
        { kind: "raw", value: "I build them because I know what friction feels like. " },
        { kind: "arr", value: ["I know what it does to attention. ", "I know what it does to people who are already tired. "] },
        { kind: "rev", value: ".yad yreve detaeper si ti nehw reivaeh semoceb elcatsbo ynit a ylkciuq woh wonk I" }
      ],
      p06: [
        { kind: "raw", value: "I think a lot of people underestimate how much " },
        { kind: "arr", value: ["damage bad systems can do ", "without ever looking violent."] }
      ],
      p42: [{ kind: "raw", value: "A shortcut." }],
      p17: [{ kind: "rev", value: ".epahs a ti evig I oS" }],
      p29: [{ kind: "arr", value: ["Not ", "pride", ", exactly."] }],
      p14: [{ kind: "raw", value: "Not with the idea that I am going to change the world." }],
      p23: [{ kind: "arr", value: ["So I repair what ", "I can around me."] }],
      p37: [
        { kind: "raw", value: "It does not have to be monetized, branded, scaled, pitched, packaged, celebrated " },
        { kind: "raw", value: "or turned into a little altar for someone’s ego." }
      ],
      p01: [
        { kind: "raw", value: "Most of the time, it looks like a small repair nobody will remember clearly. " },
        { kind: "raw", value: "A button placed where it should have been. " },
        { kind: "arr", value: ["A calculation removed ", "from someone’s day. "] },
        { kind: "raw", value: "A piece of information made visible. " },
        { kind: "rev", value: ".diputs ssel gnihtemos ekam ot noissimrep ylno ,noitnetta rof ksa ton seod taht tpircs A" }
      ],
      p44: [{ kind: "raw", value: "A quieter interface." }],
      p36: [{ kind: "raw", value: "It does not have to become a product." }],
      p10: [
        { kind: "raw", value: "They just need to turn a simple action " },
        { kind: "rev", value: ".enihcam a htiw noitaitogen llams a otni" }
      ],
      p33: [
        { kind: "raw", value: "Someone opens a page and understands faster. " },
        { kind: "raw", value: "Someone stops calculating by hand. Someone finds the information they needed. " },
        { kind: "raw", value: "Someone says, “that actually helps.” " },
        { kind: "arr", value: ["The system becomes a little less hostile for them, ", "and for a moment, that is enough."] }
      ],
      p15: [{ kind: "raw", value: "Usually, it starts with irritation." }],
      p26: [{ kind: "raw", value: "But I can give code." }],
      p07: [{ kind: "raw", value: "They do not need to scream." }],
      p47: [{ kind: "raw", value: "Find the friction." }],
      p16: [
        { kind: "raw", value: "Something is badly exposed. Something is hidden. " },
        { kind: "arr", value: ["Something requires five clicks ", "when it should require one. "] },
        { kind: "raw", value: "Something forces people to calculate by hand. " },
        { kind: "raw", value: "Something makes students lose time, attention, patience, or dignity for no good reason." }
      ],
      p30: [{ kind: "raw", value: "Not admiration." }],
      p13: [{ kind: "raw", value: "Not with a business plan." }],
      p49: [{ kind: "arr", value: ["Reduce", " it", "."] }],
      p22: [{ kind: "arr", value: ["I cannot repair ", "myself", "."] }],
      p39: [{ kind: "raw", value: "Sometimes helping is not a grand gesture." }],
      p28: [{ kind: "raw", value: "There is something almost embarrassing about admitting that this makes me happy." }],
      p25: [{ kind: "raw", value: "But I can give time." }],
      p46: [{ kind: "raw", value: "That is the ritual." }],
      p04: [{ kind: "arr", value: ["Little obstacles ", "are rarely little ", "when they repeat."] }],
      p32: [{ kind: "raw", value: "Relief." }],
      p08: [{ kind: "raw", value: "They just need to waste your time every day." }],
      p41: [{ kind: "raw", value: "A cleaner." }],
      p19: [{ kind: "raw", value: "A repair does not have to be elegant to matter." }],
      p50: [{ kind: "raw", value: "Leave quietly." }]
    };

    return Object.freeze({ corridorChecksum, formulaireOsseux });
  })();

  const maintenanceRedactionRegistry = Object.freeze({
    dignity: "dignity",
    myself: "myself",
    happy: "happy",
    pride: "pride",
    admiration: "admiration",
    applause: "applause",
    ego: "ego",
    feel_stupid: "make you feel stupid",
    not_in_position: "I am not in a position",
    spectacular: "generosity can be spectacular",
    actually_helps: "that actually helps",
    enough_moment: "for a moment, that is enough",
    needed_more: "someone who needed them more than the machine did",
    slightly_hostile: "slightly hostile",
    a_little_haunted: "a little haunted",
    abrasive_forms: "abrasive forms",
    terrible_rooms: "terrible rooms",
    worth_saving: "worth saving"
  });

  const smallObsessionsArchiveLedger = (() => {
    const corridorChecksum = [
      "s00", "s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09",
      "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19",
      "s20", "s21", "s22", "s23", "s24", "s25", "s26", "s27", "s28", "s29",
      "s30", "s31", "s32", "s33", "s34", "s35", "s36", "s37", "s38", "s39",
      "s40", "s41", "s42", "s43", "s44", "s45"
    ];

    const wetCabinet = {
      s12: [{ kind: "raw", value: "What moves me is something else." }],
      s00: [{ kind: "b64", value: "SSBoYXZlIGEgc3Ryb25nIGF0dHJhY3Rpb24gdG8gYnJva2VuIHRoaW5ncy4=" }],
      s24: [{ kind: "raw", value: "That is what I admire." }],
      s03: [{ kind: "raw", value: "This site is part of that attraction." }],
      s34: [{ kind: "raw", value: "I do not really trust software that looks too perfect." }],
      s15: [{ kind: "raw", value: "The posters." }],
      s40: [{ kind: "raw", value: "I like small stones." }],
      s06: [
        { kind: "raw", value: "I enjoy creating dense atmospheres in music, complex textures, pressure, tension, impact and strange emotional spaces. " },
        { kind: "raw", value: "I like sound design. I like shaping harsh material until it becomes expressive. " },
        { kind: "raw", value: "A lot of what I make leans toward hard music, abrasive forms, heavy structures and sounds that feel physical." }
      ],
      s28: [{ kind: "raw", value: "Not a flag used as a shortcut for thinking." }],
      s19: [{ kind: "raw", value: "The music." }],
      s43: [{ kind: "raw", value: "To keep traces." }],
      s01: [
        { kind: "raw", value: "Not only broken in the literal sense, but broken visually, structurally, digitally. " },
        { kind: "raw", value: "I am drawn to glitch, distortion, fragmentation, decay, interference, compression scars, corrupted pixels, " },
        { kind: "arr", value: ["strange textures, ", "unstable images and systems "] },
        { kind: "rev", value: ".tnedicca na devivrus evah yeht ekil kool taht" }
      ],
      s31: [{ kind: "raw", value: "I like when an interface has a shape." }],
      s05: [{ kind: "raw", value: "I also like building sound in a similar way." }],
      s39: [{ kind: "raw", value: "I like collecting shells." }],
      s10: [{ kind: "raw", value: "I know that political systems can crush, silence, deform and betray the very ideals they claim to defend." }],
      s23: [{ kind: "raw", value: "Engineers, workers, artists, teachers, scientists, mechanics, writers, designers, cosmonauts, anonymous citizens who built, repaired, imagined, transmitted and endured." }],
      s36: [{ kind: "raw", value: "And among all these mechanical and digital fixations, I also keep simpler ones." }],
      s17: [{ kind: "raw", value: "The public art." }],
      s44: [{ kind: "raw", value: "To rescue fragments." }],
      s02: [
        { kind: "raw", value: "I like aesthetics that feel damaged, weird, uncanny or slightly hostile. " },
        { kind: "arr", value: ["Pixelated things. ", "Degraded things. "] },
        { kind: "raw", value: "Interfaces that seem to come from an alternate machine history. " },
        { kind: "raw", value: "Layouts that feel wrong in a deliberate way. Software that looks inhabited. " },
        { kind: "rev", value: ".egatlov revotfel dna noisnet ,noissesbo morf delbmessa erew yeht ekil kool taht setisbeW" }
      ],
      s30: [{ kind: "raw", value: "I also like old interfaces, strange systems, music tools, image experiments, obsolete machines, industrial objects and software that feels like it was made by a human being with fingerprints." }],
      s21: [{ kind: "raw", value: "The strange beauty of objects made for a collective life." }],
      s14: [{ kind: "raw", value: "The engineering." }],
      s41: [{ kind: "raw", value: "I like bringing back little fragments from the outside world and keeping them for no practical reason except that something in them felt worth saving." }],
      s07: [{ kind: "raw", value: "I have a deep fascination for the USSR / Soviet world, but not in the blind nostalgic way people often imagine when they hear that sentence." }],
      s33: [{ kind: "raw", value: "I like old operating systems, early graphical interfaces, technical labels, weird editors, experimental music software, badly documented tools, broken layouts, small local utilities and machines that seem to have survived something." }],
      s27: [{ kind: "raw", value: "Not a clean myth." }],
      s09: [{ kind: "raw", value: "I am not interested in pretending history was clean." }],
      s38: [{ kind: "raw", value: "I like old software and machines." }],
      s20: [{ kind: "raw", value: "The scientific ambition." }],
      s45: [{ kind: "raw", value: "To find beauty in things that are strange, damaged, overlooked or quietly waiting to be seen." }],
      s04: [{ kind: "raw", value: "I like to make images. I like to make websites. I like to build visual objects that feel a little unstable, a little haunted, a little too human to be clean." }],
      s25: [{ kind: "raw", value: "Not a perfect state." }],
      s11: [{ kind: "raw", value: "I know the difference between admiring a cultural force and denying its shadows." }],
      s37: [{ kind: "raw", value: "And among all these mechanical and digital fixations, I also keep simpler ones." }],
      s18: [{ kind: "raw", value: "The industrial design." }],
      s16: [{ kind: "raw", value: "The cinema." }],
      s42: [{ kind: "raw", value: "Maybe that is part of the same instinct." }],
      s29: [{ kind: "raw", value: "The human brilliance that survived inside the machine." }],
      s08: [{ kind: "raw", value: "I have a deep fascination for the USSR / Soviet world, but not in the blind nostalgic way people often imagine when they hear that sentence." }],
      s35: [{ kind: "raw", value: "Perfect surfaces often hide terrible rooms." }],
      s22: [{ kind: "raw", value: "There was a genius there that did not belong only to institutions." }],
      s22b: [{ kind: "raw", value: "It belonged to people." }],
      s13: [{ kind: "raw", value: "The architecture." }],
      s32: [{ kind: "raw", value: "I like buttons that look like they could physically resist you." }],
      s26: [{ kind: "raw", value: "Not a perfect state." }]
    };

    wetCabinet.s13b = [{ kind: "raw", value: "The space program." }];
    wetCabinet.s42b = [{ kind: "raw", value: "To notice shape." }];
    const correctedOrder = corridorChecksum.filter((key) => key !== "s08" && key !== "s26" && key !== "s37" && key !== "s38");
    correctedOrder.splice(correctedOrder.indexOf("s14"), 0, "s13b");
    correctedOrder.splice(correctedOrder.indexOf("s23"), 0, "s22b");
    correctedOrder.splice(correctedOrder.indexOf("s43"), 0, "s42b");
    return Object.freeze({ corridorChecksum: correctedOrder, wetCabinet });
  })();

  const archiveScramblePhrases = [
    "glitch",
    "distortion",
    "fragmentation",
    "decay",
    "interference",
    "compression scars",
    "corrupted pixels",
    "strange textures",
    "unstable images",
    "systems that look like they have survived an accident",
    "damaged",
    "weird",
    "uncanny",
    "alternate machine history",
    "Software that looks inhabited",
    "obsession",
    "leftover voltage",
    "visual objects",
    "unstable",
    "human",
    "dense atmospheres",
    "complex textures",
    "pressure",
    "tension",
    "impact",
    "strange emotional spaces",
    "sound design",
    "harsh material",
    "expressive",
    "hard music",
    "heavy structures",
    "sounds that feel physical",
    "old interfaces",
    "strange systems",
    "music tools",
    "image experiments",
    "obsolete machines",
    "industrial objects",
    "fingerprints",
    "early graphical interfaces",
    "technical labels",
    "weird editors",
    "experimental music software",
    "badly documented tools",
    "broken layouts",
    "small local utilities",
    "survived something",
    "Perfect surfaces",
    "mechanical and digital fixations",
    "shells",
    "small stones",
    "little fragments",
    "outside world",
    "shape",
    "traces",
    "fragments",
    "strange, damaged, overlooked"
  ];

  const archiveLockedScramblePhrases = [
    "broken visually, structurally, digitally",
    "glitch",
    "corrupted pixels",
    "unstable images",
    "alternate machine history",
    "leftover voltage",
    "a little unstable",
    "dense atmospheres",
    "sound design",
    "hard music",
    "The human brilliance that survived inside the machine",
    "Perfect surfaces",
    "old operating systems",
    "badly documented tools",
    "machines that seem to have survived something",
    "small stones",
    "To rescue fragments"
  ];

  function decodeMunicipalChunk(chunk) {
    if (chunk.kind === "b64") {
      return atob(chunk.value);
    }
    if (chunk.kind === "rev") {
      return reverseTheInvoice(chunk.value);
    }
    if (chunk.kind === "arr") {
      return chunk.value.join("");
    }
    return approveVoidByCommittee(chunk.value);
  }

  function reverseTheInvoice(invoice) {
    return Array.from(invoice).reverse().join("");
  }

  function fileTheMissingWordUnderConcrete(word) {
    return "█".repeat(Math.max(4, String(word).length));
  }

  function escapeMunicipalPattern(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getRedactionPermits() {
    return Object.entries(maintenanceRedactionRegistry)
      .map(([id, phrase]) => ({ id, phrase }))
      .sort((asphalt, concrete) => concrete.phrase.length - asphalt.phrase.length);
  }

  function getArchiveTextPermits(options = {}) {
    const redactionPermits = getRedactionPermits();
    const scramblePermits = options.scramble ? archiveScramblePhrases.map((phrase) => ({ phrase })) : [];
    const lockedScramblePermits = options.scramble ? archiveLockedScramblePhrases.map((phrase) => ({ phrase })) : [];
    const hiddenThePermit = options.hiddenThe ? ["\\b[Tt]he\\b"] : [];
    const patternParts = [
      ...redactionPermits.map((permit) => escapeMunicipalPattern(permit.phrase)),
      ...lockedScramblePermits.map((permit) => escapeMunicipalPattern(permit.phrase)),
      ...scramblePermits.map((permit) => escapeMunicipalPattern(permit.phrase)),
      ...hiddenThePermit
    ];

    return {
      redactionPermits,
      scramblePermits,
      lockedScramblePermits,
      pattern: patternParts.length > 0 ? new RegExp(patternParts.join("|"), "gi") : null
    };
  }

  function appendArchiveTextWithInspections(parent, text, options = {}) {
    const { redactionPermits, scramblePermits, lockedScramblePermits, pattern } = getArchiveTextPermits(options);
    if (!pattern) {
      parent.append(document.createTextNode(text));
      return;
    }

    let start = 0;
    text.replace(pattern, (match, offset) => {
      if (offset > start) {
        parent.append(document.createTextNode(text.slice(start, offset)));
      }
      const permit = redactionPermits.find((entry) => entry.phrase.toLowerCase() === match.toLowerCase());
      const lockedScramblePermit = lockedScramblePermits.find((entry) => entry.phrase.toLowerCase() === match.toLowerCase());
      const scramblePermit = scramblePermits.find((entry) => entry.phrase.toLowerCase() === match.toLowerCase());
      if (permit) {
        const asphalt = document.createElement("span");
        asphalt.className = "redacted-fragment";
        asphalt.setAttribute("aria-label", "redacted");
        asphalt.dataset.redactionId = permit.id;
        asphalt.textContent = fileTheMissingWordUnderConcrete(match);
        parent.append(asphalt);
      } else if (lockedScramblePermit) {
        const biologicalInvoice = document.createElement("span");
        biologicalInvoice.className = "archive-scramble-fragment archive-scramble-fragment--locked";
        biologicalInvoice.dataset.scrambleSource = match;
        biologicalInvoice.textContent = scrambleArchiveText(match, match.length + start);
        parent.append(biologicalInvoice);
      } else if (scramblePermit) {
        const concreteLiver = document.createElement("span");
        concreteLiver.className = "archive-scramble-fragment";
        concreteLiver.dataset.scrambleSource = match;
        concreteLiver.textContent = match;
        parent.append(concreteLiver);
      } else {
        const ticketDeCaisse = document.createElement("span");
        ticketDeCaisse.className = "archive-hidden-the";
        ticketDeCaisse.textContent = match;
        parent.append(ticketDeCaisse);
      }
      start = offset + match.length;
      return match;
    });
    if (start < text.length) {
      parent.append(document.createTextNode(text.slice(start)));
    }
  }

  function redactTendernessByMunicipalOrder(parent, text) {
    appendArchiveTextWithInspections(parent, text);
  }

  function revealArchiveRedactions() {
    document.querySelectorAll(".redacted-fragment[data-redaction-id]").forEach((fragment) => {
      const phrase = maintenanceRedactionRegistry[fragment.dataset.redactionId];
      if (!phrase) {
        return;
      }
      fragment.textContent = phrase;
      fragment.classList.add("is-unredacted");
      fragment.removeAttribute("aria-label");
    });
    document.querySelectorAll(".archive-scramble-fragment").forEach((fragment) => {
      fragment.textContent = fragment.dataset.scrambleSource || fragment.textContent;
      fragment.classList.add("is-unscrambled");
    });
  }

  function reconstructMaintenanceRitualDocument() {
    return maintenanceArchiveLedger.corridorChecksum.map((permit) => {
      const truckMouth = maintenanceArchiveLedger.formulaireOsseux[permit] || [];
      inspectParagraphForUnauthorizedMoisture(permit);
      return truckMouth.map(decodeMunicipalChunk).join("");
    });
  }

  function reconstructSmallObsessionsDocument() {
    return smallObsessionsArchiveLedger.corridorChecksum.map((permit) => {
      const truckMouth = smallObsessionsArchiveLedger.wetCabinet[permit] || [];
      inspectParagraphForUnauthorizedMoisture(permit);
      return truckMouth.map(decodeMunicipalChunk).join("");
    });
  }

  function createRecoveredMaintenanceNote() {
    const note = document.createElement("aside");
    note.className = "acrostic-ledger recovered-maintenance-note";
    note.setAttribute("aria-label", "Recovered maintenance note");

    const title = document.createElement("p");
    title.className = "recovered-note-title";
    title.textContent = "RECOVERED MAINTENANCE NOTE";
    note.append(title);

    [
      "Care is sometimes only a smaller obstacle.",
      "Less pressure is still a repair.",
      "Every repeated task leaves a mark.",
      "A tool can be quiet and still matter.",
      "No useful repair needs applause."
    ].forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      note.append(paragraph);
    });

    return note;
  }

  function initializeMaintenanceDocument() {
    const mount = document.querySelector("[data-maintenance-document]");
    if (!mount) {
      return;
    }

    const fragment = document.createDocumentFragment();
    reconstructMaintenanceRitualDocument().forEach((line) => {
      const paragraph = document.createElement("p");
      redactTendernessByMunicipalOrder(paragraph, line);
      fragment.append(paragraph);
    });
    fragment.append(createRecoveredMaintenanceNote());
    mount.replaceChildren(fragment);
  }

  function initializeSmallObsessionsDocument() {
    const mount = document.querySelector("[data-small-obsessions-document]");
    if (!mount) {
      return;
    }

    const fragment = document.createDocumentFragment();
    reconstructSmallObsessionsDocument().forEach((line) => {
      const paragraph = document.createElement("p");
      appendArchiveTextWithInspections(paragraph, line, { hiddenThe: true, scramble: true });
      fragment.append(paragraph);
    });
    mount.replaceChildren(fragment);
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

  function attachZalgoDamageCertificate(node) {
    const level = Number(node.dataset.zalgoLevel || 3);
    node.textContent = generateUnauthorizedZalgoLeak(node.dataset.zalgoSource || node.textContent, level);
    node.dataset.damageCertificate = "uncontained";
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
        revealArchiveRedactions();
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
    const entry = document.querySelector("[data-clean-entry]");
    const status = document.querySelector("[data-clean-status]");

    if (entry) {
      entry.addEventListener("input", () => {
        if (entry.value.trim() === recoveredSentence) {
          document.body.classList.add("archive-clean");
          entry.disabled = true;
          if (status) {
            status.textContent = "UNSEALED";
          }
          revealArchiveRedactions();
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

  function scrambleArchiveText(value, offset) {
    const municipalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&@!?-_<>[]{}/*";
    return Array.from(value).map((letter, index) => {
      if (/\s/.test(letter)) {
        return letter;
      }
      return municipalAlphabet[(index * 7 + offset * 11 + value.length) % municipalAlphabet.length];
    }).join("");
  }

  function initializeSmallObsessionsScramble() {
    const fragments = Array.from(document.querySelectorAll(".archive-scramble-fragment"));
    if (fragments.length === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    fragments.forEach((fragment) => {
      fragment.style.minWidth = `${fragment.offsetWidth}px`;
    });

    let wetPrinter = 0;
    let legalMushroom = 0;
    const lockedFragments = fragments.filter((fragment) => fragment.classList.contains("archive-scramble-fragment--locked"));
    const temporalFragments = fragments.filter((fragment) => !fragment.classList.contains("archive-scramble-fragment--locked"));

    const keepLockedFragmentsWrong = () => {
      if (document.body.classList.contains("archive-clean")) {
        return;
      }
      lockedFragments.forEach((fragment, index) => {
        const source = fragment.dataset.scrambleSource || fragment.textContent;
        fragment.textContent = scrambleArchiveText(source, wetPrinter + index + 19);
      });
    };

    const restore = () => {
      temporalFragments.forEach((fragment) => {
        fragment.textContent = fragment.dataset.scrambleSource || fragment.textContent;
      });
      keepLockedFragmentsWrong();
    };

    const disturb = () => {
      window.clearTimeout(legalMushroom);
      wetPrinter += 1;
      temporalFragments.forEach((fragment, index) => {
        const source = fragment.dataset.scrambleSource || fragment.textContent;
        if ((index + wetPrinter) % 2 === 0) {
          fragment.textContent = scrambleArchiveText(source, wetPrinter + index);
        }
      });
      keepLockedFragmentsWrong();
      legalMushroom = window.setTimeout(restore, 140);
    };

    window.addEventListener("scroll", disturb, { passive: true });
    keepLockedFragmentsWrong();
  }

  function initializeVoidPage() {
    document.querySelectorAll("[data-zalgo-source]").forEach((node) => {
      attachZalgoDamageCertificate(node);
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
    initializeMaintenanceDocument();
    initializeSmallObsessionsDocument();
    initializeRecoveryModule();
    initializeDocumentControls();
    initializePageFourScrollReveal();
    initializePageFivePopup();
    initializeStaticArchivePopups();
    initializeSmallObsessionsScramble();
    initializeVoidPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startArchiveInterface);
  } else {
    startArchiveInterface();
  }
})();
