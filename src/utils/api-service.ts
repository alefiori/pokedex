import type { Pokedex } from 'src/models'
import { BASE_API_URL } from '../constants'

export const apiService = {
  getPokedexList: async (): Promise<Array<Pokedex>> => {
    const response: Response = await await fetch(
      `${BASE_API_URL}pokedex?limit=100`
    )
    const { results } = await response.json()
    const pokedexList: Array<Pokedex> = results.map(({ name, url }) => ({
      name,
      id: getIdFromUrl(url),
    }))
    if (response.ok) {
      return pokedexList || Promise.reject(new Error('No pokedex available'))
    }
    // return Promise.reject(
    //   new Error(errors?.map((e) => e.message).join('\n') || 'unknown')
    // )
  },
}

const getIdFromUrl = (url: string): number => +url.split('/').at(-2)
