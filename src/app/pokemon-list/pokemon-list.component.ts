import { PokemonService } from './../pokemon.service';
import { Component } from '@angular/core';
import { Pokemon } from 'src/model/pokemon';
import { Type } from 'src/model/type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  constructor(
    public pokemonService: PokemonService
  ) {}
}

  

 

  


