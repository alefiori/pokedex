import type { Pokedex, PokedexDetail, PokedexDetailResponse } from 'src/models'
import type { Pokemon } from 'src/models/pokemon'
import { BASE_API_URL } from '.'

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

  getPokedexDetail: async (id: number): Promise<PokedexDetail> => {
    const response: PokedexDetailResponse = await (
      await fetch(`${BASE_API_URL}pokedex/${id}`)
    ).json()
    return {
      id: response.id,
      description: response.descriptions.find(
        ({ language }) => language.name === 'en'
      ).description,
      name: response.name,
      pokemonIds: response.pokemon_entries.map(({ pokemon_species }) =>
        getIdFromUrl(pokemon_species.url)
      ),
    }
  },

  getPokemon: async (id: number): Promise<Pokemon> =>
    await (await fetch(`${BASE_API_URL}pokemon/${id}`)).json(),
}

const getIdFromUrl = (url: string): number => +url.split('/').at(-2)
