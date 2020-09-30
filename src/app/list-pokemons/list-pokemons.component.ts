import { Component, OnInit, ɵConsole } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { PokemonListInterface } from '../interfaces/pokemon-list.interface';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'pk-list-pokemons',
  templateUrl: 'list-pokemons.component.html',
  styleUrls: ['list-pokemons.scss']
})
export class ListPokemonsComponent implements OnInit {
  listPokemons$: Observable<any>
  isLoadingResults = true;
  isRateLimitReached = false;
  notShowFilter = false;
  constructor(private pokemonService: PokemonService, private router: Router) { }
  ngOnInit() {
    this.listPokemons$ = this.pokemonService.listPokemons()
      .pipe(
        map((resultListPokemon: PokemonListInterface) => {
          console.log(resultListPokemon);
          this.isLoadingResults = false;

          return resultListPokemon.cards;
        })
        , catchError(() => {
          this.isLoadingResults = false;
          // if not response api 
          this.isRateLimitReached = true;
          return Observable;
        })
      );
  }
  updateSearch(name) {
    this.isLoadingResults = true;
    console.log(name.detail.value)
    this.listPokemons$ = this.pokemonService.getPerName(name.detail.value).pipe(map((resultListPokemon: PokemonListInterface) => {
      this.isLoadingResults = false;
      console.log(resultListPokemon.cards.length);
      if (resultListPokemon.cards.length < 1) {
        this.notShowFilter = true;
      }
      console.log(resultListPokemon);
      return resultListPokemon.cards;

    }))
  }
  details(pokemon: PokemonListInterface) {
    this.pokemonService.setDetails(pokemon);
    this.router.navigateByUrl('details-pokemon');

  }

}
