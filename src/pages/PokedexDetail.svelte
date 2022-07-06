<script lang="ts">
  import type { Pokemon } from 'src/models/pokemon'
  import { onMount } from 'svelte'
  import { Link } from 'svelte-navigator'
  import { apiService, infiniteScroll } from '../utils'

  export let id: number

  let pokemonEntries: Array<number> = []
  let title = ''
  let pokemonList: Array<Pokemon> = []
  let elementRef: HTMLElement

  onMount(async () => {
    const pokedexDetail = await apiService.getPokedexDetail(id)
    title = pokedexDetail.descriptions.find(
      (description) => description.language.name === 'en'
    ).description
    pokemonEntries = pokedexDetail.pokemon_entries.map(
      (entry) => entry.entry_number
    )
    fetchPokemonList()
  })

  const fetchPokemonList = async (): Promise<void> => {
    const toFetch = pokemonEntries.splice(0, 20)
    for (const id of toFetch) {
      pokemonList = [...pokemonList, await apiService.getPokemon(id)]
    }
  }

  $: pokemonList
  $: {
    if (!!elementRef) {
      infiniteScroll(fetchPokemonList, elementRef)
    }
  }
</script>

<p>{title}</p>
<ul>
  {#each pokemonList as pokemon}
    <li>
      <Link to="/pokemon-detail/{pokemon.id}">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        {pokemon.name}
      </Link>
    </li>
  {/each}
  <div bind:this={elementRef} />
</ul>
