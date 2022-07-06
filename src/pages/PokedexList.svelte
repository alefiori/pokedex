<script lang="ts">
  import type { Pokedex } from 'src/models'
  import { onMount } from 'svelte'
  import { Link } from 'svelte-navigator'
  import { apiService } from '../utils'

  let pokedexList: Array<Pokedex> = []

  onMount(async () => {
    pokedexList = await apiService.getPokedexList()
  })
</script>

<p>Pokedex List Page</p>
<ul>
  {#each pokedexList as pokedex}
    <li>
      <Link to="pokedex-detail/{pokedex.id}">
        {pokedex.name}
      </Link>
    </li>
  {/each}
</ul>
