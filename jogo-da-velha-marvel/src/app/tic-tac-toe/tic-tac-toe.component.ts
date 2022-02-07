import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {
  oScore = 0
  xScore = 0

  receiveXScore($event) {
    this.xScore = $event
  }
  receiveOScore($event) {
    this.oScore = $event
  }
}
