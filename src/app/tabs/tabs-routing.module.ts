import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'list-pokemon',
        pathMatch: 'full'
      },
      {
        path: 'list-pokemon',
        loadChildren: () => import('../list-pokemons/list-pokemons.module').then(m => m.ListPokemonsModule)
      },
      {
        path: 'details-pokemon',
        loadChildren: () => import('../details-pokemon/details-pokemon.module').then(m => m.DetailsPokemonModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
