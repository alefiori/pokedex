import type { PageRoute } from 'src/models'
import PokemonDetail from '../pages/PokemonDetail.svelte'
import PokemonList from '../pages/PokemonList.svelte'

export const ROUTES: Array<PageRoute> = [
  {
    path: '/',
    component: PokemonList,
  },
  {
    path: 'pokemon-detail/:id',
    component: PokemonDetail,
  },
]
