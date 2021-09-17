import { Pokemon } from 'src/model/pokemon';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent  {

  @Input()
  public pokemon!: Pokemon

}
