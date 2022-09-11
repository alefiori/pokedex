export type PokedexListResponse = {
  count: number
  next?: string
  previous?: string
  results: Array<BaseModel>
}

export type PokedexDetailResponse = {
  id: number
  is_main_series: boolean
  name: string
  descriptions: Array<Description>
  names: Array<Name>
  pokemon_entries: Array<PokemonEntry>
  region?: BaseModel
  version_groups?: Array<BaseModel>
}

export type PokemonDetailResponse = {
  id: number
  name: string
  order: number
  height: number
  is_default: boolean
  abilities: Array<Ability>
  base_experience: number
  forms: Array<BaseModel>
  game_indices: Array<GameIndex>
  held_item?: Array<HeldItem>
  location_area_encounters: string
  moves: Array<Move>
  past_types?: Array<PastType>
  species: BaseModel
  sprites: Sprites
}

export type Sprites = {
  front_default: string
  front_shiny: string
  front_female?: string
  front_shiny_female?: string
  back_default: string
  back_shiny: string
  back_female?: string
  back_shiny_female?: string
}

export type PastType = {
  generation: BaseModel
  types: Array<Type>
}

export type Type = {
  type: BaseModel
  slot: number
}

export type Move = {
  move: BaseModel
  version_group_details: Array<VersionGroupDetail>
}

export type VersionGroupDetail = {
  level_learned_at: number
  move_learn_method: BaseModel
  version_group: BaseModel
}

export type HeldItem = {
  item: BaseModel
  version_details: Array<VersionDetail>
}

export type VersionDetail = {
  rarity: number
  version: BaseModel
}

export type GameIndex = {
  game_index: number
  version: BaseModel
}

export type Ability = {
  ability: BaseModel
  is_hidden: boolean
  slot: number
}

export type PokemonEntry = {
  entry_number: number
  pokemon_species: Array<BaseModel>
}

export type Name = {
  name: string
  language: BaseModel
}

export type Description = {
  description: string
  language: BaseModel
}

export type BaseModel = {
  name: string
  url: string
}
