import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonsComponent } from './list-pokemons.component';


const routes: Routes = [
  {
    path: '',
    component: ListPokemonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPokemonsRoutingModule { }
