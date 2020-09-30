import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PokemonListInterface } from '../interfaces/pokemon-list.interface';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {
  private URL_API = environment.api_url;
  private KEY = 'details';
  constructor(private http: HttpClient) { }

  listPokemons() {
    return this.http.get<PokemonListInterface>(this.URL_API + '/cards');
  }
  getPerName(name) {
    return this.http.get<PokemonListInterface>(this.URL_API + '/cards?name=' + name);
  }

  setDetails(details) {
    window.localStorage.setItem(this.KEY, JSON.stringify(details));

  }
  getDetails() {
    if (window.localStorage.getItem(this.KEY) != null) {
      return window.localStorage.getItem(this.KEY);

    }
    else {
      return false;
    }
  }
  clearDetails() {
    return window.localStorage.removeItem(this.KEY);
  }
}
