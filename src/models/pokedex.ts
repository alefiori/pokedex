export type Pokedex = {
  name: string
  id: number
}

export type PokedexDetailResponse = {
  descriptions: Array<Description>
  id: number
  is_main_series: boolean
  name: string
  names: Array<Name>
  pokemon_entries: Array<PokemonEntry>
}

export type PokemonEntry = {
  entry_number: number
  pokemon_species: {
    name: string
    url: string
  }
}

export type PokedexDetail = {
  id: number
  name: string
  description: string
  pokemonIds: Array<number>
}

export type Language = {
  name: string
  url: string
}

export type Description = {
  description: string
  language: Language
}

export type Name = {
  name: string
  language: Language
}
