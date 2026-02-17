import { Character } from "@/lib/types";

export const characters: Character[] = [
  {
    id: "ben-tennyson",
    name: "Ben Tennyson",
    fullName: "Benjamin Kirby Tennyson",
    aliases: ["Ben 10", "The Hero of the Universe"],
    species: "Human",
    homePlanet: "Earth",
    gender: "Male",
    alignment: "Hero",
    affiliations: ["Plumbers", "Team Tennyson"],
    relatives: ["Max Tennyson (Grandfather)", "Gwen Tennyson (Cousin)"],
    voiceActors: [
      { name: "Tara Strong", series: "OS" },
      { name: "Yuri Lowenthal", series: "AF/UA/OV" }
    ],
    firstAppearance: {
      episode: "And Then There Were 10",
      season: 1,
      series: "Ben 10 (Original)"
    },
    status: "Active",
    abilities: [
      {
        name: "Omnitrix Transformation",
        description: "Ability to transform into various alien species."
      }
    ],
    equipment: ["Omnitrix", "Ultimatrix"],
    biography: "Ben Tennyson was an ordinary 10-year-old boy until he found the Omnitrix, a powerful alien device.",
    images: {
      primary: "https://vignette.wikia.nocookie.net/ben10/images/2/23/Ben_Tennyson_OS.png",
      gallery: []
    },
    seriesAppearances: ["OS", "AF", "UA", "OV", "Reboot"],
    trivia: ["Ben loves chili fries."]
  },
  {
    id: "vilgax",
    name: "Vilgax",
    fullName: "Vilgax",
    aliases: ["Conqueror of 10 Worlds"],
    species: "Chimera Sui Generis",
    homePlanet: "Vilgaxia",
    gender: "Male",
    alignment: "Villain",
    affiliations: ["Vilgax's Army"],
    relatives: [],
    voiceActors: [
      { name: "Steven Blum", series: "OS" }
    ],
    firstAppearance: {
      episode: "And Then There Were 10",
      season: 1,
      series: "Ben 10 (Original)"
    },
    status: "Active",
    abilities: [
      {
        name: "Superhuman Strength",
        description: "Vastly superior strength compared to humans."
      }
    ],
    equipment: ["Sword of Ascalon", "Ruby Ray of Uua"],
    biography: "Vilgax is the main antagonist of the Ben 10 series. He is an intergalactic warlord.",
    images: {
      primary: "https://vignette.wikia.nocookie.net/ben10/images/5/52/Vilgax_OS.png",
      gallery: []
    },
    seriesAppearances: ["OS", "AF", "UA", "OV", "Reboot"],
    trivia: []
  }
];
