export type Pokedex = {
  name: string
  id: number
}

export type PokedexDetail = {
  descriptions: Description[]
  id: number
  is_main_series: boolean
  name: string
  names: Name[]
  pokemon_entries: { entry_number: number }[]
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
