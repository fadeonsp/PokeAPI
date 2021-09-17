import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/model/pokemon';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = []

  constructor(private http: HttpClient) 
  { 
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'

    this.http.get<any>(urlPokemon).pipe(
      map(value => value.results),
      map((value: any) => {
        
        return from(value).pipe(
          mergeMap((v: any) => this.http.get(v.url))
        )
      }),
      mergeMap(value => value)
    ).subscribe((result: any) => {
      const pokemon: Pokemon = {
        number: result.id,
        name: result.name,
        image: result.sprites.front_default,
        types: result.types.map((t: { type: { name: any; }; }) => t.type.name)
      }
      this.pokemons[result.id] = pokemon

    })
  }
}
