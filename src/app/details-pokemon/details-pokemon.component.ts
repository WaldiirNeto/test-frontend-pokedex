import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonListInterface } from '../interfaces/pokemon-list.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss'],
})
export class DetailsPokemonComponent implements OnInit, OnDestroy {
  pokemon: any;
  constructor(private pokemonsService: PokemonService, private router: Router) { }


  ngOnInit() {
    const data = JSON.parse(this.pokemonsService.getDetails().toString());
    this.pokemon = data;
    console.log(this.pokemon);
  }
  ngOnDestroy() {
    this.pokemonsService.clearDetails();
  }
}
