import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListPokemonsRoutingModule } from './list-pokemons.routing.module';
import { ListPokemonsComponent } from './list-pokemons.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    ListPokemonsRoutingModule
  ],
  declarations: [ListPokemonsComponent],

})
export class ListPokemonsModule { }
