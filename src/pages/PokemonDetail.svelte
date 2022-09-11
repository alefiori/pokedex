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

{#if !!pokemon}
  <div class="detail">
    <div class="detail__name">{pokemon.name}</div>
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
      class="detail__image"
    />
  </div>
{/if}
