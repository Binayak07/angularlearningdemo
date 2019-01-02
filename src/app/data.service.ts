import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  pokemon: object;

  showName() {
    return 'Hello From Service';
  }

  getPokemons() {
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(data => {
      this.pokemon = data;
    });
    return this.pokemon;
  }
}
