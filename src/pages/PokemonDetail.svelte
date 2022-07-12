<script lang="ts">
  import type { Pokemon } from 'src/models'
  import { onMount } from 'svelte'
  import { apiService } from '../utils'

  export let id: number
  let pokemon: Pokemon

  onMount(async () => (pokemon = await apiService.getPokemon(id)))
</script>

Pokemon Details
{#if !!pokemon}
  <div>
    Name: {pokemon.name}
  </div>
{/if}
