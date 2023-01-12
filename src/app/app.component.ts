import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonEn: Pokemon[] = POKEMONS;
  pokemonselected: Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonEn);
   
  }
  selectpokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonEn.find(pokemon => pokemon.id == +pokemonId);
    
    if(pokemon){
      console.log(`vous avez demander le pokemon${pokemon.name}`);
      this.pokemonselected = pokemon;
    }else{
      console.log(`vous avez demander un pokemon qui n'existe pas.`);
      this.pokemonselected = pokemon;
    }
    
  }
}
