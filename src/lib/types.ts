export type Series = 'OS' | 'AF' | 'UA' | 'OV' | 'Reboot';

export interface Ability {
  name: string;
  description: string;
  icon?: string;
  animationAsset?: string;
}

export interface Appearance {
  episode: string;
  season: number;
  series: string;
}

export interface VoiceActor {
  name: string;
  series: string;
  note?: string;
}

export interface Alien {
  id: string;
  name: string;
  species: string;
  homePlanet: string;
  bodyType: string;
  seriesAppearances: Series[];
  firstAppearance: Appearance;
  voiceActors: VoiceActor[];
  omnitrixUsers: string[];
  abilities: Ability[];
  weaknesses: string[];
  images: {
    primary: string;
    gallery: string[];
    hoverAnimation?: string;
  };
  type: 'base' | 'ultimate' | 'fusion' | 'reboot';
  ultimateForm?: string;
  fusions?: string[];
  trivia: string[];
  relatedAliens: string[];
  description: string;
}

export interface Character {
  id: string;
  name: string;
  fullName?: string;
  aliases: string[];
  species: string;
  homePlanet: string;
  gender: string;
  alignment: 'Hero' | 'Villain' | 'Neutral' | 'Anti-Hero';
  affiliations: string[];
  relatives: string[];
  voiceActors: VoiceActor[];
  firstAppearance: Appearance;
  lastAppearance?: Appearance;
  status: string;
  abilities: Ability[];
  equipment: string[];
  biography: string;
  images: {
    primary: string;
    gallery: string[];
    hoverAnimation?: string;
  };
  seriesAppearances: Series[];
  trivia: string[];
}
