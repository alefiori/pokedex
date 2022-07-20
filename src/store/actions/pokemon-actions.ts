import type { Pokemon, PokemonActions } from 'src/models'
import { apiService } from '../../utils'
import { store } from '../store'

export const pokemonActions: PokemonActions = {
  addPokemonPage: async (pokemonIdList) => {
    const pokemonRequestList = Array<Promise<Pokemon>>()
    for (const id of pokemonIdList) {
      pokemonRequestList.push(apiService.getPokemon(id))
    }
    const pokemonList = await Promise.all(pokemonRequestList)
    store.update((data) => ({
      ...data,
      currentPokemonPage: data.currentPokemonPage + 1,
      pokemonList: [...data.pokemonList, ...pokemonList],
    }))
  },
}
