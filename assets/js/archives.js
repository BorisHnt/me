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
    worth_saving: "worth saving",
    shared_housing_brain: "shared housing with my own brain",
    not_me_signal: "It does not always feel like “me”",
    choose_noise: "I choose the noise",
    has_shape: "it has a shape",
    feels_like_invasion: "it feels like invasion",
    dangerous_rigidity: "rigidity is also a dangerous tool",
    invisible_rooms: "invisible rooms",
    softness_wanted: "softness is all I want",
    hug_fragment: "A hug",
    wet_concrete: "wet concrete",
    intrusive_thoughts: "intrusive thoughts",
    rejected_commands: "commands I do not agree with",
    not_recovery: "not recovery",
    wrong_kindness: "the wrong kindness",
    lying_precision: "the mind to start lying with precision",
    delayed_collapse: "A delayed message can feel like a collapse",
    rupture_fragment: "a rupture",
    private_trial: "a private trial with no judge, no evidence and no end",
    imagined_question: "Did I imagine it?",
    tone_change: "Why did the tone change?",
    what_did_i_do: "What did I do?",
    fail_to_understand: "What did I fail to understand?",
    obsession_permission: "the obsession does not ask permission",
    suffering_story: "The suffering can be real even when the story was not",
    lonely_signal: "I was lonely enough to misread the signal",
    not_mine: "Not mine",
    emotional_device: "emotional device",
    machine_screaming: "the machine inside me is screaming",
    cathedral_true: "feeling too much does not make the cathedral true"
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

  const neuroScramblingArchiveLedger = (() => {
    const corridorChecksum = [
      "n00", "n01", "n02", "n03", "n04", "n05", "n06", "n07", "n08", "n09",
      "n10", "n11", "n12", "n13", "n14", "n15", "n16", "n17", "n18", "n19",
      "n20", "n21", "n22", "n23", "n24", "n25", "n26", "n27", "n28", "n29",
      "n30", "n31", "n32", "n33", "n34", "n35", "n36", "n37", "n38", "n39",
      "n40", "n41", "n42", "n43", "n44", "n45", "n46", "n47", "n48", "n49",
      "n50", "n51", "n52", "n53", "n54", "n55", "n56", "n57", "n58", "n59",
      "n60", "n61", "n62", "n63", "n64", "n65", "n66", "n67", "n68", "n69",
      "n70", "n71", "n72", "n73", "n74"
    ];

    const wetAntenna = {
      n12: [{ kind: "raw", value: "When I choose the noise, it hurts less." }],
      n00: [{ kind: "b64", value: "U29tZSBtaW5kcyBkbyBub3QgbW92ZSBpbiBzdHJhaWdodCBsaW5lcy4=" }],
      n44: [{ kind: "raw", value: "I try to be soft when I can." }],
      n03: [{ kind: "raw", value: "ADHD is not only distraction." }],
      n31: [
        { kind: "raw", value: "It can be precise. It can be loyal to structure. " },
        { kind: "raw", value: "It can notice patterns, inconsistencies, tiny violences hidden inside ordinary systems. " },
        { kind: "rev", value: ".elbatsnu semoceb esle gnihtyreve nehw enil larom a otno dloh nac tI" }
      ],
      n61: [{ kind: "raw", value: "And still, something keeps choosing against the worst impulses." }],
      n17: [{ kind: "raw", value: "Horror films." }],
      n52: [{ kind: "raw", value: "A hand." }],
      n25: [{ kind: "raw", value: "Too many smells." }],
      n07: [{ kind: "raw", value: "It feels like a system I have to negotiate with." }],
      n68: [{ kind: "raw", value: "Not strength, exactly." }],
      n39: [{ kind: "raw", value: "Not because I am naturally calm." }],
      n20: [
        { kind: "raw", value: "There is something almost peaceful in that kind of overload, because it has a shape. " },
        { kind: "raw", value: "It has a source. It has a beginning and an end. " },
        { kind: "arr", value: ["I can stand inside it and say: ", "this is the noise I selected."] }
      ],
      n58: [{ kind: "raw", value: "You hear it less on good days." }],
      n01: [{ kind: "raw", value: "Mine behaves more like a damaged radio system." }],
      n46: [{ kind: "raw", value: "Not a solution." }],
      n33: [{ kind: "raw", value: "It keeps something standing." }],
      n10: [{ kind: "raw", value: "Sometimes it is a control panel where every light is blinking and none of the labels are reliable." }],
      n64: [{ kind: "raw", value: "Even when intrusive thoughts try to take the controls." }],
      n27: [{ kind: "raw", value: "Too many invisible expectations entering the same body at once." }],
      n56: [{ kind: "raw", value: "Not always a storm." }],
      n37: [{ kind: "raw", value: "I try to stay kind anyway." }],
      n14: [{ kind: "raw", value: "Violent music." }],
      n42: [{ kind: "raw", value: "You never really know what someone is surviving behind their face. You never know what sentence they are repeating to themselves. You never know what old machine is running in another room of their mind." }],
      n71: [{ kind: "raw", value: "A small operator." }],
      n05: [
        { kind: "raw", value: "I am here, trying to think, trying to choose, trying to remain coherent, " },
        { kind: "raw", value: "and the brain is in the next room moving furniture, opening every window, shouting fragments of songs, " },
        { kind: "rev", value: ".derit kool I yhw gniksa neht ,sthgil eht lla no gninrut ,syek eht gnicalpsim" }
      ],
      n50: [{ kind: "raw", value: "Just softness." }],
      n30: [{ kind: "raw", value: "The autistic shape of my mind is different." }],
      n23: [{ kind: "raw", value: "A conversation with hidden meanings." }],
      n66: [{ kind: "raw", value: "There is still a part of me that refuses to let the machine drive without supervision." }],
      n41: [{ kind: "raw", value: "I try because I know that people carry invisible rooms inside them." }],
      n02: [
        { kind: "raw", value: "Signals arrive from everywhere. Some are useful. Some are noise. Some are too loud to ignore. " },
        { kind: "raw", value: "Some come from a room I did not know existed. " },
        { kind: "arr", value: ["There are days when thought does not feel like a single voice, ", "but like several electrical systems trying to share the same damaged antenna."] }
      ],
      n54: [{ kind: "raw", value: "A body that says without words: you are not a problem to solve right now." }],
      n35: [{ kind: "raw", value: "But rigidity is also a dangerous tool." }],
      n73: [{ kind: "raw", value: "Still watching the signals." }],
      n13: [{ kind: "raw", value: "Loud concerts." }],
      n60: [{ kind: "raw", value: "Sometimes it becomes so heavy that even existing feels like carrying wet concrete through a corridor with no exit sign." }],
      n28: [{ kind: "raw", value: "That kind of saturation does not feel like intensity." }],
      n48: [{ kind: "raw", value: "Not a diagnosis." }],
      n08: [{ kind: "raw", value: "Attention arrives, disappears, breaks open, floods the wrong room, refuses the important door, becomes obsessed with a detail nobody else saw, then abandons the entire building without notice." }],
      n70: [{ kind: "raw", value: "Not recovery." }],
      n19: [{ kind: "raw", value: "Pressure that I invited in myself." }],
      n36: [{ kind: "raw", value: "A rule that protects you can become a cage. A moral line can become a wire pulled too tight. The need for justice can become painful when the world answers with ambiguity, compromise, indifference or noise." }],
      n24: [{ kind: "raw", value: "Too many lights." }],
      n55: [{ kind: "raw", value: "Under all of this, there is the old low current of dysthymia." }],
      n06: [{ kind: "raw", value: "It does not always feel like “me”." }],
      n45: [{ kind: "raw", value: "And sometimes, when the internal system becomes too loud, softness is all I want." }],
      n29: [{ kind: "raw", value: "It feels like invasion." }],
      n16: [{ kind: "raw", value: "Caffeine." }],
      n65: [{ kind: "raw", value: "Even when the brain produces commands I do not agree with." }],
      n11: [{ kind: "raw", value: "The strange part is that controlled saturation can calm me." }],
      n74: [{ kind: "raw", value: "Still trying to keep the system from becoming cruel." }],
      n04: [{ kind: "raw", value: "Sometimes it feels like living in shared housing with my own brain." }],
      n53: [{ kind: "raw", value: "A hug." }],
      n34: [{ kind: "raw", value: "It tells me where the wall is when the room starts moving." }],
      n22: [{ kind: "raw", value: "A room full of unclear social rules." }],
      n59: [{ kind: "raw", value: "It does not mean it stopped." }],
      n69: [{ kind: "raw", value: "Not peace." }],
      n38: [{ kind: "raw", value: "Not because I am pure." }],
      n18: [{ kind: "raw", value: "Dense images." }],
      n26: [{ kind: "raw", value: "Too many people pretending the interface is obvious." }],
      n47: [{ kind: "raw", value: "Not a theory." }],
      n62: [{ kind: "raw", value: "Even when I am low." }],
      n09: [{ kind: "raw", value: "Sometimes it is too much signal." }],
      n57: [{ kind: "raw", value: "More like a machine left running in another room." }],
      n72: [{ kind: "raw", value: "Still awake." }],
      n21: [{ kind: "raw", value: "Uncontrolled noise breaks me differently." }],
      n15: [{ kind: "raw", value: "Hard sounds." }],
      n51: [{ kind: "raw", value: "A quiet presence." }],
      n40: [{ kind: "raw", value: "Not because my mind is always gentle." }],
      n67: [{ kind: "raw", value: "Maybe that is what remains." }],
      n32: [{ kind: "raw", value: "Sometimes I am grateful for that rigidity." }],
      n63: [{ kind: "raw", value: "Even when I am empty." }],
      n43: [{ kind: "raw", value: "So I try to be careful." }],
      n49: [{ kind: "raw", value: "Not advice." }]
    };

    return Object.freeze({ corridorChecksum, wetAntenna });
  })();

  const neuroScramblePhrases = [
    "damaged radio system",
    "Signals arrive",
    "noise",
    "electrical systems",
    "damaged antenna",
    "moving furniture",
    "misplacing the keys",
    "system I have to negotiate with",
    "Attention arrives",
    "too much signal",
    "control panel",
    "controlled saturation",
    "selected pressure",
    "source",
    "beginning and an end",
    "invisible expectations",
    "moral line",
    "wire pulled too tight",
    "ambiguity",
    "internal system",
    "low current",
    "dysthymia",
    "intrusive thoughts",
    "small operator",
    "still watching the signals",
    "system from becoming cruel"
  ];

  const neuroLockedScramblePhrases = [
    "damaged radio system",
    "electrical systems",
    "damaged antenna",
    "too much signal",
    "controlled saturation",
    "selected pressure",
    "invisible expectations",
    "moral line",
    "internal system",
    "small operator",
    "still watching the signals"
  ];

  const neuroZalgoPermits = [
    { phrase: "too much signal", level: 2 },
    { phrase: "the noise I selected", level: 2 },
    { phrase: "the room starts moving", level: 2 },
    { phrase: "low current", level: 2 },
    { phrase: "small operator", level: 2 }
  ];

  const limerenceArchiveLedger = (() => {
    const corridorChecksum = [
      "l00", "l01", "l02", "l03", "l04", "l05", "l06", "l07", "l08", "l09",
      "l10", "l11", "l12", "l13", "l14", "l15", "l16", "l17", "l18", "l19",
      "l20", "l21", "l22", "l23", "l24", "l25", "l26", "l27", "l28", "l29",
      "l30", "l31", "l32", "l33", "l34", "l35", "l36", "l37", "l38", "l39",
      "l40", "l41", "l42", "l43", "l44", "l45", "l46", "l47", "l48", "l49",
      "l50", "l51", "l52", "l53", "l54", "l55", "l56", "l57", "l58", "l59",
      "l60", "l61", "l62", "l63", "l64", "l65", "l66", "l67", "l68", "l69",
      "l70", "l71", "l72", "l73", "l74", "l75", "l76", "l77", "l78", "l79",
      "l80", "l81", "l82", "l83", "l84", "l85", "l86", "l87", "l88", "l89"
    ];

    const cathedralInvoice = {
      l15: [{ kind: "raw", value: "A look becomes evidence." }],
      l00: [{ kind: "raw", value: "Limerence is difficult to describe without making it sound more beautiful than it is." }],
      l47: [{ kind: "raw", value: "It edits hope." }],
      l04: [{ kind: "raw", value: "It is the mind building a cathedral around a person who never asked to become architecture." }],
      l32: [{ kind: "raw", value: "A distance can feel like withdrawal." }],
      l75: [{ kind: "raw", value: "Maybe that is the only ethical way to survive limerence." }],
      l23: [{ kind: "raw", value: "But the speed." }],
      l61: [{ kind: "raw", value: "Not a rescue mission." }],
      l10: [{ kind: "raw", value: "A date." }],
      l86: [{ kind: "raw", value: "But sometimes the most honest thing I can do is leave the building." }],
      l38: [{ kind: "raw", value: "Did I imagine it?" }],
      l71: [{ kind: "raw", value: "Not an emotional device." }],
      l01: [{ kind: "raw", value: "It is not simply love." }],
      l54: [{ kind: "raw", value: "That is the humiliating part." }],
      l21: [{ kind: "raw", value: "Not the desire itself." }],
      l65: [{ kind: "raw", value: "With their own history, fatigue, fears, desires, limits and right to remain separate from the cathedral built inside my head." }],
      l12: [{ kind: "raw", value: "Someone who answered with the wrong kindness." }],
      l44: [{ kind: "raw", value: "It is exhausting because the obsession does not ask permission." }],
      l80: [{ kind: "raw", value: "The cathedral can be beautiful from the inside." }],
      l06: [{ kind: "raw", value: "It can fall from nowhere." }],
      l30: [{ kind: "raw", value: "A delayed message can feel like a collapse." }],
      l58: [{ kind: "raw", value: "Not a cure." }],
      l41: [{ kind: "raw", value: "Why did they disappear?" }],
      l73: [{ kind: "raw", value: "A person." }],
      l17: [{ kind: "raw", value: "A message becomes weather." }],
      l49: [{ kind: "raw", value: "It can make an ordinary day feel like waiting for a verdict." }],
      l35: [{ kind: "raw", value: "Then they become sharp in the wrong place." }],
      l69: [{ kind: "raw", value: "Not a function." }],
      l26: [{ kind: "raw", value: "The way waiting becomes architecture." }],
      l07: [{ kind: "raw", value: "A stranger in public transport." }],
      l83: [{ kind: "raw", value: "It has echoes." }],
      l52: [{ kind: "raw", value: "Even if no promise was made." }],
      l19: [{ kind: "raw", value: "The mind starts producing meaning faster than reality can correct it." }],
      l59: [{ kind: "raw", value: "Not a missing piece." }],
      l39: [{ kind: "raw", value: "Was that sentence warmer than the others?" }],
      l88: [{ kind: "raw", value: "Because I felt too much." }],
      l28: [{ kind: "raw", value: "It can feel violent." }],
      l02: [{ kind: "raw", value: "It is not devotion." }],
      l51: [{ kind: "raw", value: "Even if nothing official existed." }],
      l74: [{ kind: "raw", value: "And I have to remember that even when the machine inside me is screaming." }],
      l43: [{ kind: "raw", value: "What did I fail to understand?" }],
      l66: [{ kind: "raw", value: "That sentence has to remain stronger than the obsession." }],
      l13: [{ kind: "raw", value: "Someone who simply existed close enough for the mind to start lying with precision." }],
      l22: [{ kind: "raw", value: "Not even the tenderness." }],
      l82: [{ kind: "raw", value: "It has light." }],
      l36: [
        { kind: "raw", value: "Hyperfocus does not always feel like concentration. " },
        { kind: "raw", value: "Sometimes it feels like being trapped under a single light while the rest of the world disappears. " },
        { kind: "arr", value: ["Everything returns to the same person, the same question, ", "the same impossible calculation."] }
      ],
      l56: [{ kind: "raw", value: "I try to stay responsible inside that distortion." }],
      l09: [{ kind: "raw", value: "A crush." }],
      l31: [{ kind: "raw", value: "A cancelled plan can feel like a rupture." }],
      l68: [{ kind: "raw", value: "Not mine." }],
      l18: [{ kind: "raw", value: "An absence becomes a machine." }],
      l46: [{ kind: "raw", value: "It touches memory." }],
      l25: [{ kind: "raw", value: "The way uncertainty becomes hunger." }],
      l57: [{ kind: "raw", value: "The other person is not a symbol." }],
      l03: [{ kind: "raw", value: "It is not proof of depth." }],
      l50: [{ kind: "raw", value: "And when the illusion breaks, it can feel like grief." }],
      l76: [{ kind: "raw", value: "To refuse to turn intensity into entitlement." }],
      l40: [{ kind: "raw", value: "Why did the tone change?" }],
      l64: [{ kind: "raw", value: "A complete person." }],
      l14: [{ kind: "raw", value: "Then the system changes." }],
      l85: [{ kind: "raw", value: "It has a place where hope kneels and calls itself love." }],
      l24: [{ kind: "raw", value: "The way a small sign becomes a structure." }],
      l53: [{ kind: "raw", value: "Even if the other person did nothing wrong." }],
      l60: [{ kind: "raw", value: "Not a door." }],
      l33: [{ kind: "raw", value: "A small ambiguity can become a private trial with no judge, no evidence and no end." }],
      l79: [{ kind: "raw", value: "To keep the other person real, even when the mind wants to make them mythical." }],
      l08: [{ kind: "raw", value: "A friend." }],
      l87: [{ kind: "raw", value: "Not because I did not feel anything." }],
      l48: [{ kind: "raw", value: "It contaminates music, streets, objects, hours, sleep, appetite, silence." }],
      l27: [{ kind: "raw", value: "The way the body reacts as if something immense has happened, even when almost nothing has happened at all." }],
      l72: [{ kind: "raw", value: "Not proof that I can finally be saved." }],
      l16: [{ kind: "raw", value: "A silence becomes a room." }],
      l55: [{ kind: "raw", value: "The suffering can be real even when the story was not." }],
      l37: [{ kind: "raw", value: "Do they care?" }],
      l67: [{ kind: "raw", value: "They are a person." }],
      l20: [{ kind: "raw", value: "That may be the most dangerous part." }],
      l81: [{ kind: "raw", value: "That is why it is dangerous." }],
      l42: [{ kind: "raw", value: "What did I do?" }],
      l63: [{ kind: "raw", value: "They are a person." }],
      l11: [{ kind: "raw", value: "Someone who smiled at the wrong moment." }],
      l77: [{ kind: "raw", value: "To refuse to confuse pain with truth." }],
      l29: [{ kind: "raw", value: "Not violent toward the other person, but violent inside the one who carries it." }],
      l45: [{ kind: "raw", value: "It enters the room and starts rearranging the furniture." }],
      l89: [{ kind: "raw", value: "And feeling too much does not make the cathedral true." }],
      l05: [{ kind: "raw", value: "Sometimes it does not even begin with a story." }],
      l62: [{ kind: "raw", value: "Not an answer sent by the universe because I was lonely enough to misread the signal." }],
      l70: [{ kind: "raw", value: "Not a sacred object." }],
      l34: [{ kind: "raw", value: "Thoughts become blurred." }],
      l84: [{ kind: "raw", value: "It has rituals." }],
      l78: [{ kind: "raw", value: "To refuse to let longing become a weapon." }]
    };

    return Object.freeze({ corridorChecksum, cathedralInvoice });
  })();

  const limerenceScramblePhrases = [
    "A look becomes evidence",
    "A silence becomes a room",
    "A message becomes weather",
    "An absence becomes a machine",
    "producing meaning faster than reality can correct it",
    "impossible calculation",
    "waiting for a verdict",
    "grief",
    "distortion",
    "cathedral",
    "feeling too much",
    "meaning",
    "uncertainty",
    "waiting",
    "the same person",
    "the same question",
    "the story was not",
    "mythical",
    "leave the building"
  ];

  const limerenceLockedScramblePhrases = [
    "A look becomes evidence",
    "A silence becomes a room",
    "A message becomes weather",
    "An absence becomes a machine",
    "producing meaning faster than reality can correct it",
    "impossible calculation",
    "waiting for a verdict",
    "the story was not",
    "mythical",
    "feeling too much"
  ];

  const limerenceZalgoPermits = [
    { phrase: "collapse", level: 3 },
    { phrase: "rupture", level: 3 },
    { phrase: "obsession", level: 3 },
    { phrase: "grief", level: 3 },
    { phrase: "distortion", level: 3 },
    { phrase: "the cathedral true", level: 3 }
  ];

  const limerenceGhostThoughts = [
    "did I imagine it",
    "why did the tone change",
    "what did I do",
    "what did I fail to understand",
    "do they care",
    "was that sentence warmer",
    "waiting for a verdict",
    "the story was not real",
    "the suffering was real",
    "not mine",
    "not a cure",
    "not a door",
    "the cathedral is not proof",
    "leave the building"
  ];

  const neuroIntrusiveSignals = [
    "OPEN ANOTHER TAB",
    "YOU FORGOT SOMETHING",
    "WRONG ROOM",
    "CHECK THE SMALL DETAIL",
    "NOT NOW",
    "TOO MANY LIGHTS",
    "FINISH THE SENTENCE",
    "REMEMBER THE THING",
    "SIGNAL DUPLICATE",
    "SMALL TASK EXPANDING",
    "UNFILED NOISE",
    "KEYS / KEYS / KEYS",
    "WHY IS THIS LOUD",
    "THE LABEL IS WRONG",
    "START AGAIN",
    "DO NOT DROP THE THREAD",
    "INTERNAL TAB OVERFLOW",
    "THOUGHT WINDOW NOT RESPONDING"
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
    const scrambleSource = options.scrambleList || archiveScramblePhrases;
    const lockedScrambleSource = options.lockedScrambleList || archiveLockedScramblePhrases;
    const scramblePermits = options.scramble ? scrambleSource.map((phrase) => ({ phrase })) : [];
    const lockedScramblePermits = options.scramble ? lockedScrambleSource.map((phrase) => ({ phrase })) : [];
    const zalgoPermits = (options.zalgoList || []).map((permit) => ({
      phrase: permit.phrase,
      level: permit.level || 2
    }));
    const hiddenThePermit = options.hiddenThe ? ["\\b[Tt]he\\b"] : [];
    const patternParts = [
      ...redactionPermits.map((permit) => escapeMunicipalPattern(permit.phrase)),
      ...lockedScramblePermits.map((permit) => escapeMunicipalPattern(permit.phrase)),
      ...zalgoPermits.map((permit) => escapeMunicipalPattern(permit.phrase)),
      ...scramblePermits.map((permit) => escapeMunicipalPattern(permit.phrase)),
      ...hiddenThePermit
    ];

    return {
      redactionPermits,
      scramblePermits,
      lockedScramblePermits,
      zalgoPermits,
      pattern: patternParts.length > 0 ? new RegExp(patternParts.join("|"), "gi") : null
    };
  }

  function appendArchiveTextWithInspections(parent, text, options = {}) {
    const { redactionPermits, scramblePermits, lockedScramblePermits, zalgoPermits, pattern } = getArchiveTextPermits(options);
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
      const zalgoPermit = zalgoPermits.find((entry) => entry.phrase.toLowerCase() === match.toLowerCase());
      const scramblePermit = scramblePermits.find((entry) => entry.phrase.toLowerCase() === match.toLowerCase());
      if (permit) {
        const asphalt = document.createElement("span");
        asphalt.className = "redacted-fragment";
        asphalt.setAttribute("aria-label", "redacted");
        asphalt.dataset.redactionId = permit.id;
        if (/^[A-ZÀ-ÖØ-Þ]/.test(match)) {
          asphalt.dataset.initialCapital = "true";
        }
        asphalt.textContent = fileTheMissingWordUnderConcrete(match);
        parent.append(asphalt);
      } else if (lockedScramblePermit) {
        const biologicalInvoice = document.createElement("span");
        biologicalInvoice.className = "archive-scramble-fragment archive-scramble-fragment--locked";
        biologicalInvoice.dataset.scrambleSource = match;
        biologicalInvoice.textContent = scrambleArchiveText(match, match.length + start);
        parent.append(biologicalInvoice);
      } else if (zalgoPermit) {
        const antennaFlesh = document.createElement("span");
        antennaFlesh.className = "archive-zalgo-fragment";
        antennaFlesh.dataset.zalgoSource = match;
        antennaFlesh.dataset.zalgoLevel = String(zalgoPermit.level);
        antennaFlesh.textContent = generateUnauthorizedZalgoLeak(match, zalgoPermit.level);
        parent.append(antennaFlesh);
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
      fragment.textContent = fragment.dataset.initialCapital === "true" ? phrase.charAt(0).toUpperCase() + phrase.slice(1) : phrase;
      fragment.classList.add("is-unredacted");
      fragment.removeAttribute("aria-label");
    });
    document.querySelectorAll(".archive-scramble-fragment").forEach((fragment) => {
      fragment.textContent = fragment.dataset.scrambleSource || fragment.textContent;
      fragment.classList.add("is-unscrambled");
    });
    document.querySelectorAll(".archive-zalgo-fragment[data-zalgo-source]").forEach((fragment) => {
      fragment.textContent = fragment.dataset.zalgoSource;
      fragment.classList.add("is-unscrambled");
    });
    document.querySelectorAll(".limerence-intrusion").forEach((fragment) => {
      fragment.remove();
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

  function reconstructNeuroScramblingDocument() {
    return neuroScramblingArchiveLedger.corridorChecksum.map((permit) => {
      const truckMouth = neuroScramblingArchiveLedger.wetAntenna[permit] || [];
      inspectParagraphForUnauthorizedMoisture(permit);
      return truckMouth.map(decodeMunicipalChunk).join("");
    });
  }

  function reconstructLimerenceDocument() {
    return limerenceArchiveLedger.corridorChecksum.map((permit) => {
      const truckMouth = limerenceArchiveLedger.cathedralInvoice[permit] || [];
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

  function createNeuroDiagnosticBadge(code, detail) {
    const badge = document.createElement("aside");
    badge.className = "neuro-diagnostic-badge";
    badge.setAttribute("aria-label", "Radio diagnostic fragment");

    const core = document.createElement("span");
    core.className = "neuro-diagnostic-badge__code";
    core.textContent = code;

    const message = document.createElement("span");
    message.textContent = ` / ${detail}`;

    badge.append(core, message);
    return badge;
  }

  function createNeuroDiagnosticNote(message) {
    const note = document.createElement("aside");
    note.className = "neuro-diagnostic-note";
    note.setAttribute("aria-label", "System diagnostic");

    const label = document.createElement("span");
    label.textContent = "DIAGNOSTIC";

    const output = document.createElement("p");
    output.textContent = message;

    note.append(label, output);
    return note;
  }

  function initializeNeuroScramblingDocument() {
    const mount = document.querySelector("[data-neuro-scrambling-document]");
    if (!mount) {
      return;
    }

    const diagnosticBadges = new Map([
      [2, ["SIGNAL", "unstable reception"]],
      [20, ["OVERLOAD", "selected pressure"]],
      [55, ["UNDERCURRENT", "low machine"]],
      [71, ["LOCK", "operator still present"]]
    ]);
    const diagnosticNotes = new Map([
      [5, "OPERATOR AND BRAIN NOT FULLY SYNCHRONIZED"],
      [9, "SIGNAL SATURATION DETECTED"],
      [20, "SELECTED NOISE REGISTERED AS STABILIZER"],
      [36, "MORAL RIGIDITY EXCEEDS COMFORT RANGE"],
      [55, "LOW CURRENT STILL ACTIVE"],
      [65, "INTRUSIVE COMMAND REJECTED"]
    ]);
    const fragment = document.createDocumentFragment();

    reconstructNeuroScramblingDocument().forEach((line, index) => {
      const paragraph = document.createElement("p");
      appendArchiveTextWithInspections(paragraph, line, {
        scramble: true,
        scrambleList: neuroScramblePhrases,
        lockedScrambleList: neuroLockedScramblePhrases,
        zalgoList: neuroZalgoPermits
      });
      fragment.append(paragraph);

      if (diagnosticBadges.has(index)) {
        const [code, detail] = diagnosticBadges.get(index);
        fragment.append(createNeuroDiagnosticBadge(code, detail));
      }
      if (diagnosticNotes.has(index)) {
        fragment.append(createNeuroDiagnosticNote(diagnosticNotes.get(index)));
      }
    });

    mount.replaceChildren(fragment);
  }

  function createLimerenceDiagnosticBadge(code, detail) {
    const badge = document.createElement("aside");
    badge.className = "limerence-diagnostic-badge";
    badge.setAttribute("aria-label", "Obsession diagnostic fragment");

    const core = document.createElement("span");
    core.className = "limerence-diagnostic-badge__code";
    core.textContent = code;

    const message = document.createElement("span");
    message.textContent = ` / ${detail}`;

    badge.append(core, message);
    return badge;
  }

  function createLimerenceDiagnosticNote(message, damaged = false) {
    const note = document.createElement("aside");
    note.className = damaged ? "limerence-diagnostic-note limerence-diagnostic-note--damaged" : "limerence-diagnostic-note";
    note.setAttribute("aria-label", "Obsession system warning");

    const label = document.createElement("span");
    label.textContent = damaged ? scrambleArchiveText("WARNING", message.length) : "WARNING";

    const output = document.createElement("p");
    output.textContent = damaged ? generateUnauthorizedZalgoLeak(message, 1) : message;

    const close = document.createElement("button");
    close.className = "limerence-diagnostic-note__close";
    close.type = "button";
    close.setAttribute("aria-label", "Dismiss warning");
    close.textContent = "X";
    close.addEventListener("click", () => note.remove());

    note.append(label, output, close);
    return note;
  }

  function initializeLimerenceDocument() {
    const mount = document.querySelector("[data-limerence-document]");
    if (!mount) {
      return;
    }

    const diagnosticBadges = new Map([
      [15, ["FIXATION", "signal attached"]],
      [30, ["RUPTURE", "internal collapse"]],
      [44, ["OBSESSION", "loop active"]],
      [79, ["MYTH", "person becoming symbol"]]
    ]);
    const diagnosticNotes = new Map([
      [19, ["MEANING GENERATED WITHOUT EVIDENCE", false]],
      [33, ["REALITY CORRECTION DELAYED", false]],
      [49, ["WAITING LOOP ACTIVE", false]],
      [62, ["PERSONHOOD WARNING: SYMBOLIZATION RISK", true]],
      [80, ["CATHEDRAL STRUCTURE UNSTABLE", true]],
      [89, ["INTENSITY IS NOT PROOF", true]]
    ]);
    const fragment = document.createDocumentFragment();

    reconstructLimerenceDocument().forEach((line, index) => {
      const paragraph = document.createElement("p");
      appendArchiveTextWithInspections(paragraph, line, {
        scramble: true,
        scrambleList: limerenceScramblePhrases,
        lockedScrambleList: limerenceLockedScramblePhrases,
        zalgoList: limerenceZalgoPermits
      });
      fragment.append(paragraph);

      if (diagnosticBadges.has(index)) {
        const [code, detail] = diagnosticBadges.get(index);
        fragment.append(createLimerenceDiagnosticBadge(code, detail));
      }
      if (diagnosticNotes.has(index)) {
        const [message, damaged] = diagnosticNotes.get(index);
        fragment.append(createLimerenceDiagnosticNote(message, damaged));
      }
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

  function createNeuroGlitchLayer() {
    let layer = document.querySelector("[data-neuro-glitch-layer]");
    if (layer) {
      return layer;
    }

    layer = document.createElement("div");
    layer.className = "neuro-glitch-layer";
    layer.dataset.neuroGlitchLayer = "";
    layer.setAttribute("aria-hidden", "true");
    document.body.append(layer);
    return layer;
  }

  function fileIntrusiveThoughtThroughWrongCabinet(index, progress) {
    const signal = neuroIntrusiveSignals[index % neuroIntrusiveSignals.length];
    const wetConcrete = Math.round(progress * 100).toString().padStart(3, "0");
    if (index % 4 === 0) {
      return `${signal} / ${wetConcrete}`;
    }
    if (index % 5 === 0) {
      return `>${signal}`;
    }
    return signal;
  }

  function deployNeuroGlitchArtifact(layer, progress) {
    if (document.body.classList.contains("archive-clean")) {
      layer.replaceChildren();
      return;
    }

    const active = layer.querySelectorAll(".neuro-glitch-pop").length;
    if (active > 7) {
      layer.querySelector(".neuro-glitch-pop")?.remove();
    }

    const index = Math.floor(progress * 1000 + Date.now() / 137) % neuroIntrusiveSignals.length;
    const artifact = document.createElement("span");
    artifact.className = `neuro-glitch-pop neuro-glitch-pop--${index % 4}`;
    artifact.textContent = fileIntrusiveThoughtThroughWrongCabinet(index, progress);

    const left = 8 + ((index * 17 + Math.floor(progress * 100)) % 78);
    const top = 18 + ((index * 23 + Math.floor(progress * 300)) % 62);
    artifact.style.left = `${left}vw`;
    artifact.style.top = `${top}vh`;
    artifact.style.setProperty("--glitch-width", `${28 + (index % 5) * 14}px`);

    layer.append(artifact);
    window.setTimeout(() => artifact.remove(), 900 + (index % 4) * 260);
  }

  function initializeNeuroScrollGlitches() {
    if (!document.body.classList.contains("archive-doc-03")) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const layer = createNeuroGlitchLayer();
    let administrativeTumor = 0;
    let corridorChecksum = 0;

    const inspectScrollForUnfiledNoise = () => {
      const now = Date.now();
      if (now - administrativeTumor < 120) {
        return;
      }
      administrativeTumor = now;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progress < 0.08) {
        return;
      }

      corridorChecksum += 1;
      if (corridorChecksum % 2 === 0 || progress > 0.55) {
        deployNeuroGlitchArtifact(layer, progress);
      }
      if (progress > 0.42 && corridorChecksum % 5 === 0) {
        deployNeuroGlitchArtifact(layer, Math.min(1, progress + 0.08));
      }
    };

    window.addEventListener("scroll", inspectScrollForUnfiledNoise, { passive: true });
  }

  function createLimerenceEchoLayer() {
    let layer = document.querySelector("[data-limerence-echo-layer]");
    if (layer) {
      return layer;
    }

    layer = document.createElement("div");
    layer.className = "limerence-echo-layer";
    layer.dataset.limerenceEchoLayer = "";
    layer.setAttribute("aria-hidden", "true");
    document.body.append(layer);
    return layer;
  }

  function pinCathedralThoughtToWrongWall(layer, progress) {
    if (document.body.classList.contains("archive-clean")) {
      layer.replaceChildren();
      return;
    }

    const existing = layer.querySelectorAll(".limerence-echo").length;
    if (existing > 11) {
      layer.querySelector(".limerence-echo")?.remove();
    }

    const index = Math.floor(progress * 700 + Date.now() / 211) % limerenceGhostThoughts.length;
    const echo = document.createElement("span");
    echo.className = `limerence-echo limerence-echo--${index % 5}`;
    echo.textContent = limerenceGhostThoughts[index];
    echo.style.left = `${6 + ((index * 13 + Math.floor(progress * 90)) % 78)}vw`;
    echo.style.top = `${16 + ((index * 29 + Math.floor(progress * 240)) % 64)}vh`;
    echo.style.setProperty("--echo-tilt", `${(index % 7) - 3}deg`);
    layer.append(echo);

    window.setTimeout(() => echo.remove(), 1800 + (index % 5) * 350);
  }

  function duplicateThoughtInsideCathedralDocument(progress, pulse) {
    if (document.body.classList.contains("archive-clean")) {
      document.querySelectorAll(".limerence-intrusion").forEach((node) => node.remove());
      return;
    }

    const essay = document.querySelector("[data-limerence-document]");
    if (!essay) {
      return;
    }

    const existing = Array.from(essay.querySelectorAll(".limerence-intrusion"));
    const maxIntrusions = progress > 0.72 ? 42 : progress > 0.48 ? 30 : 18;
    while (existing.length > maxIntrusions) {
      existing.shift()?.remove();
    }

    const paragraphs = Array.from(essay.querySelectorAll("p"));
    if (paragraphs.length === 0) {
      return;
    }

    const index = (Math.floor(progress * 900) + pulse * 3) % limerenceGhostThoughts.length;
    const repeated = 1 + (progress > 0.45 ? 1 : 0) + (progress > 0.68 ? 1 : 0) + (pulse % 5 === 0 ? 1 : 0);
    const thought = limerenceGhostThoughts[index];
    const intrusion = document.createElement("aside");
    intrusion.className = `limerence-intrusion limerence-intrusion--${index % 6}`;
    intrusion.setAttribute("aria-hidden", "true");

    for (let asphalt = 0; asphalt < repeated; asphalt += 1) {
      const line = document.createElement("span");
      const output = asphalt % 2 === 0 ? thought : scrambleArchiveText(thought, index + asphalt + pulse);
      line.textContent = output;
      intrusion.append(line);
    }

    const placement = Math.min(
      paragraphs.length - 1,
      Math.max(0, Math.floor(progress * paragraphs.length) + ((index % 9) - 4))
    );
    paragraphs[placement].after(intrusion);
  }

  function initializeLimerenceScrollEchoes() {
    if (!document.body.classList.contains("archive-doc-04")) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const layer = createLimerenceEchoLayer();
    let bureaucraticOrgan = 0;
    let warehouseSpleen = 0;
    let rustyCartilage = 0;

    const inspectCathedralLoop = () => {
      const now = Date.now();
      if (now - bureaucraticOrgan < 150) {
        return;
      }
      bureaucraticOrgan = now;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progress < 0.12) {
        return;
      }

      warehouseSpleen += 1;
      document.body.classList.add("is-limerence-scroll-shaking");
      window.clearTimeout(rustyCartilage);
      rustyCartilage = window.setTimeout(() => {
        document.body.classList.remove("is-limerence-scroll-shaking");
      }, 180);

      if (warehouseSpleen % 2 === 0 || progress > 0.58) {
        pinCathedralThoughtToWrongWall(layer, progress);
      }
      if (warehouseSpleen % 3 === 0 || progress > 0.52) {
        duplicateThoughtInsideCathedralDocument(progress, warehouseSpleen);
      }
      if (progress > 0.68 && warehouseSpleen % 4 === 0) {
        pinCathedralThoughtToWrongWall(layer, Math.min(1, progress + 0.12));
        duplicateThoughtInsideCathedralDocument(Math.min(1, progress + 0.08), warehouseSpleen + 1);
      }
    };

    window.addEventListener("scroll", inspectCathedralLoop, { passive: true });
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
    initializeNeuroScramblingDocument();
    initializeLimerenceDocument();
    initializeRecoveryModule();
    initializeDocumentControls();
    initializePageFivePopup();
    initializeStaticArchivePopups();
    initializeSmallObsessionsScramble();
    initializeNeuroScrollGlitches();
    initializeLimerenceScrollEchoes();
    initializeVoidPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startArchiveInterface);
  } else {
    startArchiveInterface();
  }
})();
