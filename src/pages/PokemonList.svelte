<script lang="ts">
  import { onMount } from 'svelte'
  import { Link } from 'svelte-navigator'
  import Card from '../components/Card.svelte'
  import Select from '../components/Select.svelte'
  import { pokedexActions, pokemonActions, store } from '../store'
  import { ELEMENTS_PER_PAGE, infiniteScroll } from '../utils'

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

<Select
  title="Select Pokedex"
  elements={$store.pokedexList}
  onValueChange={pokedexActions.selectPokedex}
/>
{#if !!$store.selectedPokedex}
  <div>
    {#each $store.pokemonList as { id, name, sprites: { front_default } }}
      <Link to="pokemon-detail/{id}">
        <Card imageUrl={front_default} title={name} />
      </Link>
    {/each}
    <div bind:this={elementRef} />
  </div>
{/if}
