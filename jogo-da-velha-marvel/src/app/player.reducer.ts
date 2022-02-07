import { createReducer, on } from '@ngrx/store';
import { readyPlayerO, readyPlayerX, setWinner, incrementO, incrementX } from './player.actions';


export interface PlayerState {
  winner: "X" | "O" | null
  isReadyX: boolean
  isReadyO: boolean
  xScore: number
  oScore: number
}

export const initialState: PlayerState = {
  winner: null,
  isReadyX: false,
  isReadyO: false,
  xScore: 0,
  oScore: 0
};

const _playerReducer = createReducer(
  initialState,
  on(setWinner, (state, { winner }) => { return { ...state, winner: winner } }),
  on(readyPlayerO, (state, { isReadyO }) => { return { ...state, isReadyO: isReadyO } }),
  on(readyPlayerX, (state, { isReadyX }) => { return { ...state, isReadyX: isReadyX } }),
  on(incrementX, (state) => { return { ...state, xScore: state.xScore + 1 } }),
  on(incrementO, (state) => { return { ...state, oScore: state.oScore + 1 } }),
)
export function playerReducer(state, action) {
  return _playerReducer(state, action)
}
