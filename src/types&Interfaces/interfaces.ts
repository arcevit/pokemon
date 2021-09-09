export interface IPokemon {
  name: string;
  url: string;
}

export interface IProfile {
  abilities: IAbilities[];
  base_experience: number;
  forms: Object[];
  game_indices: Object[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Object[];
  name: string;
  order: number;
  past_types: any[];
  species: Object;
  sprites: Object;
  stats: Object[];
  types: Object[];
  weight: number;
}

export interface IAbility {
  name: string;
  url: string;
}

export interface IAbilities {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}
