<script lang="ts">
  import type { Pokemon } from 'src/models'
  import { onMount } from 'svelte'
  import { store } from '../store'
  import { apiService } from '../utils'

  export let id: string

  let pokemon: Pokemon = $store.pokemonList.find(
    (pokemon) => pokemon.id === +id
  )

  onMount(async () => {
    if (!pokemon) {
      pokemon = await apiService.getPokemon(+id)
    }
  })
</script>

Pokemon Details
{#if !!pokemon}
  <div>
    Name: {pokemon.name}
  </div>
{/if}
