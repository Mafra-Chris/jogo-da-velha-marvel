import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { readyPlayerO, readyPlayerX } from '../player.actions';
import { PlayerState } from '../player.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  player$: Observable<PlayerState>

  @Input() playerType: 'X' | 'O'
  playerPicture = "../../assets/standard_fantastic.jpg"
  heroName = ''
  isError = false
  errorText = ''
  isChosen = false

  constructor(private store: Store<{ player: PlayerState }>) {
    this.player$ = store.select('player')


  }



  searchHero(character: string) {
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${character}&ts=1&apikey=36360de71dd35c5208bd419f70af5cd9&hash=d6dcc5f7266abf5c6e1b0733a545583c`)
      .then(response => response.json()) // retorna uma promise
      .then(result => {
        console.log(result.data.results[0]);
        if (result.data.results[0]) {
          this.playerPicture = result.data.results[0].thumbnail.path + '/standard_fantastic.' + result.data.results[0].thumbnail.extension
          this.heroName = result.data.results[0].name
          this.isError = false
          this.isChosen = true
          if (this.playerType === 'X') {
            this.store.dispatch(readyPlayerX({ isReadyX: true }))
          } else if (this.playerType === 'O') {
            this.store.dispatch(readyPlayerO({ isReadyO: true }))
          }
        } else {
          this.isError = true
          this.errorText = 'Personagem não existente.'
        }
      })
      .catch(err => {
        console.log('err')
        this.isError = true
        this.errorText = 'Erro ao pesquisar personagem.'
      });
  }

}
