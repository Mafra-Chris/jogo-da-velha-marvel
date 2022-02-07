import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { PlayerComponent } from './player/player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { StoreModule } from '@ngrx/store';
import { playerReducer } from './player.reducer';



@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    ScoreboardComponent,
    TicTacToeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({ player: playerReducer }, {}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas)
  }
}
