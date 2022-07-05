<script lang="ts">
  import { Route, Router } from 'svelte-navigator'
  import Header from './components/Header.svelte'
  import Detail from './pages/Detail.svelte'
  import List from './pages/List.svelte'
</script>

<Router>
  <Header />
  <main>
    <Route path="/" component={List} />
    <Route path="detail" component={Detail} />
  </main>
</Router>
