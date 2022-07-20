import type { PokedexActions, PokedexDetail } from 'src/models'
import { apiService } from '../../utils'
import { store } from '../store'

export const pokedexActions: PokedexActions = {
  selectPokedex: async (pokedex) => {
    const pokedexDetail: PokedexDetail = await apiService.getPokedexDetail(
      pokedex.id
    )
    store.update((data) => ({
      ...data,
      selectedPokedex: pokedexDetail,
      currentPokemonPage: 0,
      pokemonList: [],
    }))
  },
  setPokedexList: async () => {
    const pokedexList = await apiService.getPokedexList()
    store.update((data) => ({
      ...data,
      pokedexList,
    }))
    pokedexActions.selectPokedex(pokedexList[0])
  },
}
