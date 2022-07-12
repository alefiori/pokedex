<script lang="ts">
  import { Route, Router } from 'svelte-navigator'
  import Header from './components/Header.svelte'
  import { ROUTES } from './utils'
</script>

<Router>
  <Header />
  <main>
    {#each ROUTES as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </main>
</Router>
