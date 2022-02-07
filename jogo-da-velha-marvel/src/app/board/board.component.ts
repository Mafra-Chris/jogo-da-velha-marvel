import { Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerState } from '../player.reducer';
import { incrementO, incrementX } from '../player.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[]
  isXNext: boolean
  winner: string
  velha = false
  xScore = 0
  oScore = 0
  player$: Observable<PlayerState>
  playerData = this.store.select(state => state).subscribe(data => {
    return data.player
  });

  constructor(private store: Store<{ player: PlayerState }>) {
    this.player$ = store.select('player')
  }

  ngOnInit(): void {
    this.beginGame();

  }

  beginGame() {
    this.squares = Array(9).fill(null)
    this.winner = null
    this.isXNext = true
    this.velha = false
  }

  get player() {
    return this.isXNext ? 'X' : 'O'
  }



  makeMove(index: number) {
    if (!this.squares[index] && this.winner === null) {
      this.squares.splice(index, 1, this.player)
      this.isXNext = !this.isXNext
      this.winner = this.verifyWinner()
    }


  }

  verifyWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        if (this.squares[a] === 'X') {
          this.store.dispatch(incrementX())
        } else if (this.squares[a] === 'O') {
          this.store.dispatch(incrementO())
        }
        return this.squares[a]
      }

    }
    console.log(this.squares)
    if (!this.squares.includes(null) && this.winner === null) {
      this.velha = true
    }

    return null
  }
}
