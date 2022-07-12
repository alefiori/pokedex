import type { Store } from 'src/models'
import { writable } from 'svelte/store'

export const store = writable<Store>({
  selectedPokedex: null,
  pokedexList: [],
  pokemonPages: null,
  currentPokemonPage: 0,
  pokemonList: [],
})
