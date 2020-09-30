import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPokemonComponent } from './details-pokemon.component';
import { DetailsPokemonsRoutingModule } from './details-pokemon.routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DetailsPokemonComponent],
  imports: [
    CommonModule,
    RouterModule,
    DetailsPokemonsRoutingModule
  ]
})
export class DetailsPokemonModule { }
