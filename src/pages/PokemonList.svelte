<script lang="ts">
  import type { Pokedex } from 'src/models'
  import { onMount } from 'svelte'
  import { Link } from 'svelte-navigator'
  import { pokedexActions, pokemonActions, store } from '../store'
  import { ELEMENTS_PER_PAGE, infiniteScroll } from '../utils'

  let selectedPokedex: Pokedex
  let elementRef: HTMLElement

  onMount(async () => {
    if (!$store.pokedexList?.length) {
      pokedexActions.setPokedexList()
    }
  })

  const fetchNextPage = () => {
    if (!!$store.selectedPokedex) {
      const startIndex: number = $store.currentPokemonPage * ELEMENTS_PER_PAGE
      const pokemonIdList: Array<number> =
        $store.selectedPokedex.pokemonIds.slice(
          startIndex,
          startIndex + ELEMENTS_PER_PAGE
        )
      pokemonActions.addPokemonPage(pokemonIdList)
    }
  }

  $: if (!!elementRef) {
    setTimeout(() => infiniteScroll(fetchNextPage, elementRef), 100)
  }
</script>

<p>Pokemon List Page</p>
Select Pokedex:
<select
  name="pokedex"
  bind:value={selectedPokedex}
  on:change={() => pokedexActions.selectPokedex(selectedPokedex)}
>
  {#each $store.pokedexList as pokedex}
    <option value={pokedex}>
      {pokedex.name}
    </option>
  {/each}
</select>
{#if !!$store.selectedPokedex}
  <ul>
    {#each $store.pokemonList as pokemon}
      <Link to="pokemon-detail/{pokemon.id}">
        <li>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          {pokemon.name}
        </li>
      </Link>
    {/each}
    <div bind:this={elementRef} />
  </ul>
{/if}
