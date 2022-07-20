import type { Pokedex, PokedexDetail } from './pokedex'
import type { Pokemon } from './pokemon'

export type Store = {
  selectedPokedex: PokedexDetail
  pokedexList: Array<Pokedex>
  currentPokemonPage: number
  pokemonList: Array<Pokemon>
}

export type PokedexActions = {
  selectPokedex: (name: Pokedex) => Promise<void>
  setPokedexList: () => Promise<void>
}

export type PokemonActions = {
  addPokemonPage: (pokemonIdList: Array<number>) => Promise<void>
}
