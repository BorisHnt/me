(function () {
  "use strict";

  const githubPages = "https://borishnt.github.io/";

  const personalWebProjects = [
    {
      title: "Masks of Shadow",
      slug: "masks_of_shadow",
      url: `${githubPages}masks_of_shadow`,
      type: "Game / Global Game Jam",
      status: "Playable incident",
      description: "A video game created during the Global Game Jam."
    },
    {
      title: "Pix Pics Colorz",
      slug: "pix-pics-colorz",
      url: `${githubPages}pix-pics-colorz`,
      type: "Creative Tool",
      status: "Chromatic machinery",
      description: "A visual and color-oriented web experiment."
    },
    {
      title: "JpegCore",
      slug: "JpegCore",
      url: `${githubPages}JpegCore`,
      type: "Image Tool",
      status: "Compression organism",
      description: "A JPEG-focused experimental tool."
    },
    {
      title: "QRCode",
      slug: "QRCode",
      url: `${githubPages}QRCode`,
      type: "Utility Tool",
      status: "Operational",
      description: "A QR code generation utility."
    },
    {
      title: "Text to SVG",
      slug: "text-to-svg/#text-to-svg",
      url: `${githubPages}text-to-svg/#text-to-svg`,
      type: "SVG Tool",
      status: "Vectorized",
      description: "A tool for converting text into SVG-based output."
    },
    {
      title: "FK SoundCloud",
      slug: "fk-soundcloud",
      url: `${githubPages}fk-soundcloud`,
      type: "Audio / Web Tool",
      status: "Audio debris",
      description: "A SoundCloud-related web experiment."
    },
    {
      title: "Espresso SVG Editor",
      slug: "Espresso_SVG_Editor",
      url: `${githubPages}Espresso_SVG_Editor`,
      type: "SVG Editor",
      status: "Caffeinated vector system",
      description: "A browser-based SVG editing experiment."
    },
    {
      title: "8bits Game Editor",
      slug: "8bits_Game_Editor",
      url: `${githubPages}8bits_Game_Editor`,
      type: "Game Editor",
      status: "Pixel apparatus",
      description: "A small editor for retro-style game creation."
    },
    {
      title: "Chiptune Composer",
      slug: "chiptune_composer",
      url: `${githubPages}chiptune_composer`,
      type: "Music Tool",
      status: "Square wave containment unit",
      description: "A browser-based chiptune composition experiment."
    },
    {
      title: "Blockchain Idle",
      slug: "blockchain_idle",
      url: `${githubPages}blockchain_idle`,
      type: "Idle Game",
      status: "Financial hallucination",
      description: "An idle-game experiment around blockchain-like mechanics."
    }
  ];

  const personalGithubProjects = [
    {
      title: "LAN Messenger P2P",
      repo: "https://github.com/BorisHnt/LAN-Messenger-P2P-",
      type: "Network / Messaging",
      status: "Local transmission",
      description: "A peer-to-peer LAN messaging project."
    }
  ];

  const fortyTwoWebProjects = [
    {
      title: "Intra+ Presentation",
      slug: "intra-plus-presentation",
      url: `${githubPages}intra-plus-presentation`,
      type: "42 / LMS Redesign",
      status: "Interface overhaul",
      description: "A presentation website for a complete redesign concept of the 42 Next LMS."
    },
    {
      title: "Fuck PNG Interlacing",
      slug: "fuck-png-interlacing",
      url: `${githubPages}fuck-png-interlacing`,
      type: "42 Utility",
      status: "Image sanitation",
      description: "A utility made to help with PNG interlacing problems."
    },
    {
      title: "Business Quiz",
      slug: "business_quiz/#/",
      url: `${githubPages}business_quiz/#/`,
      type: "Learning / Quiz",
      status: "Question machine",
      description: "A quiz-style tool created to help with learning and practice."
    }
  ];

  const fortyTwoGithubProjects = [
    {
      title: "Flake8ator",
      repo: "https://github.com/BorisHnt/flake8ator",
      type: "Python / Code Quality",
      status: "Compliance violence",
      description: "A tool made to help 42 students deal with Python style and Flake8-related issues."
    },
    {
      title: "42 Station Cleaner",
      repo: "https://github.com/BorisHnt/42StationCleaner",
      type: "System Utility",
      status: "Cache exorcism",
      description: "A cleaning utility for 42 school workstations."
    },
    {
      title: "LikeToMoveIt",
      repo: "https://github.com/BorisHnt/LikeToMoveIt",
      type: "42 Utility",
      status: "Relocation protocol",
      description: "A utility project made to help 42 students move, organize or manage files more easily."
    }
  ];

  window.BH_PROJECTS = {
    personal: {
      webExperiments: [
        personalWebProjects[0],
        personalWebProjects[1],
        personalWebProjects[9]
      ],
      toolsEditors: [
        personalWebProjects[2],
        personalWebProjects[3],
        personalWebProjects[4],
        personalWebProjects[6],
        personalWebProjects[7]
      ],
      audioGameStrange: [
        personalWebProjects[5],
        personalWebProjects[8]
      ],
      localGithub: personalGithubProjects
    },
    fortyTwo: {
      webTools: [
        fortyTwoWebProjects[0],
        fortyTwoWebProjects[1]
      ],
      lmsIntra: [
        fortyTwoWebProjects[2]
      ],
      githubUtilities: [
        fortyTwoGithubProjects[0]
      ],
      workstationSurvival: [
        fortyTwoGithubProjects[1],
        fortyTwoGithubProjects[2]
      ]
    }
  };
})();
