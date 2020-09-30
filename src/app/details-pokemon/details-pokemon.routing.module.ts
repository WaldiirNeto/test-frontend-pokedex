import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPokemonComponent } from './details-pokemon.component';


const routes: Routes = [
    {
        path: '',
        component: DetailsPokemonComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsPokemonsRoutingModule { }
