<script lang="ts">
  import { Route, Router } from 'svelte-navigator'
  import Header from './components/Header.svelte'
  import PokedexDetail from './pages/PokedexDetail.svelte'
  import PokedexList from './pages/PokedexList.svelte'
  import PokemonDetail from './pages/PokemonDetail.svelte'
</script>

<Router>
  <Header />
  <main>
    <Route path="/" component={PokedexList} />
    <Route path="pokedex-detail/:id" component={PokedexDetail} />
    <Route path="pokemon-detail/:id" component={PokemonDetail} />
  </main>
</Router>
