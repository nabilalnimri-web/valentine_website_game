import { Alien } from "@/lib/types";

export const aliens: Alien[] = [
  {
    id: "heatblast",
    name: "Heatblast",
    species: "Pyronite",
    homePlanet: "Pyros",
    bodyType: "Humanoid",
    seriesAppearances: ["OS", "AF", "UA", "OV", "Reboot"],
    firstAppearance: {
      episode: "And Then There Were 10",
      season: 1,
      series: "Ben 10 (Original)"
    },
    voiceActors: [
      { name: "Steven Blum", series: "OS" },
      { name: "Dee Bradley Baker", series: "AF/UA/OV" },
      { name: "David Kaye", series: "Reboot" }
    ],
    omnitrixUsers: ["Ben Tennyson", "Gwen 10", "Albedo"],
    abilities: [
      {
        name: "Pyrokinesis",
        description: "Can generate, manipulate, and project intense fire and heat.",
        icon: "fire"
      },
      {
        name: "Fire Projectiles",
        description: "Throw fireballs, fire beams.",
        icon: "flame"
      },
      {
        name: "Fire Flight",
        description: "Propel self using fire jets.",
        icon: "wind"
      }
    ],
    weaknesses: [
      "Vulnerable to water and extreme cold",
      "Powers diminish in rainy or wet environments",
      "Can be extinguished"
    ],
    images: {
      primary: "https://vignette.wikia.nocookie.net/ben10/images/e/e5/Heatblast_os_render.png",
      gallery: [
        "https://vignette.wikia.nocookie.net/ben10/images/e/e5/Heatblast_os_render.png",
        "https://vignette.wikia.nocookie.net/ben10/images/7/7b/Heatblast_af_render.png"
      ]
    },
    type: "base",
    trivia: [
      "Heatblast was the first alien Ben ever transformed into.",
      "His species, Pyronites, live on a sun-like planet."
    ],
    relatedAliens: ["Swampfire", "NRG"],
    description: "Heatblast is a Pyronite from the planet Pyros. He is a magma-based lifeform that can control fire at will."
  },
  {
    id: "four-arms",
    name: "Four Arms",
    species: "Tetramand",
    homePlanet: "Khoros",
    bodyType: "Humanoid",
    seriesAppearances: ["OS", "UA", "OV", "Reboot"],
    firstAppearance: {
      episode: "Washington B.C.",
      season: 1,
      series: "Ben 10 (Original)"
    },
    voiceActors: [
      { name: "Richard McGonagle", series: "OS" },
      { name: "John DiMaggio", series: "OV" }
    ],
    omnitrixUsers: ["Ben Tennyson", "Gwen 10"],
    abilities: [
      {
        name: "Superhuman Strength",
        description: "Incredible physical power, capable of lifting massive objects.",
        icon: "dumbbell"
      },
      {
        name: "Enhanced Durability",
        description: "Highly resistant to physical damage.",
        icon: "shield"
      }
    ],
    weaknesses: [
      "His size makes him a large target",
      "Not very agile compared to smaller aliens"
    ],
    images: {
      primary: "https://vignette.wikia.nocookie.net/ben10/images/d/df/Four_arms_os_render.png",
      gallery: []
    },
    type: "base",
    trivia: [
      "Tetramand females are generally stronger than males."
    ],
    relatedAliens: ["Humungousaur"],
    description: "Four Arms is a Tetramand from the planet Khoros. He is Ben's go-to alien for raw strength and combat."
  },
  {
    id: "alien-x",
    name: "Alien X",
    species: "Celestialsapien",
    homePlanet: "Forge of Creation",
    bodyType: "Humanoid",
    seriesAppearances: ["AF", "UA", "OV", "Reboot"],
    firstAppearance: {
      episode: "X = Ben + 2",
      season: 1,
      series: "Ben 10: Alien Force"
    },
    voiceActors: [
      { name: "Yuri Lowenthal", series: "AF/UA/OV" }
    ],
    omnitrixUsers: ["Ben Tennyson"],
    abilities: [
      {
        name: "Omnipotence",
        description: "Reality-warping powers that can do almost anything.",
        icon: "sparkles"
      }
    ],
    weaknesses: [
      "Requires internal debate between Serena and Bellicus to act."
    ],
    images: {
      primary: "https://vignette.wikia.nocookie.net/ben10/images/f/f3/Alien_X_AF_Render.png",
      gallery: []
    },
    type: "base",
    trivia: [
      "Alien X can recreate the entire universe."
    ],
    relatedAliens: ["Atomic-X"],
    description: "Alien X is a Celestialsapien from the Forge of Creation. He is arguably the most powerful being in the universe."
  },
  {
    id: "xlr8",
    name: "XLR8",
    species: "Kineceleran",
    homePlanet: "Kinet",
    bodyType: "Humanoid",
    seriesAppearances: ["OS", "UA", "OV", "Reboot"],
    firstAppearance: {
      episode: "And Then There Were 10",
      season: 1,
      series: "Ben 10 (Original)"
    },
    voiceActors: [
      { name: "Jim Ward", series: "OS" }
    ],
    omnitrixUsers: ["Ben Tennyson"],
    abilities: [
      {
        name: "Super Speed",
        description: "Can move at speeds exceeding 500 mph.",
        icon: "zap"
      }
    ],
    weaknesses: [
      "Vulnerable on slippery surfaces."
    ],
    images: {
      primary: "https://vignette.wikia.nocookie.net/ben10/images/2/23/Xlr8_os_render.png",
      gallery: []
    },
    type: "base",
    trivia: [],
    relatedAliens: ["Fasttrack"],
    description: "XLR8 is a Kineceleran from the planet Kinet. He uses friction to move at incredible speeds."
  }
];
