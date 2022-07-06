import type { Pokedex, PokedexDetail } from 'src/models'
import type { Pokemon } from 'src/models/pokemon'
import { BASE_API_URL } from '../constants'

export const apiService = {
  getPokedexList: async (): Promise<Array<Pokedex>> => {
    const response = await fetch(`${BASE_API_URL}pokedex?limit=100`)
    if (response.ok) {
      const { results } = await response.json()
      const pokedexList: Array<Pokedex> = results.map(({ name, url }) => ({
        name,
        id: getIdFromUrl(url),
      }))
      return pokedexList
    }
    return Promise.reject(new Error('No pokedex available'))
  },

  getPokedexDetail: async (id: number): Promise<PokedexDetail> =>
    await (await fetch(`${BASE_API_URL}pokedex/${id}`)).json(),

  getPokemon: async (id: number): Promise<Pokemon> =>
    await (await fetch(`${BASE_API_URL}pokemon/${id}`)).json(),
}

const getIdFromUrl = (url: string): number => +url.split('/').at(-2)
